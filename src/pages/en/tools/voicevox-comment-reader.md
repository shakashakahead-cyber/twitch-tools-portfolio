---
layout: ../../../layouts/ToolLayout.astro
title: "Comment Reader for Twitch (powered by Voicevox)"
description: "Read Twitch chat through your local VOICEVOX engine, with voice, output, dictionary, reply, and reliability controls."
icon: "🗣️"
image: "/images/voicevox-comment-reader-preview.png"
storeUrl: "https://chromewebstore.google.com/detail/eolabmdepbcdcppfdmkibgjffiifndkd?utm_source=item-share-cb"
repoUrl: "https://github.com/shakashakahead-cyber/comment-Reader-for-Twitch-powered-by-Voicevox-"
privacyUrl: "/privacy/voicevox-comment-reader/"
videoId: "NJ9SmGJFUG4"
uploadDate: "2025-12-08T00:00:00+09:00"
faq:
  - question: "Is it free?"
    answer: "Yes. The extension is free. Please follow the applicable VOICEVOX and character terms."
  - question: "How do I capture the audio in OBS?"
    answer: "By default, the extension plays through the browser. Capture that sound through Desktop Audio in OBS, or select an appropriate output device in the extension."
  - question: "Will it keep reading while I view another tab?"
    answer: "Usually yes, as long as Twitch Stream Manager remains open. Reading can stop if the browser suspends or discards the tab."
---

## 🚀 Hear Twitch Chat Through VOICEVOX While You Play

**"Missed a comment while concentrating on the game..."**

**"Reply messages become confusing when the quoted message is read again..."**

**Comment Reader for Twitch** is a Chrome extension that sends chat from Twitch Stream Manager to the VOICEVOX Engine running on your computer.
It lets you follow the conversation without watching the chat window continuously.

### 🌟 Main Features

1. **Local VOICEVOX speech**
   * Convert Twitch chat into natural speech through the VOICEVOX Engine on your computer.
2. **Detailed voice and output controls**
   * Choose the speaker, speed, volume, and audio output device.
   * Stop the queue or play a test message when adjusting your setup.
3. **Streaming-friendly filters**
   * Configure name reading, commands beginning with `!`, and excluded users.
   * Use the replacement dictionary to improve game terms and proper names.
4. **Clear reply reading**
   * Replies are spoken as “Replying to [name]. [new message].”
   * The quoted source message is not read again.

---

## 🔄 Recent Improvements

* Existing messages are no longer replayed after a page refresh or when opening chat popout
* Messages accumulated while popout was open are not replayed when it closes
* New chat is less likely to be missed immediately after tab restoration or page navigation
* Delivery checks, timeouts, and retries were added between chat detection, VOICEVOX, and playback
* A temporary synthesis or playback failure is less likely to block the rest of the speech queue

---

## 📖 Setup Guide

1. Install and launch VOICEVOX from the [official site](https://voicevox.hiroshiba.jp/).
2. Install this Chrome extension.
3. Open Twitch **Creator Dashboard (Stream Manager)**.
4. Open the extension popup and enable speech.
5. Optionally adjust the speaker, speed, volume, output device, filters, and dictionary.

> [!TIP]
> If reading does not start, confirm that the VOICEVOX Engine is running at `http://127.0.0.1:50021`, then reload the Twitch dashboard.

---

## ⚠️ Notes & Credits

* VOICEVOX must remain running in the background.
* The browser may request microphone permission to reveal audio output device names. The extension does not record audio.
* Follow the terms and credit requirements for the VOICEVOX character you use.
  * VOICEVOX: [https://voicevox.hiroshiba.jp/](https://voicevox.hiroshiba.jp/)

<div class="mt-12 flex justify-center">
  <a href="https://chromewebstore.google.com/detail/eolabmdepbcdcppfdmkibgjffiifndkd?utm_source=item-share-cb" target="_blank" class="rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 px-8 py-4 text-lg font-bold text-white shadow-lg hover:from-indigo-400 hover:to-purple-500 hover:shadow-xl transition-all flex items-center gap-3">
    <span>Add to Chrome Web Store</span>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5">
      <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
    </svg>
  </a>
</div>
