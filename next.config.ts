import type { NextConfig } from "next";
import path from "node:path";
import fs from "node:fs";

// Only initialise Cloudflare dev bindings when running locally (npm run dev).
// In production, Cloudflare provides bindings automatically via the Worker
// runtime.
if (process.env.NODE_ENV === "development") {
  // This has to stay a `require` inside the dev branch: a static import
  // would hoist out of the branch and pull the adapter into production
  // builds. (The mynclex repo carries the same line and the same lint
  // error unsilenced — fixed here rather than copied.)
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const { initOpenNextCloudflareForDev } = require("@opennextjs/cloudflare");
  initOpenNextCloudflareForDev();
}

// Pin Turbopack's workspace root to the nearest ancestor that owns a
// `node_modules`. Carried over from the mynclex repo, where session
// worktrees don't install their own packages and share the parent's
// `node_modules` via upward module resolution — pinning `__dirname`
// blindly would make `next` itself unresolvable inside a worktree.
// Walking up finds the parent repo when in a worktree, and stays put
// when run directly from the repo root.
function findProjectRoot(start: string): string {
  let dir = start;
  while (true) {
    if (fs.existsSync(path.join(dir, "node_modules"))) return dir;
    const parent = path.dirname(dir);
    if (parent === dir) return start;
    dir = parent;
  }
}

const nextConfig: NextConfig = {
  turbopack: {
    root: findProjectRoot(__dirname),
  },
};

export default nextConfig;
