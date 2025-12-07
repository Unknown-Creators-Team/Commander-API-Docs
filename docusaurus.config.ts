import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import remarkDirective from "remark-directive";
import remarkLinkCard from "./src/remark/linkCard.js";
import remarkEasyTabs from "./src/remark/easyTabs.js";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
    title: "Commander API",
    tagline: "マイクラ統合版のコマンドを拡張",
    favicon: "img/favicon.ico",

    // Set the production url of your site here
    url: "https://capi.un-known.xyz",
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: "/",

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: "Unknown-Creators-Team", // Usually your GitHub org/user name.
    projectName: "Commander-API-Docs", // Usually your repo name.

    onBrokenLinks: "throw",
    onBrokenMarkdownLinks: "warn",

    // Even if you don't use internationalization, you can use this field to set
    // useful metadata like html lang. For example, if your site is Chinese, you
    // may want to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: "ja",
        locales: ["ja"],
    },

    stylesheets: [
        {
            href: "https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/katex.min.css",
            type: "text/css",
            integrity:
                "sha384-nB0miv6/jRmo5USUSRBER0PLDLGKz8+SOT+HBzZ4dti+W1a3w/gNhOQqX/0QxuQI2",
            crossorigin: "anonymous",
        },
    ],

    presets: [
        [
            "classic",
            {
                docs: {
                    showLastUpdateAuthor: true,
                    showLastUpdateTime: true,
                    sidebarPath: "./sidebars.ts",
                    remarkPlugins: [
                        remarkMath,
                        remarkDirective,
                        remarkLinkCard,
                        remarkEasyTabs
                    ],
                    rehypePlugins: [[rehypeKatex, { strict: false, output: 'mathml' }]],
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl:
                        "https://github.com/Unknown-Creators-Team/Commander-API-Docs/blob/main/",
                },
                // blog: {
                //   showReadingTime: true,
                //   feedOptions: {
                //     type: ['rss', 'atom'],
                //     xslt: true,
                //   },
                //   // Please change this to your repo.
                //   // Remove this to remove the "edit this page" links.
                //   editUrl:
                //     'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
                //   // Useful options to enforce blogging best practices
                //   onInlineTags: 'warn',
                //   onInlineAuthors: 'warn',
                //   onUntruncatedBlogPosts: 'warn',
                // },
                theme: {
                    customCss: "./src/css/custom.css",
                },
            } satisfies Preset.Options,
        ],
    ],

    themeConfig: {
        // Replace with your project's social card
        // image: 'img/docusaurus-social-card.jpg',
        navbar: {
            title: "CAPI",
            //   logo: {
            //     alt: 'My Site Logo',
            //     src: 'img/logo.svg',
            //   },
            items: [
                {
                    type: "docSidebar",
                    sidebarId: "tutorialSidebar",
                    position: "left",
                    label: "ドキュメント",
                },
                // {to: '/blog', label: 'Blog', position: 'left'},
                {
                    href: "https://github.com/Unknown-Creators-Team/Commander-API",
                    label: "GitHub",
                    position: "right",
                },
            ],
        },
        footer: {
            style: "dark",
            links: [
                {
                    title: "ドキュメント",
                    items: [
                        {
                            label: "マクロ",
                            to: "/docs/Macro",
                        },
                    ],
                },
                // {
                //   title: 'Community',
                //   items: [
                //     {
                //       label: 'Stack Overflow',
                //       href: 'https://stackoverflow.com/questions/tagged/docusaurus',
                //     },
                //     {
                //       label: 'Discord',
                //       href: 'https://discordapp.com/invite/docusaurus',
                //     },
                //     {
                //       label: 'X',
                //       href: 'https://x.com/docusaurus',
                //     },
                //   ],
                // },
                {
                    title: "その他",
                    items: [
                        // {
                        //   label: 'Blog',
                        //   to: '/blog',
                        // },
                        {
                            label: "Unknown",
                            href: "https://un-known.xyz",
                        },
                        {
                            label: "GitHub",
                            href: "https://github.com/Unknown-Creators-Team",
                        },
                        {
                            label: "Discord",
                            href: "https://discord.gg/QF3n85dr4P",
                        },
                    ],
                },
            ],
            copyright: `Copyright © 2025 Unknown. Built with Docusaurus.`,
        },
        prism: {
            theme: prismThemes.github,
            darkTheme: prismThemes.dracula,
        },
        algolia: {
            appId: '73Z3Z9Z1EI',
            apiKey: 'd33991eb352b79be640578ea93459b04',
            indexName: 'Commander API',
            // @ts-expect-error
            askAi: "8l26FgMYf8xJ"
        }
    } satisfies Preset.ThemeConfig,
};

export default config;
