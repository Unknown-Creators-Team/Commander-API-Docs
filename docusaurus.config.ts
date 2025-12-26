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

    markdown: {
        hooks: {
            onBrokenMarkdownLinks: "throw",
            onBrokenMarkdownImages: "throw",
        },
    },

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
            integrity: "sha384-nB0miv6/jRmo5UMMR1wu3Gz6NLsoTkbqJghGIsx//Rlm+ZU03BU6SQNC66uf4l5+",
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
                    remarkPlugins: [remarkMath, remarkDirective, remarkLinkCard, remarkEasyTabs],
                    path: "docs",
                    routeBasePath: "docs",
                    rehypePlugins: [[rehypeKatex, { strict: false, output: "mathml" }]],
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl: "https://github.com/Unknown-Creators-Team/Commander-API-Docs/blob/main/",

                    versions: {
                        current: {
                            label: "Preview",
                            badge: true,
                        },
                    },
                },
                sitemap: {},
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
                gtag: {
                    trackingID: "G-LEPVKL22L8",
                },
            } satisfies Preset.Options,
        ],
    ],

    plugins: [
        [
            "@docusaurus/plugin-content-docs",
            {
                id: "tools",
                path: "tools",
                routeBasePath: "tools",
                sidebarPath: "./sidebarsTools.ts",
                // ... other options
            },
        ],
    ],

    themeConfig: {
        colorMode: {
            defaultMode: "dark",
            disableSwitch: true,
            respectPrefersColorScheme: false,
        },
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
                    sidebarId: "sidebar",
                    position: "left",
                    label: "ドキュメント",
                },
                // {
                //     type: "toolSidebar",
                //     sidebarId: "toolsSidebar",
                //     position: "left",
                //     label: "ツール",
                // },
                { to: "/tools", label: "ツール", position: "left" },
                { to: "/releases", label: "リリース", position: "left" },
                // {to: '/blog', label: 'Blog', position: 'left'},
                {
                    type: "docsVersionDropdown",
                    // versions: ["current", "2.0.0"],
                    position: "right",
                },
                {
                    href: "https://github.com/Unknown-Creators-Team/Commander-API",
                    // label: "GitHub",
                    className: "header-github-link",
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
                            label: "イベント / Event",
                            to: "/docs/Event",
                        },
                        {
                            label: "スクリプトイベント / ScriptEvent",
                            to: "/docs/ScriptEvent",
                        },
                        {
                            label: "マクロ / Macro",
                            to: "/docs/Macro",
                        },
                        {
                            label: "設定 / Config",
                            to: "/docs/Config",
                        },
                        {
                            label: "トラブルシューティング / Troubleshooting",
                            to: "/docs/tshoot",
                        },
                    ],
                },
                {
                    title: "コミュニティ",
                    items: [
                        {
                            label: "Discord",
                            href: "https://discord.gg/uTqyqtHWG4",
                        },
                        // {
                        //   label: 'X',
                        //   href: 'https://x.com/docusaurus',
                        // },
                    ],
                },
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
            copyright: `Copyright © 2025 Unknown.`,
        },
        prism: {
            theme: prismThemes.github,
            darkTheme: prismThemes.dracula,
        },
        algolia: {
            appId: "73Z3Z9Z1EI",
            apiKey: "d33991eb352b79be640578ea93459b04",
            indexName: "Commander API",
            // askAi: "8l26FgMYf8xJ"
            askAi: {
                assistantId: "8l26FgMYf8xJ",
            },
        },
    } satisfies Preset.ThemeConfig,
    headTags: [
        // <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9565261501369626" crossorigin="anonymous"></script>
        {
            tagName: "script",
            attributes: {
                async: true,
                src: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js",
                crossorigin: "anonymous",
                "data-ad-client": "ca-pub-9565261501369626",
            },
            innerHTML: "",
        },
    ],
};

export default config;
