import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { configDefaults } from "vitest/config";

// https://vite.dev/config/
export default defineConfig({
  test: {
    globals: true, // Enable global variables like `describe`, `it`, etc.
    environment: "jsdom", // Useful for testing DOM-related features.
    exclude: [...configDefaults.exclude], // Exclude unnecessary files.
    coverage: {
      reporter: ["text", "json", "html"],
      enabled: true,
      exclude: ["./backend", "*.config.*", "./dist"], // Exclude the ./backend folder and .config files from coverage.
    },
    setupFiles: ["./setupTests.ts"],
  },
  plugins: [react()],
});
