# Notes
v1.1.0
## Repo
- GitHub: github.com/nulljosh/notes (private)
- Live: notes.heyitsmejosh.com · brain graph: brain.heyitsmejosh.com (Cloudflare Worker, brain/)
## Brain graph (brain/)
- Merged from the old braingraph repo 2026-07-11; that repo is retired.
- `brain/build.py` regenerates brain/index.html from ~/.claude memory; redacts sensitive memories (blocklist + PII scrub) and self-checks output before it can ship.
- Deploy: `cd brain && npx wrangler deploy` (assets-only Worker, custom domain brain.heyitsmejosh.com).
- template.html is the source; index.html is generated. Scroll wheel zooms, drag pans.
## Obsidian
- notes/ is plain markdown — open ~/Documents/Code/notes/notes as an Obsidian vault (or "Open folder as vault"). No sync layer needed; git is the sync.
## Rules
- Project purpose: Personal notes repo converted from PDF brain dumps and maintained as markdown
- Plain markdown, no frontmatter
- Keep notes concise -- bullet points over paragraphs
- TODOs use `- [ ]` checkbox format
- Completed items use `- [x]` -- prune periodically
- No emojis
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
