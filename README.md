<img src="icon.svg" width="80" style="border-radius:18px">

# notes

![Version](https://img.shields.io/badge/version-1.1.0-blue) ![Platform](https://img.shields.io/badge/platform-web%20%7C%20iOS%2017-lightgrey) ![License](https://img.shields.io/badge/license-MIT-green) [![GitHub](https://img.shields.io/badge/GitHub-nulljosh%2Fnotes-black?logo=github)](https://github.com/nulljosh/notes)

Personal notes and reference. Maintained as plain markdown, viewable at [notes.heyitsmejosh.com](https://notes.heyitsmejosh.com) and natively on iOS.

<p align="center">
  <img src="screenshots/1-dashboard.jpg" width="200">
</p>

## Notes

- `master.md` — all notes combined: tasks, health, timeline, school, benefits
- `health.md` — GlyNAC supplement stack, blood work, sinus care
- `tally.md` — PWD/DTC disability benefits, contacts, tax credit
- `timeline.md` — 5-year roadmap: college, career, projects
- `school.md` — UVIC CS transfer requirements, deadlines, prereqs
- `pixelmator.md` — Pixelmator + Claude AppleScript workflow
- `reminders.md` — synced from Apple Reminders

## Architecture

![Architecture](assets/img/architecture.svg)

Markdown files rendered as a static site via `index.html` + `pages/`. Notes sync from Apple Reminders via `scripts/sync-reminders.sh`. iOS app is a WKWebView wrapper of the live site.

## Build (iOS)

```bash
cd ios
xcodegen generate
open notes.xcodeproj
```

## Scripts

```bash
./scripts/simplify.sh      # normalize structure
./scripts/sync-reminders.sh  # sync Apple Reminders → reminders.md
./scripts/ship.sh .        # deploy
```

## License

MIT 2026, Joshua Trommel
