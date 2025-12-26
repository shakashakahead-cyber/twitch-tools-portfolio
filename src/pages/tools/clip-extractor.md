---
layout: ../../layouts/DesktopAppLayout.astro
title: "クリップ抽出くん ベータ"
description: "動画内の「盛り上がり（笑い声や歓声）」をAIが自動検知し、ハイライトシーンを抽出・切り抜きするソフトウェア。"
icon: "🎬"
image: "/images/clip-extractor-preview.png"
downloadUrl: "https://github.com/shakashakahead-cyber/clip-extractor/releases/download/v1.0.2-beta/ClipExtractorSetup.exe"
fileSize: "約1.5GB"
version: "β"
faq:
  - question: "無料で使えますか？"
    answer: "はい、完全無料でお使いいただけます。"
  - question: "Macでも使えますか？"
    answer: "現在はWindows専用です。Mac版は今後の対応を検討中です。"
  - question: "GPUがなくても動きますか？"
    answer: "はい、CPUのみでも動作します。ただし解析に時間がかかる場合があります。高性能なAMD/NVIDIAグラフィックボードがあれば自動的にGPUを使用して高速に解析します。"
  - question: "FFmpegのインストールが難しいです"
    answer: "最も簡単な方法は、ffmpeg.exeをこのソフトと同じフォルダに直接置くことです。詳しくは下記のセットアップ手順をご確認ください。"
---

## 🎯 こんな悩みを解決します

<div class="bg-indigo-500/10 border border-indigo-500/20 rounded-xl p-6 mb-8">
  <ul class="space-y-4">
    <li class="flex items-start gap-3">
        <span class="text-xl">😓</span>
        <span class="font-bold text-indigo-200">「長時間の配信アーカイブから面白いシーンを探すのが大変…」</span>
    </li>
    <li class="flex items-start gap-3">
        <span class="text-xl">😓</span>
        <span class="font-bold text-indigo-200">「切り抜き動画を作りたいけど、どこが盛り上がったか覚えてない…」</span>
    </li>
  </ul>
</div>

クリップ抽出くんは、そんな悩みを解消するために開発されました。
**AIが動画内の笑い声や歓声を自動検知**し、ハイライト候補をリストアップ。
あなたは良さそうなシーンを選んでエクスポートするだけです。

---

## ⚡ 主な機能

1.  **AI自動検知**
    *   笑い声、歓声、拍手などの「盛り上がりポイント」を自動で検出します。
2.  **スコア表示**
    *   検出された各シーンに「盛り上がりスコア」が付与され、優先度で並べ替え可能。
3.  **プレビュー再生**
    *   リストから気になるシーンをクリックして即座にプレビュー。
4.  **範囲調整**
    *   開始点・終了点を細かく調整して、最適な切り抜き範囲を設定。
5.  **一括エクスポート**
    *   選択したシーンを個別ファイルとして一括書き出し。

---

## 🔧 セットアップ

> [!IMPORTANT]
> **FFmpegが必要です**
> 
> 本ソフトを使用するには「FFmpeg」という外部ツールが必要です。

### FFmpegのインストール手順

**方法1: 簡単な方法（推奨）**

1. [ffmpeg-git-full.7z](https://www.gyan.dev/ffmpeg/builds/) をダウンロード
2. 解凍して `bin` フォルダ内の `ffmpeg.exe` を取り出す
3. `ffmpeg.exe` を **クリップ抽出くん と同じフォルダに配置**

これだけでOKです！

**方法2: システム全体で使う場合**

1. `ffmpeg.exe` を `C:\ffmpeg` などに配置
2. Windowsの「システム環境変数の編集」から「Path」にそのフォルダを追加

---

## 📖 使い方

1. アプリを起動します
2. 「動画を選択」ボタンで解析したい動画ファイルを選びます
3. 自動的にAI解析が始まり、ハイライト候補がリストアップされます
4. プレビューで確認し、必要なシーンにチェックを入れます
5. 「書き出し」ボタンで保存します

---

## 💻 動作環境

| 項目 | 要件 |
|------|------|
| OS | Windows 10 / 11 |
| CPU | Intel Core i5 以上推奨 |
| メモリ | 8GB 以上推奨 |
| GPU | NVIDIA / AMD製（任意、あれば高速化） |
| 必須 | FFmpeg |

---

## ⚠️ ライセンス

本ソフトはオープンソースコンポーネントを使用しています。
詳細は添付の `THIRD_PARTY_NOTICES.txt` をご確認ください。

---

<div class="mt-12 flex justify-center">
  <a href="https://github.com/shakashakahead-cyber/clip-extractor/releases/download/v1.0.2-beta/ClipExtractorSetup.exe" target="_blank" class="rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 px-8 py-4 text-lg font-bold text-white shadow-lg hover:from-indigo-400 hover:to-purple-500 hover:shadow-xl transition-all flex items-center gap-3">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5">
      <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
    </svg>
    <span>今すぐダウンロード</span>
  </a>
</div>
