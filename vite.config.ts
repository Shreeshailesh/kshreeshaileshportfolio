import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    ssr: true,
    server: {
      preset: process.env.VERCEL ? "vercel" : undefined,
    },
  },
});
