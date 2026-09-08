export const socialLinks = {
    twitch: "https://www.twitch.tv/akatsukizaemon",
    x: "https://x.com/akatsukizaemon",
    email: "shakashakahead@gmail.com",
};

export const skills = ["C#"];

export const games = ["VALORANT", "Apex Legends", "Shadowverse"];

export const extensions = {
    ja: [
        {
            title: "Twitch Stream Helper",
            desc: "配信設定とX告知を1か所で管理。公開準備中のv1.1.0では、配信ごとのコメント自動投稿・任意の固定にも対応。",
            link: "/tools/twitch-stream-helper/",
            storeUrl: "https://chromewebstore.google.com/detail/twitch-stream-helper/fonjapihhkafhmjfdpdcgfoghngldmep",
            repoUrl: "https://github.com/shakashakahead-cyber/twitch-stream-helper",
            icon: "🛠️",
            image: "/images/twitch-stream-helper-preview.png",
            features: [
                "タイトル・カテゴリ・タグをまとめて更新",
                "テンプレート変数とリアルタイムプレビュー",
                "X告知文と配信URLの有無をカスタマイズ",
                "コメント自動投稿・任意の固定（v1.1.0準備中）",
            ],
            isFree: true,
            badge: "v1.1.0 公開準備中",
            recommend: "配信前の設定と告知を毎回手作業しているTwitch配信者",
        },
        {
            title: "Comment Reader for Twitch (powered by Voicevox)",
            desc: "TwitchチャットをローカルのVOICEVOXで読み上げ。話者・速度・出力先・辞書を細かく設定できます。",
            link: "/tools/voicevox-comment-reader/",
            storeUrl: "https://chromewebstore.google.com/detail/eolabmdepbcdcppfdmkibgjffiifndkd?utm_source=item-share-cb",
            repoUrl: "https://github.com/shakashakahead-cyber/comment-Reader-for-Twitch-powered-by-Voicevox-",
            icon: "🗣️",
            image: "/images/voicevox-comment-reader-preview.png",
            features: [
                "話者・速度・音量・出力デバイスを選択",
                "返信は宛先と本文だけを自然に読み上げ",
                "読み替え辞書・除外ユーザー・コマンド無視",
            ],
            isFree: true,
            badge: "UPDATED",
            recommend: "ゲーム中もコメントを聞き逃したくない配信者",
        },
    ],
    en: [
        {
            title: "Twitch Stream Helper",
            desc: "Manage stream settings and X announcements together. Upcoming v1.1.0 adds one saved chat comment per stream with optional pinning.",
            link: "/en/tools/twitch-stream-helper/",
            storeUrl: "https://chromewebstore.google.com/detail/twitch-stream-helper/fonjapihhkafhmjfdpdcgfoghngldmep",
            repoUrl: "https://github.com/shakashakahead-cyber/twitch-stream-helper",
            icon: "🛠️",
            image: "/images/twitch-stream-helper-preview.png",
            features: [
                "Update title, category, and tags together",
                "Template variables with live previews",
                "Customizable X posts and stream URL option",
                "Automatic chat posting and optional pins (v1.1.0 soon)",
            ],
            isFree: true,
            badge: "v1.1.0 coming soon",
            recommend: "Twitch streamers who repeat the same setup and announcement tasks",
        },
        {
            title: "Comment Reader for Twitch (powered by Voicevox)",
            desc: "Read Twitch chat through your local VOICEVOX engine, with detailed voice, output, and dictionary controls.",
            link: "/en/tools/voicevox-comment-reader/",
            storeUrl: "https://chromewebstore.google.com/detail/eolabmdepbcdcppfdmkibgjffiifndkd?utm_source=item-share-cb",
            repoUrl: "https://github.com/shakashakahead-cyber/comment-Reader-for-Twitch-powered-by-Voicevox-",
            icon: "🗣️",
            image: "/images/voicevox-comment-reader-preview.png",
            features: [
                "Choose speaker, speed, volume, and output",
                "Replies read only the recipient and new message",
                "Replacement dictionary, user filters, and command ignore",
            ],
            isFree: true,
            badge: "UPDATED",
            recommend: "Streamers who do not want to miss chat while playing",
        },
    ],
};

export const desktopApps = {
    ja: [
        {
            title: "クリップ抽出くん ベータ",
            desc: "AIが盛り上がりポイントを自動検知。配信アーカイブからハイライトを簡単に切り出し。",
            link: "/tools/clip-extractor/",
            downloadUrl: "https://github.com/shakashakahead-cyber/clip-extractor/releases/download/v1.0.3-beta/ClipExtractorSetup.exe",
            icon: "🎬",
            image: "/images/clip-extractor-preview.png",
            features: [
                "笑い声・歓声をAIが自動検知",
                "スコア表示で優先度が一目瞭然",
                "一括エクスポート機能",
            ],
            isFree: true,
            badge: "β",
            recommend: "切り抜き動画を作りたい配信者",
            isDesktopApp: true,
            platform: "Windows",
            fileSize: "約1.5GB",
        },
    ],
    en: [
        {
            title: "Clip Extractor Beta",
            desc: "AI automatically detects highlight moments. Easily extract clips from stream archives.",
            link: "/tools/clip-extractor/",
            downloadUrl: "https://github.com/shakashakahead-cyber/clip-extractor/releases/download/v1.0.3-beta/ClipExtractorSetup.exe",
            icon: "🎬",
            image: "/images/clip-extractor-preview.png",
            features: [
                "AI detects laughter and cheers",
                "Score display for easy prioritization",
                "Batch export feature",
            ],
            isFree: true,
            badge: "β",
            recommend: "Streamers who want to make clip videos",
            isDesktopApp: true,
            platform: "Windows",
            fileSize: "~1.5GB",
        },
    ],
};

export const profile = {
    ja: {
        role: "Freelance Engineer & Streamer",
        description: `元自衛官のフリーランスエンジニア 兼 Twitchストリーマー。\n東京・中野で猫と暮らしながら、「配信の課題を技術で解決する」をモットーに開発しています。`,
        detailedDescription: `
## お手伝いできること
* Twitch配信向けChrome拡張機能の開発
* 配信周りツールの設計・技術相談
* Webサイト・Webアプリケーション制作

ご依頼やご相談は、ページ下部のContactからお気軽にどうぞ。

## キャリア / 背景
自衛隊での勤務を経て、ITエンジニアに転身。現在はフリーランスとしてWebアプリケーション開発やChrome拡張機能の開発を行っています。

## 配信活動
Twitchでは主にFPS（VALORANT等）を配信しており、そこで感じた「もっとこうだったら便利なのに」という思いが開発の原動力になっています。
`,
        playingStreaming: {
            title: "Playing / Streaming",
            desc: "主にVALORANTを配信中。オーディオ機材やガジェットの話も大好きです。",
        }
    },
    en: {
        role: "Freelance Engineer & Streamer",
        description: `Freelance Engineer & Twitch Streamer with a background in the JSDF.\nLiving in Nakano, Tokyo with cats, developing with the motto "Solving streaming problems with technology".`,
        detailedDescription: `
## What I Can Do
* Development of Chrome Extensions for Twitch
* Technical consultation for streaming tools
* Web site / Web application development

Feel free to contact me via the links below.

## Background
Starting my career in the JSDF, I transitioned to becoming an IT engineer. Currently working as a freelancer developing Web applications and Chrome extensions.

## Streaming
I mostly stream FPS games (like VALORANT) on Twitch. My development is driven by the desire to solve problems I encounter during my own streams.
`,
        playingStreaming: {
            title: "Playing / Streaming",
            desc: "Mainly streaming VALORANT. I also love talking about audio gear and gadgets.",
        }
    }
};
