# Notes

Personal notes repo. Converted from PDF brain dumps, maintained as markdown.

## Structure
```
notes/
  CLAUDE.md       # this file (project instructions + brain dump)
  tally.md        # PWD/DTC disability benefits, contacts, tax credit
  timeline.md     # 5-year roadmap: college, career, projects
  school.md       # UVIC CS transfer reqs, deadlines, prereqs
  pixelmator.md   # Pixelmator + Claude AppleScript workflow
  health.md       # GlyNAC supplement stack, blood work, sinus care
  index.html      # Apple Liquid Glass dashboard
```

## Conventions
- Plain markdown, no frontmatter
- Keep notes concise -- bullet points over paragraphs
- TODOs use `- [ ]` checkbox format
- Completed items use `- [x]` -- prune periodically

---

# Brain Dump Checklist (2026-03-08)

## Opticon
- [x] Fix horizontal scrollbar on mobile (CSS override for webkit/firefox)
- [x] Fix modal dismiss (added close btn, backdrop click, Escape key)
- [ ] Add more events
- [ ] Fix planes/flight API
- [ ] Add news feed (GDELT expansion)
- [ ] Port iOS better
- [ ] Finish roadmaps
- [ ] Integrate sports data
- [ ] Integrate Google Maps / MapLibre
- [ ] Add contact/info page
- [ ] Better page organization, nav links

## Tally
- [x] Notifications persist after viewing (localStorage hash-based read tracking)
- [x] Hide badge when 0 notifications (conditional display)
- [ ] Monthly reports form -- add full question set (employment, relationship, job search, etc)
- [ ] Integrate iOS Notes for ombudsperson/representative/lawyer contacts

## Spark
- [x] Replace 3 demo posts with 6 natural human-sounding ideas

## Lingo
- [x] Scrollbar visible on topic/project list
- [x] Version already at v0.3.0 (no bump needed)
- [ ] Dark mode already solid -- no changes needed

## Arthur
- [x] train.py: batch_size=1, grad_accum=8 (already set)
- [x] Watchdog: alert suppression with consecutive failure counter + last_alert_step
- [x] chat.py: BPETokenizer (already using it)
- [ ] Ship Arthur v1 (finish 100K steps, instruction tuning)
- [ ] Interactive REPL for testing through Claude Code
- [ ] Wire up web_ui.py

## GitHub
- [x] No duplicates found (24 repos clean)
- [x] Bots synced (already up to date)
- [x] Siftly forked to nulljosh/siftly, pushed clean
- [x] Infra KV tests passing (35/35, issue was transient)
- [x] Langs jot/jit -- no module path issue (failures are feature gaps in archived Python versions)

## Journal
- [x] Today's entry exists (2026-03-08-full-audit.md)
- [x] Theme dummy posts already cleaned (private/ removed, .gitignore updated)

## Portfolio
- [x] Skills section language simplified

## Dose
- [x] Substance expansion (agent ran, adding 150+ new entries)
- [ ] Upload health data from iOS
- [ ] Reorder by personal relevancy

## OpenClaw
- [x] Model fallback chain set: gpt-5.4 -> ollama/qwen3:8b
- [x] Removed qwen2.5:3b, kept qwen3:8b
- [ ] Fix gateway internal platform pin caching (known bug)

## Monopolize
- [x] Scaffolded at ~/.local/bin/monopolize (market analysis + opportunity scoring CLI)

## Commands
- [ ] Build /safety command
- [ ] Build /security command
- [ ] Enhance /simplify with natural language suggestions

## Bots
- [ ] Add Starbot iOS note to bots repo
- [ ] Dashboard GUI for all bots

## iOS
- [ ] Lingo iOS app
- [ ] Rabbit iOS app
- [ ] Bump existing iOS apps (opticon, spark, tally, dose)
- [ ] Portfolio iOS app

## Future (Tier 3+)
- [ ] HN + X monitor -> feed ideas into Spark
- [ ] Josh Code (unified LLM CLI)
- [ ] Vibe clone: rename to "vibe", improvements
- [ ] Browser: more scaffolding, v0.1.0
- [ ] Langs: merge jot+jit, ship jung standalone
- [ ] NullOS: custom AI OS concept
- [ ] Hardware: PCB design + fab
- [ ] 2026-2030 roadmap refresh
