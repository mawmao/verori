# ROADMAP

## Completed

- [x] Route protection (middleware) & session management

- [x] Supabase Magic Link & OTP Authentication

- [x] Database schema (Portals, Files, Activity Logs)

- [x] Initial Database Migration & RLS Policies


## MVP (Current Build)

Phase 1: Foundation & Creation

- [ ] Database schema (Portals, Files, Activity Logs)

- [ ] Supabase Storage bucket setup (for deliverable files)

- [ ] Create portal form (Client name, File upload, Context note)

- [ ] Token link generation (save unguessable token to DB)

Phase 2: The Client Experience

- [ ] Public route `/p/[token]` (no login required)

- [ ] File preview component (PDF, images, fallback)

- [ ] Approve / Request changes (with mandatory text modal)

- [ ] Activity logging (track `viewed`, `approved`, `changes_requested`)

Phase 3: Consultant Experience

- [ ] OAuth (Google, Microsoft) Setup

- [ ] Consultant dashboard (list portals, status badges)

- [ ] Portal detail view (preview file, render activity log)

- [ ] "Copy link" functionality


## v1.1 (Next)

- [ ] Email notifications to consultant

- [ ] Manual "Send reminder" button

- [ ] Delivery record export (PDF) *(The "Prove It" feature)*

- [ ] Client-page branding (logo, accent color)

- [ ] Enable OAuth (Google, Microsoft)

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


