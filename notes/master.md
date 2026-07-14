# Master Note

All notes in one place. Updated 2026-07-14, Tuesday early AM — 9 repos touched (9 commits): ingested 17 brain-dump PDFs into per-repo roadmap.md files (talli, spark, echo, healstack, lexly, books, nyc, nimble, journal), archived to ~/Downloads/processed-20260714; fixed Obsidian vault registry to point to real iCloud~md~obsidian vault (iOS sync restored); merged 9 notes-repo markdown files into wiki vault under notes/; stripped emojis from 11 wiki markdown files; identified scottwillsey.com fonts (Cartridge + Atkinson Hyperlegible Next); deployed journal to Vercel via ./scripts/deploy.sh.

---

## Recent (2026-07-14, Tuesday early AM)
- Roadmap ingestion: 17 brain-dump PDFs from ~/Downloads processed and ingested into per-repo roadmap.md files across 9 repos (talli, spark, echo, healstack, lexly, books, nyc, nimble, journal). Each roadmap updated with ship-plan items + ASC tasks + todo checklists. Archived processed PDFs to ~/Downloads/processed-20260714 (2026-07-14 batch).
- Obsidian vault fix: registry issue where iCloud~md~obsidian/Documents/Code vault (the real one with iOS sync) was shadowed by an impostor CloudDocs folder named "Code". Fixed registry to correctly point to the real vault; iPhone Obsidian app now syncs properly again.
- Notes merge into wiki vault: absorbed 9 markdown files from notes repo into the Obsidian wiki vault under notes/ with cross-links wired from wiki/index.md. Full vault structure now accessible from desktop + iPhone Obsidian app.
- Wiki cleanup: stripped emoji annotations from 11 wiki markdown files across the vault (removed trailing emojis, kept prose unchanged per project guidelines).
- Typography audit: identified scottwillsey.com's font pairing (Cartridge for headings, Atkinson Hyperlegible Next for body text) for future reference.
- Journal: updated Monday 2026-07-13 entry with tonight's work summary and deployed to Vercel via ./scripts/deploy.sh (build + prebuilt deploy, never plain git push).
- Talli: unified widget/app versions at 3.5.4 build 202607141330 (fixes ASC ITMS-90473; Info.plist now uses $(MARKETING_VERSION)), What's New sheet auto-sizes to content, GitHub Actions Tests fixed (cgeb route added to expected schema) — CI green, pushed.
- Echo: What's New sheet auto-sizes to content, pushed.
- Nimble: nimble.heyitsmejosh.com CNAME repointed from GitHub Pages to cname.vercel-dns.com via Cloudflare API (clears Vercel misconfigured-domain warning).
- Healstack: deploy failure root-caused — Vercel project Root Directory still set to "dose" after rename; config PATCH blocked by permissions, fix command handed to Joshua.
- Meta: journal skill got stricter prose rules (less changelog-spam); new claude-md-refresh skill created.
- 11 repos touched tonight (talli, spark, echo, healstack, lexly, books, nyc, nimble, journal, notes + skills), roadmap ingestion + second-wave fixes. All committed + pushed to GitHub.

## Recent (2026-07-13, Monday night)
- Books: Pre-Calculus for Dummies COMPLETE — all 17 chapters summarized (ch 1–10 afternoon, 11–13 evening, 14–16 + 17-18 finale: Ten Polar Graphs / Ten Habits before Calculus). Merged into single summary file, roadmap updated, original HEIC photos deleted. Gitignored ASC build artifacts. Commits 6a765aa, a6dd66a, 402fe7c. Live on books.heyitsmejosh.com with Summary badge. Second Dummies book finished after ML for Dummies.
- Journal: Monday 2026-07-13 entry consolidated and extended with cleanup work summary, deployed to Vercel (journal.heyitsmejosh.com). Nightly wrap entry summarizing evening Pre-Calc completion + repo cleanup. Commits 28ee841, 009d3d1, 3deeb23, 3dc686e, 6aae4e0 (pushed).
- Lexly: Gitignored ~142M ASC build artifacts, version bumped to 1.1.1, moved school masterclass HTML (Pre-Calc 12, Biology) to notes/pages/ with links updated throughout. Roadmap updated: parked masterclass-in-list feature, richer icons, Mac submission issue noted. Commits 1683aa7, 54ed2c5, 25ca8f2.
- Notes: Absorbed school masterclass pages from lexly at pages/pc12-masterclass.html and pages/biology-masterclass.html, updated school.md links to point at new location, noted repo separation decision (braingraph merged in as brain/, books/lexly stay separate). Commits 309d7cc, 21aebe9, 1803b20, b251512.
- Portfolio (nulljosh.github.io): Restyled to fredrika.dev vibe (neutral grayscale tokens-fredrika.css: #fcfcfc/#0a0a0a, Geist body + Instrument Serif italic h1, footer theme-toggle with localStorage). Previous sage/30s themes retired. No impact on live token exports — spark/wiretext/grapher still import tokens.css live. iOS app + companion readiness unchanged. Commit 4ccd0c4.
- 5 repos touched, 13 commits total (journal 5, books 3, lexly 3, notes 4, portfolio 1). Cleaned up technical debt without merging — all repos streamlined. Nightly wrap consolidated and pushed to wiki.

## Recent (2026-07-12, Sunday evening)
- Batch roadmap cleanup: imported ship-plan items from three PDF exports (Icons.pdf, Asc.pdf, Apps.pdf) into roadmap sections across 12 repos, consolidating visual checklists + ASC registration steps into git-tracked TODOs instead of scattered PDF references. Commits pushed to epiphany, grapher, healstack, journal, lexly, spark, talli, wiretext, books, nulljosh.github.io, and brief (12 repos, 12 commits).
- Brief: tab-bar positioning fix—was overlaying content below (SafeAreaInset fix, commit 9f6631d).
- Echo: added document-in-place support (LSSupportsOpeningDocumentsInPlace key) enabling iOS to hand files directly to Echo instead of making copies; also added "Preparing" phase indicator after model download starts (commit 9be1314).
- Healstack: complete login branding rename (Dose → Healstack) across web dashboard, iOS, and watchOS target; bundle IDs + internal names unchanged to preserve App Store records (commit 1c78ce9).
- Lexly: iOS course loader fix—xcodegen had flattened resource folder structure, breaking asset lookups. Fixed with directory-tree fallback in ContentStore that walks subdirs to find course-data.json even when nested; also hardened validator against missing exercise IDs (commit 634e2fc).
- Grapher + Wiretext: added ASC registration + sim verification TODOs to roadmap sections; both repos unarchived on GitHub and pushed (back to standalone after labs consolidation).
- Rejection triage via asc web Resolution Center: Casewright 1.0.1 rejected (SIWA error on iPad + 4 metadata/privacy/support-URL issues, filed in brief/roadmap.md); Lexly 1.1.0 rejected on the course-load bug already fixed in 634e2fc — resubmit as 1.1.1 (filed in lexly/roadmap.md).
- Meta fork: icon-scaling pipeline permanently fixed via shared make-appicon.sh in books + nulljosh.github.io; project-sync skill created; 17-app ship plan added to wiki at pages/ship-plan.md.
- 12 repos touched, 19 commits total (batch roadmap imports 12 + Echo 2 + Brief 1 + Healstack 1 + Lexly 2 + Grapher 1 + Wiretext 1 = 20 tracked, mostly routine cleanup with a few targeted fixes). Journal updated with Sunday entry and deployed to Vercel.

## Recent (2026-07-11, nightly wrap — Friday night)
- Spark: fixed sign-in overlay bug where Create Account form appeared behind auth panel, blocking login flow. Commit a6694bb.
- Bank: neobank sandbox scaffolded with mock ledger and Alpaca paper trading support. Basic web UI added with balance display, trade form, and activity feed (exploratory before real broker integration). Commits ee8860c + 601e838.
- NYC: controls simplified with 3-pill toolbar, lean colonist panel, dead SAVE button removed, FPS debug overlay added. Commit 3a2eb41.
- Friday morning consolidated wrap (2026-07-11 08:00-08:30): Labs consolidation finalized (quotable/wiretext/grapher/etyma/braingraph subtree-merged into monorepo via 5 commits, 5 repos archived, 15 active GitHub repos), Root Lookup-style v1 shipped (Wiktionary lookup + etymology chain + word of the day, web + iOS, 2 commits), Quotable poster/album-art flashing on correct answer with sage vibe polish (1 commit), Newsline RSS v0 shipped (clustering worker + bias-bar frontend, wrangler auth blocker pending, 1 commit), BCGD iOS app verified in sim with all 4 tabs tested end-to-end, screenshots + 1024px icon ready (2 commits), Epiphany roadmap update (stash Pilots, 1 commit). Brain graph merged into notes as brain/ subdirectory (force-directed memory graph with PII redaction, scroll zoom, Cloudflare Worker config, 1 commit), notes gained macOS app target (1 commit). TestFlight tester debugging: only 4 of 11 apps showing (email-invite-only status), fix pending (add self as ASC team-user, resend invites, delete books-ios duplicate group 9ebab47c-52a0-4c23-90af-42af3a73ec79).
- 12 repos touched, 40 commits total (Friday morning + evening): bank (2), bcgd (2), braingraph (1), epiphany (1), journal (11 incl deploy), labs (5), newsline (1), notes (11 incl deploy), nyc (1), quotable (1), root (2), spark (1). Journal updated and deployed to Vercel; wiki refreshed.

## Roadmap

### Ship Now
- [ ] talli: v3.5.4 build 202607141330 (widget/app versions unified via $(MARKETING_VERSION), fixes ASC ITMS-90473; What's New sheet auto-sizes; CI green after cgeb schema fix 2026-07-14); v3.5.3 Waiting for Review
- [ ] inkpress (Journal iOS app): v1.0.2 Waiting for Review (dark-mode CSS fix + styled-content NSAttributedString HTML parsing, 2026-07-09)
- [ ] casewright (Brief iOS app): iOS 1.0.1 REJECTED (SIWA error on iPad + 4 metadata/privacy/support-URL issues, details in brief/roadmap.md 2026-07-12)
- [ ] lexly: v1.1.0 REJECTED on course-load bug (already fixed in 634e2fc); resubmit as 1.1.1 (details in lexly/roadmap.md 2026-07-12)
- [ ] echo: iOS 1.3.3 READY_FOR_REVIEW (build 9, paywall window-level fix 2026-07-10); Mac build 1.3.3 uploaded (icon corrected); IAP $7.99→$3.99; What's New sheet auto-sizes (2026-07-14)
- [ ] portfolio (nulljosh.github.io): iOS app v1.0.0 (ASC 6788180394, icon full-bleed 2026-07-10, blockers cleared, ready to submit)
- [x] spark: Mac v2.1.0 live (YC RFS Inspiration, Gemma daily ideas cron 2026-07-10); iOS + 4 screenshots pending
- [ ] healstack: v2.3.4 build uploaded (ASC icon live 2026-07-10), ready to submit; Vercel deploys failing — Root Directory still "dose" after rename, config fix command handed to Joshua (2026-07-14)
- [ ] books: iOS v1.0 build uploaded (ASC icon live, canvas scaling bug); macOS export blocked
- [ ] nyc: macOS 1.0 validates, iOS 1.0.0 build 3, 1 validation error remaining
- [ ] nimble: test suite 26/26 passing; blocked on ASC + Tahoe SDK MenuBarExtra; nimble.heyitsmejosh.com CNAME repointed to Vercel DNS (2026-07-14)
- [x] braingraph: shipped (force-directed memory-graph web app, sage vibe, github.com/nulljosh/braingraph private; roadmap: iOS/macOS companion apps)
- [ ] bcgd: web live (light theme, teal #1B5959), iOS companion verified in simulator (4-tab SwiftUI: Dashboard/Services/Inventory/Settings, all tabs tested, screenshots in README, 1024px icon asset catalog ready), ASC ship pending—bundle ID registered, awaiting app record creation + archive/upload via asc CLI
- [ ] bank: neobank sandbox scaffolded at heyitsmejosh.com/bank (mock ledger, Alpaca paper trading, basic web UI with balance/trade form/activity feed); exploratory before real broker integration
- [ ] root (etyma): Lookup-style v1 live (Wiktionary lookup + etymology chain + word of the day, web + iOS shipped, iOS build ready for App Store submission)
- [ ] nyc-newsline: RSS v0 shipped (clustering worker + bias-bar frontend, deploy blocked on wrangler auth)
- [ ] TestFlight: add self as ASC team-user internal tester (permanent fix), resend broken email invites, delete books-ios duplicate Internal group 9ebab47c-52a0-4c23-90af-42af3a73ec79

### Recent (2026-07-11, nightly wrap — Saturday evening)
- Labs consolidation finalized: quotable, wiretext, grapher, etyma, braingraph subtree-merged into labs monorepo, 5 old repos archived. Commit history preserved, live Vercel sites (.heyitsmejosh.com) unaffected; repointing remains for internal project auto-deploys. GitHub at 15 active repos.
- NYC controls final pass: 3-pill toolbar, colonist panel streamlined, SAVE button dead code removed, FPS debug overlay added. Rollouts verified in macOS + iOS simulators.
- Root (etyma) Lookup-style v1 shipped: live Wiktionary lookup + etymology chain + word of the day on web + native iOS. iOS build succeeded, ready for App Store submission.
- Quotable polish: poster/album-art flashing on correct answer + sage portfolio vibe tokens (dropped purple-tint background).
- Newsline v0 shipped: RSS clustering worker + bias-bar frontend. Deploy blocked on wrangler authentication.
- Bank scaffolded: new neobank sandbox project at heyitsmejosh.com/bank. Mock ledger + Alpaca paper trading + basic web UI (balance card, trade form, activity feed). Exploratory before real broker integration.
- 10 repos touched, 22 commits total: bank (2), bcgd (2), epiphany (1), journal (3), labs (5), newsline (1), notes (4), nyc (1), quotable (1), root (2). Journal + wiki deployed to Vercel. Roadmap items stashed.

### Recent (2026-07-11, nightly wrap — Saturday night)
- Epiphany: Confirmed Interactive Brokers support via SnapTrade v4 (full broker list searchable from the start), updated Settings brokerage-connect copy to mention IBKR alongside SnapTrade and Wealthsimple (commit 3c2956b).
- Healstack: UI polish pass—removed drop shadows from card surfaces and the floating tab bar to simplify the visual hierarchy and improve the minimalist aesthetic. Build verified cleanly (commit 60d4e5d).
- NYC: Simplified controls pass with 3-pill toolbar, lean colonist panel, dead SAVE button removed, FPS debug overlay added (commit 3a2eb41).
- 13 repos touched total across Friday + Saturday (40 commits): bank (2), bcgd (2), braingraph (1), epiphany (2), healstack (1), journal (11 incl deploy), labs (5), newsline (1), notes (11 incl deploy), nyc (1), quotable (1), root (2), spark (1). Journal and wiki updated + deployed to Vercel.

### Planned (2026-07-10)
- [ ] /vibe design-token audit: full codebase pass with portfolio (nulljosh.github.io/tokens.css) as source of truth; epiphany + brief/casewright to follow spark's lead onto unified token system

### Recent (2026-07-10, final nightly wrap — Friday evening)
- Obsidian vault migration completed: moved to Obsidian iCloud container (~/Library/Mobile Documents/iCloud~md~obsidian/Documents/Code) with symlink redirect at old iCloud Drive path for script compatibility; native iOS Obsidian app now syncs properly.
- Braingraph edge-spring force explosion bug fixed (NaN blank canvas resolved), memory graph viewer + build script shipped, force-directed visualization with sage vibe and Inter typography live.
- 8 repos touched tonight: braingraph (4 commits), echo (2), journal (1), nimble (1), notes (1), nulljosh.github.io (1), spark (2), talli (2). Total: 14 commits. Journal entry updated and deployed; wiki refreshed.

### Recent (2026-07-10, nightly wrap — Friday 10 PM)
- Talli: CGEB (Canada Groceries and Essentials Benefit) tracking added to Status tab with quarterly entitlement amount and payment schedule timeline, pulling from the July 3, 2026 notice. API routes auto-generated profiles for `/api/cgeb-profile` and surfaces quarterly entitlement + amount in uiConfig. Web unified.html updated with new section. Commit 2c91446 pushed.

### Recent (2026-07-10, final nightly wrap — Friday late evening)
- Braingraph: shipped as new memory-graph web app (force-directed canvas visualization of Claude Code memory with sage portfolio vibe and Inter typography, deployed to github.com/nulljosh/braingraph private). Roadmap documented for companion iOS/macOS app.
- Obsidian: vault migrated into iCloud container (native Obsidian app now has iOS access).
- All Friday commits collected and summarized (8 repos touched: braingraph, books, echo, journal, lexly, nimble, notes, spark). App Group portal assignment blocker remains critical (6 assignments pending: Epiphany Mac ×2, Spark ×4) for Spark iOS and Epiphany Mac shipping.

### Recent (2026-07-10, nightly wrap — Friday evening)
- **GitHub cleanup:** quotable, wiretext, grapher, etyma, braingraph subtree-merged into labs monorepo (5 repos consolidated, commit history preserved). Pushed to origin and old repos archived 2026-07-10 late night — GitHub at 15 active repos. Remaining: `vercel login`, then repoint grapher/wiretext/etyma Vercel projects to labs subdirs for auto-deploy. Live sites (grapher.heyitsmejosh.com, wiretext.heyitsmejosh.com, etyma.heyitsmejosh.com) stay online throughout.
- **Newsline:** RSS clustering v0 shipped with bias-bar frontend (news aggregator using ML clustering, demo live, deploy blocked on wrangler auth pending).
- **BCGD iOS app:** verified all four tabs in simulator (Dashboard/Services/Inventory/Settings, CoreData persistence confirmed, end-to-end testing complete). Added screenshots to README showing each tab layout. Generated 1024px app icon asset catalog for ASC submission. ASC ship pending: bundle ID registered (com.heyitsmejosh.bcgd), awaiting app record creation via asc CLI + archive/upload to complete flow this weekend.
- **Root:** etymology lookup app shipped with Wiktionary lookup + etymology chain + word of the day (web + native iOS, commit 481647b).
- **Talli:** CGEB pagination fix committed (seed-cgeb.js paginate blob list, anchor on results.json, commit 6d44c35).
- **Nightly collection:** 8 repos touched, 17 commits total (bcgd 2, journal 3, labs 5, newsline 1, notes 3, root 1, talli 2). Journal and wiki updated, deployed to Vercel.

### Recent (2026-07-10, nightly wrap — Friday late evening)
- Nimble: Gemma answer proxy deployed live to Cloudflare Worker (gemma-4-31b-it, header-based auth, thought-part filtering, real worker URLs verified working end-to-end). Web app now live with advanced query support via AI.
- Spark: Gemma daily auto-generated ideas feature shipped with 6-hour cron interval (9am start, staying within Vercel Hobby 12-fn cap) and server-side enrichment fallback. Ideas generated and enriched automatically. Body font refined to use shared --font-body token (system sans stack) matching portfolio's unified typography across Spark iOS + macOS + web.
- Journal: Friday 2026-07-10 entry updated with evening highlights and deployed to Vercel (aliases to journal.heyitsmejosh.com). Apps summary refreshed with Nimble/Spark ship status.

### Recent (2026-07-10, nightly wrap — Friday evening)
- App Groups portal assignment: partially cleared blocker. All three app groups (talli, epiphany, spark) were already registered at Apple. Manually assigned `group.com.heyitsmejosh.talli` to Talli Mac's two App IDs (tally.mac, tally.mac.widgets) via developer.apple.com web UI. Six more assignments remain for this weekend: Epiphany Mac (2 IDs) and Spark (4 IDs) need their respective groups linked. Recipe documented in ~/Documents/Code/roadmap.md line 58 for easy execution.
- Books: aligned typography with portfolio's shared font tokens—swapped body text from monospace to `--font-body` CSS variable (system sans stack) for improved readability, matching the earlier spark/wiretext/grapher/notes refinement. Updated library tracking page with current due date (July 29, 2026) and removed four returned/owned books, leaving five active checkouts. Journal entry updated with Friday highlights and deployed to Vercel.
- Spark: body font switched to sans (--font-body) across iOS + macOS to match portfolio. YC RFS Inspiration feature added to iOS + macOS companions (web version already ships YC RFS carousel).
- Echo Mac: icon regenerated with proper macOS margins (824px artwork on 1024px transparent canvas) and build 1.3.3 uploaded.
- Lexly: Stripe Pro checkout and webhook scaffolding added (code committed, awaiting test API key for deployment).
- Braingraph: fixed edge-spring force explosion bug (NaN causing blank canvas) and added memory graph viewer + build script.

### Recent (2026-07-10, nightly wrap — Friday)
- Books: aligned typography with portfolio's shared font tokens—swapped body text from monospace to `--font-body` CSS variable (system sans stack) for improved readability, matching the earlier spark/wiretext/grapher/notes refinement. Updated library tracking page with current due date (July 29, 2026) and removed four returned/owned books, leaving five active checkouts. Journal entry updated with Friday highlights and deployed to Vercel.

### Recent (2026-07-10, delta wrap)
- Echo iOS 1.3.3: Build 9 resubmission confirmed (review state READY_FOR_REVIEW). IAP price $7.99→$3.99. Mac build 1.3.3 uploaded with corrected icon margins (824px artwork on 1024px canvas).
- Healstack v2.3.4: Build uploaded to ASC with icon now live (was placeholder for weeks). Ready to submit for review.
- books-ios v1.0: Build uploaded to ASC with icon live. Icon has recurring canvas-scaling bug (artwork too small on tile).
- Blockers documented in ~/Documents/Code/roadmap.md: Talli Mac + Epiphany Mac exports (missing App Group entitlements), Books Mac export (distribution profile), recurring icon-scaling bug (plan: merge Books Mac + books-ios and Spark Mac + Sparkjar into universal app records).

### Active Projects
| Repo | Status | Next |
|---|---|---|
| bcgd | Web live at bcgd.heyitsmejosh.com (rethemed to bcgaragedoors.ca brand: light background, teal #1B5959, Barlow Condensed + Open Sans), iOS companion app verified in simulator (4-tab SwiftUI: Dashboard/Services/Inventory/Settings, all tabs tested end-to-end, CoreData persistence confirmed, builds clean, screenshots added to README 2026-07-10, 1024px icon asset catalog ready for ASC), portfolio vibe-token reference wired, bundle ID registered (com.heyitsmejosh.bcgd) | Create app record "BC Garage Doors" via asc CLI, archive + upload build to complete ASC submission this weekend |
| epiphany | iOS 2.5.2 Waiting for Review (TestFlight + App Store submission 2026-07-06), web live, Google OAuth login wired up (2026-07-07), Sign in with X (Twitter) OAuth wired to web dashboard (2026-07-09), venue detail cards now show native MKLookAroundScene preview (street-level location view, 2026-07-07), duplicate portfolio accounts fixed (deduping on refresh 2026-07-07), Markets drawer gained news thumbnails + stocks-only gains filter (2026-07-07), Markets ticker choppiness during auto-scroll marquee fixed (precompute formatted items once on data change instead of every animation frame, 2026-07-07), SnapTrade phantom holdings fixed, portfolio net-worth math fixed (cash in investment accounts now tallied correctly; was $229, actually $415.78), account name prefix stripped (Wealthsimple Trade TFSA → TFSA), Cash account subtitle fixed (was double-counting), Markets drawer polished (gesture 1:1 tracking, liquid-glass look, pop-free settle, list clears peek, Fear & Greed hides at full open mirroring Yahoo Finance), scan-local endpoint locked to dev-only, splash screen icon fixed, UI test scheme snapshot creds configured, screenshot pipeline documented, dev auto-login fixed, tab bar overlap fixed, autopilot paper-mode fixed (fractional BTC down to $0.01), cleanup complete, npm audit vulns patched (undici, nodemailer, mathjs, uuid). Landscape orientation re-enabled on iOS after a per-screen layout pass; SwiftUI layouts reflow, verified in sim (2026-07-09). Terminal dashboard TUI added (ink-based, live-polls Upstash KV portfolio data, v2.6.1 bump, 2026-07-09) | Monitor review status, commodity/crypto backend data gap (only price + %change, needs news/chart/ranges models), live trading broker (paper trades blocked on market hours + need Alpaca/IBKR) |
| spark | v2.1.0 live (Mac build 1.0.0 processing), auth consolidated (10/12 fns), dark-mode text fix, YC RFS Inspiration feature shipped across web + iOS + macOS (web: scrapes ycombinator.com/rfs via type=rfs route with 12h in-memory cache, carousel strip; iOS/macOS: fetchRfs() API method + RFSEntry model + Inspiration section in IdeaBaseView, 2026-07-09, zero additional function cost), body font refined to use shared --font-body (system sans stack) instead of monospace, matching portfolio typography (nulljosh.github.io tokens.css updated 2026-07-09). App Group linking attempted via developer.apple.com's App ID capability config (2026-07-07) but entitlement still comes back empty in freshly regenerated provisioning profiles—unresolved, genuinely blocked (needs re-investigation: verify modal still shows group checked, wait longer, or re-toggle capability). | iOS screenshots + metadata remain; App Group entitlement issue must resolve before archive/export/upload |
| lexly | Live at lexly.heyitsmejosh.com (landing page at `/index.html`, app shell at `/app/` with unified header styling), v1.1.0 iOS + macOS submitted for review (builds 202607060002 with resource flattening + icon fixes, iOS home screen widget, masterclass courses as normal cards, metadata + screenshots complete, native iOS/macOS accent color #5B9BD5 matches web parity confirmed, signup auto-generates pixel-art avatars instead of prompting users). Masterclass styling fixes committed 2026-07-08: blue hover (was purple) + feedback-loop flashcard reword. Stripe Pro checkout and webhook handling scaffolded 2026-07-09 (awaiting test API key for deployment). | Monitor review status, deploy Stripe Pro |
| portfolio (nulljosh.github.io) | Web live at heyitsmejosh.com (sage.me theme dark mode + perf live), iOS v1.0.0 app (Swift mirror of site, same tokens, 10/10 ASC blockers cleared, ready to submit to App Review, ASC id 6788180394). iOS app icon rescaled full-bleed edge-to-edge (2026-07-10): removed baked-in corner rounding so iOS can apply its own mask. Claude Design System scaffolded (2026-07-09): component tokens documented (color palette, typography, link states, list sections, header/bio card) with 5 example component cards authored by hand from tokens-sage.css | Submit to App Review |
| talli | v3.5.4 icon rebrand + scraper hardening (recolored tally-mark icon to #5B9BD5 on #1a1a1a, regenerated all iOS AppIcon light/dark/tinted + LaunchIcon PNGs fixing brown/orange TestFlight icon + launch/login screens, hit Apple export rejection on large icons carrying alpha channel—flattened to opaque RGB keeping blue tint, re-archived and re-uploaded, build uploaded to TestFlight 2026-07-09 pending verification, moved JUNK_RX accessibility filter into uniqueTrimmed so skip-nav boilerplate no longer leaks into Status Messages/Messages tab, docs bumped). v3.5.3 Waiting for Review (TestFlight + App Store submission 2026-07-08). Previous: blue accent, report/avatar fixes, Swift 6 widget, appearance settings, monthly-report success-detection hardened, entitlements debugging complete, local fastlane workaround for Paid Apps Agreement blocker | Monitor v3.5.4 TestFlight + v3.5.3 review status |
| echo | iOS 1.3.3 resubmitted after Guideline 2.1(b) rejection—paywall sheet was attached only to ContentView and couldn't present over Settings sheet (2026-07-10). Fixed by moving paywall to window level; build 9 uploaded and resubmitted. IAP price dropped $7.99→$3.99. Mac build 1.3.3 uploaded (icon regenerated with proper macOS margins: 824px art on 1024px transparent canvas). Model download hardened (3-retry + watchdog), tokens synced, screenshots + What's New copy updated, Voice Memos import + transcription progress bar | Monitor review status (paywall fix should resolve); verify IAP bundling |
| healstack (dose) | v2.3.4 build VALID on ASC (2026-07-07), distribution provisioning profile created via asc-signing-setup, iOS + macOS builds shipped and processed. Widget last-dose sync fixed. Ready to submit for review | Submit v2.3.4 for App Store review |
| quotable | Folded into labs monorepo (2026-07-10, subtree merge preserving history). v1.5.0 (193 entries, movies + music trivia, top nav sticky rebuild, poster/album-art flash on correct answer + portfolio vibe polish 2026-07-10, art URLs partial) | Verify labs merge, archive standalone repo |
| notes | Live + iOS | Content refresh |
| journal | Web automated, iOS app (Inkpress) v1.0.2 submitted with dark-mode fix, WAITING_FOR_REVIEW | Monitor iOS review status |
| casewright (brief renamed) | iOS 1.0.1 Waiting for Review (ASC app 6787857503), icon fake-badge removed and all PNGs regenerated (2026-07-10), metadata/pricing/age rating set, privacy policy + landing blurb added, case data scrubbed + git history cleaned, case picker bug fix in production (clipped-behind-banner layout resolved) | Monitor review status |
| inkpress (journal renamed) | iOS v1.0.2 build in progress to TestFlight (EntryDetailView styled-content fix: NSAttributedString HTML parsing now wraps content in CSS style block for proper font/heading sizes/paragraph spacing, app renamed from Journal to avoid Apple collision) | TestFlight validation + App Store submission |
| nyc | macOS 1.0 valid, iOS 1.0.0 build 3 (controls simplified: 3-pill toolbar, lean colonist panel, SAVE button removed, FPS debug overlay added, verified in sim 2026-07-10), 5 blockers fixed, free pricing set | Resolve remaining validation error, submit both platforms |
| books | Web live at books.heyitsmejosh.com (ML for Dummies chapters 13–20 summary complete, body font switched to shared --font-body variable 2026-07-10, library tracking updated July 29 due date with five active checkouts), iOS + macOS WKWebView wrapper apps. iOS build fixed (ITMS-90474 iPad-orientation rejection resolved by adding UISupportedInterfaceOrientations to Info.plist); macOS build fixed (App Sandbox entitlement + LSApplicationCategoryType Info.plist issues resolved). Distribution profiles created for both (2026-07-07), builds ready for archive + upload | Archive + upload iOS + macOS builds to TestFlight, then submit |
| braingraph | Shipped: force-directed memory-graph web app visualizing Claude Code memory with sage portfolio vibe and Inter typography (github.com/nulljosh/braingraph, private). Built with memory-graph engine, edge-spring force explosions fixed (NaN blank canvas). Roadmap: companion iOS/macOS app. | Ship iOS/macOS companion apps |
| life | Local | 32 sections |
| etyma | Live at etyma.heyitsmejosh.com, iOS scaffold builds, Wiktionary pipeline v0 | Full dump parse |

### Recent (2026-07-09, nightly wrap)
- Epiphany: added ink-based TUI terminal dashboard (`cli/epiphany-tui.mjs`) that live-polls Upstash KV for portfolio data—streams real-time holdings, net worth, and performance metrics to the terminal for quick status checks without opening app or web dashboard. Bumped version 2.6.0 to 2.6.1, updated README.md and CLAUDE.md, committed and pushed (3e89ab7).
- Spark: YC RFS Inspiration feature expanded to iOS and macOS (web version scrapes ycombinator.com/rfs via type=rfs route with 12h in-memory cache; iOS/macOS add fetchRfs() API method, RFSEntry model, and Inspiration section in IdeaBaseView). Cross-platform feature complete: web + iOS + macOS all display Y Combinator Requests for Startups carousel. Zero additional function cost. Body font refined to use shared --font-body (system sans stack) instead of monospace, matching portfolio typography. Committed and pushed.
- Books + Notes: rolled out sans-font fix (body font-family switched from monospace to shared --font-body variable, keeping Geist monospace for small badge/label accents only), matching the Spark refinement. Books and notes sites now inherit the unified typography from portfolio tokens.css.
- Talli: finished icon rebrand to blue #5B9BD5 on #1a1a1a background—regenerated all iOS AppIcon variants (light/dark/tinted) + LaunchIcon PNGs, fixing the brown/orange TestFlight icon + launch/login screens. Hit Apple export rejection on large icons carrying alpha channel (transparent pixels not allowed); flattened AppIcon.png + AppIcon-dark.png to opaque RGB, keeping blue tint without transparency. Re-archived and re-uploaded to App Store Connect. Build uploaded to TestFlight 2026-07-09, pending verification. Hardened scraper by moving JUNK_RX accessibility filter into shared uniqueTrimmed so skip-nav boilerplate ("Skip to main content", "Accessibility Statement") stops leaking into iOS Status Messages / Messages tab. Bumped docs to v3.5.4. All committed and pushed on fix/blue-rebrand-icon-scraper.
- Epiphany (earlier): re-enabled landscape orientation on iOS (SwiftUI layouts reflow, verified in sim; an earlier same-day revert was undone), and shipped Sign in with X (Twitter) OAuth to web dashboard (complements GitHub + Apple OAuth)
- Portfolio (nulljosh.github.io): scaffolded Claude Design System project documenting component tokens: color palette, typography scales, link states, list sections, header/bio card — created 5 example component cards authored by hand from tokens-sage.css values (URL importer rejected page as too simple)
- Echo iOS 1.3.3 rejection surfaced: Apple rejected on Jul 7 (Guideline 2.1(b) App Completeness) citing dead "Echo Pro" IAP purchase button; resubmitted same build; need to verify IAP bundling this weekend to ensure repeat rejection doesn't occur
- Books: library due date updated to July 29, 2026; removed four returned books (Isaac Newton, Machine Learning for Dummies, Agentic AI for Dummies, Exercise Science for Dummies) and PC for Dummies (personal copy, not a checkout); library tracking now reflects five outstanding checkouts
- Lexly: scaffolded Stripe Pro checkout and webhook handling (code committed, awaiting test API key for deployment)

### Recent (2026-07-07, nightly wrap — Tuesday evening)
- Epiphany iOS: added native MKLookAroundScene preview to venue detail cards (street-level location view directly in the app, no API key required). Built on top of earlier Markets fixes this week: ticker blank-entry regression fixed, What's New sheet self-sizing (no more half-screen waste), news drawer drag smooth with placeholder icons for missing images, tightened list row padding to match iOS Stocks, precomputed formatted currency in ticker (stops 60fps rebuilding on every animation frame). All fixes pushed and auto-deployed. Portfolio app submission progressing—most blockers cleared. All 90+ venue detail tests passing post-Look Around integration.

### Recent (2026-07-07, nightly wrap — Tuesday)
- Epiphany: fixed duplicate portfolio accounts bug (deduping on refresh) that had been showing same account twice since SnapTrade integration, affecting net-worth math. Added Markets drawer news thumbnails for each stock/crypto alongside headlines. Added stocks-only gains filter for market-hours trading focus. Wired up Google OAuth login on web dashboard (GitHub + Apple + Google now available). Fixed Markets ticker choppiness during the auto-scroll marquee: TickerBarView.swift was reformatting currency and rebuilding the ticker array every animation frame (60fps), competing with the List's own scroll; now precomputes formatted items once on data change so the per-frame closure only computes scroll offset. Build verified via xcodebuild. All pushed and auto-deployed to production. Later: fixed ticker rendering regression where EmptyView was blocking onAppear from populating items. Fixed What's New sheet forcing half-screen `.presentationDetents([.medium])` regardless of content—now self-sizes to actual height via GeometryReader. Tightened Markets list layout with placeholder icon when news images unavailable and reduced row padding (smaller star gutter, less vertical space) matching native iOS Stocks. Fixed news drawer drag choppiness by removing the `.frame(height:)` binding directly to drag translation (which forced List re-layout every drag pixel); moved to fixed max-height List with only outer clip animating, stopping layout thrashing mid-drag.

### Recent (2026-07-08, evening)
- Lexly masterclass styling fixed: blue hover state had regressed to purple (CSS override somewhere), swapped back to accent blue (#5B9BD5). Also reworded the feedback-loop flashcard prompt for clarity. Changes committed and pushed to production.

### Recent (2026-07-08, nightly wrap)
- Nimble: shipped landing page live at nimble.heyitsmejosh.com (GitHub Pages, DNS repointed from Vercel to nulljosh.github.io); rebuilt Nimble web app from scratch as single-file HTML port of the Swift QueryEngine (offline math, DuckDuckGo/Wikipedia, Gemma proxy) after discovering original Next.js source unrecoverable (nulljosh/apps monorepo deleted, Vercel had only minified); deployed to web-one-chi-47.vercel.app and wired landing page "Launch app" CTA at it; nimble repo now consolidates web + iOS + macOS; refreshed README + architecture.svg documenting Gemma proxy flow; set GitHub repo description + homepage
- App Store submission verification (2026-07-08): Verified Echo iOS 1.3.3 correctly WAITING_FOR_REVIEW (no action needed). Fixed Talli's corrupted submission: an earlier stale build run had accidentally submitted v2.4.4 (a downgrade from v3.5.2) to Apple review; cancelled it and re-shipped correct v3.5.3. Caught Inkpress's pending review (v1.0.1) was missing a dark-mode fix already sitting in an uploaded, unsubmitted build; cancelled v1.0.1's review and submitted v1.0.2 with the fix instead. All three apps now WAITING_FOR_REVIEW: Talli v3.5.3, Echo v1.3.3, Inkpress v1.0.2.
- Portfolio (nulljosh.github.io): added left-to-right underline sweep animation on link hover for polished, animated link interactions.

### Recent (2026-07-07, nightly wrap — evening update)
- App Store Connect app icon fixes shipped (2026-07-07 late night): Created + installed 8 missing distribution provisioning profiles across spark/healstack/books bundle IDs (main + widget/extension targets) using asc-signing-setup. Shipped 3 of 5 blocked builds: Healstack v2.3.4 (build VALID on ASC, processed), books-ios (fixed ITMS-90474 iPad-orientation rejection by adding UISupportedInterfaceOrientations to Info.plist, re-uploaded), Books Mac (fixed App Sandbox entitlement + LSApplicationCategoryType Info.plist issues blocking pkg upload, since asc CLI doesn't support .pkg directly). Spark iOS/Mac attempted fix: linked App Group (group.com.jt.spark) to iOS App ID via developer.apple.com's App ID capability config, but entitlement still comes back empty in freshly regenerated provisioning profiles (verified twice via `asc profiles inspect --entitlements` after regenerating twice)—apparently the save didn't persist or backend needs longer propagation. Unresolved, genuinely blocked. Next session: re-verify the App ID's Configure App Groups modal shows group checked, and if it does, wait longer before regenerating profiles, or try re-toggling the capability off/on. Portfolio iOS app icon fixed and pushed (was baking in corner-rounding). Final tally: 4 of 5 broken icons fixed and shipped (Healstack, books-ios, Books Mac, portfolio); Spark iOS/Mac remain blocked.

### Recent (2026-07-07, nightly wrap)
- Vercel auto-deploy infrastructure fixed (2026-07-07): discovered Lexly Vercel project had no GitHub auto-deploy wired up—all previous "deploys" were manual `vercel deploy --prod` runs, not CI/CD. Ran `vercel git connect --yes` to fix it. Then audited all 8 other locally-linked Vercel projects and found the same issue everywhere. Fixed fleet-wide: epiphany, grapher, healstack, journal, spark, talli, wiretext, and lingo (Lexly) now all auto-deploy on push to main. nulljosh.github.io (portfolio) still needs checking as a follow-up.
- ASC app icon provisioning profile blocker root-caused across 5 apps (2026-07-07 nightly): all on-disk icon assets are valid; blocker is missing distribution provisioning profiles for com.heyitsmejosh.spark, .spark.mac, .dose, .books, .books.mac. Distribution certificates exist but profiles don't. Diagnosis confirmed by archive/export failures on Healstack (v2.3.3) and books-ios (v1.0), both failing at export with "no provisioning profile" + cert mismatch. Removed stale Dose.xcodeproj from healstack/ios (leftover from Dose→Healstack rename, blocking agvtool). Next: asc-signing-setup skill to generate profiles for all 5 bundle IDs, then re-upload builds.
- Portfolio iOS app icon fixed (2026-07-07): regenerated full-bleed edge-to-edge from icon.svg (removed baked-in corner rounding, since iOS applies its own mask), changing appearance in ASC from shrunk/padded to proper fill. File changed on disk, not yet committed.
- Echo: diagnosed iOS 1.3.3 App Store rejection (Guideline 2.1(b) App Completeness)—"Echo Pro" IAP was never submitted for review, leaving dead purchase button. Resubmitted v1.3.3 via ASC CLI and web UI. Open risk: IAP still READY_TO_SUBMIT and may not be bundled into new submission, potential for repeat rejection.
- Era Context: explored personal finance MCP server platform (read+write access to connected third-party accounts, five capability tiers: See/Organize/Automate/Optimize + future). Completed onboarding questionnaire to unlock pending capabilities. Knowledge module supports facts with optional expiry dates for auto-verification. Platform operates MCP-first with shared agent memory across connected tools.
- BCGD: web site rethemed to bcgaragedoors.ca brand (light background, teal accent #1B5959, Barlow Condensed headings, Open Sans body), deployed live on Vercel; iOS companion app scaffolded (4-tab SwiftUI with Dashboard/Services/Inventory/Settings tabs, xcodegen for project generation, CoreData local persistence, builds clean); added portfolio vibe-token reference for theme inheritance
- Epiphany: expanded asset universe with ten major bank stocks (RY, TD, BMO, BNS, CM for Canada; JPM, BAC, WFC, GS, MS for US) added to DEFAULT_SYMBOLS in server, rolling out to iOS/macOS/watchOS; all 397 tests pass, deployed to Vercel; updated TestFlight beta description to real tester-facing copy (was internal QA notes); prepared new App Store screenshot set at ios/fastlane/screenshots/en-US/ (iPhone 11 Pro Max + 14 Plus, 5 screens each) but upload blocked because v2.5.2 WAITING_FOR_REVIEW (ASC locks edits mid-review) — next: cancel submission, upload screenshots, resubmit
- Talli: xcstrings cleanup (removed drifted zh/pa locale entries for report.fileNow identifier); fixed critical Messages tab bug where entries without newline-separated date prefix were silently dropped by src/api.js parser (commit 2d5ab43), causing blank Messages view; new build v2.4.5 kicked off via `asc workflow run ship-ios` to ship message parsing fix plus earlier blue color accessibility improvements
- Portfolio iOS app: first-submission paperwork completed via asc CLI (App Privacy manifest published, 9/10 blockers cleared, availability pending then ready to submit for review)
- Inkpress: v1.0.2 archived + exported + uploaded to TestFlight (VALID on ASC). EntryDetailView styled-content fix completed: NSAttributedString HTML importer was rendering with no CSS (12pt Times, no paragraph spacing); now wraps entry content in a `<style>` block forcing system font + proper heading sizes + paragraph spacing before parsing. Auto-submit for App Store review blocked: 1.0.1 still WAITING_FOR_REVIEW (Apple blocks version submit while one's pending). Next: wait for 1.0.1 review to complete or cancel it and submit 1.0.2 with the fix.
- Lexly: landed marketing landing page at `/index.html` with course highlights and public-facing intro, moved app shell to `/app/`, unified header styling between landing and app, confirmed native iOS/macOS SwiftUI accent (#5B9BD5) matches web parity, closing roadmap item; signup now auto-generates pixel-art avatars instead of user prompt

### Recent (2026-07-06, final nightly)
- Epiphany: iOS 2.5.2 pushed to TestFlight and submitted for App Store review
- Talli: v2.4.4 pushed to TestFlight and submitted for App Store review (replaced stale v2.4.2 submission)

### Recent (2026-07-06, nightly)
- Epiphany: expanded ticker universe with MRNA, AI/memory tickers (GOOG, NVDA, MSFT, META, TSLA, DELL, PENG, DRAM, SNDK, IREN, MU, NBIS, CRDO); all 397 tests passing
- Talli: fixed stale PaidStatus tests after paidMonths refactor, debugged blank Messages tab by decoding {id, text, timestamp} shape; added missing zh + pa translations (38 keys); added technical whitepaper
- Echo: hardened model download with 3-retry loop and watchdog timer, capped iOS auto-model at base to avoid stalls; iOS 1.3.3 b8 submitted, WAITING_FOR_REVIEW
- Lexly: uploaded fixed build 202607060001 to App Store Connect (xcodegen resource flattening + Pre-Calc 12 icon fixed); added technical whitepaper
- Inkpress: v1.0.1 b3 resubmitted for App Review (dark-mode CSS fix + CDATA parser bug fixed, app renamed from Journal to avoid Apple collision; b2 submission cancelled)
- Casewright: iOS 1.0.1 Waiting for Review (app renamed from Brief)
- Deploy concurrency improvements across Quotable, portfolio, Healstack (cancel superseded Pages runs instead of queueing)
- Release workflows: added `.asc/workflow.json` to spark, echo, brief, journal, healstack, epiphany, lexly, talli — releases now one command (`asc workflow run ship-ios VERSION:x.y.z`). ExportOptions.plist added to echo, brief, epiphany-iOS, healstack-macOS for automated export/upload.
- Portfolio: dark mode live on sage.me theme (CSS inversion, non-blocking font load, perf tweaks); scaffolded companion iOS app (Swift + same sage theme tokens)
- Wiretext, Spark, NYC: added technical whitepapers
- BCGD: fixed hero image on bcgd.heyitsmejosh.com (truck.png was 0 bytes on Vercel; redeployed src/web, image now 664KB)

### Recent (2026-07-04, nightly)
- Talli: entitlements debugging complete — traced Xcode Cloud signing failures (50+ jobs) back to project.yml hardcoding old App Group identifier (group.com.jt.talli instead of group.com.heyitsmejosh.talli), fixed root cause to prevent xcodegen from silently reverting entitlements on each build, resolved widget extension missing NSExtension/NSExtensionPointIdentifier config causing simulator install failures, corrected stale device names in screenshot scripts (iPhone 17 Pro to iPhone 14 Plus), fixed UI test tab detection by switching from app.tabBars.firstMatch.buttons[name] to app.buttons[name] after custom FloatingTabBar replaced native TabView chrome, regenerated all iOS App Store README screenshots on both device sizes

### Recent (2026-07-04, later night)
- Quotable: added music trivia mode (50 lyric-to-artist questions across pop/rock/hiphop/rnb/country), renamed `movie` field to `answer` so one schema covers movies + music, genre picker now builds itself from quotes.json; header rebuilt into a sticky full-width top nav with wordmark dropped (icon already renders "QUOTE" as text); README brought in line with other repos' badge style + roadmap section on App Store shipping and future quote sourcing

### Recent (2026-07-04 night)
- Nimble: iOS icon scaling fixed (content fills canvas, no white/transparent bleed), search placeholder text visibility fixed (dark text on dark background), What's New sheet squish-under-keyboard race condition fixed, iOS AppIcon set added, README screenshot cleaned (black bars cropped); macOS test suite 26/26 passing, iOS target builds clean; ASC submission blocked

### Recent (2026-07-04, late night)
- Spark: Supabase database seeded with 10 idea-category posts (Claude HR, Analytics, Marketing, Sales, Legal, Logistics, R&D, Procurement, Accounting, Engineering) via direct SQL insert for demo and testing

### Recent (2026-07-04)
- Spark: dark-mode text variables fixed (--text/--bg/--text3 defined locally, not relying on cross-origin @import timing)
- Talli: App Group rename completed for Xcode Cloud signing, resolving 50+ job failures
- Epiphany: landing page screenshots refreshed, screenshot pipeline bugs fixed, iOS App Store screenshots updated; later wired SNAPSHOT_EMAIL/PASSWORD into UI test scheme and documented screenshot pipeline status, reverted App Store screenshots to last good demo account state
- Echo: IAP product ID mismatch fixed, web landing page split from app build, icon stale-build resolved
- Brief: iOS + macOS signup matched to web's public multi-user auth, self-serve signup modal added, README genericized for multi-user audience
- NYC: iOS orientation + bundle ID constraints fixed, 3 App Store rejection items addressed (icon asset bundling, iPad orientations, launch screen), iOS build bumped to 3
- Books: Apple: The First 50 Years + Exercise Science For Dummies summaries added (photographed chapters)
- BCGD: broken icon link in root README fixed
- Healstack: widget last-dose name fixed to sync immediately, added immediate reload
- Lexly: iOS home screen widget added with streak and XP display; repo cleanup (removed tracked .DS_Store, gitignored build artifacts); roadmap merged into README; GitHub description + homepage URL updated; masterclass courses (Pre-Calc 12, AP Biology) surfaced as normal course cards via url-type subjects in content/catalog.json; ASC versions bumped to 1.1.0 for iOS (6783501611) and macOS (6783501927) with latest build 202607030001 attached; macOS target verified working; iOS app verified building and running on simulator
- Etyma: renamed from root across code, docs, GitHub; bundle ID/app struct/DB filename/User-Agent all updated; web frontend deployed with search UI over 18-word sample dataset to etyma.heyitsmejosh.com via Vercel + Cloudflare DNS; iOS scaffold confirmed building via xcodebuild

### Recent (2026-07-03)
- Epiphany: scan-local statements endpoint locked to dev-only, iOS splash screen fixed (was showing old grey wireframe icon)
- Talli: Mac widget provider Swift 6 concurrency errors fixed, appearance settings added to Talli Mac, Xcode Cloud signing failures resolved by renaming App Group to match bundle ID namespace
- Echo: App Store screenshots regenerated and What's New copy updated, Voice Memos import added with file transcription progress bar and animation polish
- Brief: Supabase env-var crash fixed, What's New sheet dismiss logic added, web adopted portfolio design tokens, added multi-user auth self-serve signup across iOS/macOS/web, README screenshot added, copy genericized for public multi-user app
- Lexly macOS app icons regenerated to fill canvas (was ~60% of tile size), all scales updated
- Nulljosh.github.io updated UVic timeline: returning for Computer Science, retaking Pre-Calc 12
- Talli monthly-report success-detection hardened to avoid false positives on form re-renders
- Spark Mac build 1.0.0 archived, exported, uploaded to App Store Connect (provisioning fixed via xcodebuild -allowProvisioningUpdates)
- Lexly iOS and macOS builds confirmed valid in App Store build pipeline
- Epiphany SnapTrade phantom holdings fixed: account deduplication, holdings merge on account id; empty response bodies tolerated; autopilot broker plan documented (IBKR for stocks, WS read-only, Kraken parked)
- Lexly branding sweep: lingo→lexly redirect, avatars, doc name cleanup; portfolio updated; sign-in hang fixed with auto-profile creation; avatar step removed from signup; iOS + macOS icons regenerated to fill the canvas (was ~60%, Apple icon grid, 824px rounded rect); iOS + macOS App Store metadata and screenshots filled via asc (submit blocked on 2FA + App Privacy)
- Talli v2.4.4: blue accent, report banner + avatar fixes, messages refresh, Swift 6 widget build; verification complete
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

### Recent (2026-07-04, deep night)
- Talli Xcode Cloud investigation: root cause identified as App Store Connect Paid Apps Agreement stuck in "Pending User Info" (missing bank account, Canadian GST/HST Form 506, US Tax Questionnaire) — blocks automatic-signing export account-wide, affecting free apps despite earlier successful builds (13–39); requires CRA Business Number registration for full resolution. Workaround deployed: local `fastlane beta` build/sign/upload workflow successfully uploaded new build to TestFlight.

### Recent (2026-07-04, evening)
- Books: library due-date refreshed to Jul 14, iOS + macOS WKWebView wrapper apps built (target sharing verified), app icon generated from icon.svg, automatic code signing enabled (provisioning profiles auto-managed), two ASC app records created (Books iOS 6787499076, Books Mac 6787499349), two bundle IDs registered (com.heyitsmejosh.books, com.heyitsmejosh.books.mac), verified both iOS and macOS targets build cleanly and run in simulator/locally; TestFlight archive and upload deferred to next session

### Recent (2026-07-06, nightly wrap)
- Journal (Inkpress): iOS v1.0.1 b2 submitted for App Review (Atom feed parser bug fixed—empty entries now load CDATA content), app renamed from Journal to Inkpress across ASC and GitHub to resolve Apple Journal collision, GitHub repo renamed to nulljosh/inkpress
- Brief (Casewright): iOS app and GitHub repo renamed to Casewright, display name set, v1.0.1 Waiting for App Review

### Recent (2026-07-06, late nightly)
- Lexly: v1.1.0 submitted for review (iOS + Mac builds 202607060002 uploaded with resource flattening fix and Pre-Calc 12 icon correction); technical whitepaper added
- Casewright: iOS 1.0.1 case picker bug fix shipped (clipped-behind-banner layout resolved via inline positioning + deduplication into CasePickerView)
- Books: ML for Dummies summary complete (chapters 13–20 reading pass finished)
- Talli: technical whitepaper added (use cases + deployment patterns)
- Wiretext: technical whitepaper added (use cases + deployment patterns)
- Portfolio (nulljosh.github.io): restyle to sage.me minimal theme live (bio section rework, hairline lists, Writing section, full redesign); dark mode added to sage theme with CSS inversion + non-blocking font load + perf improvements live; iOS app scaffolded in nulljosh.github.io/ios mirroring site content + sage theme tokens, building green

### Recent (2026-07-05, early morning)
- Epiphany: dev auto-login fixed (replaced fragile Xcode scheme override with proper gitignored .xcconfig approach), tab bar overlap bug fixed (Settings/Markets tabs hidden by floating bottom nav), autopilot paper-mode bug fixed (engine was floor()'ing whole shares, blocking fractional BTC trades below ~$150; now handles down to $0.01 test caps), cleanup complete (old Monica app name references removed from iOS widget target, annual Xcode nags tidied)

### Recent (2026-07-06, nightly)
- Epiphany: added eight new stock tickers (DELL, PENG, DRAM, SNDK, IREN, MU, NBIS, CRDO) to markets list and server DEFAULT_SYMBOLS (rolling out to iOS/macOS/watchOS), all 397 tests passing, deployed to Vercel
- Lexly: build 202607060001 uploaded to App Store Connect
- Talli: fixed stale PaidStatus tests after paidMonths refactor, debugged blank Messages tab (server message shape {id, text, timestamp} decoded)
- Echo: hardened model download (3-retry loop + stall watchdog, iOS auto-model capped at base version to avoid stalls)
- Quotable: added Pages deploy concurrency (cancel superseded runs instead of queuing)
- Portfolio (nulljosh.github.io): pointed Nimble at nimble.heyitsmejosh.com, added Healstack + Quotable to projects table, wired Pages deploy cancellation across repos
- Healstack: Pages deploy concurrency improvements applied
- Epiphany: Markets news drawer smoothed (removed conflicting animation, gesture now tracks 1:1) and polished with liquid-glass look (.ultraThinMaterial + hairline rim)

### Recent (2026-07-05, night)
- Epiphany: portfolio net-worth math fixed (was dropping uninvested cash sitting inside investment accounts, showed $229 when accounts summed to $415.78; now tallies all balances correctly), "Cash" account subtitle fixed (was double-counting holdings), account name prefix stripped (Wealthsimple Trade TFSA → TFSA), Markets drawer polish complete (pop-free settle by moving drag state to animate with spring instead of snap, list rows clear peek drawer on tap, Fear & Greed row hides at full-open so top ~10% is pure ticker strip mirroring Yahoo Finance), documented commodity/crypto detail data gap (models only carry price + %change, news/chart/ranges UX already present, awaiting backend) and autopilot simulator visibility (paper trades run only during market hours, visible "live failed" rows are stale read-only Wealthsimple probes, real live trading blocked waiting for Alpaca or IBKR with trade permission)
- Healstack: iOS marketing icon alpha channel stripped (App Store rejects alpha), build ready for resubmit
- Nimble: app icon upscaled to full 1024x1024 marketing size
- Labs: wiretext and grapher removed from monorepo (now standalone GitHub repos)
- Nulljosh.github.io: mobile navigation fixed (squish, font pairing, theme-toggle spacing)
- Dotfiles: terminal/tmux shortcuts cheatsheet added to notes

### Recent (2026-07-05, late night)
- Epiphany: npm audit vulns patched (undici, nodemailer, mathjs, uuid)
- Grapher: npm audit vulns patched
- Spark: npm audit vulns patched; roadmap updated with fn-cap consolidation plan
- Wiretext: npm audit vulns patched

### Recent (2026-07-05, nightly wrap)
- Talli: iOS build number bumped to 2 for v2.3.3 re-upload
- Healstack: iOS build 2 prepared (icon alpha fix validated, ready for App Store submission)

### Recent (2026-07-05, nightly)
- Lexly: iOS build 202607030001 was broken (xcodegen flattened course resource folders, courses showed "Couldn't load"), fixed via ContentStore bundle-root fallback that walks directory tree to find course-data.json files in nested folders, replaced bad Pre-Calc 12 SF Symbol, verified all flows in simulator (login/courses/masterclass), uploaded fixed iOS build 202607060001 to App Store Connect, added README screenshots
- Brief: iOS 1.0.1 shipped to App Store Connect (ASC app "Brief by Josh" id 6787857503), iPhone-only build uploaded, all metadata/pricing/age rating/review details configured, privacy policy page added to brief.heyitsmejosh.com landing blurb, real case data scrubbed from public README and screenshots, git history rewritten to clean up commit messages leaking personal legal information — submit for review + demo screenshots pending

### Backlog
- [ ] cadence, charters (deleted accidentally, Vercel live — recover)
- [ ] Supabase free tier maxed (2/2) — upgrade to Pro or pause epiphany if inactive
- [ ] labs repos (roost, canlii-app) — publish changes via nulljosh/labs

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
