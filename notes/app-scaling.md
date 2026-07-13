# App Scaling Playbook

Source: tweet thread, ingested 2026-07-12. Author scaled an app to ~$3k MRR / ~$4k revenue in 45 days. Four mechanics.

## 1. App Store page
Order of importance: screenshots > reviews > name & subtitle > icon.
- Screenshots: high contrast, "3D pop-out" elements, app understood from first image at a glance. Good design + vibrant colour.
- Reviews: no reviews is fine; only bad reviews hurt. Below ~4 stars, consider a rating reset in an update.
- Name & subtitle: critical for ASO, not branding. Top dating apps all use the same keywords (dating, app, chat, singles, meet). Never repeat a word between title and subtitle.
- Icon: barely matters early; long-term brand recognition only.

## 2. Onboarding
Goal: convince user they have a problem, then that your app solves it.
- ~12-13 screens; more screens = fewer reach paywall but higher intent. Measure the tradeoff.
- Quiz: frictionless, max 3-4 screens. Images over text. Social proof if available.
- Sell the outcome, not the product. Every screen fights for its life.
- Measure full funnel with PostHog; aim 75%+ reach paywall.
- Study: PrayerLock, CalAI, Glowly, Feeld/Hinge, Trading212/Monzo. Don't copy 1:1.

## 3. Paywall
Anatomy top to bottom: social proof, big outcome-selling title, features-as-outcomes list, pricing.
- Hard paywall defaults: 49.99/yr, 14.99/mo, 7.99/wk. Don't push yearly above 49.99 (refund risk). Localise high prices.
- Trial default: 49.99/yr with 7-day trial + 7.99/wk no trial.
- Copy big competitors' pricing; they ran the A/B tests.
- Targets: 3% download-to-paid minimum, ~5% healthy, 10%+ excellent.
- EU: 14-day right of withdrawal, refunds auto-approved unless usage-based.
- RevenueCat paywalls: update pricing/design/A-B tests without app review. Stay compliant.

## 4. The app itself
- Sell to a core human desire: health, addiction, appearance, religion, mental health, money, calories, intimacy, learning. Need-based doesn't mean slop (see Hinge).
- Native SwiftUI + liquid glass; iOS only at start (iOS users spend far more). Android once ~10k/mo.
- Keep iterating: features improve retention, retention is money. Log friction points.
- Exit offer: on "manage subscription", show cancel-reason questionnaire then a retention discount (~24.99/yr, maybe lifetime). Only offer to non-yearly users. Big ROI, cuts yearly refunds.
- Notify engaged users based on activity metadata; don't remind dormant weekly subs.

## App Review tips
- Include videos of updates, be very clear about what the app does, never mislead.
- Don't argue with Apple; request a call or expedited review when warranted.

## TLDR
1. Cracked App Store page. 2. Tight onboarding. 3. High-converting paywall. 4. Real value in the app.
