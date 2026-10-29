#!/bin/sh
# notes -> Obsidian vault -> brain. One way only: this repo is public, the vault is not.
set -e
cd "$(dirname "$0")/.."
rsync -a --exclude .obsidian notes/ "$HOME/Library/Mobile Documents/iCloud~md~obsidian/Documents/Code/notes/"
cd ../brain
set -a; . ./.env.local; set +a
node ingest.mjs
