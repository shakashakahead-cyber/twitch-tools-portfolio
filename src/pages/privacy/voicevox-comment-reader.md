---
layout: ../../layouts/Layout.astro
title: "プライバシーポリシー | Comment Reader for Twitch (powered by Voicevox)"
description: "Comment Reader for Twitch (powered by Voicevox)のプライバシーポリシー"
---

# Privacy Policy

**Comment Reader for Twitch (powered by Voicevox)**

## 日本語 (Japanese)
**最終更新日:** 2026年7月23日

本拡張機能「Comment Reader for Twitch (powered by Voicevox)」は、ユーザーのプライバシーを尊重し、個人情報の保護に努めます。

### データの収集と利用について
本拡張機能は、ユーザーの個人情報、閲覧履歴、クッキーなどをサーバーへ送信・収集することはありません。すべての処理はユーザーのローカル環境（ブラウザ内およびローカルPC上のVOICEVOXアプリ）で行われます。

読み上げ対象のTwitchコメントは、音声生成のためにユーザーのPC上で動作するVOICEVOX Engineへ送られます。話者、速度、音量、出力デバイス、除外ユーザー、読み替え辞書などの設定はブラウザ内に保存され、開発者が運営するサーバーへ送信されません。

### マイク権限の使用目的について
本拡張機能は「マイクへのアクセス権限」を要求しますが、これは**音声出力デバイス（スピーカー）の名称を取得するためだけに使用されます**。

* Chromeブラウザの仕様上、`navigator.mediaDevices.enumerateDevices()` APIを使用してスピーカーの正しい名称（例: “Yamaha AG03”）を表示するには、マイク権限が必要となります。
* 本拡張機能は、音声を録音したり、外部サーバーへ送信したりすることは一切ありません。
* デバイス名の取得が完了次第、ストリームは直ちに停止されます。

### 第三者サービスについて
本拡張機能は、読み上げ音声の生成のために、ユーザーのPCにインストールされた「VOICEVOX」アプリケーション（ローカルサーバー）と通信を行います。

### お問い合わせ
本ポリシーに関するご質問は、GitHubのリポジトリのIssueまでお願いいたします。

---

## English
**Last Updated:** July 23, 2026

The “Comment Reader for Twitch (powered by Voicevox)” extension respects your privacy. We do not collect or store your personal data.

### Data Collection and Usage
This extension does not collect, store, or transmit any personal information, browsing history, or cookies to external servers. All processing is performed locally within your browser and the VOICEVOX application on your computer.

Twitch comments selected for speech are sent only to the VOICEVOX Engine running on your computer. Settings such as speaker, speed, volume, output device, excluded users, and replacement dictionary entries are stored in the browser and are not sent to a server operated by the developer.

### Usage of Microphone Permission
This extension requests “Microphone access permission,” but it is used solely to **retrieve the names of audio output devices (speakers)**.

* Due to Chrome browser specifications, microphone permission is required to display the correct labels of audio output devices (e.g., “Yamaha AG03”) when using the `navigator.mediaDevices.enumerateDevices()` API.
* This extension **DOES NOT** record audio or transmit audio data to any server.
* The audio stream is immediately stopped once the device labels are retrieved.

### Third-Party Services
This extension communicates with the “VOICEVOX” application installed on your local computer to generate speech audio.

### Contact
If you have any questions regarding this privacy policy, please open an issue in the GitHub repository.
