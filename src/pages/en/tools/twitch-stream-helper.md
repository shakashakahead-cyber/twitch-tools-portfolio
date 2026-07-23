---
layout: ../../../layouts/ToolLayout.astro
title: "Twitch Stream Helper"
description: "Manage your Twitch title, category, tags, and X announcement in one place, with templates and clear update status."
icon: "🛠️"
image: "/images/twitch-stream-helper-preview.png"
storeUrl: "https://chromewebstore.google.com/detail/twitch-stream-helper/fonjapihhkafhmjfdpdcgfoghngldmep"
privacyUrl: "/privacy/twitch-stream-helper/"
videoId: "02bfIReoEUQ"
uploadDate: "2025-12-05T00:00:00+09:00"
faq:
  - question: "Is it free?"
    answer: "Yes, it is completely free to use."
  - question: "Which browsers are supported?"
    answer: "It works on Chromium-based browsers such as Google Chrome, Microsoft Edge, and Brave."
  - question: "Can I tell whether Twitch was updated?"
    answer: "Yes. The popup shows the current Twitch title and separate pending, applying, applied, and failed states."
  - question: "My title or tags are not updating"
    answer: "Twitch may temporarily rate-limit frequent updates. Follow the message in the popup, wait briefly, and try again."
---

## 🎮 Stream Settings and Announcements in One Place

**"Changing the title, category, and tags for every game takes too long..."**

**"Copying the title and stream URL into every announcement is repetitive..."**

Twitch Stream Helper is a Chrome extension that combines Twitch stream settings and X announcement preparation.
It reduces the time spent moving through the Creator Dashboard before every stream.

### ⚡ Main Features

1. **Update the title, category, and tags together**
   * Save tag combinations for each category and apply them with the title.
   * Related changes are combined into one API request to reduce rapid-update errors.
2. **Title templates with live previews**
   * Insert the category, channel name, tags, date, and other values as variables.
   * Check the expanded title and its 140-character limit before sending it to Twitch.
3. **Clear update status**
   * The popup always shows the title currently stored on Twitch.
   * Pending, applying, applied, and failed states make the result unambiguous.
4. **X announcement composer**
   * Automatically insert the stream title and URL, then open the X composer.
   * You can omit the stream URL or place the title and URL exactly where you want them.

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

Example: `Going live with {category}! {stream_url}`

---

## 🔄 Recent Improvements

* Redesigned popup with clearer settings, templates, and previews
* Automatic title update on blur or Enter
* Queued edits so rapid changes are applied in the correct order
* Category display rolls back if the Twitch update fails
* Clear guidance when Twitch temporarily rate-limits an update

---

## 🛠️ Usage & Workflow

1. Install the extension and log in with your Twitch account.
2. Choose a category and tags, then enter a title template in the popup.
3. Review the preview, then leave the field or press Enter to apply it.
4. Optionally edit the X announcement and open the composer.

---

<div class="mt-12 flex justify-center">
  <a href="https://chromewebstore.google.com/detail/twitch-stream-helper/fonjapihhkafhmjfdpdcgfoghngldmep" target="_blank" class="rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 px-8 py-4 text-lg font-bold text-white shadow-lg hover:from-indigo-400 hover:to-purple-500 hover:shadow-xl transition-all flex items-center gap-3">
    <span>Add to Chrome Web Store</span>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5">
      <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
    </svg>
  </a>
</div>
