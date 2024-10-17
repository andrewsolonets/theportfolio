import { defineConfig } from "astro/config";

// https://astro.build/config
import preact from "@astrojs/preact";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  integrations: [preact({ compat: true }), tailwind()],
  output: "server",
  adapter: netlify(),
  buildOptions: {
    page404: '/404',
  },
});
