# Notes
v1.1.0
## Repo
- GitHub: github.com/nulljosh/notes (public)
- Live: notes.heyitsmejosh.com
## Brain graph
- Moved into the `brain` repo 2026-09-16 (was colliding with brain's own custom-domain route). Now served from `brain/public/graph/`, live at brain.heyitsmejosh.com/graph.
- `build.py` regenerates index.html from ~/.claude memory; redacts sensitive memories (blocklist + PII scrub) and self-checks output before it can ship.
- Deploy: `cd ../brain && npx wrangler deploy`. template.html is the source; index.html is generated. Scroll wheel zooms, drag pans.
## Obsidian
- notes/ is plain markdown, open ~/Documents/Code/notes/notes as an Obsidian vault (or "Open folder as vault"). No sync layer needed; git is the sync.
## Rules
- Project purpose: Personal notes repo converted from PDF brain dumps and maintained as markdown
- Plain markdown, no frontmatter
- Keep notes concise -- bullet points over paragraphs
- TODOs use `- [ ]` checkbox format
- Completed items use `- [x]` -- prune periodically
- No emojis
- The repo is public. No money figures, family, health, legal, addresses, phone numbers or other people's details. reminders.md, attachments/ and re/ stay local (gitignored).
## Run
```bash
./scripts/simplify.sh
./scripts/monetize.sh . --write
./scripts/audit.sh .
./scripts/ship.sh .
```
## Key Files
- CLAUDE.md: Project instructions and brain dump
- index.html: Dashboard
- notes/: Markdown content files
- pages/: Styled note routes, including pages/master.html for the master note view
- assets/css/: Shared styles
- assets/js/: Shared scripts and theme toggle
- assets/img/: Visuals
- scripts/simplify.sh: Repo cleanup command
- notes/master.md: All notes consolidated, viewable at pages/master.html
- notes/reminders.md: Synced from Apple Reminders via scripts/sync-reminders.sh
## Sync Reminders
```bash
./scripts/sync-reminders.sh
```

## Repo separation (2026-07-13)
notes IS the wiki (braingraph merged in). books and lexly stay separate repos; school masterclass HTML moved here from lexly (pages/pc12-masterclass.html, pages/biology-masterclass.html).
