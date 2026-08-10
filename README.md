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

## Branches and deploying

Two long-lived branches, two Cloudflare accounts — the same shape as the
MyNclex repo, so there is one release routine in the family rather than
two:

| Branch | Deploys to | Cloudflare account | Address |
| --- | --- | --- | --- |
| `main` | `quademia-parent-site-dev` | personal | `…workers.dev` only |
| `prod` | `quademia-parent-site` | workspace (`qacademynurses`) | `quademia.com` (once attached) |

Merging `main` into `prod` publishes. Both directions need Sam's explicit
approval first.

⚠ **The custom domain can only ever be on prod.** `quademia.com`'s DNS zone
lives on the workspace account, and Cloudflare will not route a custom
domain to a Worker on a different account. The dev Worker is reachable at
its `workers.dev` address and nowhere else — by design, not by omission.

**Required repository secrets:**

- `CLOUDFLARE_API_TOKEN_DEV` — scoped to the **personal** account.
- `CLOUDFLARE_API_TOKEN_PROD` — scoped to the **workspace** account. This
  one also needs **Zone** permission, not just Workers permission, because
  attaching the custom domain writes a DNS record.

## Relationship to the other repos

- `QAcademy-Nurses/mynclex` — the MyNclex product. Separate repo, separate
  deployment, at `nclex.quademia.com`.
- `mybackpacc-byte/qacademy-gamma` — MyNMCLicensure and MyTeacher, on the
  older stack and the older QAcademy branding.

**Nothing is shared between these repos by import.** Where the same thing is
needed twice (the design tokens in `styles/tokens.css`, for instance), it is
copied. Each repo has to stand on its own.
