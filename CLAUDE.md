# CLAUDE.md — Quademia parent site

Last updated: 2026-08-10 (repo created; dependencies taken to latest the
same day — see *Versions* below)

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
   `next build`) — `@opennextjs/cloudflare` 1.19.x could not load
   Turbopack's chunk layout and the Worker failed its first request. Dev
   still uses Turbopack. ⓘ **Not re-tested on 1.20.2** — the flag was kept
   because it works, not because the limitation was re-confirmed. Dropping
   it is a small experiment for a future session, and one worth doing here
   *before* MyNclex, since a broken build on three pages costs nothing.

## Versions

⭐ **Every dependency is pinned or floors at a known-good version, and the
two apps are meant to move together.** Taken to latest on 2026-08-10:
`next 16.3.0`, `react`/`react-dom 19.2.8`, `@opennextjs/cloudflare 1.20.2`,
`typescript ^6.0.3`, `eslint ^9.39.5`. `npm audit` reports **0
vulnerabilities**.

⚠ **"Latest" is not always installable, and two ceilings were found the
hard way:**
- **TypeScript 7 breaks linting.** `typescript-eslint` refuses outright —
  *"typescript-eslint does not support TS 7.0"* — and its declared range is
  `>=4.8.4 <6.1.0`. **6.0.3 is the newest usable TypeScript.**
- **ESLint 10 breaks `eslint-plugin-react`** at runtime, inside
  `detectReactVersion`. `eslint-config-next` itself accepts ESLint 10, but
  three plugins it bundles are peer-capped at `^9`, so the install only
  warns and the failure appears when lint actually runs. **9.39.5 is the
  newest usable ESLint.**

⚠ **`@opennextjs/cloudflare` must stay pinned EXACTLY**, never `^`. A caret
floats it to a release whose peer range excludes our Next, and `npm
install` then fails outright — with only the lockfile hiding it until
someone deletes `node_modules`.

ⓘ **`@types/node` tracks the CI runtime (Node 22), not npm's latest.** The
types describe a Node version; matching the newest published major would
describe a runtime we do not run.

ⓘ **Next 16.3.0 writes its own block into this file** (the
`nextjs-agent-rules` markers at the bottom) every time `next dev` starts.
It is committed rather than fought — deleting it only re-creates an
uncommitted change. To stop it: `agentRules: false` in `next.config.ts`.

## Branching workflow

Two long-lived branches, matching the MyNclex repo so there is **one**
release routine in the family rather than two:

- **`main`** — stable. Deploys the **dev** Worker to the *personal*
  Cloudflare account. Reachable at its `workers.dev` address only.
- **`prod`** — released. Deploys the **live** Worker to the *workspace*
  Cloudflare account, which serves `quademia.com`.

⚠ **The custom domain can only ever be on prod.** `quademia.com`'s DNS
zone is on the workspace account and Cloudflare will not route a custom
domain across accounts. A dev copy at `quademia.com` is not possible and
is not a gap to close.

⚠ **Ask Sam for explicit approval before merging to `main`, and again
before releasing `main` → `prod`.** Same rule as MyNclex.

Session work happens on a branch, not directly on `main`.

⚠ This repo was created with a single deploy workflow and gained the
second one the same day (2026-08-10) — Sam's call, on the grounds that it
fits how the family already works. The original reasoning for one
environment is not wrong on the merits (no database, no accounts, nothing
a bad deploy can corrupt) and is kept here so nobody "simplifies" it back
without knowing it was already argued: **process consistency beat
minimalism, deliberately.**

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

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
