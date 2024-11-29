import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
	site: 'https://example.com',
	integrations: [mdx(), sitemap()],
	vite: {
		logLevel: 'error', // Cambia el nivel de logs para reducir ruido
		define: {
			__VITE_IGNORE_WARNINGS__: true, // Opción personalizada para tu configuración
		},
		server: {
			strictPort: true, // Opcional, mejora el comportamiento del servidor en desarrollo
		},
	},
});