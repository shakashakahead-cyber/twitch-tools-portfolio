# Akatsukizaemon Lab

Personal site focused on streamer tools, built with Astro and Tailwind CSS.

## Requirements
- Node.js 18+

## Development
```sh
npm install
npm run dev
```

## Build
```sh
npm run build
npm run preview
```

## Deploy
1) Run `npm run build` to generate `dist/`.
2) Deploy `dist/` to any static host (Netlify, Cloudflare Pages, GitHub Pages, etc.).
3) If the domain changes, update `site` in `astro.config.mjs` so sitemap and canonical URLs stay correct.
4) If you deploy under a subpath, set `base` in `astro.config.mjs`.

## Third-party services and assets
- Google Fonts: Noto Sans JP loaded from `https://fonts.googleapis.com`.
- Google Analytics via gtag (`G-411RHL1DTK`).
- Twitch embed script and preview image CDN.
- YouTube embeds for tool pages.

## Affiliate Links
- Blog pages now show an affiliate disclosure in `src/layouts/BlogLayout.astro`.
- Use `src/components/AffiliateLink.astro` in `.astro` (or future `.mdx`) files.
- In plain `.md` files, add the required attributes manually.

```html
<a
  href="https://www.amazon.co.jp/dp/XXXXXXXXXX?tag=shakashakahead-22"
  target="_blank"
  rel="sponsored nofollow noopener noreferrer"
>
  Amazonで見る
</a>
```

## License
MIT. See `LICENSE`.
