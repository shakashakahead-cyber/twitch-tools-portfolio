# ダウンロード・ストア導線の計測

## 指標の定義

`tool_download_click` はサイト上のリンク操作数です。保存完了・インストール数・人数ではありません。再クリック、再ダウンロード、更新も含みます。サイトを経由しない取得、右クリックメニューから開く操作、JavaScript無効時や広告ブロック等で送信できない操作は捕捉できません。

| tool_name | ツール |
| --- | --- |
| twitch_stream_helper | Twitch Stream Helper |
| comment_reader | Comment Reader for Twitch |
| clip_extractor | クリップ抽出くん |
| ichi_browser | Ichi Browser |

| destination | 意味 |
| --- | --- |
| chrome_web_store | Chrome Web Storeへの遷移 |
| github_release | EXE/APKへの直接ダウンロード操作 |
| github_release_page | GitHub配布ページへの遷移（ライセンス・ソース確認も含む） |

イベント名と既存のパラメータ値は維持しています。配布ページへの遷移を直接ダウンロードに合算しないでください。
`link_url` はクリック先を確認する補助値です。バージョンやUTMで分かれるため、ツール集計の主キーにはしません。
内部の詳細ページ・ページ内移動、FFmpeg、ソース・チェックサムの直接リンクは対象外です。

## GA4側で必要な設定（コード変更だけでは完了しません）

対象測定ID: `G-411RHL1DTK`。Data APIにはこれとは別の数値のプロパティIDが必要です。

1. 管理 > カスタム定義で `tool_name` と `destination` をイベントスコープのカスタムディメンションとして登録します。既に登録済みなら重複作成しません。
2. 日別の境界を日本時間にする場合、プロパティのレポート用タイムゾーンを確認します。
3. レポートはイベント名 `tool_download_click`、ホスト名 `shakashakahead.com` に限定します。
4. 日付・ツール・遷移先別の「イベント数」を使います。自動計測の `click`・`file_download` を合算しません。
5. 累計は計測開始日から対象日まで、同じ条件のイベント数を合計します。「計測開始以降の累計」と表示し、未計測期間をゼロ扱いしません。

推奨表示は「ストア遷移数」「直接ダウンロードクリック数」「配布ページ遷移数」の3区分です。
カスタム定義・レポート反映には通常24〜48時間かかります。登録前のツール別内訳が後から復元できる前提にはしません。
継続的に履歴を保存する場合は日別集計を定期的に保存し、遅延反映に備え直近分を再取得・上書きします。

Data APIでの集計仕様:
- dimensions: `date`, `customEvent:tool_name`, `customEvent:destination`
- metric: `eventCount`
- dimensionFilter: `eventName EXACT tool_download_click` AND `hostName EXACT shakashakahead.com`
- 対象期間を明示し、直接ダウンロードだけを数える場合は `destination = github_release` を追加。
- 累計でも同じツール・遷移先区分を維持。

## 実装と検証

共通の `src/layouts/Layout.astro` がリンクを判定します。日英の一覧・詳細・モバイル固定ボタンでも共通です。
左クリック・キーボードによるクリックと中クリックを計測し、右クリックは対象にしません。
GAタグの読み込み、初期化、イベント送信は本番ホスト限定です。プレビューでは実GAへの送信を行いません。
新しい配布先を追加するときは判定関数とテストを一緒に更新してください。

自動テスト:
```sh
node --test tests/tool-download-tracking.test.mjs
```

公開後の受信確認（未実施）:
- 本番で4ツールの直接リンクを各1回操作し、Realtimeまたはデバッグモードを有効にしたDebugViewでイベントと3パラメータを確認。
- TSHのGitHub Releases、Ichiの配布履歴は `github_release_page`、履歴のAPKリンクは `github_release` になることを確認。
- 中クリックが1件、右クリックだけなら0件になることを確認。
- 確認用クリックを行った日付と件数を控える（テスト分も本番のイベント数に含まれます）。

自動テストは判定とイベント投入を検証します。Googleへの通信・GA4の受信や管理設定が完了したことは保証しません。

参考:
- [イベントスコープのカスタムディメンション](https://support.google.com/analytics/answer/14239696?hl=ja)
- [Data APIのディメンション・指標](https://developers.google.com/analytics/devguides/reporting/data/v1/api-schema)
- [拡張計測イベント](https://support.google.com/analytics/answer/9216061?hl=ja)

