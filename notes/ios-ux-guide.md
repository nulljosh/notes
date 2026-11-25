# iOS UX and Accessibility Guide

One rule set for every app. Audit numbers are from a grep of each app's Swift on 2026-11-25 (counts of calls, not quality). Nimble is the reference.

## The rules

**Intuitive (first 10 seconds)**
1. One job per screen. The primary action is a single prominent button, bottom third (thumb reach).
2. First launch: the Stocks-style welcome (`/onboarding`), three rows, one Continue. Never a login wall before value. Empty states teach with `ContentUnavailableView` and one action button.
3. Standard controls first: NavigationStack, TabView (max 5 tabs), List/Form, sheets, swipe actions, context menus. Custom only where the app's whole point is the custom thing.
4. Every destructive action is confirmable or undoable. Prefer undo over alert.
5. Say what happened: loading skeleton or ProgressView, inline error with a retry, success haptic. No silent failures.
6. Verbs on buttons ("Save entry", not "OK"). Plain words, no jargon, no emojis.

**Accessible (ship blockers, matched to Apple's nutrition labels)**
1. Dynamic Type: text styles only (`.body`, `.headline`), never `.font(.system(size:))`. Where a number must be fixed, wrap it in `@ScaledMetric`. Test at AX5: layouts switch from HStack to VStack with `ViewThatFits` or `dynamicTypeSize.isAccessibilitySize`, nothing truncates a primary label.
2. VoiceOver: every icon-only button gets `.accessibilityLabel`. Group a row into one element (`.accessibilityElement(children: .combine)`). Decorative images `.accessibilityHidden(true)`. Custom controls get `.accessibilityAddTraits` and `.accessibilityAdjustableAction`. `.accessibilityHint` only when the label is not enough.
3. Contrast: 4.5:1 body, 3:1 large text and icons. Use semantic colors (`.primary`, `.secondary`, asset catalog with light, dark and high-contrast variants), never raw hex in views. Check `colorSchemeContrast`.
4. Never color alone: pair with an icon or text (`accessibilityDifferentiateWithoutColor`).
5. Reduce Motion: every animation over ~0.3s or any parallax/zoom checks `accessibilityReduceMotion` and swaps to a fade. Reduce Transparency: glass falls back to solid.
6. Touch targets 44x44pt minimum. 8pt between neighbors.
7. Voice Control and Switch Control: labels match visible text. Gestures always have a button alternative.
8. Haptics: `.sensoryFeedback` on commit moments only (save, complete, error). Never required to understand state.
9. Captions or transcripts for any audio (echo, patois).

**Native feel**
Inset grouped lists, SF Symbols (variable color, hierarchical), system materials, one corner radius family, 8pt grid, large titles that collapse, pull-to-refresh, swipe back never blocked. See `/apple`, `/ui`, `/gestures`.

## Audit (iOS targets, counts in Swift source)

Reading the table (rechecked talli, echo and machaon by hand: numbers hold; `styles` only counts `.font(.body)` style calls so it undercounts other forms): `labels` = accessibilityLabel calls, `fixed` = `.font(.system(size:))` (Dynamic Type breakers), `styles` = text-style fonts, `motion` = reduceMotion checks, `hex` = hardcoded colors.

| App | files | labels | fixed | styles | motion | hex | verdict |
|---|---|---|---|---|---|---|---|
| nimble | 83 | 21 | 8 | 10 | 12 | 13 | best a11y, the reference. Few text styles though, check scaling |
| blackcomb | 19 | 33 | 2 | 24 | 0 | 0 | strong labels, add motion |
| kernel | 63 | 22 | 4 | 24 | 2 | 18 | good, uses Dynamic Type |
| temida | 45 | 12 | 3 | 29 | 2 | 14 | good, has onboarding |
| bugle | 44 | 19 | 2 | 43 | 0 | 13 | good labels, add motion |
| icelus | 116 | 18 | 9 | 22 | 4 | 16 | OK, big surface, fixed fonts to fix |
| elah | 14 | 17 | 4 | 24 | 2 | 7 | good for size, no onboarding |
| epiphany | 73 | 17 | 13 | 247 | 3 | 20 | fonts fine, 13 fixed, widgets 0 labels |
| talli | 55 | 6 | **31** | 206 | 2 | 4 | worst Dynamic Type risk (macOS 37 fixed). Disability app: must be exemplary |
| machaon | 79 | **1** (4 a11y modifiers of any kind) | 11 | 218 | 2 | 21 | almost no VoiceOver for a health app |
| echo | 49 | 3 | 12 | **0** | 2 | 2 | zero text styles, all fixed sizes |
| keyrate | 10 | 4 | 19 | 1 | 2 | 9 | fixed sizes by nature, needs ScaledMetric |
| numen | 8 | 1 | 9 | 0 | 0 | 7 | fixed fonts, no labels |
| noema | 7 | 0 | 22 | 0 | 0 | 4 | macOS, fixed fonts |
| pan | 15 | 8 | 1 | 3 | 0 | 10 | graph canvas needs audio/table alternative |
| turing | 11 | 9 | 9 | 1 | 0 | 6 | fixed fonts |
| coda | 19 | **1** | 0 | **1** | 6 | 22 | text styles missing, hex colors |
| gastown | 49 | **1** | 0 | 3 | 0 | **43** | game UI, all custom, no labels |
| patois | 24 | 7 | 4 | 46 | 0 | 27 | learning app, needs reduce motion and audio captions |
| cyllene | 62 | 4 | 4 | 15 | 0 | 3 | few labels for 62 files |
| tocks | 24 | 10 | 14 | 36 | 0 | 4 | clock digits fixed: ScaledMetric |
| plaintxt | 21 | 1 | 6 | 13 | 0 | 5 | editor must honor Dynamic Type for body text |
| melete | 30 | 4 | 2 | 59 | 5 | 3 | decent, widgets and watch 0 labels |
| mailbag | 11 | 2 | 2 | 1 | 0 | 2 | one-button app, label the button well |
| atlin / scrounger / sighting / homeroom | 8 to 16 | 1 to 6 | 0 to 1 | 13 to 30 | 0 | 0 | clean text styles and no hex, thin labels. Map views need labels |
| airwell | 9 | 1 | 0 | 8 | 0 | 3 | breathing guide: reduce motion is the whole feature, add it |
| costanza, eponym, hamurapi, toroid, fieldbook, homeqi, mirage, duke | small | 0 to 6 | | | | | fill labels, add text styles |

Onboarding exists only in epiphany, kernel, machaon, temida (loose grep, verify per app). Empty states (`ContentUnavailableView`) are missing in gastown, cyllene, elah, airwell, pan and others with 0 hits.

## Patterns worth copying

- **nimble**: `dynamicTypeSize` (8), `reduceMotion` (12), hints (5). Copy its reduce motion wrapper into a shared snippet.
- **blackcomb**: label discipline, 33 labels in 19 files.
- **kernel / temida**: onboarding plus Dynamic Type plus empty states together.
- **epiphany**: text-style discipline at scale (247 uses).

## Roadmap

**Phase 0, tooling (one afternoon, cheap).** Add `scripts/a11y-audit.sh` to labs that prints the table above, so progress is a diff, not a vibe. Make the 5 checks below a CI step per app (fail on new `.font(.system(size:` outside an allowlist).

**Phase 1, ship blockers, in this order (worst risk for the user group first).**
1. **talli** (disability users): kill 31 fixed fonts, labels on every control, AX5 pass, high contrast.
2. **machaon** (health): VoiceOver pass, 1 label is not enough, chart summaries via `.accessibilityChartDescriptor`.
3. **echo, numen, noema, keyrate, tocks, turing**: replace fixed fonts with text styles or ScaledMetric.
4. **coda, gastown, cyllene, plaintxt, mailbag**: labels on every button, text styles.
5. **airwell, patois**: Reduce Motion alternatives.

**Phase 2, intuitive first run.** Run `/onboarding` on every app that lacks it (everything except epiphany, kernel, machaon, temida). Add empty states with one action. Add undo to destructive actions. Verbs on buttons.

**Phase 3, polish.** Colors into asset catalogs with high-contrast variants (hex counts above, gastown 43, patois 27, coda 22 first). Widgets and watch targets: labels (epiphany, melete, talli widgets have 0). Haptics on commit moments (only 12 apps have any).

**Phase 4, verify.** Per app: Xcode Accessibility Inspector audit, Environment Overrides at AX5, VoiceOver walk of the main flow on device, Voice Control "show numbers", Increase Contrast, Reduce Motion, grayscale. Then declare Accessibility Nutrition Labels in ASC honestly (VoiceOver, Larger Text, Sufficient Contrast, Reduced Motion, Differentiate Without Color). Xcode skills exist for each: `accessibility-dynamic-type-specialist`, `accessibility-voiceover-specialist`, `accessibility-sufficient-contrast-specialist`.

## Per-app done checklist (copy into each roadmap.md)

- [ ] No `.font(.system(size:` outside allowlist; AX5 screenshot clean
- [ ] Every icon-only control has a label; main flow walked with VoiceOver
- [ ] Contrast 4.5:1 light, dark, increased contrast
- [ ] Reduce Motion and Reduce Transparency handled
- [ ] 44pt targets, no gesture-only actions
- [ ] Welcome screen, empty states, undo on destructive actions
- [ ] Nutrition labels set in ASC to match reality

## Sources

Apple HIG (Accessibility, Typography, Color, Motion, Layout, Onboarding), WCAG 2.1 AA, Apple Accessibility Nutrition Labels, WWDC accessibility sessions. Existing skills: `/apple`, `/ui`, `/onboarding`, `/gestures`, `/mobbin`, `swiftui-pro`.
