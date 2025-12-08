import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap'; // ※手順2で追加されますが、書いておきます

// https://astro.build/config
export default defineConfig({
  // ▼ ここをあなたのドメインに変更
  site: 'https://shakashakahead.com',
  trailingSlash: 'always',

  integrations: [tailwind(), sitemap()]
});