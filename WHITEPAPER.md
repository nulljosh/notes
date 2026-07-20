# Notes Technical Whitepaper

**v1.1.0** | July 2026

Notes is a personal knowledge base: plain markdown files, rendered as a static
site at [notes.heyitsmejosh.com](https://notes.heyitsmejosh.com) and wrapped
natively on iOS. The design bet is that plain files beat a notes database —
grep-able, git-versioned, no lock-in.

## Content Model

Each domain is one markdown file at the repo root (`health.md`, `school.md`,
`timeline.md`, `tally.md`, …), with `master.md` as the combined view. Files
are the API: editing a note is a git commit, publishing is a push.

## Rendering

`index.html` + `pages/` render the markdown client-side as a static site — no
build step, no generator. Styling comes from the shared portfolio design
tokens (`tokens.css`, synced from heyitsmejosh.com). The `brain/` section
holds the merged braingraph wiki content.

## Apple Reminders Sync

`scripts/sync-reminders.sh` pulls Apple Reminders headlessly (plain
AppleScript reads, no UI scripting) into `reminders.md`, making the site the
single view over both hand-written notes and system reminders. One-way sync:
Reminders is the source, the markdown file is the render.

## iOS App

A WKWebView wrapper of the live site (xcodegen project in `ios/`). The site is
mobile-first, so the wrapper adds only native chrome and an icon — no
duplicated content pipeline.

## License

MIT 2026, Joshua Trommel
