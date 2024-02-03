// uno.config.ts
import { defineConfig } from "unocss";

export default defineConfig({
  content: {
    pipeline: {
      include: [
        "src/**/*.{js,ts}",
      ],
    },
  },
});
