// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineCollection, z } from 'astro:content';

// Define una colección 'blog' con el esquema necesario
const blogCollection = defineCollection({
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.date(),
		updatedDate: z.date().optional(),
		heroImage: z.string().optional(), // Cambia 'heroImage' por 'image' si prefieres usar 'image'
		date: z.date().optional(), // Si 'date' es diferente de 'pubDate', lo puedes mantener
	}),
});

export const collections = {
	blog: blogCollection,
};

// Configuración principal
export default defineConfig({
	site: 'https://example.com',
	integrations: [mdx(), sitemap()],
});