# Notes Technical Whitepaper

**v1.1.0** | August 2026

My notes. A notes app would mean a database I don't control, an export format
I'd fight later, and a company that could vanish with the only copy. Plain
markdown files avoid all three: rendered as a static site at
[notes.heyitsmejosh.com](https://notes.heyitsmejosh.com) and wrapped natively on iOS.
The bet: plain files beat a notes database. You can grep them, git tracks them,
and nothing owns you.

## Content Model

Each domain is one markdown file at the repo root (`ideas.md`,
`app-scaling.md`, …), with `master.md` as the combined view, because
one growing file per topic is easier to reason about than a folder tree that
needs its own navigation. Files are the API: editing a note is a git commit,
publishing is a push, so there is no separate save step to forget and no
sync conflict a real database wouldn't also have to solve.

## Rendering

`index.html` + `pages/` render the markdown client-side as a static site, no
build step, no generator, because a generator is one more thing to keep
working between edits and a git commit already is the build. Styling comes from the shared portfolio design
tokens (`tokens.css`, synced from heyitsmejosh.com), so the site looks like
the rest of the portfolio without a second design system to maintain. The `brain/` section
holds the merged braingraph wiki content, merged in because a second notes
repo was never a real second product.

## Apple Reminders Sync

`scripts/sync-reminders.sh` pulls Apple Reminders headlessly (plain
AppleScript reads, no UI scripting, because UI scripting breaks the moment
a dialog moves) into `reminders.md`, making the site the
single view over both hand-written notes and system reminders. One-way sync:
Reminders is the source, the markdown file is the render, because a
two-way sync would need conflict resolution for a feature that's really
just a mirror.

## iOS App

A WKWebView wrapper of the live site (xcodegen project in `ios/`), chosen
over a native rewrite because the site is mobile-first, so the wrapper adds only native chrome and an icon, no
duplicated content pipeline to keep in sync with the web version.

## License

MIT 2026, Joshua Trommel
