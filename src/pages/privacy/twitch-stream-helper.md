---
layout: ../../layouts/Layout.astro
title: "Privacy Policy | Twitch Stream Helper"
description: "Twitch Stream Helperの認証情報、設定、コメント自動投稿、v1.2 Analyticsのローカル保存、Twitch API/EventSub通信、権限について。Privacy policy in English and Japanese."
---

<div align="center">
  <a href="#english">English</a> | <a href="#japanese">日本語 (Japanese)</a>
</div>

<br />

<div id="english"></div>

# Privacy Policy for Twitch Stream Helper

**Last Updated:** 2026-09-11

This policy describes data handled by the Twitch Stream Helper browser extension (the "Extension"), including stream settings, X announcement preparation, automatic saved chat comments, and the local Analytics features introduced in v1.2.0.

## Information Stored in the Browser

The Extension does not operate a developer-owned server for these features. Authentication/settings are stored in extension-local storage, while Analytics history is stored locally in an account-specific IndexedDB database.

### Authentication and Settings

The Extension may store:

* Twitch OAuth access token, expiration time, and temporary OAuth state used during login.
* Your Twitch user ID/login and cached stream title, category, and tags.
* Title and X announcement templates, saved tags, category history/cache, and related preferences.
* Saved chat-comment settings, automatic-posting/pinning settings, and per-stream delivery records used to prevent duplicate posts.
* Whether Analytics is enabled and the Twitch account ID associated with that Analytics database.

The current OAuth flow does not use a Client Secret or a developer-owned token server.

### Analytics Data (v1.2.0)

When you explicitly enable Analytics, the Extension may store locally:

* Stream identifiers and observed start/end information, duration/coverage information, and available VOD metadata.
* Viewer-count samples collected from Twitch approximately once per minute while collection is operating.
* Stream title and category history.
* Twitch user IDs and timestamps needed to distinguish first-time/returning chat participants. **Chat message text is not stored as Analytics history.**
* Follow events, follower-count snapshots, and the current follower list needed for follower history and acquisition analysis.
* Incoming raid events.
* EventSub connection/coverage intervals and synchronization metadata used to show whether data may be incomplete.
* Notes, labels, and title ratings that you enter in Analytics.

Each Twitch broadcaster account uses a separate IndexedDB database so histories from different accounts are not mixed.

## Data Transmission and Sharing

Authentication and Twitch data requests are sent directly to official Twitch services, including `id.twitch.tv`, `api.twitch.tv`, and Twitch EventSub WebSocket services as required by Analytics.

When automatic chat posting is enabled, the selected saved comment is sent to Twitch from your account. If pinning is enabled, the message ID and pin duration are sent to Twitch. Posted comments become visible according to Twitch chat behavior, including Shared Chat where applicable.

When you open the X composer, the prepared announcement text is passed to X in the composer URL. **The Extension does not automatically publish a post to X.**

Analytics data is not uploaded to a server operated by the developer. Charts are generated locally without an external analytics service.

## Analytics Collection and Historical Sync

Analytics collection runs while it is enabled and Chrome/the computer can execute the extension. Viewer samples or EventSub events missed while the browser is closed, asleep, disconnected, or unable to receive events are not reconstructed later.

The **Sync Twitch history** feature may retrieve currently available archive VOD information and the current follower list from Twitch. This can supplement saved stream history, but it cannot recreate viewer samples or chat/follow/raid events that were never observed. VOD timing is stored separately from observed live timing.

Stopping collection or logging out stops Analytics collection but does not delete previously saved Analytics history. Switching accounts keeps each account's database separate.

## CSV Export

Analytics can export `streams.csv` and `viewer_samples.csv` for the selected period. The export does not include viewer/chatter Twitch user IDs. CSV files are created locally and are not automatically uploaded by the Extension.

## Chrome Permissions

<div class="overflow-x-auto">

| Permission | Use in the Extension |
| --- | --- |
| `identity` | Open the Twitch OAuth authorization flow. |
| `storage` | Store authentication data, settings, caches, automation state, and Analytics enablement metadata locally. |
| `alarms` | Run periodic stream/comment/Analytics checks. |

</div>

v1.2.0 does not add a new Chrome permission. Host permissions remain limited to Twitch authentication and API domains used by the Extension.

## Twitch OAuth Permissions

Normal extension features request:

<div class="overflow-x-auto">

| Scope | Purpose |
| --- | --- |
| `channel:manage:broadcast` | Update your stream title, category, and tags. |
| `user:write:chat` | Send a saved chat comment from your account. |
| `moderator:manage:chat_messages` | Pin a posted chat message. |

</div>

Only when you choose to enable Analytics, the Extension additionally requests:

<div class="overflow-x-auto">

| Scope | Purpose |
| --- | --- |
| `moderator:read:followers` | Read follower information used by Analytics. |
| `user:read:chat` | Receive chat-related events through EventSub for Analytics. |

</div>

If the required Analytics scopes are not present, Analytics prompts you to authorize them. The access token is periodically validated with Twitch's official validation endpoint.

## Retention and Deletion

Logging out deletes the locally stored authentication token and stops automatic collection, but it does not erase saved settings, delivery records, or Analytics databases. Stopping Analytics collection likewise keeps already recorded history available for review.

Uninstalling the Extension removes its extension-local browser data under normal browser behavior. Data already sent to Twitch or X must be managed on those services.

## Third-Party Services

Twitch and X process data sent to their services under their own privacy policies. Twitch Stream Helper is an unofficial tool and is not affiliated with, endorsed by, or sponsored by Twitch Interactive, Inc.

## Contact

For questions about this policy, contact the developer at **shakashakahead@gmail.com**.

---

<div id="japanese"></div>

# プライバシーポリシー（Twitch Stream Helper）

**最終更新日:** 2026-09-11

本ポリシーは、ブラウザ拡張機能「Twitch Stream Helper」（以下「本拡張」）が扱うデータについて説明します。配信設定、X告知、コメント自動投稿・固定に加え、v1.2.0で追加したローカルAnalyticsを対象とします。

## ブラウザ内に保存する情報

本拡張は、これらの機能のために開発者運営の外部サーバーを使用しません。認証情報・設定などは拡張機能用のローカルストレージへ、Analytics履歴はTwitchアカウントごとのIndexedDBへ保存します。

### 認証・設定

本拡張は必要に応じて次の情報をブラウザ内に保存します。

* Twitch OAuthアクセストークン、有効期限、ログイン確認用の一時的なOAuth state。
* 自分のTwitchユーザーID・ログイン名、現在の配信タイトル・カテゴリ・タグのキャッシュ。
* タイトル/X告知テンプレート、保存タグ、カテゴリ履歴・キャッシュ、関連設定。
* 共通/カテゴリ別コメント、自動投稿・固定設定、重複投稿防止のための配信ごとの投稿記録。
* Analyticsの有効/停止状態と、そのAnalytics DBに紐づくTwitchアカウントID。

現在のOAuth方式ではClient Secretや開発者運営のトークンサーバーを使用しません。

### Analyticsで保存する情報（v1.2.0）

ユーザーがAnalyticsを明示的に有効化した場合、次の情報をローカルに保存することがあります。

* 配信ID、観測した開始/終了情報、配信時間・取得率情報、取得可能なVOD情報。
* Analytics収集中にTwitchから約1分ごとに取得した同接数サンプル。
* 配信タイトル・カテゴリの変更履歴。
* 初コメント/再訪を判定するために必要なチャット参加者のTwitchユーザーIDと時刻。**Analytics履歴としてコメント本文は保存しません。**
* Followイベント、総フォロワー数のスナップショット、現在のフォロワー一覧など、フォロワー推移・獲得時期の分析に必要な情報。
* 自分のチャンネルへ入ってきたRaidイベント。
* データ欠損・取得率を判定するためのEventSub接続区間や同期状態などのメタデータ。
* ユーザーがAnalytics画面で入力するメモ、複数ラベル、タイトル評価。

Twitchアカウントごとに別のIndexedDBを使用し、アカウントを切り替えても履歴を混在させません。

## 外部への送信・共有

Twitch認証やデータ取得・更新は、`id.twitch.tv`、`api.twitch.tv`、Analyticsで必要なTwitch EventSub WebSocketなど、Twitch公式サービスと直接通信します。

コメント自動投稿を有効にした場合、保存したコメント本文を自分のTwitchアカウントからTwitchへ送信します。固定を有効にした場合は、メッセージIDや固定時間などをTwitchへ送信します。投稿内容はTwitchのチャット仕様に従って表示され、共有チャットでは共有先にも表示される場合があります。

Xの投稿画面を開くと、作成した告知文をXの投稿画面URLへ渡します。**本拡張がXへ自動投稿することはありません。**

Analyticsの履歴や集計結果を開発者運営のサーバーへアップロードすることはありません。グラフもブラウザ内で生成します。

## Analyticsの収集とTwitch履歴同期

Analyticsは、有効化されていてChrome・PCが拡張機能を実行できる間に収集します。Chrome終了、PCスリープ、通信切断、EventSub切断などで取得できなかった同接やイベントを後から推測して補完することはありません。

「Twitch履歴を同期」では、Twitchから現在取得可能なArchive VOD情報と現在のフォロワー一覧を取得し、履歴を補完します。ただし、過去に計測していなかった同接や、取得できなかったコメント・Follow・Raidイベントは復元できません。VODの開始・終了・長さは、実際に観測したライブ配信の時刻とは別情報として保存します。

「収集を停止」またはログアウトするとAnalytics収集を停止しますが、保存済みのAnalytics履歴は削除せず、引き続き閲覧できます。別アカウントで有効化した場合も、各アカウントのDBを個別に保持します。

## CSV出力

Analyticsは選択期間について `streams.csv` と `viewer_samples.csv` をローカル出力できます。CSVには視聴者・チャット参加者のTwitchユーザーIDを出力しません。本拡張がCSVを外部へ自動アップロードすることもありません。

## Chromeの権限

<div class="overflow-x-auto">

| 権限 | 本拡張での用途 |
| --- | --- |
| `identity` | Twitch OAuthの認証画面を開くため。 |
| `storage` | 認証情報、設定、キャッシュ、コメント自動投稿の状態、Analytics有効化情報などをローカル保存するため。 |
| `alarms` | コメント自動投稿やAnalyticsを含む定期的な確認処理のため。 |

</div>

v1.2.0で新しいChrome権限は追加していません。ホスト権限もTwitch認証・API通信に必要な公式ドメインの範囲です。

## Twitch OAuthの権限

通常機能では以下を要求します。

<div class="overflow-x-auto">

| スコープ | 用途 |
| --- | --- |
| `channel:manage:broadcast` | タイトル・カテゴリ・タグの更新。 |
| `user:write:chat` | 保存コメントの投稿。 |
| `moderator:manage:chat_messages` | 投稿したコメントの固定。 |

</div>

Analyticsを有効化した場合のみ、さらに以下を要求します。

<div class="overflow-x-auto">

| スコープ | 用途 |
| --- | --- |
| `moderator:read:followers` | Analyticsでフォロワー情報を取得するため。 |
| `user:read:chat` | AnalyticsでEventSubのチャット関連イベントを受信するため。 |

</div>

Analyticsに必要な権限がない場合は、Analytics有効化時に追加認証を案内します。アクセストークンはTwitch公式の検証エンドポイントで定期的に確認します。

## 保管・停止・削除

ログアウトするとローカルの認証トークンを削除し、自動収集を停止しますが、保存済み設定・投稿記録・Analytics DBは削除しません。「Analyticsの収集を停止」した場合も、すでに記録した履歴は保持します。

本拡張をアンインストールした場合、通常は拡張機能に紐づくブラウザ内のローカルデータも削除されます。すでにTwitchやXへ送信したデータは各サービス上で管理してください。

## 第三者サービス

Twitch・Xへ送信した情報は各サービスのプライバシーポリシーに基づいて扱われます。本拡張はTwitchの非公式ツールであり、Twitch Interactive, Inc.との提携・承認・スポンサー関係はありません。

## お問い合わせ

開発者連絡先: **shakashakahead@gmail.com**
