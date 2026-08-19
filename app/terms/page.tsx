// parent-site/app/terms/page.tsx
//
// The terms of service — DRAFT, replacing the placeholder. Same two
// rules as the privacy page next door: one Quademia document covering
// our products (never "MyNclex's terms"), and a professional reads it
// before it goes live.
//
// ⓘ The placeholder noted that something already points here in spirit —
// the MyNclex checkout says "you agree to MyNclex's terms" with nothing
// to link to. Once this document is reviewed and in force, that sentence
// becomes a link to https://quademia.com/terms and should say QUADEMIA's
// terms. That is a change in the mynclex repo, not this one, and it must
// not be made while this page still carries the draft banner.
//
// ⚠ FOUR THINGS ARE SAM'S BUSINESS DECISIONS, NOT DRAFTING CHOICES, and
// they are marked with <Blank> rather than guessed at:
//   · the refund windows and the "substantially used" threshold;
//   · the notice period for a cohort that is cancelled;
//   · the liability cap;
//   · the company's registered identity (as on the privacy page).
// A plausible-sounding invented refund window is worse than a visible
// blank: it is the clause a customer would quote back at us.
//
// ⚠ WHERE THE FACTS CAME FROM — read out of the mynclex repo, so a
// reviewer can check them rather than take them on trust:
//   · duration passes (30/90/180 days)  — docs/product-plan/main.md
//   · readiness credits are one-shot, 21-day, no reset on a missed sit
//                                       — docs/product-plan/readiness-packs.md
//   · instalment plans, pay-first enrolment, tutor rejection leading to
//     a MANUAL refund               — docs/product-plan/payments-and-enrolment.md
//   · off-platform (cash/transfer) payments recorded by a tutor
//                                       — nclex_payments.collection_channel
//   · tutors are vetted and run their own curricula — CLAUDE.md
//   · prices are GHS or USD, shown as "GHS 350", never "₵350" — CLAUDE.md

import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Blank,
  LegalDoc,
  Note,
  type LegalSection,
} from '@/components/legal/legal-doc';

export const metadata: Metadata = {
  title: 'Terms of Service — Quademia',
  description:
    'The agreement between you and Quademia — what we provide, what you ' +
    'buy, how payment and refunds work, and how either side can end it.',
};

const SECTIONS: LegalSection[] = [
  // ───────────────────────────────────────────────────────────
  {
    id: 'the-agreement',
    heading: 'This agreement',
    body: () => (
      <>
        <p>
          These terms are the agreement between you and Quademia. They apply
          when you create an account, buy anything from us, or use any of our
          products.
        </p>
        <p>
          The organisation you are contracting with is{' '}
          <Blank>registered company name</Blank>, registered in Ghana with
          company number <Blank>company registration number</Blank>, at{' '}
          <Blank>registered address</Blank>. In these terms we call it{' '}
          <strong>Quademia</strong>, <strong>we</strong> or <strong>us</strong>
          , and we call you <strong>you</strong>.
        </p>
        <p>
          <strong>By creating an account or making a payment, you accept these
          terms.</strong>{' '}
          If you do not accept them, please do not use the products. Our{' '}
          <Link href="/privacy">privacy policy</Link> explains what we do with
          your personal information and forms part of this agreement.
        </p>
        <p>
          Please read this in full. We have tried to write it in plain English
          rather than in the language lawyers use among themselves, because a
          set of terms nobody can read is a set of terms nobody really agreed
          to.
        </p>
      </>
    ),
  },

  // ───────────────────────────────────────────────────────────
  {
    id: 'what-we-provide',
    heading: 'What we provide',
    body: () => (
      <>
        <p>Quademia runs several products. These terms cover all of them:</p>
        <ul>
          <li>
            <strong>MyNclex</strong> — preparation for the NCLEX-RN
            examination. Two things sit inside it: a question bank you can
            subscribe to and study on your own, and tutored programmes run by
            independent tutors on top of that bank.
          </li>
          <li>
            <strong>MyNMCLicensure</strong> — preparation for Ghana&rsquo;s
            Nursing and Midwifery Council licensure examination.
          </li>
          <li>
            <strong>MyTeacher</strong> — class-based assessment for teachers.
          </li>
          <li>
            <strong>Our schools product</strong> — formal examinations run
            across a whole school.
          </li>
        </ul>
        <p>
          Some products still show our older <em>QAcademy</em> branding while
          they move across to Quademia. It is the same organisation and the
          same agreement.
        </p>
        <Note>
          <p>
            <strong>What we are not.</strong> Our materials are study
            materials. They are not clinical guidance and not medical advice,
            and nothing in them should be used to make a decision about the
            care of a real patient.
          </p>
        </Note>
      </>
    ),
  },

  // ───────────────────────────────────────────────────────────
  {
    id: 'your-account',
    heading: 'Your account',
    body: (ref) => (
      <>
        <ul>
          <li>
            <strong>You must be 18 or over</strong> to open an account
            yourself. The exception is our schools product, where a school
            enrols its own students and takes responsibility for doing so.
          </li>
          <li>
            <strong>Give us accurate details</strong>, and keep them up to
            date. We use your email address to send you things that matter —
            receipts, password resets, and notices about your programme.
          </li>
          <li>
            <strong>An account belongs to one person.</strong> Do not share
            your login, and do not let anyone else study on your account. This
            is the term we enforce most firmly: shared accounts are how a paid
            subscription turns into a free one for a group, and we may suspend
            an account we can see being used by several people at once.
          </li>
          <li>
            <strong>Keep your password to yourself</strong>, and tell us at{' '}
            <a href="mailto:hello@quademia.com">hello@quademia.com</a> straight
            away if you think somebody else has got into your account. You are
            responsible for what happens on your account until you tell us.
          </li>
        </ul>
        <p>
          You can close your account at any time — see{' '}
          {ref('ending-this-agreement')}.
        </p>
      </>
    ),
  },

  // ───────────────────────────────────────────────────────────
  {
    id: 'what-you-buy',
    heading: 'What you are buying',
    body: (ref) => (
      <>
        <p>
          Everything we sell is <strong>access for a period of time</strong>,
          not a permanent copy of anything. What that means in each case:
        </p>

        <h3 className="legal-h3">Question-bank access</h3>
        <p>
          Sold as passes of a fixed length — for example 30, 90 or 180 days.
          Your access runs from when the pass is activated and ends when it
          expires. If you buy another pass while one is running, the time is
          added on; it does not start again.
        </p>

        <h3 className="legal-h3">Readiness packs</h3>
        <p>
          A readiness pack is a one-off assessment with a single window. Once
          you start it, that window runs to its end and is used up —{' '}
          <strong>
            whether or not you sit the assessment inside it, it does not reset
            and it is not restored
          </strong>
          . Please do not start one until you are ready to use it.
        </p>

        <h3 className="legal-h3">Tutored programmes</h3>
        <p>
          You are buying a place in a named group — a cohort — following a
          published schedule with a start date, taught by a named tutor. What
          the programme includes is set out on its page before you pay:
          scheduled live sessions, work set before and after them, and any
          recordings. Read {ref('tutors')} before enrolling; the tutor
          relationship is the part people most often misunderstand.
        </p>

        <h3 className="legal-h3">Free trials and grants</h3>
        <p>
          Where we give access free — a trial, or a grant from our support team
          — it can be withdrawn at any time, and nothing in this agreement
          entitles you to keep it.
        </p>
      </>
    ),
  },

  // ───────────────────────────────────────────────────────────
  {
    id: 'prices-and-payment',
    heading: 'Prices and payment',
    body: () => (
      <>
        <ul>
          <li>
            <strong>Prices are shown in Ghana cedis (GHS) or US dollars
            (USD)</strong>, and the price you see at checkout is the price you
            pay us.
          </li>
          <li>
            <strong>Payments are taken by Paystack</strong>, our payment
            provider. Your card details go to them, not to us. Your own bank
            may add a currency-conversion or international fee, which we
            neither set nor receive.
          </li>
          <li>
            <strong>Access starts once payment is confirmed.</strong> If a
            payment fails or is reversed, the access it paid for can be
            suspended or removed.
          </li>
          <li>
            <strong>Prices can change</strong>, but never for something you
            have already bought. A change takes effect on your next purchase or
            renewal.
          </li>
          <li>
            <strong>We do not renew automatically.</strong> When a pass ends,
            it ends. Nothing recurring is charged to your card without you
            buying it.
          </li>
        </ul>

        <h3 className="legal-h3">Paying a programme in instalments</h3>
        <p>
          Some programmes can be paid in instalments. If you choose one:
        </p>
        <ul>
          <li>
            you are committing to the whole price, not only the first payment;
          </li>
          <li>
            each instalment falls due on the date shown in your plan, and we
            will remind you before it does;
          </li>
          <li>
            if an instalment is not paid, we may pause your access to the
            programme until it is. We will tell you before we do, and pausing
            does not cancel what you still owe.
          </li>
        </ul>

        <h3 className="legal-h3">Paying your tutor directly</h3>
        <p>
          Some tutors accept cash or a bank transfer instead of paying through
          the site, and record it against your enrolment. Where that happens,{' '}
          <strong>the payment is between you and the tutor</strong>. The record
          in our system reflects what the tutor entered. If you have paid and
          your access has not been unlocked, take it up with your tutor first;
          if that does not resolve it, tell us.
        </p>
      </>
    ),
  },

  // ───────────────────────────────────────────────────────────
  {
    id: 'refunds',
    heading: 'Refunds and cancellation',
    body: () => (
      <>
        <Note>
          <p>
            <strong>Note for review — not for publication.</strong> The
            bracketed values below are commercial decisions that have not been
            made, not drafting gaps. They are deliberately left visible rather
            than filled with plausible-sounding numbers, because an invented
            refund window is exactly the clause a customer would later quote
            back at us. Settle them before this document goes live.
          </p>
        </Note>

        <h3 className="legal-h3">Question-bank passes</h3>
        <p>
          You can ask for a full refund within{' '}
          <Blank>refund window, e.g. 14 days</Blank> of buying a pass, provided
          you have not used it substantially — which we treat as answering more
          than <Blank>threshold, e.g. 50</Blank> questions. After that, or once
          the pass is substantially used, it is not refundable.
        </p>

        <h3 className="legal-h3">Readiness packs</h3>
        <p>
          Refundable while unused. <strong>Once you start the window it is
          used up and is not refundable</strong>, whether or not you sat the
          assessment.
        </p>

        <h3 className="legal-h3">Tutored programmes</h3>
        <ul>
          <li>
            <strong>Before the cohort starts:</strong> a full refund if you
            cancel at least <Blank>notice period, e.g. 7 days</Blank> before
            the start date.
          </li>
          <li>
            <strong>After the cohort starts:</strong>{' '}
            <Blank>after-start refund position</Blank>.
          </li>
          <li>
            <strong>If a tutor turns down your enrolment request</strong> after
            you have paid, you get a full refund. We process these by hand, so
            allow a few working days.
          </li>
          <li>
            <strong>If we or the tutor cancel a cohort</strong>, you can move
            to another cohort or take a full refund of the part you have not
            received.
          </li>
        </ul>

        <h3 className="legal-h3">How to ask</h3>
        <p>
          Email <a href="mailto:hello@quademia.com">hello@quademia.com</a> with
          the email address you paid with. Refunds go back to the card or
          account the payment came from, and take{' '}
          <Blank>processing time</Blank> to appear.
        </p>

        <p>
          <strong>
            None of this reduces any refund or cancellation right the law of
            your own country gives you as a consumer.
          </strong>{' '}
          Where those rights are stronger than this section, they win.
        </p>
      </>
    ),
  },

  // ───────────────────────────────────────────────────────────
  {
    id: 'tutors',
    heading: 'Tutors and tutored programmes',
    body: (ref) => (
      <>
        <p>
          <strong>Tutors are independent.</strong> We vet them and we host
          their programmes; we do not employ them. Each tutor designs their own
          curriculum, sets their own schedule and teaches in their own way.
        </p>

        <h3 className="legal-h3">Who is responsible for what</h3>
        <ul>
          <li>
            <strong>We are responsible for</strong> the platform, the shared
            question bank, taking payment, and the records held inside our
            products.
          </li>
          <li>
            <strong>Your tutor is responsible for</strong> the teaching, the
            schedule, their own materials, the live sessions, and anything they
            arrange with you outside our products.
          </li>
        </ul>

        <h3 className="legal-h3">What can change</h3>
        <p>
          A published schedule is a plan. Sessions can be moved, and a tutor
          can be ill. We expect tutors to give reasonable notice and to make up
          material that is missed. If a cohort is abandoned part-way through,
          we will offer you a place in another cohort or refund the part you
          did not receive — see {ref('refunds')}.
        </p>

        <h3 className="legal-h3">Live sessions</h3>
        <p>
          Live classes run on outside platforms such as Zoom, Google Meet or
          Microsoft Teams, on the tutor&rsquo;s own account. Their terms and
          their privacy policy apply to you when you join. Sessions may be
          recorded and shared with your cohort; a recording can capture your
          name, your voice, your camera picture and your chat messages. If you
          would rather not appear, keep your camera and microphone off.
        </p>
        <p>
          <strong>
            Recordings and materials are for your own study inside the cohort.
          </strong>{' '}
          Do not download, re-share, post or sell them.
        </p>

        <h3 className="legal-h3">If you are a tutor</h3>
        <ul>
          <li>
            You confirm that you hold the qualifications and registration you
            have told us about, and you will tell us if that changes.
          </li>
          <li>
            You are responsible for the material you upload — see{' '}
            {ref('your-content')}.
          </li>
          <li>
            You will treat your students fairly and keep what you learn about
            them confidential.
          </li>
          <li>
            We may remove a programme, or end a tutor&rsquo;s access, where
            these terms are broken or students are being let down. Where a
            cohort is running, we will try to see the students through it.
          </li>
        </ul>
      </>
    ),
  },

  // ───────────────────────────────────────────────────────────
  {
    id: 'acceptable-use',
    heading: 'How you may and may not use the products',
    body: () => (
      <>
        <p>Please do not:</p>
        <ul>
          <li>
            share your account, your password, or your access with anyone else;
          </li>
          <li>
            copy, download in bulk, scrape, screenshot for distribution,
            republish or sell our questions, explanations, recordings or any
            other material;
          </li>
          <li>
            use our material to build or train a competing product, including
            by feeding it into an automated system for that purpose;
          </li>
          <li>
            take our content into a real examination, or use it in any way that
            breaks the rules of the NCLEX, the NMC licensure examination or any
            other test;
          </li>
          <li>
            upload anything unlawful, abusive, or that you do not have the
            right to upload;
          </li>
          <li>
            try to get around our security, access another person&rsquo;s
            account or data, or disrupt the service for others;
          </li>
          <li>
            harass or abuse other students, tutors, or our staff.
          </li>
        </ul>
        <p>
          Our questions are our livelihood. Bulk copying is the thing most
          likely to end an account without warning, and we may pursue it
          further where the scale justifies it.
        </p>
      </>
    ),
  },

  // ───────────────────────────────────────────────────────────
  {
    id: 'our-content',
    heading: 'Our content, and the trademarks of others',
    body: () => (
      <>
        <p>
          The questions, explanations, case studies, images, layouts, software
          and everything else in our products belong to us or to the people who
          licensed them to us.
        </p>
        <p>
          While your access lasts, we give you a{' '}
          <strong>
            personal, non-exclusive, non-transferable, revocable licence
          </strong>{' '}
          to use that material for your own study. That licence ends when your
          access does. It does not let you copy or pass on the material, and it
          does not transfer ownership of anything.
        </p>
        <Note>
          <p>
            <strong>We are not affiliated with any regulator or test
            provider.</strong>{' '}
            NCLEX-RN<sup>&reg;</sup> and NCLEX<sup>&reg;</sup> are registered
            trademarks of the National Council of State Boards of Nursing, Inc.
            (NCSBN). We are not connected with NCSBN, with Ghana&rsquo;s
            Nursing and Midwifery Council, with the UK Nursing and Midwifery
            Council, or with any other regulator, board or examination body.
            None of them endorses, sponsors or reviews our materials. We use
            their names only to describe what our products prepare you for.
          </p>
        </Note>
      </>
    ),
  },

  // ───────────────────────────────────────────────────────────
  {
    id: 'your-content',
    heading: 'Content you upload',
    body: () => (
      <>
        <p>
          Anything you upload — a tutor&rsquo;s teaching materials, a profile
          picture, a question you write — stays yours. We do not claim
          ownership of it.
        </p>
        <p>
          You do give us permission to store it, display it and deliver it to
          the people it is meant for, for as long as you keep it on the
          platform and for a short period afterwards while backups expire. That
          permission is what lets the product show your material to your
          students; we do not use it for anything else.
        </p>
        <p>By uploading something, you confirm that:</p>
        <ul>
          <li>you own it, or you have permission to use it in this way;</li>
          <li>
            it does not infringe anyone&rsquo;s copyright — in particular, that
            it is not copied from another exam-preparation provider or from a
            textbook;
          </li>
          <li>it is lawful and not abusive.</li>
        </ul>
        <p>
          We can remove content that breaks these terms, and we will tell you
          why. If you believe something on our platform infringes your
          copyright, write to{' '}
          <a href="mailto:hello@quademia.com">hello@quademia.com</a> telling us
          what and where it is, and we will look into it promptly.
        </p>
      </>
    ),
  },

  // ───────────────────────────────────────────────────────────
  {
    id: 'no-guarantee',
    heading: 'What we do not promise',
    body: () => (
      <>
        <p>
          <strong>
            We cannot and do not guarantee that you will pass any examination.
          </strong>{' '}
          Whether you pass depends on your own preparation, your knowledge and
          the day itself. Nobody honest can promise you a result, and we will
          not.
        </p>
        <p>
          Scores, readiness indicators and any other measure we show you
          describe <strong>your practice with us</strong>. They are our
          opinion, not a prediction of your real result and not a substitute
          for the judgement of a regulator.
        </p>
        <p>
          We work hard to keep our questions accurate and current, but exam
          content and clinical guidance change. If you think something is
          wrong, tell us — reports from students are how the bank gets better.
        </p>
        <p>
          The products are provided as they are. We do not promise that they
          will always be available or uninterrupted. We may need to take them
          down for maintenance, and we will give notice where we can.
        </p>
      </>
    ),
  },

  // ───────────────────────────────────────────────────────────
  {
    id: 'changing-the-products',
    heading: 'Changes to the products',
    body: (ref) => (
      <>
        <p>
          We will keep developing the products: adding questions, changing how
          things look, and improving what is there. Most changes are
          improvements and need no notice.
        </p>
        <p>
          If we remove or materially reduce something you have paid for, we
          will tell you, and you can take a refund of the part you have not
          received — see {ref('refunds')}.
        </p>
      </>
    ),
  },

  // ───────────────────────────────────────────────────────────
  {
    id: 'ending-this-agreement',
    heading: 'Ending this agreement',
    body: (ref) => (
      <>
        <h3 className="legal-h3">You can leave at any time</h3>
        <p>
          Stop using the products, or ask us to close your account at{' '}
          <a href="mailto:hello@quademia.com">hello@quademia.com</a>. Closing
          your account does not by itself refund time you have paid for —{' '}
          {ref('refunds')} covers when a refund is due. Our{' '}
          <Link href="/privacy">privacy policy</Link> explains what happens to
          your information afterwards.
        </p>

        <h3 className="legal-h3">When we can suspend or close an account</h3>
        <p>We may suspend or close your account if:</p>
        <ul>
          <li>you break these terms — sharing an account, or copying our
            material in bulk, being the usual reasons;</li>
          <li>a payment fails, is reversed, or an instalment goes unpaid;</li>
          <li>we reasonably suspect fraud or unlawful use;</li>
          <li>we are required to by law.</li>
        </ul>
        <p>
          We will tell you why, and where the problem can be fixed we will give
          you a chance to fix it first — unless the breach is serious enough
          that we cannot. If we close your account for a serious breach, you
          are not entitled to a refund of unused time. If we close it for any
          other reason of our own, you are.
        </p>
        <p>
          If we withdraw a product altogether, we will give reasonable notice
          and refund the unused portion of anything you have paid for.
        </p>
      </>
    ),
  },

  // ───────────────────────────────────────────────────────────
  {
    id: 'our-responsibility',
    heading: 'Our responsibility to you',
    body: () => (
      <>
        <p>
          <strong>
            Nothing in these terms limits our responsibility for death or
            personal injury caused by our negligence, for fraud, or for
            anything else the law does not allow us to limit.
          </strong>{' '}
          Nor do they take away rights the law of your own country gives you as
          a consumer.
        </p>
        <p>Subject to that:</p>
        <ul>
          <li>
            we are not responsible for an examination result, for a career or
            visa decision that follows from one, or for study time you feel was
            wasted;
          </li>
          <li>
            we are not responsible for what an independent tutor does outside
            our products, or for the outside platforms a live session runs on;
          </li>
          <li>
            we are not responsible for losses that were not a foreseeable
            result of us breaking this agreement, or for lost profits or lost
            business;
          </li>
          <li>
            our total responsibility to you for everything connected with this
            agreement is limited to{' '}
            <Blank>liability cap — e.g. the amount you paid us in the 12
            months before the claim</Blank>.
          </li>
        </ul>
      </>
    ),
  },

  // ───────────────────────────────────────────────────────────
  {
    id: 'changes-to-terms',
    heading: 'Changes to these terms',
    body: () => (
      <>
        <p>
          We may change these terms — for example, when we add a product or a
          new way of paying. The version number and date at the top tell you
          which version you are reading.
        </p>
        <p>
          If a change matters to you, we will email account holders at least{' '}
          <Blank>notice period, e.g. 14 days</Blank> before it takes effect.
          Carrying on using the products after that means you accept the new
          terms. If you do not accept them, tell us and we will refund the
          unused portion of anything you have already paid for.
        </p>
        <p>
          Changes never apply backwards to a purchase you have already made.
        </p>
      </>
    ),
  },

  // ───────────────────────────────────────────────────────────
  {
    id: 'disputes',
    heading: 'If something goes wrong',
    body: () => (
      <>
        <p>
          <strong>Please come to us first.</strong> Email{' '}
          <a href="mailto:hello@quademia.com">hello@quademia.com</a> and tell
          us what has happened. We aim to reply within{' '}
          <Blank>response time, e.g. 5 working days</Blank>, and most problems
          are solved that way.
        </p>
        <p>
          This agreement is governed by the laws of Ghana, and the courts of
          Ghana have jurisdiction over any dispute.{' '}
          <strong>
            If you are a consumer living elsewhere, this does not take away the
            protection of the mandatory consumer laws of the country you live
            in, or your right to bring a claim in your local courts where those
            laws give you one.
          </strong>
        </p>
      </>
    ),
  },

  // ───────────────────────────────────────────────────────────
  {
    id: 'general',
    heading: 'Other things worth saying',
    body: () => (
      <>
        <ul>
          <li>
            <strong>These terms are the whole agreement</strong> between us
            about the products, together with our{' '}
            <Link href="/privacy">privacy policy</Link> and anything shown on
            the page of a product at the time you bought it.
          </li>
          <li>
            <strong>If one clause turns out to be unenforceable</strong>, the
            rest of the agreement still stands.
          </li>
          <li>
            <strong>If we do not enforce something straight away</strong>, we
            have not given up the right to enforce it later.
          </li>
          <li>
            <strong>We may transfer this agreement</strong> if the business is
            sold or reorganised; your rights are not reduced by that. You
            cannot transfer your account to somebody else.
          </li>
          <li>
            <strong>Nobody else can enforce this agreement.</strong> It is
            between you and us.
          </li>
        </ul>
      </>
    ),
  },

  // ───────────────────────────────────────────────────────────
  {
    id: 'contact',
    heading: 'How to contact us',
    body: () => (
      <>
        <p>
          <a href="mailto:hello@quademia.com">hello@quademia.com</a>
        </p>
        <p>
          Our postal address will appear here once the company registration is
          complete: <Blank>registered address</Blank>.
        </p>
      </>
    ),
  },
];

export default function TermsPage() {
  return (
    <LegalDoc
      title="Terms of Service"
      standfirst={
        <>
          The agreement between you and Quademia — what we provide, what you
          are buying, how payment and refunds work, and how either of us can
          bring it to an end.
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
            <span className="legal-blank">[like this]</span> are commercial
            decisions still to be settled — refund windows in particular.
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
          product. See also our <Link href="/privacy">privacy policy</Link>.
        </>
      }
    />
  );
}
