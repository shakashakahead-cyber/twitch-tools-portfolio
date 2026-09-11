---
layout: ../../layouts/Layout.astro
title: "Privacy Policy | Twitch Stream Helper"
description: "Twitch Stream Helperの取得情報、ローカル保存、Twitch・Xへの送信、Chrome権限とOAuth権限について。Privacy policy in English and Japanese."
---

<div align="center">
  <a href="#english">English</a> | <a href="#japanese">日本語 (Japanese)</a>
</div>

<br />

<div id="english"></div>

# Privacy Policy for Twitch Stream Helper

**Last Updated:** 2026-09-11

This policy describes data handled by the Twitch Stream Helper browser extension (the "Extension"). It covers stream title, category and tag management, X announcement preparation, and saved chat comments with optional pinning in v1.1.0. Chat automation, delivery records, the two chat OAuth scopes and the `alarms` permission described below apply to v1.1.0.

### Information Handled and Stored Locally

The Extension uses `chrome.storage.local`, the browser's storage for this extension. It does not use Chrome's settings sync for these records.

* **Authentication:** A Twitch OAuth access token and its expiration time, obtained when you explicitly log in. A temporary OAuth state value is stored to verify the login response. The current login flow does not obtain a refresh token.
* **Account and stream information:** Your Twitch user ID and login name, the current title and category ID/name, and tags retrieved or updated through the official Twitch API. Live status, stream ID, start time and the category at posting time are used to decide whether and what to post.
* **Preferences and category history:** Title and X announcement templates, saved tags, category history (up to 30 entries), cached category names and image URLs, and preferences such as including a category hashtag or omitting the stream URL.
* **Saved chat comment settings:** Default and category-specific comments, each up to 500 characters; category IDs; the associated Twitch account ID; automatic-posting and pinning choices; and the pin duration (until the stream ends, 30 minutes or 10 minutes).
* **Delivery records and status:** Account and stream IDs, stream start time, posting-attempt and status-update times, posting/pinning state, the returned message ID when available, the pin choice and duration, error information, and any retry time. These records prevent duplicate posts, show results and allow pinning to be retried without reposting. The latest 100 stream records are retained per account. The most recent status is also stored separately.

The Extension does not collect viewers' chat history or send extension usage analytics to the developer.

### Data Transmission and Sharing

The developer does not operate a server that receives the extension data listed above. Authentication and Twitch API requests go directly to `id.twitch.tv` and `api.twitch.tv`, with the token used to authorize requests. Category images are loaded from image URLs provided by Twitch.

When you enable automatic posting and save the settings, the Extension periodically checks your own live status. For a live stream that has not been handled, it sends the selected comment and the channel/sender IDs to Twitch, posting from your own account. **Automatic posting is off by default.** You can also initiate a post with **Post now / retry** while live. If pinning is enabled, the Extension sends the message ID, channel/moderator IDs and selected duration to Twitch to pin that message. A pin replaces the existing pinned comment. Comments are visible to chat participants; during Shared Chat, they are also sent to the shared channels.

When you choose to open the X composer, the prepared announcement is passed to X in the composer URL. **The Extension does not automatically publish posts to X.** You review and publish them on X.

### Purpose of Use

* Retrieve and update your stream title, category and tags, and reuse saved preferences.
* Prepare an X announcement for you to review and publish.
* Check your live status, select a default or category-specific comment, and post it once per stream when enabled or manually requested.
* Optionally pin the posted comment, display results and prevent duplicate posts using local delivery records.

Periodic checks run about once a minute while the browser is running and the computer is awake, even if the popup is closed. An already-live stream may be handled after enabling the feature or restarting the browser. Changing categories during the same stream does not trigger another post. Failed writes are not automatically retried. If delivery is uncertain, the Extension suppresses resending to avoid duplicates.

### Storage, Retention and Deletion

**Logout** deletes locally stored authentication tokens, the token expiration time and the temporary OAuth state. It also turns automatic posting off and stops periodic checks. It does **not** delete saved comments, other preferences, cached account/stream information or delivery records, and does not delete or unpin messages already posted on Twitch.

You can edit or clear saved comment text and save the settings in the popup. Other locally stored data remains until changed, removed under the retention limits above or deleted. **Uninstalling the Extension deletes its local data.** Clearing ordinary browsing history or cache does not clear `chrome.storage.local`. The Extension does not currently provide a button to clear all delivery records. Deleting local data does not delete data already sent to Twitch or X; manage that data on the respective service.

Settings and delivery records are not synchronized across computers or browser profiles. Clearing them or reinstalling removes duplicate-post protection for earlier streams. Running the Extension in multiple browsers or on multiple computers can also cause duplicate posts. After switching Twitch accounts, review the comments and save the settings again.

### Chrome Permissions

<div class="overflow-x-auto">

| Permission | Use in the Extension |
| --- | --- |
| `identity` | Open the Twitch OAuth login flow. |
| `storage` | Save authentication data, preferences, cached information and delivery records locally. |
| `alarms` | Schedule periodic live-status checks for automatic chat posting. Added in v1.1.0. |

</div>

Host permissions remain limited to `https://id.twitch.tv/*` and `https://api.twitch.tv/*` for Twitch authentication and API requests. The host-permission list does not include every image URL or the X page opened by the user.

### Twitch OAuth Permissions

These Twitch account permissions are separate from Chrome permissions:

<div class="overflow-x-auto">

| Scope | Use in the Extension |
| --- | --- |
| `channel:manage:broadcast` | Update your channel's title, category and tags. |
| `user:write:chat` | Send the saved comment from your account to your live chat. Added in v1.1.0. |
| `moderator:manage:chat_messages` | Twitch chat-message-management permission, used by this extension to pin the posted comment. Added in v1.1.0. |

</div>

All three are requested together during normal login, including when automatic posting or pinning is not enabled. Users signed in with an older token missing the new scopes are asked to log in again once. Saved settings and delivery records are retained during reauthorization. An expired or invalid token also requires login again.

### Third-Party Services

This policy covers the Extension's behavior. Twitch and X handle data sent to their services under their own policies: [Twitch Privacy Notice](https://www.twitch.tv/p/en/legal/privacy-notice/) and [X Privacy Policy](https://x.com/en/privacy). This Extension is unofficial and is not affiliated with, endorsed or sponsored by Twitch Interactive, Inc.

### Contact Us

For questions about this policy, contact the developer at **shakashakahead@gmail.com**.

---
<div id="japanese"></div>

# プライバシーポリシー（Twitch Stream Helper）

**最終更新日:** 2026-09-11

本ポリシーは、ブラウザ拡張機能「Twitch Stream Helper」（以下「本拡張」）内でのデータの取扱いを説明します。配信タイトル・カテゴリ・タグの管理、X告知の準備に加え、v1.1.0で追加したコメント自動投稿・任意の固定を含みます。以下のコメント自動投稿、投稿記録、2つのチャット用OAuth権限、`alarms`権限はv1.1.0からの機能です。

### 取得・ローカル保存する情報

本拡張は、ブラウザ内の拡張機能専用ストレージ `chrome.storage.local` を使用します。以下の情報にChromeの設定同期は使用しません。

* **認証情報:** ユーザーが明示的にログインした際にTwitch OAuthで取得するアクセストークンと有効期限。ログイン応答の検証用に、一時的なOAuth state値も保存します。現在のログイン方式ではリフレッシュトークンを取得しません。
* **アカウント・配信情報:** TwitchのユーザーID・ログイン名、現在のタイトル・カテゴリID/名称、公式APIから取得・更新するタグ。配信中かどうか、配信ID・開始日時・投稿時のカテゴリを確認し、投稿の要否と文章を判断します。
* **設定・カテゴリ履歴:** タイトルとX告知のテンプレート、保存したタグ、カテゴリ履歴（最大30件）、カテゴリ名・画像URLのキャッシュ、カテゴリハッシュタグや配信URLの有無などの設定。
* **コメント設定:** 共通コメントとカテゴリ別コメント（各500文字以内）、カテゴリID、設定に紐づくTwitchアカウントID、自動投稿・固定のオン/オフ、固定時間（配信終了まで・30分・10分）。
* **投稿記録・状態:** アカウントID・配信ID・配信開始日時、投稿を試みた日時・状態の更新日時、投稿/固定の処理状態、取得できた場合のメッセージID、固定の有無と時間、エラー情報、再試行可能時刻。重複投稿の防止、結果表示、再投稿せずに固定のみを再試行するために使用します。アカウントごとに直近100配信分の記録を保持し、これとは別に最新の状態を保存します。

本拡張は視聴者のチャット履歴を収集せず、拡張機能の利用状況を開発者へ分析送信することもありません。

### 送信・共有

上記の拡張機能内データを受け取る開発者運営のサーバーはありません。認証とTwitch APIの呼び出しは `id.twitch.tv` と `api.twitch.tv` に直接行い、アクセストークンで認証します。カテゴリ画像はTwitchから返された画像URLから読み込みます。

自動投稿を有効にして設定を保存すると、自分の配信状態を定期確認します。未処理のライブ配信では、選択したコメント本文とチャンネル/送信者IDをTwitchへ送り、自分のアカウントで投稿します。**自動投稿は初期状態ではオフです。** 配信中に「今すぐ投稿・再試行」で手動投稿することもできます。固定を有効にした場合は、メッセージID、チャンネル/モデレーターID、選択した固定時間をTwitchへ送信して固定します。固定は既存の固定コメントを置き換えます。投稿したコメントはチャット参加者に表示され、共有チャット中は共有先のチャンネルにも送られます。

Xの投稿画面を開く操作をした場合、作成した告知文を投稿画面のURLに含めてXへ渡します。**本拡張がXへ自動で投稿することはありません。** X上でユーザーが確認して投稿します。

### 利用目的

* 配信タイトル・カテゴリ・タグの取得/更新と、保存した設定の再利用。
* ユーザーが確認して投稿するX告知文の準備。
* 配信状態の確認、共通/カテゴリ別コメントの選択、有効化または手動操作に基づく配信ごとに1回の投稿。
* 投稿したコメントの任意の固定、結果表示、ローカルの投稿記録による重複防止。

ブラウザが起動中でPCがスリープしていない間、ポップアップを閉じていても約1分ごとに確認します。有効化時やブラウザ再起動時にすでに配信中の場合も処理対象になります。同じ配信中にカテゴリを変更しても再投稿しません。書き込み失敗時の自動再送は行わず、送信結果が不明な場合も重複を避けるため再送を抑止します。

### 保管期間・停止・削除

**ログアウト**すると、ローカルの認証トークン・有効期限・一時的なOAuth state値を削除し、自動投稿をオフにして定期確認を停止します。保存したコメント、その他の設定、アカウント/配信情報のキャッシュ、投稿記録は**削除されません**。Twitchへ投稿済みのコメントの削除や固定解除も行いません。

保存したコメント本文は、ポップアップで編集・削除して設定を保存できます。その他のローカルデータは、変更・上記の件数上限による整理・削除が行われるまで残ります。**本拡張をアンインストールすると、そのローカルデータが削除されます。** 通常の閲覧履歴やキャッシュの削除だけでは `chrome.storage.local` は消去されません。現時点で投稿記録を全消去するボタンはありません。ローカルデータを削除しても、TwitchやXへ送信済みのデータは削除されないため、各サービス上で管理してください。

設定・投稿記録はPCやブラウザプロファイル間で同期しません。データ削除や再インストール後は、以前の配信に対する重複防止が失われます。複数のPC・ブラウザで同時に実行した場合も重複投稿が起こり得ます。Twitchアカウントを切り替えた場合はコメントを確認して設定を保存し直してください。

### Chromeの権限

<div class="overflow-x-auto">

| 権限 | 本拡張での用途 |
| --- | --- |
| `identity` | Twitch OAuthのログイン画面を開くため。 |
| `storage` | 認証情報・設定・キャッシュ・投稿記録をブラウザ内に保存するため。 |
| `alarms` | コメント自動投稿のために配信状態を定期確認するため。v1.1.0で追加。 |

</div>

ホスト権限は、Twitch認証・API通信用の `https://id.twitch.tv/*` と `https://api.twitch.tv/*` のままです。ホスト権限の一覧には、画像の読み込み先やユーザー操作で開くXのページは含まれません。

### Twitch OAuthの権限

以下はChromeの権限とは別の、Twitchアカウントへのアクセス権限です。

<div class="overflow-x-auto">

| スコープ | 本拡張での用途 |
| --- | --- |
| `channel:manage:broadcast` | 自分のチャンネルのタイトル・カテゴリ・タグの更新。 |
| `user:write:chat` | 自分のアカウントから自分のライブチャットへコメントを投稿。v1.1.0で追加。 |
| `moderator:manage:chat_messages` | Twitchのチャットメッセージ管理権限。本拡張では投稿済みコメントの固定に使用。v1.1.0で追加。 |

</div>

自動投稿や固定を有効にしていない場合も、通常ログイン時に3つをまとめて要求します。旧バージョンのトークンに新しい権限がない場合は、一度再ログインを案内します。再認証時も設定・投稿記録は保持します。トークンの期限切れや無効化が起きた場合も再ログインが必要です。

### 第三者サービス

本ポリシーは本拡張の動作を対象とします。Twitch・Xへ送信した情報は、各サービスのポリシーに基づいて扱われます（[Twitchプライバシー通知](https://www.twitch.tv/p/ja-jp/legal/privacy-notice/)、[Xプライバシーポリシー](https://x.com/ja/privacy)）。本拡張はTwitchの非公式ツールであり、Twitch Interactive, Inc.との提携・承認・スポンサー関係はありません。

### お問い合わせ

開発者連絡先: **shakashakahead@gmail.com**
