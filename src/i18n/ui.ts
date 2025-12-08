export const languages = {
    ja: '日本語',
    en: 'English',
};

export const defaultLang = 'ja';

export const ui = {
    ja: {
        'nav.home': 'ツール一覧に戻る',
        'nav.privacy': 'プライバシーポリシー',
        'nav.contact': '開発者に連絡 (X)',
        'btn.add_chrome': 'Chrome Web Storeで追加',
        'btn.store': 'Storeへ',
        'header.video': '使い方・紹介動画',
        'schema.video.title_suffix': '解説動画',
        'schema.video.description': 'ツールの使い方解説',
        'footer.rights': 'Akatsukizaemon',
    },
    en: {
        'nav.home': 'Back to Tools',
        'nav.privacy': 'Privacy Policy',
        'nav.contact': 'Contact Developer (X)',
        'btn.add_chrome': 'Add to Chrome',
        'btn.store': 'Visit Store',
        'header.video': 'Tutorial Video',
        'schema.video.title_suffix': 'Tutorial Video',
        'schema.video.description': 'Video tutorial for this tool',
        'footer.rights': 'Akatsukizaemon',
    },
} as const;
