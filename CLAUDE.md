# CLAUDE.md — Quademia parent site

Last updated: 2026-08-10 (repo created)

## What This Is

The company's own site at **quademia.com** — the pages that belong to
Quademia rather than to any one product: the holding page today, the
privacy policy and terms of service, and whatever brand pages come
later.

It is a **separate repo on purpose**. The legal documents outlive
individual products, so they must not live inside one. MyNclex is built
to be extractable — copy it out and it stands alone — and company
documents sitting inside it would either be carried out with it or have
to be surgically removed. This repo is the answer to that.

## Current Status

**Three pages: `/`, `/privacy`, `/terms`.** The legal pages are
placeholders — the addresses exist so outside parties (Google's OAuth
consent config, Cloudflare Turnstile, the payment provider) can record a
URL that will not have to change. The documents themselves are pending.

**Do not build brand pages, an About page or a product directory unless
Sam explicitly asks.** They need brand decisions that have not been made.

## Stack

Deliberately identical to MyNclex, so both migrate together:

- Next.js 16 + TypeScript + React 19 (App Router)
- Cloudflare Worker via `@opennextjs/cloudflare`
- **No Supabase, no database, no login, no secrets.** If that ever
  changes, the reason will be cross-product SSO — and that is a decision,
  not a slice.

## Folder Structure

Flat, no `src/` wrapper — matching MyNclex.

- `app/` — routes only. Each folder is a URL path.
- `styles/` — all CSS, a top-level sibling of `app/`.
- `.github/workflows/` — the single deploy workflow.

New CSS domains get a new file rather than appending to `site.css`
forever.

## Non-Negotiable Rules

1. **No imports from any sibling repo**, and none into it. Copy-paste is
   allowed where the same thing is genuinely needed twice (the design
   tokens are copied from MyNclex). Sharing is not.

2. **No claim on a public page that the company cannot currently
   support.** Quademia Ltd is *not registered yet*, so no "Ltd", no
   registration number, no company address appears on any page until the
   certificate exists. This applies hardest to the legal pages, which
   have to name a real data controller.

3. **The legal documents are Quademia documents covering our products** —
   never "MyNclex's privacy policy". One document, amended in one place.
   The whole reason this repo exists is to keep that true.

4. **A professional reviews the legal text before it goes live.** It
   makes claims about payments and personal data belonging to nurses in
   Ghana, the US, the UK and Canada. A Claude draft is a draft.

5. **Production builds use webpack, not Turbopack** (`--webpack` on
   `next build`) — `@opennextjs/cloudflare` 1.19.x cannot load Turbopack's
   chunk layout and the Worker fails its first request. Dev still uses
   Turbopack.

## Deploying

Push to `main` → GitHub Actions → the workspace Cloudflare account.

**One environment, deliberately.** No database, no accounts, nothing a
bad deploy can corrupt, and a failed build leaves the last good version
serving. `npm run dev` is the test environment.

⚠ Still get Sam's explicit approval before pushing to `main`, since a
push here deploys straight to the public site.

## Working With Sam

- Sam has no coding background. Explain the reasoning before the code.
- Discuss plans before building. No full rewrites without approval.
- One issue at a time, confirmed before moving on.

## Related

- `QAcademy-Nurses/mynclex` — the MyNclex product at
  `nclex.quademia.com`. Its
  `docs/product-plan/domain-and-identity.md` is the canonical record for
  the domain, the company name, the build order and the legal-pages
  decision that created this repo.
- `mybackpacc-byte/qacademy-gamma` — MyNMCLicensure + MyTeacher, older
  stack, still on QAcademy branding.
