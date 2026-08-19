// parent-site/components/legal/legal-doc.tsx
//
// The shared frame both legal documents render into: title, draft
// banner, dates, contents list, numbered sections, footer.
//
// ⚠ Why a shared frame and not two self-contained pages — this is
// CLAUDE.md rule 3 in code. The legal documents are QUADEMIA documents
// covering our products, and the whole reason this repo exists is that
// a document copied per product is a document amended per product, with
// the copy that misses an amendment being the one that causes harm. The
// same logic applies one level down: two pages that each hand-rolled a
// heading, a status banner and a numbering scheme would drift the first
// time only one of them was edited.
//
// ⓘ New top-level folder. The repo had `app/` and `styles/` only, since
// three pages needed nothing else. `components/` matches the mynclex
// repo's convention (visual pieces grouped by domain) so the two stay
// legible as one family. CLAUDE.md is updated to say so.

import type { ReactNode } from 'react';
import '@/styles/legal.css';

/** Renders a numbered, clickable cross-reference to another section —
 *  `{ref('cookies')}` becomes a link reading "section 5". */
export type SectionRef = (id: string) => ReactNode;

export type LegalSection = {
  /** URL fragment. Stable — outside parties and our own products may
   *  link to a specific clause, so renaming one breaks their link. */
  id: string;
  heading: string;
  /** A function, not a node, so that cross-references can be resolved at
   *  render time — see the `ref` helper below for why that matters. */
  body: (ref: SectionRef) => ReactNode;
};

type LegalDocProps = {
  title: string;
  /** One or two sentences under the title, in plain English. */
  standfirst: ReactNode;
  /** Draft/in-force notice. Rendered in the amber banner. */
  status: ReactNode;
  version: string;
  updated: string;
  /** What the document covers — the products, in one short phrase. */
  appliesTo: string;
  sections: LegalSection[];
  /** Closing line under the rule at the bottom. */
  foot?: ReactNode;
};

export function LegalDoc({
  title,
  standfirst,
  status,
  version,
  updated,
  appliesTo,
  sections,
  foot,
}: LegalDocProps) {
  // Cross-references ("see section 5") are resolved from this array
  // rather than typed into the prose. Typing them in is how a document
  // ends up telling you to read a clause about refunds when clause 5 is
  // about cookies: somebody inserts a section and the numbers move, but
  // the sentences that quote them do not.
  //
  // An unknown id throws, which fails `next build` rather than shipping
  // "section undefined" to somebody relying on the document.
  const numberOf = new Map(sections.map((section, i) => [section.id, i + 1]));

  const ref: SectionRef = (id) => {
    const n = numberOf.get(id);
    if (n === undefined) {
      throw new Error(
        `legal-doc: cross-reference to unknown section "${id}". ` +
          `Known ids: ${[...numberOf.keys()].join(', ')}`,
      );
    }
    return <a href={`#${id}`}>section {n}</a>;
  };

  return (
    <article>
      <header className="legal-head">
        <h1 className="legal-title">{title}</h1>
        <p className="legal-standfirst">{standfirst}</p>

        {/* role="note" so a screen reader announces this as an aside
            rather than as the first paragraph of the document. */}
        <div className="legal-status" role="note">
          {status}
        </div>

        <div className="legal-meta">
          <div>
            <span className="legal-meta-key">Version</span>
            <span className="legal-meta-val">{version}</span>
          </div>
          <div>
            <span className="legal-meta-key">Last updated</span>
            <span className="legal-meta-val">{updated}</span>
          </div>
          <div>
            <span className="legal-meta-key">Applies to</span>
            <span className="legal-meta-val">{appliesTo}</span>
          </div>
        </div>
      </header>

      <nav className="legal-toc" aria-label="Contents">
        <div className="legal-toc-label">Contents</div>
        {/* Numbers come from a CSS counter on this list and a second one
            on the sections below, both walking the same array — so an
            inserted clause renumbers both and they cannot disagree. */}
        <ol className="legal-toc-list">
          {sections.map((section) => (
            <li key={section.id}>
              <a href={`#${section.id}`}>{section.heading}</a>
            </li>
          ))}
        </ol>
      </nav>

      <div className="legal-body">
        {sections.map((section) => (
          <section key={section.id} className="legal-section">
            <h2 className="legal-h2" id={section.id}>
              {section.heading}
            </h2>
            {section.body(ref)}
          </section>
        ))}
      </div>

      {foot ? <footer className="legal-foot">{foot}</footer> : null}
    </article>
  );
}

/** A value somebody has to decide before this document goes live.
 *  Loud on purpose — an unfilled blank must not survive a read-through. */
export function Blank({ children }: { children: ReactNode }) {
  return <span className="legal-blank">[{children}]</span>;
}

/** An aside inside a section — an example, a plain-English gloss, or a
 *  consequence worth pulling out of the run of text. */
export function Note({ children }: { children: ReactNode }) {
  return <div className="legal-note">{children}</div>;
}

/** A table that scrolls inside its own box rather than widening the
 *  page. Every legal table here is 3 columns and unreadable stacked, so
 *  scrolling beats reflowing. */
export function LegalTable({
  head,
  children,
}: {
  head: string[];
  children: ReactNode;
}) {
  return (
    <div className="legal-table-wrap">
      <table className="legal-table">
        <thead>
          <tr>
            {head.map((cell) => (
              <th key={cell}>{cell}</th>
            ))}
          </tr>
        </thead>
        <tbody>{children}</tbody>
      </table>
    </div>
  );
}
