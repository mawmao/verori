# ROADMAP

## Completed (MVP)

- [x] Route protection (middleware) & session management

- [x] Supabase Magic Link & OTP Authentication

- [x] Database schema (Portals, Files, Activity Logs)

- [x] Supabase Storage bucket setup (for deliverable files)

- [x] Initial Database Migration & RLS Policies

- [x] Create portal form (Client name, File upload, Context note)

- [x] Consultant dashboard (list portals, status badges)

- [x] Token link generation (save unguessable token to DB)

- [x] Public route `/p/[token]` (no login required)

- [x] File preview component (PDF, images, fallback)

- [x] Approve / Request changes (with mandatory text modal)

- [x] Activity logging (track `viewed`, `approved`, `changes_requested`)

- [x] Portal detail view (preview file, render activity log)

- [x] "Copy link" functionality

- [ ] Enable OAuth (Google, Microsoft)

## v1.1 (Next)

- [ ] Email notifications to consultant

- [ ] Manual "Send reminder" button

- [ ] Delivery record export (PDF) *(The "Prove It" feature)*

- [ ] Client-page branding (logo, accent color)

- [ ] Static Terms of Service & Privacy Policy pages

- [ ] Watermarked previews,  display low-res version until approved


## Later (Only if users ask)

- [ ] Automated Webhooks (Zapier/Make: trigger invoices, Slack, tasks on approval)

- [ ] Engagement summary export

- [ ] Shareable read-only record link

- [ ] Automatic reminders (opt-in)

- [ ] "Deemed approved after N days" policy

- [ ] Variant selection for designers (e.g. "Approve Option B")

- [ ] Team seats / multi-user agencies


## Future (Infrastructure & B2B2B)

- [ ] White-label client portals (Custom domains via Vercel SDK)

- [ ] Public REST API & Webhooks (for other SaaS to embed Verori)

- [ ] MCP (Model Context Protocol) Server for AI Agents


