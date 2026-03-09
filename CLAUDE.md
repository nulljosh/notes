# Notes

Personal notes repo. Converted from PDF brain dumps, maintained as markdown.

## Structure
```
notes/
  CLAUDE.md                # project instructions + brain dump
  index.html               # dashboard
  notes/                   # markdown content files
  pages/                   # styled note routes
  assets/css/              # shared styles
  assets/js/               # shared scripts + theme toggle
  assets/img/              # visuals
  scripts/simplify.sh      # repo cleanup command
```

## Conventions
- Plain markdown, no frontmatter
- Keep notes concise -- bullet points over paragraphs
- TODOs use `- [ ]` checkbox format
- Completed items use `- [x]` -- prune periodically

---

## Master Note
All notes consolidated in `notes/master.md` (viewable at pages/master.html).

## Quick Commands
- `./scripts/simplify.sh`
- `./scripts/monetize.sh . --write`
- `./scripts/audit.sh .`
- `./scripts/ship.sh .`
