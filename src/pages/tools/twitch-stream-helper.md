---
layout: ../../layouts/ToolLayout.astro
title: "Twitch Stream Helper"
description: "Twitchの配信設定・自動コメント・Analyticsをまとめて管理。v1.2.0では同接、コメント参加、Follow、Raid、配信履歴をローカルに記録して振り返れます。"
icon: "🛠️"
image: "/images/twitch-stream-helper-preview.png"
storeUrl: "https://chromewebstore.google.com/detail/twitch-stream-helper/fonjapihhkafhmjfdpdcgfoghngldmep"
privacyUrl: "/privacy/twitch-stream-helper/#japanese"
repoUrl: "https://github.com/shakashakahead-cyber/twitch-stream-helper"
tags: ["Twitch", "ChromeExtension", "Stream", "Analytics"]
videoId: "2R0BOg5NbpY"
uploadDate: "2025-12-05T00:00:00+09:00"
faq:
  - question: "無料で使えますか？"
    answer: "はい、完全無料でお使いいただけます。"
  - question: "どのブラウザで使えますか？"
    answer: "v1.2.0はGoogle Chrome、Microsoft Edge、BraveなどのChromium 116以降で動作します。"
  - question: "Analyticsでは何を確認できますか？"
    answer: "配信ごとの平均・最大同接、同接推移、初コメント者・再訪コメント者、新規Follow、Raid、タイトル・カテゴリ履歴などを確認できます。期間別のグラフやCSV出力にも対応しています。"
  - question: "過去の配信データも取得できますか？"
    answer: "Twitch履歴同期で取得可能なArchive VODや現在のフォロワー情報を補完できます。ただし、過去に計測していなかった同接や欠損したコメント・Follow・Raidなどのイベントは復元できません。"
  - question: "Analyticsのデータは外部サーバーへ送信されますか？"
    answer: "いいえ。Analyticsの履歴はアカウントごとのIndexedDBなどブラウザ内に保存され、開発者運営のサーバーへ送信しません。Twitch APIやEventSubとの通信はTwitch公式サービスと直接行います。"
  - question: "Analyticsを使うと追加の権限が必要ですか？"
    answer: "はい。Analyticsを有効化したユーザーにだけ、フォロワー情報とチャットイベントを取得するためのTwitch OAuth権限を追加で要求します。Chromeの権限はv1.1.0から増えていません。"
  - question: "自動投稿はログインするだけで始まりますか？"
    answer: "いいえ。自動投稿は初期状態ではオフです。コメントを入力し、「配信開始時に1回だけ自動投稿」を有効にして設定を保存すると動作します。"
---

## 🎮 配信前の準備から、配信後の振り返りまで

Twitch Stream Helperは、Twitchの**タイトル・カテゴリ・タグ管理、X告知、コメント自動投稿、配信Analytics**をまとめて扱えるChrome拡張機能です。

**v1.2.0ではAnalyticsを追加しました。** 配信中の同接やコメント参加、Follow、Raidなどをブラウザ内に記録し、配信ごとの振り返りや期間比較に使えます。

最新版のソースとZIPは[GitHub Releases](https://github.com/shakashakahead-cyber/twitch-stream-helper/releases/latest)でも公開しています。

### ⚡ 主な機能

1. **タイトル・カテゴリ・タグをまとめて更新**
   * カテゴリごとにタグを保存し、タイトルテンプレートと一緒に適用できます。
   * Twitchへの更新状態もポップアップで確認できます。
2. **X告知文の作成**
   * 配信タイトル・カテゴリ・タグ・配信URLなどをテンプレート変数として利用できます。
   * 内容を確認してXの投稿画面を開きます。拡張機能がXへ自動投稿することはありません。
3. **コメント自動投稿・任意の固定**
   * 共通コメントとカテゴリ別コメントを保存し、配信ごとに1回だけ自動投稿できます。
   * 固定は配信終了まで・30分・10分から選択できます。
4. **ローカル配信Analytics（v1.2.0）**
   * 平均/最大同接、同接推移、初コメント者・再訪コメント者、新規Follow、Raidを記録します。
   * タイトル・カテゴリの変更履歴、配信メモ、複数ラベル、タイトル評価も配信単位で保存できます。
5. **期間比較・履歴同期・CSV出力**
   * 7日・30日・90日・1年・全期間でKPIやグラフを切り替えられます。
   * Twitch履歴を同期し、取得可能なArchive VODと現在のフォロワー情報を補完できます。
   * `streams.csv` と `viewer_samples.csv` を出力できます。CSV Importはありません。

---

## 📊 Analytics（v1.2.0）

ポップアップから「Analyticsを開く」を選ぶと専用タブが開きます。初回は「Analyticsを有効化・認証」を実行してください。

### 記録・表示する主なデータ

* **配信単位:** 開始日時、終了の観測情報、配信時間、タイトル・カテゴリ履歴、Raid、メモ、ラベル、タイトル評価
* **同接:** `Get Streams` の `viewer_count` を約1分ごとに記録し、平均・最大・推移を表示
* **コメント参加:** 初コメント者と再訪コメント者を配信単位で集計
* **Follow:** EventSubで観測した新規Followと、現在のフォロワー一覧・総数スナップショット
* **期間集計:** 同接、総フォロワー、日別Follow、コメント参加、月別配信時間・回数などのグラフ

画面上部の「配信ごとの記録」では最新配信を表示し、「← 前の配信」「次の配信 →」で保存済み配信を順番に確認できます。配信詳細では同接の生データ、取得率、タイトル・カテゴリ履歴、Raid、直前の配信との比較などを確認できます。

### データ取得率と欠損について

AnalyticsはChromeとPCが起動している間に記録します。同接は約1分ごとのサンプルなので、スリープ・Chrome終了・通信切断などがあると欠損します。欠損値を推測で補間せず、同接・コメント・Follow・Raidには取得率や警告を表示します。

過去配信はTwitch履歴同期によってArchive VODから補える場合がありますが、**過去に計測していなかった同接や、取得できなかったコメント人数などは復元できません。** VODの長さと実際に観測した配信時間も別情報として扱います。

### Twitch履歴同期

Analyticsを有効化すると、取得可能なArchive VODと現在のフォロワー一覧をページング取得します。VODは日次・配信終了後、フォロワー一覧は週次に更新し、「Twitch履歴を同期」から手動更新もできます。

取得途中でChromeが終了した場合は保存したカーソルから続行します。Twitch上でVODが後から削除されても、すでに保存したAnalyticsの配信記録は自動削除しません。

### OAuth権限

通常機能では以下を使用します。

* `channel:manage:broadcast` — タイトル・カテゴリ・タグの更新
* `user:write:chat` — 保存コメントの投稿
* `moderator:manage:chat_messages` — 投稿したコメントの固定

Analyticsを有効化した場合のみ、さらに以下を要求します。

* `moderator:read:followers` — フォロワー情報の取得
* `user:read:chat` — EventSubでチャットイベントを受信

Chrome権限は `identity` / `storage` / `alarms` の3つで、v1.2.0による追加はありません。詳しくは[プライバシーポリシー](/privacy/twitch-stream-helper/#japanese)をご覧ください。

---

## 💬 コメント自動投稿

1. Twitchにログインし、「固定コメント」に共通の文章を入力します。
2. 必要に応じてカテゴリ別コメントを保存します。
3. 固定のオン/オフと固定時間を選びます。
4. 「配信開始時に1回だけ自動投稿」を有効にして設定を保存します。

ブラウザが起動中でPCがスリープしていない間、配信状態を定期確認します。同じ配信に重複投稿しないための記録はブラウザ内に保存します。

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

---

## 🔄 更新履歴

### 2026-09-11 — v1.2.0

* 配信ごとのローカルAnalyticsを追加
* 平均/最大同接、コメント参加・再訪、新規Follow、Raid、タイトル・カテゴリ履歴を記録
* 前後の配信ナビゲーション、期間別KPI・グラフ、配信詳細を追加
* Twitch履歴同期、メモ・ラベル・タイトル評価、CSV出力を追加
* データ取得率・欠損警告、EventSub再接続、VODと実測時刻の扱いを改善
* Analytics利用時のみTwitch OAuthの `moderator:read:followers` と `user:read:chat` を追加要求
* Chrome/Chromium 116以降が必要

### 2026-09-11 — v1.1.0

* 配信ごとに1回のコメント自動投稿と、任意の固定に対応
* 共通・カテゴリ別コメント、固定時間、手動投稿・再試行を追加
* ローカルの投稿記録による重複防止を追加

### 2026-07-23 — テンプレートと反映状態の改善

* ポップアップUI、テンプレート変数、リアルタイムプレビューを改善
* タイトル更新状態とTwitchのレート制限案内を追加

---

## 🛠️ 基本ワークフロー

1. 拡張機能をインストールし、Twitchアカウントでログインします。
2. ポップアップからタイトル・カテゴリ・タグやX告知を管理します。
3. 必要ならコメント自動投稿・固定を設定します。
4. Analyticsを使う場合は専用タブを開き、追加OAuth権限を許可して収集を有効化します。
5. 配信後に配信詳細・グラフ・期間比較・CSVで振り返ります。

---

<div class="mt-12 flex justify-center">
  <a href="https://chromewebstore.google.com/detail/twitch-stream-helper/fonjapihhkafhmjfdpdcgfoghngldmep" target="_blank" class="rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 px-8 py-4 text-lg font-bold text-white shadow-lg hover:from-indigo-400 hover:to-purple-500 hover:shadow-xl transition-all flex items-center gap-3">
    <span>Chrome Web Storeで今すぐ追加</span>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5">
      <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
    </svg>
  </a>
</div>
