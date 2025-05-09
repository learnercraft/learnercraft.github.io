// @ts-check
import react from "@astrojs/react";
import starlight from "@astrojs/starlight";
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";
import starlightBlog from "starlight-blog";

// https://astro.build/config
export default defineConfig({
    integrations: [
        starlight({
            title: "Yllst Testing Labs",
            favicon: "/images/favicon.png",
            social: [{ icon: "github", label: "GitHub", href: "https://github.com/yllst-testing-labs" }],
            sidebar: [
                {
                    label: "Guides",
                    items: [
                        // Each item here is one entry in the navigation menu.
                        { label: "Example Guide", slug: "guides/example" },
                    ],
                },
                {
                    label: "Reference",
                    autogenerate: { directory: "reference" },
                },
            ],
            customCss: ["./src/styles/global.css", "./src/styles/fonts.css"],
            plugins: [starlightBlog()],
        }),
        react(),
    ],

    vite: {
        plugins: [tailwindcss()],
    },
});
