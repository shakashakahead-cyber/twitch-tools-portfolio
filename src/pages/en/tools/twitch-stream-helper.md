---
layout: ../../../layouts/ToolLayout.astro
title: "Twitch Stream Helper"
description: "Manage Twitch stream settings, automatic chat comments, and local Analytics in one place. v1.2.0 records viewers, chat participation, follows, raids, and stream history for post-stream review."
icon: "🛠️"
image: "/images/twitch-stream-helper-preview.png"
storeUrl: "https://chromewebstore.google.com/detail/twitch-stream-helper/fonjapihhkafhmjfdpdcgfoghngldmep"
privacyUrl: "/privacy/twitch-stream-helper/#english"
repoUrl: "https://github.com/shakashakahead-cyber/twitch-stream-helper"
tags: ["Twitch", "ChromeExtension", "Stream", "Analytics"]
videoId: "02bfIReoEUQ"
uploadDate: "2025-12-05T00:00:00+09:00"
faq:
  - question: "Is it free?"
    answer: "Yes, it is completely free to use."
  - question: "Which browsers are supported?"
    answer: "v1.2.0 requires Chromium 116 or later, including current versions of Google Chrome, Microsoft Edge, and Brave."
  - question: "What can I see in Analytics?"
    answer: "Per-stream average and peak viewers, viewer trends, first-time and returning chatters, new follows, raids, title/category history, period charts, and CSV exports."
  - question: "Can it recover older stream data?"
    answer: "Twitch history sync can add available archive VODs and current follower information. Viewer samples and chat/follow/raid events that were not measured at the time cannot be reconstructed."
  - question: "Is Analytics data sent to the developer?"
    answer: "No. Analytics history is stored locally in account-specific IndexedDB databases in your browser. Twitch API and EventSub traffic goes directly to Twitch services."
  - question: "Does Analytics require extra permissions?"
    answer: "Yes. Only when Analytics is enabled, Twitch OAuth additionally requests follower-read and chat-read scopes. v1.2.0 does not add any new Chrome extension permissions."
  - question: "Does automatic chat posting start when I log in?"
    answer: "No. Automatic posting is off by default. Save a comment and explicitly enable posting once when a stream starts."
---

## 🎮 From Stream Setup to Post-Stream Review

Twitch Stream Helper is a Chrome extension for managing **Twitch titles, categories, tags, X announcements, automatic chat comments, and stream Analytics** in one place.

**v1.2.0 adds local Analytics.** While Chrome and your computer are running, it can record viewer samples, chat participation, follows, raids, and stream changes so you can review each broadcast later.

The latest source and ZIP package are also available from [GitHub Releases](https://github.com/shakashakahead-cyber/twitch-stream-helper/releases/latest).

### ⚡ Main Features

1. **Manage title, category, and tags together**
   * Save tags by category and use title template variables.
   * See whether title changes have been applied to Twitch.
2. **Compose X announcements**
   * Insert title, category, tags, channel, date/time, and stream URL through template variables.
   * The extension opens the X composer for review; it does not publish automatically to X.
3. **Automatic saved chat comments with optional pinning**
   * Save a default comment and category-specific variants, then post once per stream.
   * Pins can last until the stream ends, 30 minutes, or 10 minutes.
4. **Local stream Analytics (v1.2.0)**
   * Record average/peak viewers, viewer trends, first-time and returning chatters, new follows, and incoming raids.
   * Save title/category history, notes, multiple labels, and title ratings for each stream.
5. **Period comparisons, history sync, and CSV export**
   * Switch between 7 days, 30 days, 90 days, 1 year, and all-time views.
   * Sync available Twitch archive VODs and the current follower list.
   * Export `streams.csv` and `viewer_samples.csv`. CSV import is not included.

---

## 📊 Analytics (v1.2.0)

Open the dedicated Analytics tab from the extension popup. The first time, choose **Enable Analytics / Authorize** to grant the additional Twitch permissions used only by Analytics.

### What Analytics Records

* **Per stream:** observed start/end information, duration, title/category history, raids, notes, labels, and title rating
* **Viewers:** Twitch `viewer_count` sampled about once per minute, used for average, peak, and trend charts
* **Chat participation:** first-time and returning chatters per stream
* **Follows:** newly observed follow events plus snapshots of the current follower list and total count
* **Period charts:** viewer trends, total followers, daily follows, chatter participation, monthly stream hours and count, and more

The **per-stream record** section opens on the latest saved broadcast. Use **Previous stream** and **Next stream** to move through the full saved timeline, or return to the latest stream. Stream details include raw viewer samples, data coverage, title/category history, raids, and comparisons with recent broadcasts.

### Coverage and Missing Data

Analytics records data while Chrome and the computer are running. Sleep, browser shutdowns, connection failures, or EventSub interruptions can create gaps. Missing viewer values are not interpolated; the UI records coverage and warns when viewer or event data may be incomplete.

Twitch history sync can add available archive VODs, but **viewer samples and chat/follow/raid events that were never observed cannot be recovered later.** VOD duration is stored separately from measured live duration rather than being treated as an exact replacement.

### Twitch History Sync

When Analytics is enabled, the extension pages through available archive VODs and the current follower list. VOD history is refreshed daily and after a stream ends; the full follower list is refreshed weekly. You can also run **Sync Twitch history** manually.

If Chrome closes during a paged sync, progress is saved and can resume later. A VOD being removed from Twitch later does not automatically delete a stream record already stored locally.

### OAuth Permissions

The normal extension features use:

* `channel:manage:broadcast` — update title, category, and tags
* `user:write:chat` — send saved chat comments
* `moderator:manage:chat_messages` — pin a posted comment

Only when Analytics is enabled, it additionally requests:

* `moderator:read:followers` — read follower information
* `user:read:chat` — receive chat events through EventSub

Chrome permissions remain `identity`, `storage`, and `alarms`; v1.2.0 adds no new Chrome permission. See the [privacy policy](/privacy/twitch-stream-helper/#english) for details.

---

## 💬 Automatic Saved Chat Comments

1. Log in with Twitch and enter a default saved comment.
2. Optionally add category-specific comments.
3. Choose whether to pin the message and for how long.
4. Enable posting once when a stream starts and save the settings.

The browser periodically checks the stream while Chrome is running and the computer is awake. Delivery records are stored locally to avoid duplicate posts for the same broadcast.

---

## ✨ Template Variables

| Variable | Value |
| --- | --- |
| `{category}` | Selected category name |
| `{category_hashtag}` | Hashtag generated from the category |
| `{channel}` | Twitch channel name |
| `{stream_url}` | Twitch stream URL |
| `{tags}` | Selected tags |
| `{tag_hashtags}` | Selected tags converted to hashtags |
| `{date}` / `{time}` | Local date and time |
| `{title}` | Current stream title (X announcement only) |

---

## 🔄 Update History

### 2026-09-11 — v1.2.0

* Added local per-stream Analytics
* Record average/peak viewers, chat participation and returns, new follows, raids, and title/category history
* Added previous/next stream navigation, period KPIs/charts, and detailed stream views
* Added Twitch history sync, notes, labels, title ratings, and CSV export
* Improved data coverage warnings, EventSub reconnect behavior, and separation of VOD timing from observed live timing
* Added `moderator:read:followers` and `user:read:chat` only for users who enable Analytics
* Requires Chromium 116 or later

### 2026-09-11 — v1.1.0

* Added one saved chat comment per stream with optional pinning
* Added default/category comments, pin durations, manual retry, and local duplicate prevention

### 2026-07-23 — Templates and Update Status

* Improved popup UI, template variables, live previews, update status, and rate-limit guidance

---

## 🛠️ Typical Workflow

1. Install the extension and log in with Twitch.
2. Manage title, category, tags, and X announcement text from the popup.
3. Optionally configure automatic chat posting and pinning.
4. To use Analytics, open its dedicated tab and grant the additional OAuth scopes.
5. After streaming, review details, period charts, comparisons, or CSV exports.

---

<div class="mt-12 flex justify-center">
  <a href="https://chromewebstore.google.com/detail/twitch-stream-helper/fonjapihhkafhmjfdpdcgfoghngldmep" target="_blank" class="rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 px-8 py-4 text-lg font-bold text-white shadow-lg hover:from-indigo-400 hover:to-purple-500 hover:shadow-xl transition-all flex items-center gap-3">
    <span>Add from Chrome Web Store</span>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5">
      <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
    </svg>
  </a>
</div>
