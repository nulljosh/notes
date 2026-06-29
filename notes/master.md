# Master Note

All notes in one place. Updated 2026-06-29.

---

## Roadmap

### Ship Now
- [ ] epiphany: fix SnapTrade phantom holdings/bad math (post-launch bug, real users hit it)
- [ ] spark: 4 more screenshots, PrivacyInfo.xcprivacy, fastlane metadata, archive+upload
- [ ] lingo: LingoBox Mac missing description/keywords/support URL — blocks submission
- [ ] talli: confirm PWD deadline status (was June 18)
- [ ] echo: waiting on $99 Apple Developer enrollment
- [ ] nimble: blocked on macOS Tahoe SDK bug (MenuBarExtra)
- [ ] bcgd: accidentally deleted from disk+GitHub 2026-06-22, Vercel still live — recover
- [ ] upstash redis rotation (epiphany): store email in Keychain, run `/rotate upstash epiphany`

### Active Projects
| Repo | Status | Next |
|---|---|---|
| epiphany | Live (App Store) | SnapTrade fix |
| spark | Live (web) | App Store submission |
| lingo | Built, not submitted | Mac metadata |
| talli | Live | PWD status |
| echo | Built | Dev enrollment |
| dose | Live | Mobile nav, health grading |
| notes | Live + iOS | Content refresh |
| journal | Automated | Running |
| brief | Private | CASE-0001/CASE-0002 |
| nyc | Local | Sound/haptics |
| life | Local | 32 sections |

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
