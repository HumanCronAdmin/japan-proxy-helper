<!-- APPROVED 2026-04-01 -->
# Japan Proxy Helper — Service Spec

> Generated: 2026-03-31 | design agent

---

## Basic Info
- **Name:** Japan Proxy Helper — Compare Proxy & Forwarding Services from Japan
- **One-liner:** Neutral comparison of Japanese proxy buying & forwarding services with troubleshooting guides for overseas buyers.
- **Need:** No neutral all-in-one comparison exists. Reddit/Trustpilot show heavy demand + post-2025 de minimis confusion.
- **Type:** Static site
- **Deploy:** GitHub Pages
- **URL:** `https://humancronadmin.github.io/japan-proxy-helper/`

---

## GitHub Search (3 patterns — no direct match)
Comparison table repos used as reference only. Details in `build-details.txt`.
**Decision:** Build from scratch. Same stack as `money-transfer-japan` (Vue.js + JSON data).

---

## Tech Stack
- HTML / CSS / JS (Vue.js) — no build tools, no server
- Data: `data/services.json` + `data/troubleshooting.json`
- File structure and creation guide: see `build-details.txt`

---

## MVP Scope

### Tab 1: Compare Services (default)
Comparison cards for 6 services: Buyee, ZenMarket, FromJapan, Tenso, White Rabbit Express, Neokyo.
Each card: fee, supported sites, shipping methods, US tariff handling, review score, strengths/weaknesses, last verified date.
Service data and schema: see `build-details.txt`.

### Tab 2: Troubleshooting Guide
JSON-driven accordion — 6 categories: lost package, customs hold, wrong item, damaged item, shipping delays, fee disputes.
Category details: see `build-details.txt`.

### Tab 3: US Import Guide (2025 De Minimis Changes)
$800 duty-free threshold eliminated Aug 29, 2025. Japan Post US suspension. Alternative carriers. How each proxy handles US tariffs. Cost-saving tips.

### Footer
Disclaimer: not affiliated with any service. Verify fees on official sites. Last updated date displayed.

### Excluded from MVP
User review submission, fee calculator, deep-dive pages, real-time exchange rates.

---

## Build Steps

### Step 1: Create project
```
mkdir -p projects/japan-proxy-helper/{css,js,data,images}
```

### Step 2: Create files
See `build-details.txt` for full file list and content guide.

### Step 3: Deploy
```
git init && git remote add origin git@github.com:humancronadmin/japan-proxy-helper.git
git add -A && git commit -m "Initial MVP" && git push -u origin main
```
Enable GitHub Pages on main branch.

---

## Design Rules
- Mobile-first: viewport meta, 480px breakpoint, 44px tap targets
- English-first: all content in English
- Dark header (#1a1a2e) matching japan-* series
- HTML < 200 lines (dynamic content from JS/JSON)
- Cards not tables on mobile

---

## Revenue Model
- **Primary:** Affiliate — Buyee (Skimlinks/Brandreward), ZenMarket (100 JPY/reg), White Rabbit Express (Refersion, 3.5%)
- **Secondary:** AdSense (once traffic grows)
- **Estimate:** M1-6: $0-50 | M6-12: $50-200
- Affiliate details: see `build-details.txt`

---

## Publish Info
- **Target:** Overseas buyers of Japanese goods (anime, fashion, electronics, collectibles)
- **Hook:** "Which Japan proxy service should you use in 2026? Unbiased comparison with real user data."
- **Subreddits:** r/AnimeFigures, r/japanlife, r/JapanTravelTips, r/MangaCollectors
- **note angle:** "Japan proxy comparison site built in a day"
