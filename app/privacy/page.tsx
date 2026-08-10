// quademia-parent-site/app/privacy/page.tsx
//
// Placeholder. The address is the point: this URL is what gets recorded
// by Google's OAuth consent configuration, by Cloudflare Turnstile's
// privacy-addendum requirement, and by the payment provider — and a URL
// that outside parties have written down is expensive to change later.
// So the address goes live first and correct, and the document fills it.
//
// ⚠ WHEN THE REAL POLICY IS WRITTEN, TWO RULES APPLY:
//  1. It is a QUADEMIA document covering our products — not "MyNclex's
//     privacy policy". Four products taking four copies is four documents
//     that must then be amended in step by hand, and the copy that misses
//     an amendment is the one that causes harm.
//  2. A professional reads it before it goes live. It makes claims about
//     payments and personal data belonging to nurses in Ghana, the US, the
//     UK and Canada. "Claude drafted it" is not "it was reviewed".
//  ⓘ It also has to name a data controller, which means the company
//     needs to be registered first.

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy — Quademia',
  description: 'Quademia’s privacy policy.',
};

export default function PrivacyPage() {
  return (
    <>
      <h1 className="qp-page-title">Privacy Policy</h1>
      <div className="qp-notice">
        <p>
          <strong>Coming soon.</strong> Our privacy policy is being prepared
          and will be published here.
        </p>
        <p>
          It will explain what personal information we collect across
          Quademia’s products, why we collect it, who processes it on our
          behalf, and the choices you have about it.
        </p>
      </div>
    </>
  );
}
