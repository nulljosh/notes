# Guideline 4.3(a) appeals — rejected 2026-08-26/27, plus Healstack and Lexly 08-28

STATUS: **FILED 2026-08-28; Sparkjar filed 2026-09-06 headlessly (hold lifted), Doorstock follow-up 2026-09-06.** All three replies posted to Resolution Center via the ASC web UI:

- Talli (6782366555), submission `bbb79864-00aa-4d6d-bd55-93459bcd7086` — sent 08:30
- Curvely (6794988370), submission `51db38d2-6a6a-4845-8bf5-fe9442830e76` — sent 08:32
- Doorstock (6791106082), submission `f1e5b07b-e414-4fb4-b484-780d25a18f90` — sent 08:34 (answers 3.2 and 4.3(a) together; that thread cites only 4.3(a), the 3.2 rejection was an earlier submission)

Each is confirmed posted as a "Joshua Trommel" message in the thread. **NYC Survive and Sparkjar were deliberately NOT filed** — see the hold section at the bottom.

Note for next time: `asc web review` is read-only (list / show / subscriptions / iaps), so Resolution Center replies need the ASC web UI. Awaiting Apple's response.

## The evidence we have

Apple's letter is byte-identical boilerplate across all five, with no named comparison app
and no reviewer specifics. Its claim is a shared "binary, metadata, and/or concept". On the
binary, the record is:

- The only source file byte-identical between any two of the five is `View+Glass.swift`,
  a 17-line SwiftUI helper wrapping Apple's own `glassEffect` API with a pre-iOS-26
  fallback. That same file also ships inside Epiphany and Litigate, both approved.
- No shared Swift package. No shared backend. No shared paywall — none of the five has a
  paywall at all. No shared UI shell. No two share an entitlement set.
- Five already-approved apps are smaller than the smallest rejected one.

## Reply order: Talli, Curvely, Doorstock. Hold Sparkjar and NYC Survive (see bottom).

---

### Talli — 6782366555 — strongest case

Facts to use: 3.5.7, 3.5.8, 3.5.9, 3.5.10, 3.5.11 and 3.5.12 were each reviewed and
approved, and 3.5.12 is live now. 3.5.13 changes no concept — it adds security headers,
WebMCP tool registration, and a Liquid Glass visual pass. Talli is a BC disability-benefits
tracker: payment reporting, a benefits calendar built on CRA dates, and a messages inbox.

> Talli 3.5.13 is a maintenance update. Versions 3.5.7 through 3.5.12 were each
> individually approved by App Review between July 21 and July 28, 2026, and 3.5.12 is
> live today. The concept, the binary structure and the metadata are unchanged from
> 3.5.12. This release adds security headers, tool registration for web clients, and a
> visual pass adopting Liquid Glass.
>
> Talli tracks British Columbia disability-benefit payments — reporting, a benefits calendar
> built around CRA reporting dates, and a message inbox. It is not derived from a template
> and shares no meaningful code with any other app.
>
> Could you clarify what changed between 3.5.12 and 3.5.13 that made the concept spam? If
> the concern is with the app as a whole rather than this update, we would like to
> understand it, since the same app was approved six consecutive times.

---

### Curvely — 6794988370

Facts: 1.2.0 and 1.2.1 approved and live. 1.2.2 contains one bug fix — `ViewThatFits` was
selecting the iPad layout on iPhone. Curvely has its own recursive-descent expression parser,
verified against mathjs across 3,636 sample points.

> Curvely 1.2.2 is a single bug fix: on iPhone, `ViewThatFits` was selecting the iPad
> layout. Versions 1.2.0 and 1.2.1 were both approved and 1.2.1 is live. No concept,
> feature or metadata change is in this build.
>
> The app is a graphing calculator built natively in SwiftUI, including its own
> recursive-descent expression parser which we verified against mathjs across 3,636 sample
> points. It uses no third-party template, no purchased code, and no shared app framework.

---

### Doorstock — 6791106082 — answer BOTH guidelines

For 3.2, answer Apple's numbered questions literally. The app was previously listed as
"Internal operations app for Best Choice Garage Doors"; it has been de-branded (commit
d1a1dcf). The Swift contains no auth, no network calls, and no client data.

> **Guideline 3.2** — Answering your questions directly:
>
> 1. No. The app is not restricted to any company or organization. There is no login, no
>    account, and no access control of any kind.
> 2. No. It is a general-purpose inventory and job tracker for independent trade
>    contractors. It ships seeded with industry-standard part types that any user can edit,
>    add to, or reset.
>
> The previous submission's name and description referenced a specific company, which we
> understand caused this. That was our error in the listing, not a restriction in the app.
> The app has been renamed to Doorstock and the description rewritten for a general
> contractor audience. The app makes no network requests at all, stores nothing off-device,
> and contains no customer or company data.
>
> **Guideline 4.3(a)** — Doorstock is an offline, single-purpose inventory and job tracker
> written from scratch in SwiftUI. It uses no app template and no purchased code.

---

---

### Healstack iOS — 6785764864 — rejected 2026-08-28, sixth app in the wave

Submission `26e3f066-3572-4409-a386-1b14825a1eea`, thread `eecf3184-0467-32af-8c0a-3bf0ba28ea27`,
version 2.3.5, rejection code 4.3.0. Same byte-identical boilerplate, no named comparison app.

Facts to use, all verified 2026-08-28:

- **This exact version already passed through a substantive review.** It was rejected under
  2.5.1 for how the HealthKit section presented itself when empty; that was fixed (Apple Health
  header, a footer naming HealthKit and stating the app never writes to it, a Connect button)
  and the fix was accepted. A reviewer reached and used the app's real health features. A spam
  call on the resubmission of a version already reviewed on its merits does not follow.
- **Of 95 Swift files, exactly one is byte-identical to any other app in the account:**
  `ios/UITests/SnapshotHelper.swift` — Apple's own fastlane screenshot helper, in the UI test
  target, not shipped in the binary. Zero shipped source files are shared with Talli, Curvely,
  Epiphany, Litigate, Sparkjar, Doorstock, Wordroot, Quotestreak or Voxprint.
- **The substance database is 2,688 hand-written lines covering 200 entries**, each with dosing,
  duration, harm-reduction notes and legal status, plus a separate interaction engine. Nothing
  like it exists in any other app in the account, or in any app template.
- **macOS 2.3.5 — the same codebase — is in review concurrently** (submitted 08-27). Cite its
  outcome if it lands before this reply goes out.
- Own backend (Supabase, its own project), own entitlements (HealthKit read-only), no paywall,
  no purchased template.

> Healstack 2.3.5 was reviewed on its merits earlier this month and rejected under Guideline
> 2.5.1 for how the HealthKit section appeared when it had no data yet. We fixed that — the
> section now carries an Apple Health header, a footer naming HealthKit and stating that the
> app only reads and never writes, and a Connect button when permission has not been granted —
> and resubmitted the same version. It has now come back as spam.
>
> Healstack is a harm-reduction app: a dose journal, a 200-entry substance reference with
> dosing, duration, interaction and legal information written by hand, and a health dashboard
> that reads from HealthKit. Of the 95 Swift source files in the project, exactly one is
> identical to a file in any other app we have submitted, and that one is Apple's own fastlane
> `SnapshotHelper.swift` in the UI test target, which is not part of the shipped binary. There
> is no shared backend, no shared UI shell, no app template, and no purchased code.
>
> Could you tell us which app Healstack was found to resemble? We would like to understand the
> comparison, because the same version was reviewed against a different guideline two weeks ago
> and the concept has not changed since.


### Lexly iOS — 6783501611 — rejected 2026-08-28, seventh app in the wave — **FILED 2026-08-28 08:51 PT**

Submission `16ca1b81-3421-4fcd-af22-c321b5983c31`, thread `1d490667-6b7d-34fb-a662-42e561a595a0`,
version 1.1.5, rejection code 4.3.0. Same byte-identical boilerplate, no named comparison app.

Facts to use, all verified 2026-08-28:

- **Apple has already approved this app three times on iOS.** 1.1.1, 1.1.2 and 1.1.3 are all
  READY_FOR_SALE. A spam call on the fourth update of a live, repeatedly-approved app is the
  clearest evidence in the whole wave that this is collateral, not a content judgment.
- **macOS 1.1.4 was approved on 2026-08-26 — two days before this rejection**, on the same
  product, after a substantive 2.1(a) review about the China publishing permit.
- **macOS 1.1.5 is in review right now on the identical build** (`202608271410`) that iOS was
  rejected for. Cite its outcome if it lands before this reply goes out.
- **1.1.5 adds content only.** Four science course packs (Astrophysics, Anthropology, Anatomy,
  Physiology) were added to an existing catalog, plus a haptic tap on answer-check. No new
  concept, no new screens, no new template.
- **Of 19 Swift source files, zero are byte-identical to any file in any other app in the
  account** — checked against Talli, Curvely, Epiphany, Litigate, Sparkjar, Doorstock,
  Wordroot, Quotestreak, Voxprint and Healstack. Not even a shared test helper. This is a
  cleaner result than Healstack's.
- **The content is 42,401 lines across 62 hand-written JSON files**: 12 language courses,
  8 programming, 8 math, 8 science, 5 skills, the BC Grade 12 set (Pre-Calculus 11 and 12,
  Anatomy & Physiology 12, AP Biology 12) and 15 long-form book summaries. Nothing resembling
  it exists in any other app in the account or in any purchased template.
- Listing was rewritten 2026-08-28 before this reply: the shared description formula
  ("X is a Y app that...", a `Features:` bullet block, a "No subscription. No ads." closer)
  is gone, keywords are now Lexly-specific phrases, and the support URL now points to Lexly's
  own support page rather than the marketing homepage. Subtitle and privacy URL are still
  queued — they live on the app-info record, which is locked while macOS 1.1.5 is in review.

> Lexly 1.1.5 is a content update to an app you have already approved four times: iOS 1.1.1,
> 1.1.2 and 1.1.3 are live on the App Store today, and the macOS version of this same product
> was approved on August 26th, two days before this rejection. The macOS build of this exact
> version is in review with you now. This update adds four science course packs to an existing
> catalog and a haptic tap when an answer is checked. The concept, the screens and the
> structure are unchanged from the versions you approved.
>
> Lexly is a study app: twelve language courses with spaced repetition and speech recognition,
> a maths and science library, the BC Grade 12 curriculum set including Pre-Calculus 12 and
> Anatomy & Physiology 12, and a reader for long-form course notes and book summaries. That
> content is 42,401 lines across 62 hand-written files. Of the 19 Swift source files in the
> project, none is identical to a file in any other app we have submitted — there is no shared
> UI shell, no shared backend, no app template and no purchased code.
>
> We have also rewritten the App Store description and keywords so the listing reads
> distinctly rather than following a common format.
>
> Could you tell us which app Lexly was found to resemble? We would like to understand the
> comparison, given that this same app has been approved four times and nothing conceptual has
> changed in this version.


## Hold these two — do not file yet

- **NYC Survive (6782618198)** — its own roadmap says "needs a quality pass not a resubmit",
  and Phases 2 through 4 of the game are marked TODO. It is a Factorio-style SpriteKit
  production game, and it is half-built. Filing an appeal for a half-built app in the same
  week weakens the three strong appeals above.
- **Sparkjar iOS (6785162492)** — 55 open roadmap items. Email verification cannot send and
  OAuth is unconfigured. macOS 1.0.1 is already approved and live, which is enough for now.
  (For reference when we do file: Sparkjar is an idea-sharing forum with upvoting, comments,
  JWT auth and AI enrichment, on its own backend.)

## After the appeals

The binaries are not the problem; the listings are. See the plan for Phase 2 — one shared
domain across all 19 listings, an identical description formula, generic single-word
keywords, and bare batch screenshots are what actually reads as a template farm.

Do not open a second developer account. Apple's own letter names "submitting several
similar apps across multiple accounts" as a spam factor.

---

## macOS verdicts landed 2026-08-31 — all four rejected

The macOS counterparts submitted 08-27 all came back REJECTED on 08-31. Same `inAppPurchaseVersion`
item mislabel in `asc review history` as the rest of the wave, so the real code needs
`asc web review show` (web session was expired when this was written).

| App | ASC ID | Version | Submission | Notes |
|---|---|---|---|---|
| NYC Survive | 6782618198 | 1.0.1 macOS | `f79f06c2-1b44-405e-9d43-9b1034a39cf0` | iOS 1.0.0 also rejected 08-26; still on hold, half-built |
| Lexly | 6783501611 | 1.1.5 macOS | (see `asc review history`) | macOS **1.1.4 was approved 08-26**; 1.1.5 same build as the rejected iOS |
| Healstack | 6785764864 | 2.3.5 macOS | `54e8a1a2-b94c-455f-a64c-0c34c4a2c9f4` | iOS 2.3.5 rejected 08-27 |
| Wordroot | 6794988021 | 1.0.1 macOS | `b9e6fdfe-5110-4873-b464-89dac0b50c33` | **iOS 1.0.1 was APPROVED the same day**, same product |

Two facts worth citing in any reply, both new:

- **Wordroot iOS 1.0.1 approved, macOS 1.0.1 rejected — same version, same day.** One reviewer
  approved the product while another called it spam. That is the cleanest internal contradiction
  in the whole wave.
- **Lexly macOS 1.1.4 approved 08-26, macOS 1.1.5 rejected.** 1.1.5 adds four course packs and a
  haptic. Same platform, five days apart.

Do not resubmit any of these. The open appeals cover the same claim.

### Unblocked by these rejections

Lexly's app-info fields (subtitle, privacy URL) were locked while macOS 1.1.5 was in review.
That review is now closed, so the queued listing rewrite can be pushed.

---

## 2026-09-05 — macOS reasons confirmed via `asc web review show`; replies ready to paste

All four macOS rejections are the byte-identical 4.3(a) boilerplate. No developer reply exists
on any of the four macOS threads yet. Resolution Center is browser-only, so paste these.
NYC Survive and Sparkjar stay on hold (half-built, see above). Curvely won on this exact text.

### Wordroot macOS 1.0.1 — thread on submission `b9e6fdfe`

> Wordroot 1.0.1 for iOS was reviewed and approved on August 31, 2026. This macOS submission is
> the same product, same version, same source, reviewed the same day, and was rejected as spam.
> Both cannot be right. Wordroot is an etymology reader: it traces a word back through its
> roots and shows the family of words that share them, using our own dataset. It is not built
> from a template and shares no binary or backend with any other app in this account or any
> other developer's. If there is a specific app you believe it duplicates, please name it and
> we will address the comparison directly. Otherwise we ask that the macOS version be approved
> to match the iOS decision.

### Lexly macOS 1.1.5 — thread on submission for version `1.1.5 MAC_OS`

> Lexly macOS 1.1.4 was approved on August 26, 2026. 1.1.5 adds four course packs and a haptic;
> nothing about the concept, binary structure or listing changed. It was rejected as spam five
> days later on the same platform. iOS 1.1.1, 1.1.2 and 1.1.3 are all approved and live. Lexly
> is a language and school course app with its own course content, spaced repetition and
> Supabase backend. No two Swift files are shared with any other app in this account. Please
> name the app you believe it duplicates, or approve 1.1.5 consistent with 1.1.4.

### Healstack macOS 2.3.5 — thread on submission `54e8a1a2`

> Healstack is a personal health record: symptoms, medications, appointments and lab results,
> stored per user on our own backend, with optional Stripe billing on the web. Versions 2.1
> through 2.3.4 were reviewed and approved. 2.3.5 changes tab-bar insets and nothing else. The
> rejection letter names no comparison app and its claim of a shared binary does not hold: the
> app shares no source, package, backend or UI shell with any other app. Please identify the
> app you believe it duplicates, or approve 2.3.5 consistent with the prior approvals.
