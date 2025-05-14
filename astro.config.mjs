// @ts-check
import react from "@astrojs/react";
import starlight from "@astrojs/starlight";
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";
import starlightBlog from "starlight-blog";

// https://astro.build/config
export default defineConfig({
    site: "https://learnercraft.github.io",
    integrations: [
        starlight({
            title: "LearnerCraft Labs",
            favicon: "/images/favicon.png",
            social: [{ icon: "github", label: "GitHub", href: "https://github.com/learnercraft" }],
            defaultLocale: "root",
            locales: {
                // English docs in `src/content/docs/en/`
                root: {
                    label: "English",
                    lang: "en",
                },
                // Vietnamese docs in `src/content/docs/vi/`
                vi: {
                    label: "Tiếng Việt",
                    lang: "vi",
                },
            },
            sidebar: [
                { slug: "about" },
                {
                    label: "Projects",
                    autogenerate: { directory: "projects" },
                    translations: {
                        "vi": "Các dự án",
                    },
                },
            ],
            customCss: ["./src/styles/global.css", "./src/styles/fonts.css"],
            plugins: [
                starlightBlog({
                    authors: {
                        yell0wsuit: {
                            name: "yell0wsuit",
                            title: "Admin",
                            picture: "/images/avatar/yell0wsuit.png",
                            url: "https://yell0wsuit.page",
                        },
                    },
                }),
            ],
        }),
        react(),
    ],

    vite: {
        plugins: [tailwindcss()],
    },
});
