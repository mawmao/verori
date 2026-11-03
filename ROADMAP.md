
# ROADMAP

## MVP (Current Build)

Phase 1: Foundation & Creation

- [x] Route protection (middleware) & session management

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


- [x] Supabase Magic Link & OTP Authentication

- [ ] OAuth (Google, Microsoft) Setup

- [ ] Consultant dashboard (list portals, status badges)

- [ ] Portal detail view (preview file, render activity log)

- [ ] "Copy link" functionality


## v1.1 (Next)

- [ ] Email notifications to consultant

- [ ] Manual "Send reminder" button

- [ ] Delivery record export (PDF)

- [ ] Client-page branding (logo, accent color)

- [ ] Terms of Service & Privacy Policy

## Later (Only if users ask)

- [ ] Engagement summary export

- [ ] Shareable read-only record link

- [ ] Automatic reminders (opt-in)

- [ ] "Deemed approved after N days" policy

- [ ] Variant selection for designers (e.g., "Approve Option B")


