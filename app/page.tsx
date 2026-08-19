// parent-site/app/page.tsx
//
// The landing page for quademia.com.
//
// It replaced the holding page on 2026-08-10, on Sam's instruction to
// make it a proper landing page covering the whole family: MyNclex,
// MyNMCLicensure, MyTeacher and the schools platform.
//
// ⚠ This reverses a deliberate earlier decision, and the reversal is
// Sam's. The holding page carried a comment saying MyNMCLicensure and
// MyTeacher must NOT be listed, because doing so "would present them as
// Quademia products before the rename that makes that true". The brand
// mismatch it predicted is real — both still show QAcademy branding when
// you arrive — so the answer here is to be explicit rather than silent:
// each card says where the link actually lands and where it is going.
// Honesty at the door beats a surprise on the other side of it.
//
// ⚠ Standing constraint (CLAUDE.md rule 2): no claim this page cannot
// support. Quademia Ltd is not registered, so no "Ltd", no registration
// number, no address. No student numbers, no "trusted by" line, and no
// launch date for anything unlaunched.

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Quademia — exam preparation for nurses, teachers and schools',
  description:
    'Quademia builds exam-preparation and licensure products for nurses, ' +
    'teachers and schools — NCLEX-RN, NMC licensure, classroom assessment ' +
    'and school examinations.',
};

// One place for the family, so adding or moving a product is a data edit
// rather than a hunt through markup.
//
// `href: null` means the product is not reachable yet and the card
// renders as plain, non-clickable. `meta` is the honest footnote — where
// a link really goes, or why there isn't one. It is omitted rather than
// padded when there is nothing true to say.
type Product = {
  audience: string;
  name: string;
  description: string;
  href: string | null;
  meta?: string;
};

const PRODUCTS: Product[] = [
  {
    audience: 'For nurses moving abroad',
    name: 'MyNclex',
    description:
      'NCLEX-RN preparation — a question bank to practise from on your own, ' +
      'and tutor-led programmes with a week-by-week schedule and live classes.',
    href: 'https://nclex.quademia.com',
    meta: 'nclex.quademia.com',
  },
  {
    audience: 'For nursing students in Ghana',
    name: 'MyNMCLicensure',
    description:
      'Preparation for the Nursing and Midwifery Council licensure ' +
      'examination.',
    // ⚠ Only reachable at a pages.dev address today. qacademynurses.com is
    // an unrelated Blogger site and is NOT an alternative. Pointing
    // licensure.quademia.com here is blocked by the same cross-account
    // limit noted in CLAUDE.md — the quademia.com zone is on the workspace
    // account, this app is not. Replace the moment that changes.
    href: 'https://qacademynurseshub.pages.dev/mynmclicensure/',
    meta: 'On the QAcademy hub for now — moving to licensure.quademia.com',
  },
  {
    audience: 'For teachers and their classes',
    name: 'MyTeacher',
    description:
      'Class-based assessment — set work for a class, run it, and see how ' +
      'each student is getting on.',
    href: 'https://qacademynurseshub.pages.dev/myteacher/',
    meta: 'On the QAcademy hub for now — moving to teacher.quademia.com',
  },
  {
    // ⓘ The public name is not settled — "Schools" is descriptive, not a
    // brand decision. Its repo calls it Beta-B, which is a codename, and
    // the other three are all My*. Rename when Sam decides.
    audience: 'For schools',
    name: 'Schools',
    description:
      'Running formal examinations across a whole school — teachers set ' +
      'them, students sit them, results are published.',
    // Built but pre-launch, so no link and no date. Its own README still
    // lists a step to complete "before real production launch".
    href: null,
    meta: 'In development',
  },
];

function ProductCard({ product }: { product: Product }) {
  const body = (
    <>
      <div className="qp-prod-for">{product.audience}</div>
      <div className="qp-prod-name">{product.name}</div>
      <p className="qp-prod-desc">{product.description}</p>
      {product.meta ? <div className="qp-prod-meta">{product.meta}</div> : null}
    </>
  );

  // A card without a destination is not a link — it should not be
  // focusable, and it should not look clickable.
  if (!product.href) {
    return <div className="qp-prod qp-prod--soon">{body}</div>;
  }

  return (
    <a className="qp-prod" href={product.href}>
      {body}
    </a>
  );
}

export default function HomePage() {
  return (
    <>
      <section className="qp-hero">
        <h1 className="qp-lede">Preparation that gets you qualified.</h1>
        <p className="qp-sub">
          Quademia builds exam-preparation and licensure products for nurses,
          teachers and schools — from NCLEX-RN and Ghana&rsquo;s NMC licensure
          examination to assessment inside the classroom.
        </p>
      </section>

      <div className="qp-section-label">Our products</div>

      <div className="qp-products">
        {PRODUCTS.map((product) => (
          <ProductCard key={product.name} product={product} />
        ))}
      </div>

      <div className="qp-section-label">The name</div>

      {/* The brand doc marks this as the approved public story, and there
          is no About page yet, so this is where the name gets explained. */}
      <div className="qp-name-note">
        <strong>Quademia</strong> is <em>Qualified</em> + <em>Academia</em> —
        the academy that gets you qualified. Every product here exists to get
        somebody through an examination that stands between them and the work
        they want to do.
      </div>

      <p className="qp-contact">
        Questions? <a href="mailto:hello@quademia.com">hello@quademia.com</a>
      </p>
    </>
  );
}
