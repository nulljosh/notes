# Master Note

All notes in one place. Updated 2026-07-02.

---

## Roadmap

### Ship Now
- [ ] spark: 4 iOS screenshots + archive/upload (Mac ASC record created 2026-07-01: 6786482755)
- [ ] lexly (was Parlay/Lingo, renamed 2026-07-01): iOS + Mac screenshots, description, keywords, support URL
- [ ] echo: new Mac build + upload (icon source fixed 2026-06-30)
- [ ] nimble: blocked on macOS Tahoe SDK bug (MenuBarExtra)
- [ ] bcgd: accidentally deleted from disk+GitHub 2026-06-22, Vercel still live — recover
- [ ] upstash redis rotation (epiphany): store email in Keychain, run `/rotate upstash epiphany`

### Active Projects
| Repo | Status | Next |
|---|---|---|
| epiphany | Live (web + App Store), iOS 2.5.2 build 7 uploaded, SnapTrade phantom holdings fixed | Autopilot broker logic |
| spark | v2.1.0 live, Mac ASC record done, auth consolidated (10/12 fns) | iOS screenshots + upload |
| lexly | Live at lexly.heyitsmejosh.com | Screenshots + metadata |
| talli | v3.5.3 (blue accent, report/avatar fixes), v3.5.1 Waiting for Review | Verify v3.5.3, review |
| echo | Built, tokens synced | Mac build + upload |
| healstack (dose) | v2.2.0 live | Mobile nav, health grading |
| quotable | v1.3.0, 143 quotes, settings panel | Running |
| notes | Live + iOS | Content refresh |
| journal | Automated | Running |
| brief | Private | CASE-0001/CASE-0002 |
| nyc | Local, Mac build uploaded | iOS app |
| life | Local | 32 sections |
| root | Scaffolded 2026-07-02, Wiktionary pipeline v0 | Full dump parse |

### Recent (2026-07-02)
- Epiphany SnapTrade phantom holdings fixed: account deduplication, holdings merge on account id; empty response bodies tolerated; autopilot broker plan documented (IBKR for stocks, WS read-only, Kraken parked)
- Lexly branding sweep: lingo→lexly redirect, avatars, doc name cleanup; portfolio updated; sign-in hang fixed with auto-profile creation
- Talli v3.5.3: blue accent, report banner + avatar fixes, messages refresh, Swift 6 widget build; verification complete
- Portfolio 1930s rubber-hose theme (tokens-30s.css + brush mascot); readability + rollout pending
- Design tokens synced from portfolio tokens.css into echo, grapher, spark, wiretext
- Epiphany iOS 2.5.2 build 7 uploaded after widget Info.plist fix
- root etymology app scaffolded: Wiktionary parse pipeline v0 (inh/der/bor/inh+/der+/bor+ + root templates), SwiftUI + web stubs; parser refined for inh+/der+/bor+ variants
- Spark auth routes consolidated into one function (Vercel Hobby 12-fn cap, now 10/12)
- Wiretext v1.1.0: first-run tutorial overlay; dropped unused Fraunces/DM Sans font links (tokens come from portfolio)
- NYC polish: web game source recovered from Vercel; HUD/tutorial hit-testing fixed; building sprites refreshed (detail + Retina @2x/@3x); controls reference expanded; autoplay removed (directive engine deleted)
- Echo adopted portfolio vibe tokens

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
