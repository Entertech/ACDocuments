// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: '情感云平台开发文档',
    tagline: 'Affective Cloud Headset boost brain power in 1 minute.',
    url: 'https://docs.affectivecloud.cn',
    baseUrl: '/',
    onBrokenLinks: 'warn',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.ico',

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: 'Entertech', // Usually your GitHub org/user name.
    projectName: 'affectivecloud', // Usually your repo name.

    // Even if you don't use internalization, you can use this field to set useful
    // metadata like html lang. For example, if your site is Chinese, you may want
    // to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: 'zh-Hans',
        locales: ['zh-Hans'],
    },

    presets: [
        [
            'classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    routeBasePath: '/',
                    sidebarPath: require.resolve('./sidebars.js'),
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    // editUrl:
                    //     'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
                },
                // blog: {
                //     showReadingTime: true,
                //     // Please change this to your repo.
                //     // Remove this to remove the "edit this page" links.
                //     editUrl:
                //         'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
                // },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            }),
        ],
    ],

    themeConfig:
        /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            algolia: {
                contextualSearch: false,
                appId: 'UK3CF5QTPQ',
                apiKey: "80ba324d818c04f2aceb0d4d73d74230",
                indexName: "AffectiveCloud-CN",
            },
            navbar: {
                title: '情感云平台开发文档',
                logo: {
                    alt: '情感云平台开发文档',
                    src: 'img/logo.svg',
                },
                items: [
                    {
                        type: 'doc',
                        label: 'SDK & Demo 下载',
                        docId: '开发资源',
                        position: 'right',
                    },
                    // {
                    //     type: 'doc',
                    //     docId: 'intro',
                    //     position: 'left',
                    //     label: 'Tutorial',
                    // },
                    // { to: '/blog', label: 'Blog', position: 'left' },
                    // {
                    //     href: 'https://github.com/facebook/docusaurus',
                    //     label: 'GitHub',
                    //     position: 'right',
                    // },
                ],
            },
            footer: {
                style: 'dark',
                links: [
                    // {
                    //     title: 'Docs',
                    //     items: [
                    //         {
                    //             label: 'Tutorial',
                    //             to: '/docs/intro',
                    //         },
                    //     ],
                    // },
                    // {
                    //     title: 'Community',
                    //     items: [
                    //         {
                    //             label: 'Stack Overflow',
                    //             href: 'https://stackoverflow.com/questions/tagged/docusaurus',
                    //         },
                    //         {
                    //             label: 'Discord',
                    //             href: 'https://discordapp.com/invite/docusaurus',
                    //         },
                    //         {
                    //             label: 'Twitter',
                    //             href: 'https://twitter.com/docusaurus',
                    //         },
                    //     ],
                    // },
                    // {
                    //     title: 'More',
                    //     items: [
                    //         {
                    //             label: 'Blog',
                    //             to: '/blog',
                    //         },
                    //         {
                    //             label: 'GitHub',
                    //             href: 'https://github.com/facebook/docusaurus',
                    //         },
                    //     ],
                    // },
                ],
                copyright: `Copyright © ${new Date().getFullYear()} Entertech Inc. All rights reserved.`,
            },
            prism: {
                theme: lightCodeTheme,
                darkTheme: darkCodeTheme,
            },
        }),

    plugins: [
        [
            '@docusaurus/plugin-ideal-image',
            {
                quality: 70,
                max: 1030, // max resized image's size.
                min: 640, // min resized image's size. if original is lower, use that size.
                steps: 2, // the max number of images generated between min and max (inclusive)
                disableInDev: false,
            },
        ],
    ],
};

module.exports = config;
