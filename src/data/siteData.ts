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
            desc: "タグ管理・配信設定・SNS告知をこれひとつで。配信準備の時間を短縮します。",
            link: "/tools/twitch-stream-helper/",
            storeUrl: "https://chromewebstore.google.com/detail/twitch-stream-helper/fonjapihhkafhmjfdpdcgfoghngldmep",
            icon: "🛠️",
            image: "/images/twitch-stream-helper-preview.png",
            features: [
                "タグプリセット保存（ロードアウト）",
                "スマート配信設定",
                "X (Twitter) 連携投稿",
            ],
            isFree: true,
            badge: "おすすめ",
            recommend: "毎日タグを手入力しているTwitch配信者",
        },
        {
            title: "Comment Reader for Twitch (powered by Voicevox)",
            desc: "ずんだもん達がコメントを読み上げ。VOICEVOX連携で高品質な音声読み上げを実現。",
            link: "/tools/voicevox-comment-reader/",
            storeUrl: "https://chromewebstore.google.com/detail/eolabmdepbcdcppfdmkibgjffiifndkd?utm_source=item-share-cb",
            icon: "🗣️",
            image: "/images/voicevox-comment-reader-preview.png",
            features: [
                "高品質なAI音声読み上げ（VOICEVOX）",
                "面倒な設定は不要（ダッシュボードを開くだけ）",
                "Botやコマンドの読み飛ばし機能",
            ],
            isFree: true,
            badge: "NEW",
            recommend: "棒読みちゃん設定に疲れた配信者",
        },
    ],
    en: [
        {
            title: "Twitch Stream Helper",
            desc: "Manage tags, stream settings, and social posts all in one place. Save time on your pre-stream routine.",
            link: "/en/tools/twitch-stream-helper/",
            storeUrl: "https://chromewebstore.google.com/detail/twitch-stream-helper/fonjapihhkafhmjfdpdcgfoghngldmep",
            icon: "🛠️",
            image: "/images/twitch-stream-helper-preview.png",
            features: [
                "Save Tag Presets (Loadouts)",
                "Smart Stream Settings",
                "X (Twitter) Integration",
            ],
            isFree: true,
            badge: "Recommended",
            recommend: "Streamers who type tags manually every day",
        },
        {
            title: "Comment Reader for Twitch (powered by Voicevox)",
            desc: "Let Zundamon and friends read your chat aloud. High-quality TTS integration with VOICEVOX.",
            link: "/en/tools/voicevox-comment-reader/",
            storeUrl: "https://chromewebstore.google.com/detail/eolabmdepbcdcppfdmkibgjffiifndkd?utm_source=item-share-cb",
            icon: "🗣️",
            image: "/images/voicevox-comment-reader-preview.png",
            features: [
                "High-quality AI TTS (VOICEVOX)",
                "No config needed (Just open dashboard)",
                "Ignore Bots and Commands",
            ],
            isFree: true,
            badge: "NEW",
            recommend: "Streamers tired of complex TTS setups",
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
