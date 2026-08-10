// quademia-parent-site/app/page.tsx
//
// The holding page for quademia.com. Deliberately small: it exists so
// that someone who hears the name and types it in reaches something
// real, and so the legal pages have a home that outlives any single
// product. The About page, the brand story and the rest arrive when the
// brand decisions behind them have actually been made.

export default function HomePage() {
  return (
    <>
      <h1 className="qp-lede">
        Exam preparation and licensure support for nurses and teachers.
      </h1>
      <p className="qp-sub">
        Quademia builds online preparation programmes and question banks for
        professionals working towards registration and licensure.
      </p>

      <div className="qp-section-label">Our products</div>

      {/* Only MyNclex is listed. MyNMCLicensure and MyTeacher are live, but
          under the older QAcademy branding on the gamma stack — listing
          them here would present them as Quademia products before the
          rename that makes that true. They join this list when they do. */}
      <a className="qp-card" href="https://nclex.quademia.com">
        <div className="qp-card-name">MyNclex</div>
        <div className="qp-card-desc">
          NCLEX-RN preparation — a question bank and tutor-led programmes for
          nurses migrating to the US, UK and Canada.
        </div>
      </a>
    </>
  );
}
