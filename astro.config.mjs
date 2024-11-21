// @ts-check
import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  image: {
    domains: ["elikem-directus.up.railway.app", "images.unsplash.com"],
  },
  integrations: [tailwind(), react()],
});
