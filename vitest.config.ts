import { resolve } from "path";
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    isolate: false,
  },
  resolve: {
    alias: {
      "~": resolve(".", "src"),
    },
  },
})