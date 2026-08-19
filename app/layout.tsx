// parent-site/app/layout.tsx
//
// The whole site's shell — header, content, footer. There is only one
// audience here (anyone on the internet), so unlike the mynclex repo
// there is no route-group split and no auth boundary. If that ever
// changes, split into route groups then, not now.

import type { Metadata } from 'next';
import Link from 'next/link';
import '@/styles/tokens.css';
import '@/styles/site.css';
import '@/styles/home.css';
import './globals.css';

// The default for any page that doesn't set its own. The home page and both
// legal pages override it. "and schools" was added 2026-08-10 with the
// landing page — the family is four products, not two audiences.
export const metadata: Metadata = {
  title: 'Quademia',
  description:
    'Quademia builds exam-preparation and licensure products for nurses, teachers and schools.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="qp-shell">
          <header className="qp-header">
            <Link href="/" className="qp-wordmark">
              Quademia
            </Link>
          </header>

          <main className="qp-main">{children}</main>

          {/* ⚠ No company-registration line, deliberately. Quademia Ltd is
              not incorporated yet (mynclex repo →
              docs/product-plan/domain-and-identity.md §2), so a "Ltd" or a
              registration number here would be a claim the company cannot
              currently support. Add it the day the certificate exists —
              and add it to the legal pages at the same time, since a
              privacy policy has to name a real data controller. */}
          <footer className="qp-footer">
            <div>© 2026 Quademia</div>
            <nav className="qp-footer-links">
              <Link href="/privacy">Privacy</Link>
              <Link href="/terms">Terms</Link>
            </nav>
          </footer>
        </div>
      </body>
    </html>
  );
}
