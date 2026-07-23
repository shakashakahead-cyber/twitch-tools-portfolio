---
layout: ../../layouts/ToolLayout.astro
title: "Comment Reader for Twitch (powered by Voicevox)"
description: "TwitchチャットをローカルのVOICEVOXで読み上げ。話者・速度・出力先・辞書を設定でき、返信やタブ切り替えにも強いChrome拡張機能。"
icon: "🗣️"
image: "/images/voicevox-comment-reader-preview.png"
storeUrl: "https://chromewebstore.google.com/detail/eolabmdepbcdcppfdmkibgjffiifndkd?utm_source=item-share-cb"
repoUrl: "https://github.com/shakashakahead-cyber/comment-Reader-for-Twitch-powered-by-Voicevox-"
privacyUrl: "/privacy/voicevox-comment-reader/"
tags: ["Twitch", "Voicevox", "ChromeExtension"]
# 動画ID (空欄なら非表示)
videoId: "NJ9SmGJFUG4"
uploadDate: "2025-12-08T00:00:00+09:00"
faq:
  - question: "無料で使えますか？"
    answer: "はい、拡張機能自体は完全無料です。（VOICEVOXのご利用に関してはVOICEVOXの規約に従ってください）"
  - question: "OBSに音声を取り込むには？"
    answer: "この拡張機能はデフォルトではブラウザ（Chrome等）から音を出します。OBSの「デスクトップ音声」でブラウザの音を拾うようにしてください。"
  - question: "読み上げないコメントがあります（Botなど）"
    answer: "設定画面で、Botや特定のコマンド（`!`で始まるコメントなど）を読み飛ばすフィルター設定が可能です。"
  - question: "別のタブを見ている間も読み上げますか？"
    answer: "Twitchの配信マネージャーを開いたままであれば、通常は別タブを表示していても読み上げます。ただし、ブラウザがタブを休止・破棄した場合は停止することがあります。"
---

## 🚀 ゲーム中のコメントを、VOICEVOXの声で受け取る

<div class="bg-indigo-500/10 border border-indigo-500/20 rounded-xl p-6 mb-8">
  <ul class="space-y-4">
    <li class="flex items-start gap-3">
        <span class="text-xl">😓</span>
        <span class="font-bold text-indigo-200">「ゲームに集中していてコメントを見逃してしまう...」</span>
    </li>
    <li class="flex items-start gap-3">
        <span class="text-xl">😓</span>
        <span class="font-bold text-indigo-200">「返信コメントで、引用元まで読み上げられると内容が分かりづらい…」</span>
    </li>
  </ul>
</div>

**Comment Reader for Twitch** は、Twitchの配信マネージャーに届いたチャットを、PC上のVOICEVOX Engineで読み上げるChrome拡張機能です。
話者や読み上げ速度を自分の配信に合わせて調整でき、コメントの確認に画面を見続ける必要がありません。

### 🌟 主な機能

1. **ローカルVOICEVOXによる読み上げ**
   * PCで起動しているVOICEVOX Engineと直接通信し、Twitchチャットを自然な音声へ変換します。
2. **声と出力を細かく調整**
   * 話者、速度、音量、音声出力デバイスを選択できます。
   * キュー停止とテスト再生にも対応しています。
3. **配信向けのフィルター**
   * 名前を読むかどうか、`!`で始まるコマンド、除外ユーザーを設定できます。
   * 読み替え辞書で、ゲーム用語や固有名詞の読み方を整えられます。
4. **返信を分かりやすく読み上げ**
   * 返信は「〇〇さんに返信。返信本文」の形式で読み上げます。
   * 返信先の引用コメントは繰り返し読みません。

---

## 🔄 最近の改善

* ページ更新やチャットのポップアウト表示時に、過去コメントをまとめて再読しないよう改善
* ポップアウトを閉じた後も、表示中に蓄積した古いコメントを再読しないよう改善
* タブ復帰・ページ遷移直後の新着コメントを取りこぼしにくく改善
* 読み上げ要求とVOICEVOX通信に確認・タイムアウト・再試行を追加
* 音声生成や再生に一時的な失敗があっても、後続の読み上げキューが止まりにくい構成へ改善

---

## 📖 導入手順

1. [VOICEVOX公式サイト](https://voicevox.hiroshiba.jp/)からVOICEVOXをインストールし、起動します。
2. このChrome拡張機能をインストールします。
3. Twitchの **クリエイターダッシュボード（配信マネージャー）** を開きます。
4. 拡張機能のポップアップで「読み上げを有効にする」をONにします。
5. 必要に応じて、話者・速度・音量・出力デバイスや辞書を設定します。

> [!TIP]
> 読み上げが始まらない場合は、VOICEVOX Engineが `http://127.0.0.1:50021` で起動しているか確認し、Twitchのダッシュボードを再読み込みしてください。

---

## ⚠️ 注意事項・クレジット

* 本拡張機能を使用するには、VOICEVOXソフトウェアがバックグラウンドで起動している必要があります。
* 出力デバイス名を表示するため、ブラウザからマイク権限を求める場合があります。録音は行いません。
* 配信で利用する際は、使用するVOICEVOXキャラクターの利用規約とクレジット表記に従ってください。
  * VOICEVOX: [https://voicevox.hiroshiba.jp/](https://voicevox.hiroshiba.jp/)
