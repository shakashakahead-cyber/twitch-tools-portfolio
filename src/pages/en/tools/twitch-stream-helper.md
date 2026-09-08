---
layout: ../../../layouts/ToolLayout.astro
title: "Twitch Stream Helper"
description: "Manage your Twitch title, category, tags, and X announcement in one place. Upcoming v1.1.0 adds one saved chat comment per stream with optional pinning."
icon: "🛠️"
image: "/images/twitch-stream-helper-preview.png"
storeUrl: "https://chromewebstore.google.com/detail/twitch-stream-helper/fonjapihhkafhmjfdpdcgfoghngldmep"
privacyUrl: "/privacy/twitch-stream-helper/#english"
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
  - question: "Does automatic posting start as soon as I log in?"
    answer: "No. In v1.1.0, automatic posting is off by default. Enter a comment, enable Post once when a stream starts, and save the settings. Users signed in with older permissions need to log in again once."
  - question: "Can it post with the browser closed?"
    answer: "The popup can be closed, but the browser must be running and the computer awake. Stream checks run about once a minute, so posting at the exact moment a stream starts is not guaranteed."
  - question: "Will it post again if I change categories during a stream?"
    answer: "No. The comment is selected using the Twitch category at posting time. Changing categories during that stream does not trigger another post. Expired or manually removed pins are not automatically restored."
---

## 🎮 Stream Settings and Announcements in One Place

**"Changing the title, category, and tags for every game takes too long..."**

**"Copying the title and stream URL into every announcement is repetitive..."**

Twitch Stream Helper is a Chrome extension that combines Twitch stream settings and X announcement preparation.
It reduces the time spent moving through the Creator Dashboard before every stream.

**v1.1.0 is being prepared for release.** Automatic chat posting and pinning described below are new in v1.1.0. Check the version listed in the Chrome Web Store before installing.

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
5. **One saved chat comment per stream, with optional pinning (v1.1.0)**
   * Post saved rules or participation instructions once per stream to your own live chat, from your own account. Automatic posting is off by default.
   * Save a default comment and category-specific comments, each up to 500 characters. Optionally pin the comment until the stream ends, for 30 minutes, or for 10 minutes.

---

## 💬 Set Up Automatic Chat Comments (v1.1.0)

1. Log in with Twitch and enter a default message in **Saved chat comment**.
2. Optionally choose categories from category history and save separate comments. A blank category comment falls back to the default.
3. Choose whether to enable **Pin the comment** and select a pin duration.
4. Enable **Post once when a stream starts** and click **Save settings**. Saving requires login.

The extension checks your stream about once a minute while the browser is running and the computer is awake, even with the popup closed. If you enable it or restart the browser during an already-live stream, it posts at the next check if that stream has not been handled. It cannot detect a stream starting while the browser is closed or the computer is asleep.

The Twitch category at posting time selects the message. Changing categories during that stream does not trigger another post. The title and X template variables listed below are not expanded in chat comments.

### Manual Posting, Retries, and Pinning

* Use **Post now / retry** while live. It does not repost a comment already sent for that stream. If only pinning failed, it retries pinning the original message with the original duration.
* Failed writes are not automatically retried. If rate-limited, wait at least one minute, or until Twitch's specified retry time if later, then retry manually.
* An uncertain delivery is not resent, to avoid duplicates. Check Twitch chat and, if the message is missing, post it manually on Twitch.
* Pinning replaces the existing pinned comment. Expired or manually removed pins are not automatically restored, and do not trigger another post.
* During Shared Chat, your comment is also shown in the shared channels.

Duplicate prevention uses delivery records in this browser, retaining the latest 100 streams per account. It cannot prevent duplicates after clearing data or reinstalling, or when running the extension on multiple computers or browsers at once.

### Login and Stopping Automatic Posting

In v1.1.0, normal login requests stream-management, chat-posting, and chat-message-management permissions together. The extension uses chat-message management to pin comments. These permissions are requested even if you do not use automatic posting or pinning. Users signed in with older permissions are guided to log in again once; saved settings and delivery records are retained.

To stop automatic posting, uncheck the option and save, or log out. Logout turns automatic posting off and stops periodic checks, but keeps comment settings and delivery records. After switching accounts, review the comments and save the settings again. Expired authorization also requires login again. See the [privacy policy](/privacy/twitch-stream-helper/#english) for details.

---

## ✨ Template Variables

These variables apply to stream titles and X announcements, not saved chat comments.

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

## 🔄 Update History

### v1.1.0 — Preparing for Release

* Automatic posting of one saved chat comment per stream, with optional pinning
* Default and category-specific comments, pin durations, and manual posting/retry controls
* Posting and pinning status, with local delivery records to prevent duplicates
* Chrome's `alarms` permission for periodic checks, plus Twitch chat-posting and pinning permissions; existing users need to log in again

### 2026-07-23 — Templates and Update Status

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
5. In v1.1.0, follow the steps above to configure automatic chat posting and pinning.

---

<div class="mt-12 flex justify-center">
  <a href="https://chromewebstore.google.com/detail/twitch-stream-helper/fonjapihhkafhmjfdpdcgfoghngldmep" target="_blank" class="rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 px-8 py-4 text-lg font-bold text-white shadow-lg hover:from-indigo-400 hover:to-purple-500 hover:shadow-xl transition-all flex items-center gap-3">
    <span>Add to Chrome Web Store</span>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5">
      <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
    </svg>
  </a>
</div>
