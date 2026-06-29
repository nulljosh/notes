#!/bin/sh
# Sync the "Reminders" list from Apple Reminders → notes/reminders.md
# ponytail: AppleScript dump; run manually, no daemon needed

OUT="$(dirname "$0")/../notes/reminders.md"

osascript <<'APPLESCRIPT' > "$OUT"
tell application "Reminders"
  set output to "# Reminders" & linefeed & linefeed
  repeat with r in reminders of list "Reminders"
    if completed of r then
      set output to output & "- [x] " & name of r & linefeed
    else
      set output to output & "- [ ] " & name of r & linefeed
    end if
  end repeat
  return output
end tell
APPLESCRIPT

echo "Synced to $OUT"
