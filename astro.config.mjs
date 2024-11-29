// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// Configuración principal de Astro
export default defineConfig({
	site: 'https://example.com',
	integrations: [mdx(), sitemap()],
});