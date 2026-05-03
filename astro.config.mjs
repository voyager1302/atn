// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  vite: {
    build: {
      // esbuild is bundled with Vite — no extra package required.
      // Removes console.* calls and minifies all output.
      minify: 'esbuild',
      // Raise inline threshold: assets smaller than this are inlined as base64
      // (avoids extra network round-trips for tiny assets)
      assetsInlineLimit: 4096,
      // Split CSS chunks per-page rather than one giant bundle
      cssCodeSplit: true,
    },
    esbuild: {
      // Strip console.* calls from production output
      drop: ['console'],
    },
  },
});
