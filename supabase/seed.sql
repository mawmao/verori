-- ==========================================
-- 1. CREATE THE AUTH USER & PROFILE
-- ==========================================
DO $$
DECLARE
  v_user_id uuid := 'a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11';
  v_email text := 'hello@verori.local';
  v_portal_id uuid;
BEGIN
  INSERT INTO auth.users (
    id, instance_id, aud, role, email, encrypted_password,
    email_confirmed_at, raw_app_meta_data, raw_user_meta_data,
    created_at, updated_at, confirmation_token, recovery_token, email_change_token_new, email_change
  ) VALUES (
    v_user_id, '00000000-0000-0000-0000-000000000000', 'authenticated', 'authenticated', v_email, crypt('password123', gen_salt('bf')),
    now(), '{"provider":"email","providers":["email"]}', '{"full_name":"Maya Chen"}',
    now(), now(), '', '', '', ''
  ) ON CONFLICT (id) DO NOTHING;

  INSERT INTO auth.identities (
    id, user_id, provider_id, identity_data, provider, last_sign_in_at, created_at, updated_at
  ) VALUES (
    gen_random_uuid(), v_user_id, v_user_id::text, format('{"sub":"%s","email":"%s"}', v_user_id, v_email)::jsonb, 'email', now(), now(), now()
  ) ON CONFLICT (provider_id, provider) DO NOTHING;

  UPDATE profile SET name = 'Maya Chen' WHERE id = v_user_id;

  -- ==========================================
  -- PORTAL 1: Approved
  -- ==========================================
  INSERT INTO portal (user_id, client_name, title, context_note, status, created_at, updated_at)
  VALUES (v_user_id, 'Halcyon Health', 'Landing Page Copy', 'Final copy for the new landing page.', 'approved', NOW() - INTERVAL '10 days', NOW() - INTERVAL '9 days')
  RETURNING id INTO v_portal_id;

  INSERT INTO file (portal_id, name, mime_type, storage_key, size)
  VALUES (v_portal_id, 'landing-page-copy.pdf', 'application/pdf', 'dummy/path/landing-page-copy.pdf', 800000);

  INSERT INTO activity_event (portal_id, type, actor, created_at) VALUES
  (v_portal_id, 'created', 'consultant', NOW() - INTERVAL '10 days'),
  (v_portal_id, 'viewed', 'client', NOW() - INTERVAL '9 days'),
  (v_portal_id, 'approved', 'client', NOW() - INTERVAL '9 days');


  -- ==========================================
  -- PORTAL 2: Changes Requested
  -- ==========================================
  INSERT INTO portal (user_id, client_name, title, context_note, status, created_at, updated_at)
  VALUES (v_user_id, 'Vertex', 'Brand Guidelines V2', 'Updated based on your last feedback.', 'changes_requested', NOW() - INTERVAL '4 days', NOW() - INTERVAL '3 days')
  RETURNING id INTO v_portal_id;

  INSERT INTO file (portal_id, name, mime_type, storage_key, size)
  VALUES (v_portal_id, 'brand-guidelines-v2.pdf', 'application/pdf', 'dummy/path/brand-guidelines-v2.pdf', 4500000);

  INSERT INTO activity_event (portal_id, type, actor, created_at, metadata) VALUES
  (v_portal_id, 'created', 'consultant', NOW() - INTERVAL '4 days', null),
  (v_portal_id, 'viewed', 'client', NOW() - INTERVAL '3 days', null),
  (v_portal_id, 'changes_requested', 'client', NOW() - INTERVAL '3 days', '{"reason": "We need to use our new Pantone colors on page 4. Otherwise it looks great."}'::jsonb);


  -- ==========================================
  -- PORTAL 3: Approved (Recent)
  -- ==========================================
  INSERT INTO portal (user_id, client_name, title, context_note, status, created_at, updated_at)
  VALUES (v_user_id, 'Acme Corp', 'Q3 SEO Audit', 'Here is the final audit. Let me know if you have any questions.', 'approved', NOW() - INTERVAL '5 days', NOW() - INTERVAL '4 days')
  RETURNING id INTO v_portal_id;

  INSERT INTO file (portal_id, name, mime_type, storage_key, size)
  VALUES (v_portal_id, 'Q3_SEO_Audit.pdf', 'application/pdf', 'dummy/path/Q3_SEO_Audit.pdf', 2500000);

  INSERT INTO activity_event (portal_id, type, actor, created_at) VALUES
  (v_portal_id, 'created', 'consultant', NOW() - INTERVAL '5 days'),
  (v_portal_id, 'viewed', 'client', NOW() - INTERVAL '4 days'),
  (v_portal_id, 'approved', 'client', NOW() - INTERVAL '4 days');


  -- ==========================================
  -- PORTAL 4: Changes Requested (Recent)
  -- ==========================================
  INSERT INTO portal (user_id, client_name, title, context_note, status, created_at, updated_at)
  VALUES (v_user_id, 'Brightpath Media', 'October Content Calendar', 'Please review before our call on Friday.', 'changes_requested', NOW() - INTERVAL '3 days', NOW() - INTERVAL '2 days')
  RETURNING id INTO v_portal_id;

  INSERT INTO file (portal_id, name, mime_type, storage_key, size)
  VALUES (v_portal_id, 'content-calendar.png', 'image/png', 'dummy/path/content-calendar.png', 1500000);

  INSERT INTO activity_event (portal_id, type, actor, created_at, metadata) VALUES
  (v_portal_id, 'created', 'consultant', NOW() - INTERVAL '3 days', null),
  (v_portal_id, 'viewed', 'client', NOW() - INTERVAL '2 days', null),
  (v_portal_id, 'changes_requested', 'client', NOW() - INTERVAL '2 days', '{"reason": "Please adjust the Q4 launch post to be on Nov 5th instead of Nov 1st."}'::jsonb);


  -- ==========================================
  -- PORTAL 5: Viewed (Awaiting response)
  -- ==========================================
  INSERT INTO portal (user_id, client_name, title, context_note, status, created_at, updated_at)
  VALUES (v_user_id, 'Northwind', 'Monthly Performance Report', 'Attached is the report.', 'viewed', NOW() - INTERVAL '2 days', NOW() - INTERVAL '1 day')
  RETURNING id INTO v_portal_id;

  INSERT INTO file (portal_id, name, mime_type, storage_key, size)
  VALUES (v_portal_id, 'monthly-report-oct.pdf', 'application/pdf', 'dummy/path/monthly-report-oct.pdf', 3200000);

  INSERT INTO activity_event (portal_id, type, actor, created_at) VALUES
  (v_portal_id, 'created', 'consultant', NOW() - INTERVAL '2 days'),
  (v_portal_id, 'viewed', 'client', NOW() - INTERVAL '1 day');


  -- ==========================================
  -- PORTAL 6: Sent (Unopened)
  -- ==========================================
  INSERT INTO portal (user_id, client_name, title, context_note, status, created_at, updated_at)
  VALUES (v_user_id, 'Lumen Labs', 'Keyword Strategy Memo', 'Let me know your thoughts.', 'sent', NOW() - INTERVAL '1 day', NOW() - INTERVAL '1 day')
  RETURNING id INTO v_portal_id;

  INSERT INTO file (portal_id, name, mime_type, storage_key, size)
  VALUES (v_portal_id, 'keyword-strategy.pdf', 'application/pdf', 'dummy/path/keyword-strategy.pdf', 1200000);

  INSERT INTO activity_event (portal_id, type, actor, created_at) VALUES
  (v_portal_id, 'created', 'consultant', NOW() - INTERVAL '1 day');


  -- ==========================================
  -- PORTAL 7: Sent (Today)
  -- ==========================================
  INSERT INTO portal (user_id, client_name, title, context_note, status, created_at, updated_at)
  VALUES (v_user_id, 'Stark Industries', 'Q4 Strategy Deck', 'Here is the plan for next quarter.', 'sent', NOW() - INTERVAL '2 hours', NOW() - INTERVAL '2 hours')
  RETURNING id INTO v_portal_id;

  INSERT INTO file (portal_id, name, mime_type, storage_key, size)
  VALUES (v_portal_id, 'Q4-strategy.pdf', 'application/pdf', 'dummy/path/Q4-strategy.pdf', 8500000);

  INSERT INTO activity_event (portal_id, type, actor, created_at) VALUES
  (v_portal_id, 'created', 'consultant', NOW() - INTERVAL '2 hours');


  -- ==========================================
  -- EXTRA PORTALS FOR SCROLL TESTING
  -- ==========================================

  -- 8: Approved
  INSERT INTO portal (user_id, client_name, title, context_note, status, created_at, updated_at)
  VALUES (v_user_id, 'Initech', 'Security Audit', 'Final audit report.', 'approved', NOW() - INTERVAL '15 days', NOW() - INTERVAL '14 days')
  RETURNING id INTO v_portal_id;
  INSERT INTO file (portal_id, name, mime_type, storage_key, size) VALUES (v_portal_id, 'security.pdf', 'application/pdf', 'dummy/security.pdf', 2000000);
  INSERT INTO activity_event (portal_id, type, actor, created_at) VALUES (v_portal_id, 'created', 'consultant', NOW() - INTERVAL '15 days'), (v_portal_id, 'approved', 'client', NOW() - INTERVAL '14 days');

  -- 9: Changes Requested (FIXED)
  INSERT INTO portal (user_id, client_name, title, context_note, status, created_at, updated_at)
  VALUES (v_user_id, 'Umbrella Corp', 'Marketing Plan', 'Revised plan.', 'changes_requested', NOW() - INTERVAL '6 days', NOW() - INTERVAL '5 days')
  RETURNING id INTO v_portal_id;
  INSERT INTO file (portal_id, name, mime_type, storage_key, size) VALUES (v_portal_id, 'marketing.pdf', 'application/pdf', 'dummy/marketing.pdf', 3000000);
  INSERT INTO activity_event (portal_id, type, actor, created_at, metadata) VALUES (v_portal_id, 'created', 'consultant', NOW() - INTERVAL '6 days', null), (v_portal_id, 'changes_requested', 'client', NOW() - INTERVAL '5 days', '{"reason": "Need to include the viral vector section."}');

  -- 10: Viewed
  INSERT INTO portal (user_id, client_name, title, context_note, status, created_at, updated_at)
  VALUES (v_user_id, 'Cyberdyne Systems', 'AI Implementation', 'Overview deck.', 'viewed', NOW() - INTERVAL '8 days', NOW() - INTERVAL '7 days')
  RETURNING id INTO v_portal_id;
  INSERT INTO file (portal_id, name, mime_type, storage_key, size) VALUES (v_portal_id, 'ai-deck.pdf', 'application/pdf', 'dummy/ai.pdf', 4000000);
  INSERT INTO activity_event (portal_id, type, actor, created_at) VALUES (v_portal_id, 'created', 'consultant', NOW() - INTERVAL '8 days'), (v_portal_id, 'viewed', 'client', NOW() - INTERVAL '7 days');

  -- 11: Sent
  INSERT INTO portal (user_id, client_name, title, context_note, status, created_at, updated_at)
  VALUES (v_user_id, 'Wayne Enterprises', 'R&D Budget', 'Draft budget for review.', 'sent', NOW() - INTERVAL '1 day', NOW() - INTERVAL '1 day')
  RETURNING id INTO v_portal_id;
  INSERT INTO file (portal_id, name, mime_type, storage_key, size) VALUES (v_portal_id, 'budget.pdf', 'application/pdf', 'dummy/budget.pdf', 1000000);
  INSERT INTO activity_event (portal_id, type, actor, created_at) VALUES (v_portal_id, 'created', 'consultant', NOW() - INTERVAL '1 day');

  -- 12: Approved
  INSERT INTO portal (user_id, client_name, title, context_note, status, created_at, updated_at)
  VALUES (v_user_id, 'Soylent Corp', 'Product Launch', 'Launch campaign details.', 'approved', NOW() - INTERVAL '20 days', NOW() - INTERVAL '19 days')
  RETURNING id INTO v_portal_id;
  INSERT INTO file (portal_id, name, mime_type, storage_key, size) VALUES (v_portal_id, 'launch.pdf', 'application/pdf', 'dummy/launch.pdf', 5000000);
  INSERT INTO activity_event (portal_id, type, actor, created_at) VALUES (v_portal_id, 'created', 'consultant', NOW() - INTERVAL '20 days'), (v_portal_id, 'approved', 'client', NOW() - INTERVAL '19 days');

  -- 13: Sent
  INSERT INTO portal (user_id, client_name, title, context_note, status, created_at, updated_at)
  VALUES (v_user_id, 'Massive Dynamic', 'Q4 Forecast', 'Financial projections.', 'sent', NOW() - INTERVAL '5 hours', NOW() - INTERVAL '5 hours')
  RETURNING id INTO v_portal_id;
  INSERT INTO file (portal_id, name, mime_type, storage_key, size) VALUES (v_portal_id, 'forecast.pdf', 'application/pdf', 'dummy/forecast.pdf', 2000000);
  INSERT INTO activity_event (portal_id, type, actor, created_at) VALUES (v_portal_id, 'created', 'consultant', NOW() - INTERVAL '5 hours');

  -- 14: Changes Requested (FIXED)
  INSERT INTO portal (user_id, client_name, title, context_note, status, created_at, updated_at)
  VALUES (v_user_id, 'Oscorp', 'Lab Results', 'Initial findings.', 'changes_requested', NOW() - INTERVAL '12 days', NOW() - INTERVAL '11 days')
  RETURNING id INTO v_portal_id;
  INSERT INTO file (portal_id, name, mime_type, storage_key, size) VALUES (v_portal_id, 'lab.pdf', 'application/pdf', 'dummy/lab.pdf', 7000000);
  INSERT INTO activity_event (portal_id, type, actor, created_at, metadata) VALUES (v_portal_id, 'created', 'consultant', NOW() - INTERVAL '12 days', null), (v_portal_id, 'changes_requested', 'client', NOW() - INTERVAL '11 days', '{"reason": "The trial data is missing control group metrics."}');

  -- 15: Approved
  INSERT INTO portal (user_id, client_name, title, context_note, status, created_at, updated_at)
  VALUES (v_user_id, 'Gringotts', 'Financial Report', 'Annual summary.', 'approved', NOW() - INTERVAL '7 days', NOW() - INTERVAL '6 days')
  RETURNING id INTO v_portal_id;
  INSERT INTO file (portal_id, name, mime_type, storage_key, size) VALUES (v_portal_id, 'financials.pdf', 'application/pdf', 'dummy/financials.pdf', 3000000);
  INSERT INTO activity_event (portal_id, type, actor, created_at) VALUES (v_portal_id, 'created', 'consultant', NOW() - INTERVAL '7 days'), (v_portal_id, 'approved', 'client', NOW() - INTERVAL '6 days');

  -- 16: Viewed
  INSERT INTO portal (user_id, client_name, title, context_note, status, created_at, updated_at)
  VALUES (v_user_id, 'Dunder Mifflin', 'Paper Supply Contract', 'Review please.', 'viewed', NOW() - INTERVAL '4 days', NOW() - INTERVAL '3 days')
  RETURNING id INTO v_portal_id;
  INSERT INTO file (portal_id, name, mime_type, storage_key, size) VALUES (v_portal_id, 'contract.pdf', 'application/pdf', 'dummy/contract.pdf', 1500000);
  INSERT INTO activity_event (portal_id, type, actor, created_at) VALUES (v_portal_id, 'created', 'consultant', NOW() - INTERVAL '4 days'), (v_portal_id, 'viewed', 'client', NOW() - INTERVAL '3 days');

  -- 17: Changes Requested (FIXED)
  INSERT INTO portal (user_id, client_name, title, context_note, status, created_at, updated_at)
  VALUES (v_user_id, 'Pied Piper', 'Compression Algorithm', 'Tech spec.', 'changes_requested', NOW() - INTERVAL '9 days', NOW() - INTERVAL '8 days')
  RETURNING id INTO v_portal_id;
  INSERT INTO file (portal_id, name, mime_type, storage_key, size) VALUES (v_portal_id, 'algorithm.pdf', 'application/pdf', 'dummy/algorithm.pdf', 4000000);
  INSERT INTO activity_event (portal_id, type, actor, created_at, metadata) VALUES (v_portal_id, 'created', 'consultant', NOW() - INTERVAL '9 days', null), (v_portal_id, 'changes_requested', 'client', NOW() - INTERVAL '8 days', '{"reason": "We need to review the middle-out data first."}');

  -- 18: Sent
  INSERT INTO portal (user_id, client_name, title, context_note, status, created_at, updated_at)
  VALUES (v_user_id, 'Hooli', 'Acquisition Offer', 'Draft terms.', 'sent', NOW() - INTERVAL '30 minutes', NOW() - INTERVAL '30 minutes')
  RETURNING id INTO v_portal_id;
  INSERT INTO file (portal_id, name, mime_type, storage_key, size) VALUES (v_portal_id, 'offer.pdf', 'application/pdf', 'dummy/offer.pdf', 1200000);
  INSERT INTO activity_event (portal_id, type, actor, created_at) VALUES (v_portal_id, 'created', 'consultant', NOW() - INTERVAL '30 minutes');

  -- 19: Approved
  INSERT INTO portal (user_id, client_name, title, context_note, status, created_at, updated_at)
  VALUES (v_user_id, 'Vandelay Industries', 'Import/Export Docs', 'Finalized.', 'approved', NOW() - INTERVAL '25 days', NOW() - INTERVAL '24 days')
  RETURNING id INTO v_portal_id;
  INSERT INTO file (portal_id, name, mime_type, storage_key, size) VALUES (v_portal_id, 'imports.pdf', 'application/pdf', 'dummy/imports.pdf', 800000);
  INSERT INTO activity_event (portal_id, type, actor, created_at) VALUES (v_portal_id, 'created', 'consultant', NOW() - INTERVAL '25 days'), (v_portal_id, 'approved', 'client', NOW() - INTERVAL '24 days');

END $$;
