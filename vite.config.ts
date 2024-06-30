import { defineConfig } from 'vite'
import { fileURLToPath } from 'url';

export default defineConfig({
  base: '/let-makciks-cook/',
  build: {
    rollupOptions: {
        input: {
            index: fileURLToPath(new URL('index.html', import.meta.url)),
            forms: fileURLToPath(new URL('forms.html', import.meta.url)),
            xml: fileURLToPath(new URL('menu.xml', import.meta.url)),
            xsl: fileURLToPath(new URL('menu.xsl', import.meta.url)),
        },
    },
  },
  assetsInclude: ['index.html', 'forms.html', 'menu.xml', 'menu.xsl'],
})