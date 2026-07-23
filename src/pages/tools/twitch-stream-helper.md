---
layout: ../../layouts/ToolLayout.astro
title: "Twitch Stream Helper"
description: "Twitchの配信タイトル・カテゴリ・タグ・X告知を1か所で管理。テンプレートと反映状態の表示で配信準備を効率化するChrome拡張機能。"
icon: "🛠️"
image: "/images/twitch-stream-helper-preview.png"
storeUrl: "https://chromewebstore.google.com/detail/twitch-stream-helper/fonjapihhkafhmjfdpdcgfoghngldmep"
privacyUrl: "/privacy/twitch-stream-helper/"
repoUrl: "https://github.com/shakashakahead-cyber/twitch-stream-helper"
tags: ["Twitch", "ChromeExtension", "Stream"]
# 動画ができたらIDを入れてください。空欄または行ごと削除で非表示になります。
videoId: "2R0BOg5NbpY"
uploadDate: "2025-12-05T00:00:00+09:00"
faq:
  - question: "無料で使えますか？"
    answer: "はい、完全無料でお使いいただけます。"
  - question: "どのブラウザで使えますか？"
    answer: "Google Chrome、Microsoft Edge、BraveなどのChromiumベースのブラウザで動作します。"
  - question: "Twitchに反映されたか確認できますか？"
    answer: "はい。現在のTwitchタイトルと「未反映・反映中・反映済み・反映失敗」の状態をポップアップに表示します。"
  - question: "配信タイトルやタグが反映されません"
    answer: "短時間に何度も更新するとTwitch側のレート制限を受ける場合があります。表示された案内に従って少し待ち、再度お試しください。"
---

## 🎮 配信前の設定と告知を、ひとつの画面で

<div class="bg-indigo-500/10 border border-indigo-500/20 rounded-xl p-6 mb-8">
  <ul class="space-y-4">
    <li class="flex items-start gap-3">
        <span class="text-xl">😓</span>
        <span class="font-bold text-indigo-200">「ゲームを変えるたびに、タイトル・カテゴリ・タグを直すのが面倒…」</span>
    </li>
    <li class="flex items-start gap-3">
        <span class="text-xl">😓</span>
        <span class="font-bold text-indigo-200">「配信告知にタイトルやURLを毎回コピーするのが手間…」</span>
    </li>
  </ul>
</div>

Twitch Stream Helperは、Twitchの配信設定とXの告知準備をまとめて行えるChrome拡張機能です。
重いクリエイターダッシュボードを行き来せず、配信前のルーティンを短時間で整えられます。

### ⚡ 主な機能

1. **タイトル・カテゴリ・タグをまとめて更新**
   * カテゴリごとにタグの組み合わせを保存し、タイトルと一緒に適用できます。
   * 関連する変更を1回のAPI通信にまとめ、短時間の連続更新によるエラーを抑えます。
2. **タイトルテンプレートとリアルタイムプレビュー**
   * カテゴリ名、チャンネル名、タグ、日付などを変数として挿入できます。
   * 展開後の文字列と140文字の上限を、Twitchへ送る前に確認できます。
3. **分かりやすい反映状態**
   * 現在Twitchに設定されているタイトルを常時表示します。
   * 編集中、反映中、反映済み、失敗を区別して表示するため、更新結果を見失いません。
4. **X告知文の作成**
   * 配信タイトルやURLを自動挿入し、Xの投稿画面を開きます。
   * 配信URLを付けない設定や、タイトル・URLを好きな位置に置くテンプレートにも対応しています。

---

## ✨ テンプレートで使える変数

| 変数 | 内容 |
| --- | --- |
| `{category}` | 選択中のカテゴリ名 |
| `{category_hashtag}` | カテゴリ名から生成したハッシュタグ |
| `{channel}` | Twitchチャンネル名 |
| `{stream_url}` | Twitch配信URL |
| `{tags}` | 選択中のタグ |
| `{tag_hashtags}` | タグをハッシュタグ化した文字列 |
| `{date}` / `{time}` | 現地の日付・時刻 |
| `{title}` | 現在の配信タイトル（X告知文のみ） |

例：`【{category}】{date} 配信スタート！ {stream_url}`

---

## 🔄 最近の改善

* ポップアップUIを刷新し、配信設定・テンプレート・プレビューを整理
* タイトル編集後、フォーカス移動またはEnterで自動反映
* 更新中に続けて編集しても、順序が逆転しないよう送信を制御
* カテゴリ更新に失敗した場合、画面表示を以前の値へ戻すよう改善
* Twitchのレート制限時に、待機が必要なことを分かりやすく案内

---

## 🛠️ 使い方とワークフロー

1. 拡張機能をインストールし、Twitchアカウントでログインします。
2. ポップアップでカテゴリとタグを選び、タイトルテンプレートを入力します。
3. プレビューを確認し、入力欄からフォーカスを外すかEnterを押して反映します。
4. 必要に応じてX告知文を編集し、投稿画面を開きます。

---

<div class="mt-12 flex justify-center">
  <a href="https://chromewebstore.google.com/detail/twitch-stream-helper/fonjapihhkafhmjfdpdcgfoghngldmep" target="_blank" class="rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 px-8 py-4 text-lg font-bold text-white shadow-lg hover:from-indigo-400 hover:to-purple-500 hover:shadow-xl transition-all flex items-center gap-3">
    <span>Chrome Web Storeで今すぐ追加</span>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5">
      <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
    </svg>
  </a>
</div>
