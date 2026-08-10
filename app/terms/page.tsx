// quademia-parent-site/app/terms/page.tsx
//
// Placeholder — same reasoning as the privacy page next door.
//
// ⓘ Something already points here in spirit: the MyNclex checkout tells
// people "you agree to MyNclex's terms" with nothing to link to. That
// sentence should become a link to this page — and should say Quademia's
// terms, not MyNclex's — once the document exists.

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service — Quademia',
  description: 'Quademia’s terms of service.',
};

export default function TermsPage() {
  return (
    <>
      <h1 className="qp-page-title">Terms of Service</h1>
      <div className="qp-notice">
        <p>
          <strong>Coming soon.</strong> Our terms of service are being prepared
          and will be published here.
        </p>
        <p>
          They will cover how our products may be used, what we provide, how
          payments and refunds work, and how either side may end an agreement.
        </p>
      </div>
    </>
  );
}
