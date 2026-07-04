# Master Note

All notes in one place. Updated 2026-07-03 (Friday).

---

## Roadmap

### Ship Now
- [ ] spark: Mac build 1.0.0 uploaded to App Store Connect & processing, iOS screenshots remaining
- [ ] lexly (was Parlay/Lingo, renamed 2026-07-01): iOS + macOS builds valid, icon artwork zoom applied, submit blocked on 2FA availability + App Privacy completion
- [ ] echo: new Mac build + upload (icon source fixed 2026-06-30)
- [ ] nyc: macOS 1.0 validates, iOS 1.0.0 build 3 (App Store rejection fixed), 1 macOS validation error remaining (free pricing set)
- [ ] nimble: blocked on macOS Tahoe SDK bug (MenuBarExtra)
- [ ] bcgd: accidentally deleted from disk+GitHub 2026-06-22, Vercel still live — recover
- [ ] upstash redis rotation (epiphany): store email in Keychain, run `/rotate upstash epiphany`

### Active Projects
| Repo | Status | Next |
|---|---|---|
| epiphany | Live (web + App Store), iOS 2.5.2 build 7 uploaded, SnapTrade phantom holdings fixed, scan-local endpoint locked to dev-only, splash screen icon fixed | Autopilot broker logic |
| spark | v2.1.0 live, Mac build 1.0.0 uploaded to ASC (processing), auth consolidated (10/12 fns), dark-mode text fix | iOS screenshots + metadata + submit |
| lexly | Live at lexly.heyitsmejosh.com, iOS + macOS builds valid, metadata + screenshots done | Submit (blocked on 2FA + App Privacy) |
| talli | v3.5.3 (blue accent, report/avatar fixes, Swift 6 widget, appearance settings, monthly-report success-detection hardened), v3.5.1 Waiting for Review, Xcode Cloud signing fixed | Submit v3.5.3 |
| echo | Built, tokens synced, App Store screenshots regenerated, What's New copy updated, Voice Memos import + transcription progress bar | Mac build + upload |
| healstack (dose) | v2.2.0 live | Mobile nav, health grading |
| quotable | v1.3.0, 143 quotes, settings panel | Running |
| notes | Live + iOS | Content refresh |
| journal | Automated | Running |
| brief | Private (Supabase env-var crash fixed, What's New sheet dismiss, portfolio vibe tokens on web) | CASE-0001/CASE-0002 |
| nyc | macOS 1.0 valid, iOS 1.0.0 build 3 (App Store rejection fixed), 5 macOS blockers fixed, free pricing set, 1 validation error remaining | Resolve last macOS validation error, submit both platforms |
| life | Local | 32 sections |
| root | Scaffolded 2026-07-02, Wiktionary pipeline v0 | Full dump parse |

### Recent (2026-07-03)
- Epiphany: scan-local statements endpoint locked to dev-only, iOS splash screen fixed (was showing old grey wireframe icon)
- Talli: Mac widget provider Swift 6 concurrency errors fixed, appearance settings added to Talli Mac, Xcode Cloud signing failures resolved by renaming App Group to match bundle ID namespace
- Echo: App Store screenshots regenerated and What's New copy updated, Voice Memos import added with file transcription progress bar and animation polish
- Brief: Supabase env-var crash fixed, What's New sheet dismiss logic added, web adopted portfolio design tokens
- Lexly macOS app icons regenerated to fill canvas (was ~60% of tile size), all scales updated
- Nulljosh.github.io updated UVic timeline: returning for Computer Science, retaking Pre-Calc 12
- Talli monthly-report success-detection hardened to avoid false positives on form re-renders
- Spark Mac build 1.0.0 archived, exported, uploaded to App Store Connect (provisioning fixed via xcodebuild -allowProvisioningUpdates)
- Lexly iOS and macOS builds confirmed valid in App Store build pipeline
- Epiphany SnapTrade phantom holdings fixed: account deduplication, holdings merge on account id; empty response bodies tolerated; autopilot broker plan documented (IBKR for stocks, WS read-only, Kraken parked)
- Lexly branding sweep: lingo→lexly redirect, avatars, doc name cleanup; portfolio updated; sign-in hang fixed with auto-profile creation; avatar step removed from signup; iOS + macOS icons regenerated to fill the canvas (was ~60%, Apple icon grid, 824px rounded rect); iOS + macOS App Store metadata and screenshots filled via asc (submit blocked on 2FA + App Privacy)
- Talli v3.5.3: blue accent, report banner + avatar fixes, messages refresh, Swift 6 widget build; verification complete
- Portfolio 1930s rubber-hose theme (tokens-30s.css + brush mascot); readability + rollout pending
- Design tokens synced from portfolio tokens.css into echo, grapher, spark, wiretext
- Epiphany iOS 2.5.2 build 7 uploaded after widget Info.plist fix
- root etymology app scaffolded: Wiktionary parse pipeline v0 (inh/der/bor/inh+/der+/bor+ + root templates), SwiftUI + web stubs; parser refined for inh+/der+/bor+ variants
- Spark auth routes consolidated into one function (Vercel Hobby 12-fn cap, now 10/12)
- Wiretext v1.1.0: first-run tutorial overlay; dropped unused Fraunces/DM Sans font links (tokens come from portfolio)
- NYC polish: web game source recovered from Vercel; HUD/tutorial hit-testing fixed; building sprites refreshed (detail + Retina @2x/@3x); controls reference expanded; autoplay removed (directive engine deleted)
- Echo adopted portfolio vibe tokens
- Created /progress skill: whole-codebase time/cost estimation tool (~67 open items ≈ 155 hours)
- Talli Xcode Cloud build failures (50+ jobs) resolved: diagnosed missing iOS Distribution certificate, created via `asc certificates create --certificate-type IOS_DISTRIBUTION`
- Monthly-report submission code path reviewed: confirmed real end-to-end filing to BC Self-Serve (all form fields intact), flagged weak success-detection logic in scraper.js needing hardening before next filing window (days 1-5)
- NYC App Store submission: iOS bundle ID + provisioning profile + support URL registered; iOS distribution certificate generated and exported for IPA builds; iOS + macOS metadata filled via asc CLI; 5 macOS submission blockers fixed via ASC API (category, review contact, encryption, content rights, age rating); free pricing set; first iOS build uploaded to ASC; both macOS 1.0 and iOS 1.0.0 validate cleanly (1 macOS validation error remaining); iOS App Store rejection fixed (bundle app icon assets, iPad orientations, launch screen), iOS build bumped to 3
- Spark dark-mode text fix: defined --text/--bg/--text3 locally instead of relying on cross-origin @import timing
- Shannon pentest skill created (KeygraphHQ's AI pentester); installed Docker Desktop, generated Claude Code OAuth token, wired into .env; first test run against talli dev server (port 3000, injection+XSS scope) failed silently — needs debugging before production use
- Books project: two new summaries (Apple: The First 50 Years and Exercise Science For Dummies) added from photographed chapters, image files cleared from iCloud, badges added to index.html

### Backlog
- [ ] cadence, charters (deleted accidentally, Vercel live — recover)
- [ ] Supabase free tier maxed (2/2) — upgrade to Pro or pause epiphany if inactive
- [ ] labs repos (wiretext, grapher, roost, canlii-app) — publish changes via nulljosh/labs

---

## Health

### GlyNAC Stack
- NAC 3 g/day + Glycine 6 g/day
- Supports glutathione, ADHD/autism oxidative stress
- ~$30/month (Amazon.ca, AOR, Canadian Protein)
- NAC on empty stomach or with vitamin C

### Sinus Care
- NeilMed Sinus Rinse + NAC 600mg + guaifenesin + xylitol spray + Flonase
- ~$60-70 total, 2-4 week improvement window

---

## Timeline

- **2026**: College prep, save for MacBook/car, UVIC transfer app (May entry: Apr 15, Jan 2027 entry: Sep 30)
- **Sep 2026 – Apr 2027**: College transfer year, CS + Math, 3.0+ GPA
- **Sep 2027**: Transfer to UVIC CS (2nd year)
- **2027–2029**: Degree + co-op
- **2029**: First software role or grad school
- **2030**: Reassess

### UVIC CS Transfer
- Prerequisites: CSC 110/111, CSC 115/116, MATH 100/109, MATH 101
- Competitive GPA: 80-85%
- Discovery Studies (21+): no formal admission, max 12 units total
- CS advisor: cscadvisor2@uvic.ca

---

## Benefits (PWD/DTC)

- Ombudsperson: 1-800-567-3247 (9 AM–4 PM)
- Disability Alliance BC: 1-800-663-1278
- Poverty Law Advocate: 604-534-7921
- DTC retroactive 10 years, ~$9K/year non-refundable

---

## Pixelmator Automation

- Create canvas, fill bg, add text layers, place logos, export PNG headlessly
- Workflow: drop logo → tell Claude → AppleScript builds → sends via iMessage
- Limitations: font family styling flaky, needs .pxd templates for complex layouts

---

## Infrastructure

- Cloudflare API token: `source ~/.openclaw/.openclaw.bak/.secure/cloudflare.env`
- Supabase: 2 projects (spark + epiphany), free tier maxed
- OpenClaw: iMessage → Claude routing at `~/.openclaw/`
- Security rotations pending: Upstash Redis (epiphany)
