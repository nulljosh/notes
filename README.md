<div align="center">

# Notes

<img src="assets/img/icon.svg" alt="Notes" width="120" />

Personal notes repo. Converted from PDF brain dumps, maintained as markdown.

[notes.heyitsmejosh.com](https://notes.heyitsmejosh.com)

</div>

## Architecture

![Architecture](assets/img/architecture.svg)

## Structure
```
notes/
  master.md       # All notes combined -- tasks, health, timeline, school, benefits, pixelmator
  tally.md        # PWD/DTC disability benefits, contacts, tax credit
  timeline.md     # 5-year roadmap: college, career, projects
  school.md       # UVIC CS transfer reqs, deadlines, prereqs
  pixelmator.md   # Pixelmator + Claude AppleScript workflow
  health.md       # GlyNAC supplement stack, blood work, sinus care
  index.html      # Dashboard
```

## Conventions
- Plain markdown, no frontmatter
- Keep notes concise -- bullet points over paragraphs
- TODOs use `- [ ]` checkbox format
- Completed items use `- [x]` -- prune periodically

## License

MIT 2026, Joshua Trommel

## Quick Commands
- `./scripts/simplify.sh` - normalize project structure
- `./scripts/monetize.sh . --write` - generate monetization plan (if available)
- `./scripts/audit.sh .` - run fast project audit (if available)
- `./scripts/ship.sh .` - run checks and ship (if available)
