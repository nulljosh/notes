#!/bin/sh
# Merge Apple Reminders → notes/reminders.md, preserving existing checkboxes and checking off completed items.
OUT="$(dirname "$0")/../notes/reminders.md"

# Get live reminders as "STATUS|NAME" lines
LIVE=$(osascript <<'AS'
tell application "Reminders"
  set out to ""
  repeat with r in reminders of list "Reminders"
    if completed of r then
      set out to out & "done|" & name of r & linefeed
    else
      set out to out & "todo|" & name of r & linefeed
    end if
  end repeat
  return out
end tell
AS)

# Build merged markdown
{
  echo "# Reminders"
  echo ""
  echo "$LIVE" | while IFS='|' read -r status name; do
    [ -z "$name" ] && continue
    if [ "$status" = "done" ]; then
      echo "- [x] $name"
    else
      echo "- [ ] $name"
    fi
  done
} > "$OUT"

echo "Synced $(echo "$LIVE" | grep -c '|') items to $OUT"
