# Verori

A client-approval portal for solo consultants that tracks every deliverable through timestamped records of when it was sent, viewed, approved, or left unanswered.

[Live demo](https://verori.vercel.app) · [Report an issue](https://github.com/mawmao/verori/issues)

---

## What it is

Verori gives a solo consultant a single branded link to send a client when a deliverable needs sign-off.
The client opens it, sees the work, and clicks Approve or Request Changes. No account, no login, no onboarding.
The consultant sees a timestamped record of what happened and when.

It is not a CRM, not invoicing, not project management. It does one job: making client sign-off visible and provable.

It is built specifically for independent marketing, SEO, and content consultants who send recurring deliverables to clients on retainer.

## How it works

1. Create - upload a deliverable, add a one-line context note, name the client. Three fields.
2. Send -  Verori generates a branded, token-based link. Paste it into email or Slack.
3. Approve - Approve - the client opens the link, sees the file, and responds with an approval or a brief explanation of what needs changing. No login required.
4. Record - every action is timestamped: created, viewed, approved, changes requested, reminder sent.

## Why it exists

I once sent a deliverable, got ghosted, and had no proof it was ever received.
Verori exists to ensure every delivery is documented, not just through an approval click, but through a clear record of when the work was sent, viewed, and responded to.

Read the full origin story and product reasoning in [DECISIONS.md](DECISIONS.md).

## Scope

In scope:

- Token-based client links. No client account
- File preview (PDF, images, download fallback)
- Approve / Request Changes (with a required reason on rejection) with timestamps
- Consultant dashboard with status and activity log
- Consultant-initiated reminders
- Exportable delivery record and engagement summary (post-MVP)

Out of scope:

- Invoicing, contracts, CRM, project management
- Escrow, payment processing, or releasing funds
- Any claim of legal enforceability. Verori produces documentation, not a binding signature
- Inline commenting or annotation (that's Figma's, Google Docs', and Frame.io's job)
- Marketplace sellers. Platforms like Fiverr and Upwork already provide the approval mechanic


## Status

Early development.  The MVP is currently in active development.
Email notifications, exports, and billing are planned for future releases. See DECISIONS.md for what ships next.

This is a portfolio project exploring client-approval workflows.
The hosted version is the maintained product; the repository is shared for reading and learning.

