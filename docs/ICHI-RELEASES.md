# Ichi Browser の先行公開版

アプリの実装は別の非公開リポジトリ。ここでは紹介ページと配布物を管理します。既存の Cloudflare Pages の Git 連携で main が公開されます。

- 紹介：`/tools/ichi-browser/`
- 更新履歴：`/tools/ichi-browser/changelog/`
- アプリが取得する固定URL：`/apps/ichi-browser/latest.json`
- 公開版の原本：`src/data/ichi-releases.json`（新しい版が先頭）
- 対応ソースの案内：`/tools/ichi-browser/licenses/`
- プライバシー：`/privacy/ichi-browser/`

## 次の更新

1. アプリで versionCode を増やし、同じ署名鍵を使って検証した APK を作る。
2. `src/data/ichi-releases.json` の先頭に、版・公開日・変更点を追加する。既存の履歴を削除しない。
3. アプリ側の `tools/package-preview.py --site <このcheckout> --ublock-source <同じ版の上流ソースZIP>` で配布物と manifest を整える。対応ソースと通知は毎回その APK に一致するものを使う。エンジン・uBOの版を変更した場合は、このスクリプトのソース入手先とライセンスページの固定バージョンも更新する。
4. このリポジトリの GitHub Releases に `ichi-<versionName>` の **pre-release** を作成。APK・SHA256SUMS・uBO対応ソース・通知だけを添付する。アプリ側の private-source-snapshot.zip や秘密鍵、設定、ログはアップロードしない。
5. 公開した添付ファイルの匿名ダウンロード、サイズ、SHA-256を確認してから、このサイトの変更を main へ push する。APKを先に公開し、最新版案内を後に切り替える。
6. Cloudflare Pages の成功後、紹介ページ・JSONの Content-Type と no-store・APK・アプリ内の手動更新確認を確認する。

manifest の必須項目は `schemaVersion: 1`、`applicationId: dev.shaka.singlebrowser`、`channel: preview`、`abi: arm64-v8a`、整数の `versionCode`・`minSdk`、`versionName`。アプリは手動操作時だけ固定HTTPSへ問い合わせ、versionCodeを比較します。URLの自動実行や APK の自動インストールは行いません。ページのダウンロード先・サイズ・SHA-256は同じデータ原本から表示します。

Google Playは別工程です。新版に問題がある場合は、案内と manifest を以前の版へ戻して理由を記載し、修正版はさらに大きい versionCode で出します。すでに入った新しい版を、古い versionCode の APK で上書きすることはできません。

同梱 GeckoView・uBO のセキュリティ更新を定期的に確認し、修正版を優先して配布する運用です。自動監視・通知スケジュールはこの変更では登録していません。
