import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";

export default defineConfig({
  plugins: [
    react(),
    tanstackStart({
      ssr: true,
      server: {
        preset: process.env.VERCEL ? "vercel" : undefined,
      },
    }),
  ],
});
