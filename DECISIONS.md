# DECISIONS

The reasoning behind Verori's shape. Each entry records a decision, the alternatives considered, and why this one won.

This file exists because the code shows *what* was built, but not *why*.
A reader, mostly future me, should be able to understand the product's constraints without reverse-engineering them from the source.

---

# Part 1 - Product decisions

## 1. No client login, ever

* Decision:
    Clients access deliverables through a token-based link.
    They never create an account.

* Alternatives considered:
    Client accounts with email + password; magic-link login for clients; "view as guest, approve with account."

* Why this won:
    The failure mode of every client portal is the same: the client doesn't log in.
    As soon as a login wall exists, "I never saw it" becomes a plausible excuse and the consultant is back to chasing.
    A link that opens directly to the work removes both the friction and the excuse.

* Trade-off:
    A forwarded link is accessible to anyone holding it.
    For a deliverable-approval workflow, that risk is smaller than the risk of the client not responding at all.

---

## 2. Token-based access, not resource-ID access

* Decision:
    Client pages are addressed by an unguessable `share_token` (`/p/[token]`), never by portal ID (`/portal/123`).

* Alternatives considered:
    Sequential or UUID-based URLs with access checks; signed URLs with expiry on every request.

* Why this won:
    It eliminates an entire class of authorization bugs.
    There is nothing to enumerate, and no opportunity to forget a permission check on a public route.
    The token IS the authorization.

* Trade-off:
    Tokens can be revoked per portal, not per viewer.
    That granularity is sufficient for the use case and keeps the model simple.

---

## 3. Discrete sign-off with a reason, not commenting

* Decision:
    The client has exactly two actions: "Approve" or "Request Changes".
    If they choose "Request Changes," they must provide a brief, single-block text explanation before submitting.
    There are no inline comments, annotations, markup tools, or threaded discussions.

* Alternatives considered:
    Comment threads on the deliverable; PDF annotation; threaded discussion; per-page feedback.

* Why this won:
    Commenting is a crowded, well-served problem.
    Figma owns design review, Google Docs owns document review, Frame.io owns video review.
    Competing there means building a worse version of a beloved tool.
    The underserved problem is the discrete sign-off moment: "is this accepted, yes or no, and when?"

    By requiring a text explanation on rejection, we capture the "why" at the exact moment the client
    is looking at the document thus preventing the frustration of a vague "needs work" response without building a workspace.
    The client submits one block of text; the consultant reads it and takes the work back to their native tools (Figma, Google Docs) to execute the changes


* Trade-off:
    The feedback is a single block of text, not anchored to specific elements or pages.
    It is a reason, not a conversation.
    This is deliberate: it keeps the product a razor for sign-off instead of a bloated collaboration suite.

---

## 4. Visibility is the product

* Decision:
    Non-response is a first-class status - "Viewed 4 days ago · No response."
    Every action is timestamped.

* Alternatives considered:
    Treating the activity log as an admin/debug feature; showing only the final status.

* Why this won:
    The origin story is about uncertainty, not inconvenience.
    The consultant's real question isn't "did they click approve", it's "did they even see it, and can I prove it."
    Surfacing viewing events answers that directly, and the activity log becomes the artifact the consultant needs when payment is delayed.

* Trade-off:
    "Viewed, no response" can feel pointed. It is also the most useful sentence in the product.

---

## 5. Evidence, not enforcement

* Decision:
    Verori documents delivery and response.
    It does not hold funds, gate payment, or claim legal enforceability.

* Alternatives considered:
    Payment-gated visibility (file unlocks when the invoice is paid); escrow with release-on-approval; e-signature integration.

* Why this won:
    Enforcement changes the product's category and its legal surface area.
    Escrow means KYC, refunds, chargebacks, and dispute mediation.
    E-signature means ESIGN/eIDAS compliance questions a button click may not satisfy.
    Neither is required to solve the stated problem, and both would have consumed the build.
    The honest claim, "a timestamped record of delivery, viewing, and response", is narrower and more defensible than "legally binding proof."

* Trade-off:
    Verori cannot prevent non-payment.
    The real protection remains the contract signed before sending.
    This is stated plainly in the README rather than papered over.

Boundary note:
    Payment-status checks (does the consultant's own Stripe say this invoice is paid?) are a different thing from payment *processing*.
    If that feature is ever built, it must use the consultant's own account and Verori must never hold funds.

---

## 6. Niche-flavored, not niche-locked

* Decision:
    Copy, demo data, and templates point at one segment - independent marketing/SEO/content consultants sending monthly reports to B2B clients on retainer.
    The data model, auth, and approval mechanic stay generic.

* Alternatives considered:
    A generic tool with no positioning; a hard-coded vertical product.

* Why this won:
    A generic approval tool is forgettable, hard to describe, and impossible to test and there's no specific person to show it to.
    A hard-coded vertical product is expensive to extend.
    Splitting the difference costs almost nothing and specific vocabulary on top of a generic schema means a second segment is a config change, not a rebuild.

* Trade-off:
    The first segment may be wrong. The schema is built so that answer is cheap to act on.

Why this segment:
    Ordered by four filters applied in sequence: discrete sign-off moment, document-like deliverable, recurrence, low implementation friction.
    Marketing/SEO consultants clear all four.
    Video editors, UX/UI designers, and copywriters fail the first two; branding consultants fail recurrence; financial consultants fail friction.

---

## 7. Multi-tenant isolation as a visible design choice

* Decision:
    Every query is scoped by `user_id` at the data-access layer.
    Client access bypasses tenancy entirely, via token.

* Alternatives considered:
    Postgres row-level security alone; per-tenant schemas.

* Why this won:
    Two access paths, cleanly separated: consultants are authenticated and scoped by tenancy; clients are unauthenticated and scoped by token.
    Mixing the two is how data leaks.
    Making the split explicit in the architecture makes it auditable and demonstrates the pattern that matters most in a SaaS portfolio.

* Trade-off:
    Slightly more boilerplate in the data layer. Worth it for the clarity.

---

## 8. Reminders are manual before automatic

* Decision:
    The reminder button is consultant-initiated.
    Automatic nudges at day 3 / day 7 are deferred and, when built, opt-in per portal.

* Alternatives considered:
    Automatic reminders on by default; escalating notification schedules.

* Why this won:
    A hostile or badly-timed reminder can damage the consultant's client relationship and it's the consultant's relationship, not Verori's.
    The product should give the consultant leverage, not act on their behalf without permission.

* Trade-off:
    Manual reminders mean the consultant still has to remember to nudge.
    That's an acceptable cost for keeping the product on the consultant's side of the relationship.

---

## 9. Notifications go to the consultant, not the client (MVP)

* Decision:
    MVP emails the consultant when a deliverable is viewed or responded to.
    The client receives the link from the consultant, through whatever channel they already use.

* Alternatives considered:
    Verori sends the deliverable email to the client on the consultant's behalf.

* Why this won:
    Sending the email ourselves means fighting spam filters and legal compliance right out of the gate. It also strips the consultant of control over their client relationship. Verori's only job is to generate the link; how it gets delivered doesn't matter.

* Trade-off:
    The consultant still copies a link into email.
    If real users say this is the friction that stops them, sending-on-behalf moves up the roadmap.

---


# Part 2 - Scope decisions

## MVP

- Email magic-link auth for the consultant
- Create portal: client name, deliverable file(s), one-line context note
- Token-based shareable client link
- Client page: file preview, context, **Approve** / **Request Changes**
- Status lifecycle: `sent → viewed → approved / changes requested`
- Consultant dashboard: portal list with status and last activity
- Activity log per portal: created, viewed, approved, changes requested, reminders sent
- Email notifications to the consultant on view and response
- Multi-tenant isolation
- Realistic demo data in the launch niche's vocabulary

## v1.1 - ship soon after real usage

- Manual "Send reminder" button
- Branding on the client page: logo, accent color, consultant name
- Delivery record export (PDF)
- Engagement summary export
- Context-note templates

## Later - only if users ask

- Automatic reminders at day 3 / day 7 (opt-in per portal)
- "Deemed approved after N days", off by default, explicitly enabled per portal, labeled as the consultant's chosen policy
- Shareable read-only link to the delivery record
- Full activity-log / dispute-pack export
- Variant selection for designers ("Approve Option B")
- Multi-approver flows
- Custom domain on the client page
- API, webhooks, Zapier/Make/n8n listing
- Team seats

## Never

- Invoicing, contracts, CRM, project management
- Escrow, payment release, funds handling
- Client identity verification / KYC
- Gating the deliverable behind approval by default
- Claims of legal enforceability or "legally binding signature"
- Mobile app


# Part 3 - Competitive landscape

What each reference taught me. Pricing pages were read at time of writing; treat the numbers as directional.


HoneyBook ([Pricing](https://www.honeybook.com/pricing)) - All-in-one CRM for client-based businesses
- What we take: Confirms consultants will pay $30+/mo for "looking professional" to clients.
- What we avoid: Bundling invoicing, contracts, and pipelines. Their portal is a neglected module, not the core product.

Dubsado ([Pricing](https://www.dubsado.com/pricing)) - All-in-one CRM with heavy automation
- What we take: Confirms demand for client workflows and shows that automation is a retention lever.
- What we avoid: Building a workflow/automation builder. High setup cost is Dubsado's known weakness.

Bonsai by Zoom ([Pricing](https://www.hellobonsai.com/pricing)) - Business management for freelancers.
- What we take: Confirms the freelancer/consultant buyer exists at a $20–40/mo price point.
- What we avoid: Reproducing a full business suite. Their client portal is widely described as feeling too "transactional."

SuiteDash ([Pricing](https://suitedash.com/pricing/)) - CRM + client portal, feature-dense
- What we take: Confirms that "client portal" is a capability people actively search for.
- What we avoid: Matching its high configurability. The complexity is the exact reason clients refuse to log in.

TinyURL ([Pricing](https://tinyurl.com/app/pricing)) - URL shortener with branded links and click analytics
- What we take: Confirms people are willing to pay for branded links and link-level visibility.
- What we avoid: Being a URL shortener. However, it validates that branding and visibility are legitimate paid features.

The consistent lesson:
    Every incumbent bundles the portal into a larger system, which means the portal is designed for
    the consultant's internal workflow rather than the client's five-second experience.
    The gap isn't features. It's that nobody has built the portal as the whole product.

Also relevant (not competitors, but owners of adjacent ground):
    Figma, Google Docs, and Frame.io own review and commenting.

Verori does not compete with them. It handles the sign-off that happens after review is done.
This is why "discrete sign-off with a reason, not commenting" (#3) is a scope decision, not a limitation.

---

# Changelog

- v0.1 - Initial decision log:
    no client login, token access, discrete sign-off with reason,
    visibility as product, evidence-not-enforcement, niche-flavored,
    tenant isolation.

- v0.2 - Added scope decisions (MVP / v1.1 / Later / Never)
    with rationale, competitive landscape, and the manual-reminders
    and notification-channel decisions.
