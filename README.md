# quademia-parent-site

The parent site for **quademia.com** — the company's own pages, which sit
above and outlive any individual product.

Today it is three pages: a holding page, `/privacy` and `/terms`. It is
built as a full application rather than static files because nobody knows
what it grows into, and one candidate is already written down: cross-product
sign-in, where one Quademia account works across every product.

## Stack

Deliberately identical to the MyNclex app, so the two migrate together
instead of drifting apart:

- Next.js 16 + TypeScript + React 19 (App Router)
- Deployed to a Cloudflare Worker via `@opennextjs/cloudflare`
- No database, no login, no secrets

Production builds pass `--webpack` to `next build`. Next 16 defaults to
Turbopack for production builds, but `@opennextjs/cloudflare` 1.19.x does
not support Turbopack's chunk layout — the Worker boots and then fails the
first request with a `ChunkLoadError`. `next dev` still uses Turbopack.

## Running it

```bash
npm install
npm run dev
```

Serves on <http://localhost:3000>.

## Deploying

Push to `main`. GitHub Actions builds the OpenNext bundle and deploys the
Worker to the **workspace** Cloudflare account (`qacademynurses`) — the
account that owns both the prod MyNclex Worker and the `quademia.com` DNS
zone.

There is **one** deployed environment, on purpose. See the comment at the
top of `wrangler.jsonc` for why, and for what would change that.

**Required repository secret:** `CLOUDFLARE_API_TOKEN` — a Cloudflare API
token scoped to the workspace account. It needs **Zone** permission as well
as Workers permission if `wrangler.jsonc` declares custom domains, because
attaching one writes a DNS record.

## Relationship to the other repos

- `QAcademy-Nurses/mynclex` — the MyNclex product. Separate repo, separate
  deployment, at `nclex.quademia.com`.
- `mybackpacc-byte/qacademy-gamma` — MyNMCLicensure and MyTeacher, on the
  older stack and the older QAcademy branding.

**Nothing is shared between these repos by import.** Where the same thing is
needed twice (the design tokens in `styles/tokens.css`, for instance), it is
copied. Each repo has to stand on its own.
