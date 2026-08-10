// quademia-parent-site/app/privacy/page.tsx
//
// The privacy policy — DRAFT, replacing the placeholder that held this
// address open. The two rules the placeholder left behind still stand
// and are honoured here:
//
//  1. It is a QUADEMIA document covering our products — not "MyNclex's
//     privacy policy". Every product is named inside one document, and
//     an amendment happens in this file only.
//  2. A professional reads it before it goes live. This is a draft. The
//     banner at the top says so to the reader, not just to us, so that
//     nobody can be misled by a document we have not had reviewed.
//
// ⓘ It also has to name a data controller, and Quademia Ltd is not
// registered yet (mynclex repo → docs/product-plan/domain-and-identity.md
// §2). Section 1 therefore carries a <Blank> rather than an invented
// company — CLAUDE.md rule 2 forbids a claim the company cannot support,
// and "who is legally answerable for your data" is the worst possible
// place to guess.
//
// ⚠ WHERE THE FACTS CAME FROM. Everything factual here was read out of
// the code, not assumed, so a reviewer can check it:
//   · account fields         — mynclex db/schema.sql → nclex_users
//   · learning records       — nclex_attempts / _attempt_answers /
//                              _question_marks / _student_activity_progress
//   · attendance             — nclex_cohort_session_attendance
//   · payment fields         — nclex_payments (no card data — Paystack
//                              takes the card directly; we keep the
//                              reference, amount, status and its payload)
//   · security logging       — nclex_auth_events (IP address, device
//                              label, outcome) and its 90-day retention
//                              sweep in db/migrations/20260904120000
//   · processors             — Supabase, Cloudflare (incl. Turnstile),
//                              Paystack, Resend, Google; Microsoft and
//                              Google sign-in on the schools product
//   · school-pupil position  — qacademy-beta-b is tenant/school-scoped,
//                              which is why "Children" splits the
//                              controller role between us and the school
// If any of those change, this document changes in the same commit.

import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Blank,
  LegalDoc,
  LegalTable,
  Note,
  type LegalSection,
} from '@/components/legal/legal-doc';

export const metadata: Metadata = {
  title: 'Privacy Policy — Quademia',
  description:
    'What personal information Quademia collects across its products, why, ' +
    'who processes it, and the choices you have about it.',
};

const SECTIONS: LegalSection[] = [
  // ───────────────────────────────────────────────────────────
  {
    id: 'who-we-are',
    heading: 'Who we are',
    body: () => (
      <>
        <p>
          Quademia builds exam-preparation and licensure products for nurses,
          teachers and schools. When we say <strong>we</strong>,{' '}
          <strong>us</strong> or <strong>Quademia</strong> in this policy, we
          mean the organisation responsible for those products — the{' '}
          <em>data controller</em>, in the language of data-protection law.
          That means we decide what personal information is collected and what
          happens to it, and we are the ones you can hold to account for it.
        </p>
        <p>
          Our registered details are:{' '}
          <Blank>registered company name</Blank>{' '}
          <Blank>company registration number</Blank>{' '}
          <Blank>registered address</Blank>.
        </p>
        <Note>
          <p>
            <strong>Note for review — not for publication.</strong> These
            blanks are not an oversight. The company is in the process of being
            registered, and a privacy policy has to name a real, existing legal
            person as the controller. This document must not go live until the
            registration exists and these three fields are filled in.
          </p>
        </Note>
        <p>
          You can reach us about anything in this policy at{' '}
          <a href="mailto:hello@quademia.com">hello@quademia.com</a>.
        </p>
      </>
    ),
  },

  // ───────────────────────────────────────────────────────────
  {
    id: 'what-this-covers',
    heading: 'What this policy covers',
    body: (ref) => (
      <>
        <p>
          This is one policy for the whole of Quademia. It covers this website
          and every product we run:
        </p>
        <ul>
          <li>
            <strong>MyNclex</strong> — NCLEX-RN preparation: a question bank
            you can study from on your own, and tutor-led programmes.
          </li>
          <li>
            <strong>MyNMCLicensure</strong> — preparation for Ghana&rsquo;s
            Nursing and Midwifery Council licensure examination.
          </li>
          <li>
            <strong>MyTeacher</strong> — class-based assessment for teachers
            and their students.
          </li>
          <li>
            <strong>Our schools product</strong> — running formal examinations
            across a whole school.
          </li>
        </ul>
        <p>
          We deliberately keep this as a single document rather than one per
          product. Four copies would be four documents to keep in step, and the
          copy that missed an update would be the one that caused harm. Where a
          particular product does something different, that product is named in
          the clause.
        </p>
        <p>
          Some of our products still carry our older <em>QAcademy</em> branding
          while they move across to Quademia. It is the same organisation and
          this same policy applies to them.
        </p>
        <p>
          This policy does not cover other companies&rsquo; websites we link
          to, or the video-meeting tools your tutor may use to run a live class
          — see {ref('tutors-and-schools')}.
        </p>
      </>
    ),
  },

  // ───────────────────────────────────────────────────────────
  {
    id: 'what-we-collect',
    heading: 'The information we collect',
    body: (ref) => (
      <>
        <h3 className="legal-h3">Information you give us</h3>
        <ul>
          <li>
            <strong>When you create an account:</strong> your first name, last
            name and email address, and a password. Your password is stored
            only in a scrambled (hashed) form — nobody at Quademia can read it,
            and we cannot tell you what it is.
          </li>
          <li>
            <strong>Optionally, on your profile:</strong> a phone number and a
            profile picture.
          </li>
          <li>
            <strong>If you are a tutor:</strong> the public profile you choose
            to publish — your headline, speciality, years of experience,
            biography, and any business branding you add. Everything in that
            profile is intended to be seen publicly, which is why we ask you
            not to put private details in it.
          </li>
          <li>
            <strong>When you contact us or a tutor:</strong> what you write in
            an enquiry form, a support message or an email, and anything you
            attach.
          </li>
          <li>
            <strong>Anything you upload:</strong> files, images and documents
            you add — for example, materials a tutor adds to a programme.
          </li>
        </ul>

        <h3 className="legal-h3">Information created as you use the products</h3>
        <ul>
          <li>
            <strong>Your study record:</strong> the questions you attempt, the
            answers you choose, how long you take, your scores and marks, which
            questions you flag or bookmark, and your results on practice tests
            and readiness packs.
          </li>
          <li>
            <strong>Your progress:</strong> what you have completed in a
            programme, and whether your tutor marked you present, absent or
            excused for a live session.
          </li>
          <li>
            <strong>Your access:</strong> what you have bought, when it started
            and when it ends, which programme and cohort you are enrolled in,
            and any credits you hold.
          </li>
        </ul>

        <h3 className="legal-h3">Payment information</h3>
        <p>
          <strong>
            We never see, receive or store your card number, its security code
            or your PIN.
          </strong>{' '}
          When you pay, our payment provider, Paystack, collects those details
          directly from you on its own secure systems.
        </p>
        <p>What we do keep is the record of the transaction:</p>
        <ul>
          <li>the email address the payment was made with;</li>
          <li>the amount, the currency (Ghana cedis or US dollars) and what it
            was for;</li>
          <li>the payment reference, whether it succeeded, failed or was
            refunded, and the dates;</li>
          <li>the confirmation record Paystack sends back to us.</li>
        </ul>
        <p>
          Where a tutor collects a payment outside the platform — cash or a
          bank transfer — and records it against your enrolment, we keep that
          record and which tutor entered it.
        </p>

        <h3 className="legal-h3">Technical and security information</h3>
        <ul>
          <li>
            <strong>Sign-in events:</strong> each time an account is signed
            into, a password reset is asked for, or a sign-in attempt fails or
            is blocked, we record the email address used, the time, the outcome
            and the reason.
          </li>
          <li>
            <strong>Your IP address and a description of your device</strong>{' '}
            (for example, <em>Android · Chrome</em>) against those events.
          </li>
          <li>
            <strong>Cookies</strong> that keep you signed in — see{' '}
            {ref('cookies')}.
          </li>
        </ul>
        <p>
          We keep this because accounts get attacked. It is how we notice
          somebody trying passwords against your account, and how we can tell
          you what happened if you ask.
        </p>

        <h3 className="legal-h3">What we do not collect</h3>
        <p>
          We do not buy personal information about you from anyone. We do not
          run advertising or cross-site tracking, and we do not ask you for
          information about your own health, race, religion, politics or
          anything else the law treats as a special category. Our questions
          describe fictional patients; nothing in them is about you.
        </p>
      </>
    ),
  },

  // ───────────────────────────────────────────────────────────
  {
    id: 'why-we-use-it',
    heading: 'Why we use it, and our legal basis',
    body: (ref) => (
      <>
        <p>
          Data-protection law requires us to have a specific reason — a{' '}
          <em>legal basis</em> — for every use of your information. Ours are:
        </p>
        <LegalTable head={['What we do', 'Information used', 'Our basis']}>
          <tr>
            <th>Create and run your account</th>
            <td>Name, email, password, roles</td>
            <td>Performing our contract with you</td>
          </tr>
          <tr>
            <th>Give you what you bought</th>
            <td>Purchases, subscriptions, enrolments, credits</td>
            <td>Performing our contract with you</td>
          </tr>
          <tr>
            <th>Run your studying and show your results</th>
            <td>Attempts, answers, scores, progress, attendance</td>
            <td>Performing our contract with you</td>
          </tr>
          <tr>
            <th>Take payment and confirm it</th>
            <td>Email, amount, currency, reference, status</td>
            <td>Performing our contract with you</td>
          </tr>
          <tr>
            <th>
              Send service emails — receipts, invitations, password resets,
              reminders about your programme
            </th>
            <td>Name, email, what you are enrolled in</td>
            <td>Performing our contract with you</td>
          </tr>
          <tr>
            <th>Answer your support questions</th>
            <td>What you tell us, plus your account record</td>
            <td>Performing our contract, and our legitimate interests</td>
          </tr>
          <tr>
            <th>
              Keep accounts secure — block automated sign-in attempts,
              investigate abuse and fraud
            </th>
            <td>Sign-in events, IP address, device description</td>
            <td>Our legitimate interests in protecting you and us</td>
          </tr>
          <tr>
            <th>
              Improve the products — for example, spotting a question that
              almost everybody gets wrong
            </th>
            <td>Study records, usually combined and not identifying you</td>
            <td>Our legitimate interests in improving what we sell</td>
          </tr>
          <tr>
            <th>Send you marketing about our products</th>
            <td>Name, email</td>
            <td>Your consent — you can withdraw it at any time</td>
          </tr>
          <tr>
            <th>Keep accounting and tax records</th>
            <td>Payment records</td>
            <td>Complying with our legal obligations</td>
          </tr>
        </LegalTable>
        <p>
          Where our basis is <em>legitimate interests</em>, we have weighed
          what we want to do against your privacy, and we will not do it where
          your interests come first. You can object to any of those uses — see{' '}
          {ref('your-rights')}.
        </p>
        <p>
          Where our basis is <em>consent</em> — which today means marketing
          email only — you can say no in the first place, and withdraw later
          without losing anything you paid for. Service emails about something
          you bought are not marketing, and you cannot unsubscribe from a
          password reset.
        </p>
      </>
    ),
  },

  // ───────────────────────────────────────────────────────────
  {
    id: 'cookies',
    heading: 'Cookies',
    body: () => (
      <>
        <p>
          We use cookies only where the product will not work without them:
        </p>
        <ul>
          <li>
            <strong>Signing you in.</strong> A cookie holds your session so you
            do not have to type your password on every page. Without it there
            is no way to stay signed in.
          </li>
          <li>
            <strong>Security.</strong> Cloudflare Turnstile, which checks that
            a sign-in or sign-up is coming from a person and not an automated
            script, sets its own cookie for that check.
          </li>
        </ul>
        <p>
          <strong>
            We do not use advertising cookies, and we do not have any
            third-party analytics or tracking on our sites.
          </strong>{' '}
          Nobody is following you from our pages to anyone else&rsquo;s. If
          that ever changes we will update this policy and ask for your consent
          first — we will not slip it in.
        </p>
      </>
    ),
  },

  // ───────────────────────────────────────────────────────────
  {
    id: 'who-we-share-with',
    heading: 'Who else handles your information',
    body: (ref) => (
      <>
        <p>
          <strong>We do not sell your personal information to anyone.</strong>{' '}
          We do not share it for anyone else&rsquo;s advertising.
        </p>
        <p>
          We do use specialist companies to run parts of the service. They
          handle your information on our instructions only, under a contract,
          and may not use it for their own purposes:
        </p>
        <LegalTable head={['Company', 'What they do for us', 'Where']}>
          <tr>
            <th>Supabase</th>
            <td>
              Hosts the database, the account and sign-in system, and uploaded
              files
            </td>
            <td>
              <Blank>region</Blank>
            </td>
          </tr>
          <tr>
            <th>Cloudflare</th>
            <td>
              Hosts and serves our websites and applications; provides the
              Turnstile bot check on our sign-in forms
            </td>
            <td>Worldwide network</td>
          </tr>
          <tr>
            <th>Paystack</th>
            <td>
              Takes card and mobile-money payments, and issues refunds. Your
              card details go to Paystack, not to us
            </td>
            <td>Nigeria / Ghana</td>
          </tr>
          <tr>
            <th>Resend</th>
            <td>
              Delivers our emails — receipts, invitations, password resets and
              reminders
            </td>
            <td>
              <Blank>region</Blank>
            </td>
          </tr>
          <tr>
            <th>Google</th>
            <td>
              Provides &ldquo;Sign in with Google&rdquo; where we offer it, and
              hosts our own company email
            </td>
            <td>Worldwide network</td>
          </tr>
          <tr>
            <th>Microsoft</th>
            <td>
              Provides &ldquo;Sign in with Microsoft&rdquo; on our schools
              product
            </td>
            <td>Worldwide network</td>
          </tr>
        </LegalTable>
        <p>Beyond those, we will share your information:</p>
        <ul>
          <li>
            <strong>With your tutor, your teacher or your school</strong> —
            explained in full in {ref('tutors-and-schools')}, because it is
            the sharing most people will care about.
          </li>
          <li>
            <strong>Where the law requires it</strong> — for example a valid
            court order or a lawful request from an authority. We will tell you
            if we are allowed to.
          </li>
          <li>
            <strong>With our professional advisers</strong> — accountants and
            lawyers, bound by confidentiality.
          </li>
          <li>
            <strong>If the business is sold or reorganised</strong> — to the
            buyer, who would have to keep to a policy no weaker than this one.
          </li>
        </ul>
        <Note>
          <p>
            <strong>Signing in with Google or Microsoft.</strong> Where we offer
            it, this is only a second door into an account that already exists
            — it never creates one. We receive your name, email address and
            profile picture from them. We never receive your password, and we
            get no access to your mail, files, contacts or anything else in
            your account there.
          </p>
        </Note>
      </>
    ),
  },

  // ───────────────────────────────────────────────────────────
  {
    id: 'tutors-and-schools',
    heading: 'Tutors, teachers and schools — who can see your work',
    body: () => (
      <>
        <p>
          If you study on your own — the question bank by itself — nobody else
          sees your results. If you join a tutored programme or a class, other
          people necessarily do, and you should know exactly who and what
          before you enrol.
        </p>

        <h3 className="legal-h3">What your tutor or teacher can see</h3>
        <ul>
          <li>your name and the email address on your account;</li>
          <li>that you are enrolled, and in which cohort or class;</li>
          <li>
            payments recorded against your enrolment — including whether an
            instalment is outstanding;
          </li>
          <li>
            your progress through their programme, your results on the work
            they set, and your attendance at their live sessions.
          </li>
        </ul>
        <p>
          They do not see your card details, your password, or your work in
          other tutors&rsquo; programmes.
        </p>

        <h3 className="legal-h3">Other students</h3>
        <p>
          Other members of your cohort or class may see your name where the
          product shows a group — for example, a class list. They do not see
          your results, your payments or your contact details.
        </p>

        <h3 className="legal-h3">Live sessions and recordings</h3>
        <p>
          Tutors run live classes on outside platforms — Zoom, Google Meet or
          Microsoft Teams — using their own accounts. When you join one,{' '}
          <strong>that platform&rsquo;s own privacy policy applies to you</strong>
          , not ours, and we have no control over what it collects.
        </p>
        <p>
          Where a session is recorded, the recording can capture your name,
          your voice, your camera picture and anything you type in the chat.
          The recording is then shared with your cohort. Your tutor should tell
          you before recording; if you do not want to appear, you can keep your
          camera and microphone off.
        </p>

        <h3 className="legal-h3">Tutors are independent</h3>
        <p>
          Tutors run their own programmes on our platform. For the personal
          information they collect and hold themselves — outside our products,
          such as their own WhatsApp group or their own notes — they are
          responsible, not us. For the records held inside our products, we
          are.
        </p>

        <h3 className="legal-h3">Schools</h3>
        <p>
          On our schools product, the school decides which students are
          enrolled, what examinations they sit and who can see the results. In
          that arrangement <strong>the school is the data controller</strong>{' '}
          for its students&rsquo; records and we act on the school&rsquo;s
          instructions. If you are a student or a parent asking about that
          data, ask the school first; we will help the school answer.
        </p>

        <h3 className="legal-h3">Us</h3>
        <p>
          A small number of Quademia staff can see account and payment records,
          and only where their role requires it — answering a support request,
          investigating a payment, or dealing with abuse. Access is limited by
          role rather than given to everyone.
        </p>
      </>
    ),
  },

  // ───────────────────────────────────────────────────────────
  {
    id: 'international',
    heading: 'Sending information between countries',
    body: (ref) => (
      <>
        <p>
          We are based in Ghana, and our students are in Ghana, the United
          States, the United Kingdom, Canada and elsewhere. The companies in{' '}
          {ref('who-we-share-with')} run their systems across several
          countries. That means your
          information will be stored and processed outside the country you live
          in.
        </p>
        <p>
          Where information leaves the United Kingdom or the European Economic
          Area, we rely on the safeguards the law provides for that transfer —
          in practice, standard contractual clauses in our contracts with those
          companies, or a finding by the relevant authority that the receiving
          country protects data adequately.
        </p>
        <p>
          You can ask us for details of the safeguards that apply to your
          information at{' '}
          <a href="mailto:hello@quademia.com">hello@quademia.com</a>.
        </p>
      </>
    ),
  },

  // ───────────────────────────────────────────────────────────
  {
    id: 'how-long',
    heading: 'How long we keep it',
    body: () => (
      <>
        <p>
          We keep information for as long as we need it for the purpose we
          collected it, and then delete it.
        </p>
        <LegalTable head={['What', 'How long', 'Why']}>
          <tr>
            <th>Your account and study record</th>
            <td>
              While your account is open, and{' '}
              <Blank>period after closure</Blank> after you close it
            </td>
            <td>
              So you can come back to your history; so we can settle a dispute
              about what you were given
            </td>
          </tr>
          <tr>
            <th>Sign-in and security events</th>
            <td>90 days, then deleted automatically</td>
            <td>Long enough to investigate an attack, no longer</td>
          </tr>
          <tr>
            <th>Payment and accounting records</th>
            <td>
              <Blank>retention period</Blank> from the date of the transaction
            </td>
            <td>Required by tax and company law</td>
          </tr>
          <tr>
            <th>Support messages</th>
            <td>
              <Blank>retention period</Blank>
            </td>
            <td>To keep a history of an ongoing issue</td>
          </tr>
          <tr>
            <th>Backups</th>
            <td>
              Rolled off within <Blank>backup window</Blank>
            </td>
            <td>
              Deleted information can persist briefly in a backup before it
              expires
            </td>
          </tr>
        </LegalTable>
        <p>
          Where we no longer need to identify you but the underlying facts are
          still useful — how hard a question turned out to be, for instance —
          we may keep the information in a form that is no longer linked to
          you.
        </p>
      </>
    ),
  },

  // ───────────────────────────────────────────────────────────
  {
    id: 'security',
    heading: 'How we protect it',
    body: () => (
      <>
        <p>The main measures we take:</p>
        <ul>
          <li>
            <strong>Passwords are hashed, never stored readable.</strong>{' '}
            Nobody at Quademia can look up your password.
          </li>
          <li>
            <strong>Everything travels encrypted</strong> between your device
            and us.
          </li>
          <li>
            <strong>The database enforces who can read what.</strong> The rules
            about which rows belong to which user live in the database itself,
            not only in the app — so a mistake in one screen cannot expose
            another student&rsquo;s records.
          </li>
          <li>
            <strong>Staff access is limited by role</strong>, and the keys that
            would bypass those rules exist only on our servers and never in
            your browser.
          </li>
          <li>
            <strong>Sign-in forms are protected against automated attacks</strong>{' '}
            and repeated failures are recorded and can be blocked.
          </li>
        </ul>
        <p>
          No system is perfectly secure, and we will not pretend otherwise.
          Please use a password you do not use anywhere else, and tell us at{' '}
          <a href="mailto:hello@quademia.com">hello@quademia.com</a> straight
          away if you think somebody else has got into your account.
        </p>
        <p>
          If a breach happens that is likely to put you at risk, we will tell
          you and the relevant authority as the law requires.
        </p>
      </>
    ),
  },

  // ───────────────────────────────────────────────────────────
  {
    id: 'your-rights',
    heading: 'Your rights',
    body: () => (
      <>
        <p>Depending on where you live, you have the right to:</p>
        <ul>
          <li>
            <strong>See what we hold</strong> about you, and get a copy;
          </li>
          <li>
            <strong>Correct it</strong> if it is wrong or incomplete — you can
            change most of it yourself in your profile;
          </li>
          <li>
            <strong>Have it deleted</strong>, where we have no continuing
            reason or legal duty to keep it;
          </li>
          <li>
            <strong>Ask us to stop or limit</strong> a particular use while a
            complaint is looked into;
          </li>
          <li>
            <strong>Object</strong> to a use we base on our legitimate
            interests, and to marketing at any time;
          </li>
          <li>
            <strong>Take your information elsewhere</strong> in a machine-readable
            form;
          </li>
          <li>
            <strong>Withdraw consent</strong> you gave, without affecting what
            was done before you withdrew it.
          </li>
        </ul>
        <p>
          To use any of these, email{' '}
          <a href="mailto:hello@quademia.com">hello@quademia.com</a>. It is
          free. We will reply within one month, and tell you if we need longer
          because the request is complicated. We may need to check who you are
          first — which protects you, not us.
        </p>
        <p>
          <strong>If you are not happy with our answer</strong>, you can
          complain to a regulator. Please come to us first if you can, but you
          do not have to:
        </p>
        <ul>
          <li>
            <strong>Ghana</strong> — the Data Protection Commission.
          </li>
          <li>
            <strong>United Kingdom</strong> — the Information
            Commissioner&rsquo;s Office.
          </li>
          <li>
            <strong>European Economic Area</strong> — the supervisory authority
            in your country.
          </li>
          <li>
            <strong>Canada</strong> — the Office of the Privacy Commissioner,
            or your provincial equivalent.
          </li>
          <li>
            <strong>United States</strong> — your state Attorney General, where
            your state gives you privacy rights.
          </li>
        </ul>
      </>
    ),
  },

  // ───────────────────────────────────────────────────────────
  {
    id: 'children',
    heading: 'Children',
    body: () => (
      <>
        <p>
          Our nursing and licensure products are sold to adults, and you must
          be 18 or over to create an account on them yourself. We do not
          knowingly collect information from children through those products.
          If you believe a child has created an account, tell us and we will
          remove it.
        </p>
        <p>
          Our schools product is different, and honestly so: it is used by
          school pupils, some of whom will be children. Their accounts are
          created by their school, not by them, and{' '}
          <strong>the school is the controller of that information</strong> —
          it decides what is collected and who sees it, and it is responsible
          for the permissions needed. We handle it on the school&rsquo;s
          instructions.
        </p>
      </>
    ),
  },

  // ───────────────────────────────────────────────────────────
  {
    id: 'automated-decisions',
    heading: 'Automated decisions',
    body: () => (
      <>
        <p>
          Parts of our products are automatic: they mark your answers, work out
          your score, and choose which question to show you next based on how
          you are doing. That is the product doing its job, and you can see the
          result of every one of those decisions.
        </p>
        <p>
          <strong>
            No automated system of ours makes a decision that has a legal
            effect on you or anything similarly significant.
          </strong>{' '}
          A readiness score is our opinion about your practice, not a
          prediction and not a verdict. Decisions that actually affect you —
          suspending an account, refusing a refund — are made by a person, and
          you can ask us to look again.
        </p>
      </>
    ),
  },

  // ───────────────────────────────────────────────────────────
  {
    id: 'changes',
    heading: 'Changes to this policy',
    body: () => (
      <>
        <p>
          We will update this policy when what we do changes. The version
          number and date at the top always tell you which version you are
          reading.
        </p>
        <p>
          If a change matters to you — a new purpose, a new company handling
          your information, a longer retention period — we will email account
          holders rather than quietly changing the page.
        </p>
      </>
    ),
  },

  // ───────────────────────────────────────────────────────────
  {
    id: 'contact',
    heading: 'How to contact us',
    body: (ref) => (
      <>
        <p>
          For anything about this policy, your information, or a request
          under {ref('your-rights')}:
        </p>
        <p>
          <a href="mailto:hello@quademia.com">hello@quademia.com</a>
        </p>
        <p>
          Our postal address will appear here once the company registration is
          complete: <Blank>registered address</Blank>.
        </p>
        <p>
          Our <Link href="/terms">terms of service</Link> cover the rest of the
          agreement between us.
        </p>
      </>
    ),
  },
];

export default function PrivacyPage() {
  return (
    <LegalDoc
      title="Privacy Policy"
      standfirst={
        <>
          What personal information Quademia collects, why we collect it, who
          else handles it, and what you can ask us to do about it.
        </>
      }
      status={
        <>
          <p>
            <strong>Draft — not yet in force.</strong> This document has been
            prepared but has not yet been reviewed by a qualified professional,
            and the company registration it depends on is not complete. It is
            published here so it can be read and checked. Please do not rely on
            it as a statement of your rights until this notice is removed.
          </p>
          <p>
            Passages shown{' '}
            <span className="legal-blank">[like this]</span> are values still to
            be settled.
          </p>
        </>
      }
      version="0.1 (draft)"
      updated="10 August 2026"
      appliesTo="All Quademia products"
      sections={SECTIONS}
      foot={
        <>
          Quademia — MyNclex, MyNMCLicensure, MyTeacher and our schools
          product. See also our <Link href="/terms">terms of service</Link>.
        </>
      }
    />
  );
}
