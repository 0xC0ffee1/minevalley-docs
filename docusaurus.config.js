// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Minevalley Wiki',
  tagline: '',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://minevalley-docs.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: '0xC0ffee1', // Usually your GitHub org/user name.
  projectName: 'minevalley-docs.github.io', // Usually your repo name.
  trailingSlash: false,
  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/0xC0ffee1/minevalley-docs/tree/master/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/0xC0ffee1/minevalley-docs/tree/master/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Minevalley Wiki',
        logo: {
          alt: 'Minevalley Wiki',
          src: 'img/Minevalley200.webp',
        },
        items: [
          {
            href: 'https://github.com/0xC0ffee1/minevalley-docs/',
            label: 'Contribute',
            position: 'right',
          },
          {
            href: 'https://minevalley.org',
            label: 'Website',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Phlox (Semi-Vanilla)',
                to: '/category/phlox---semi-vanilla',
              },
              {
                label: 'Lily (Creative)',
                to: '/category/lily---creative',
              },
              {
                label: 'Orchid (Vanilla)',
                to: '/category/orchid---vanilla',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://minevalley.org/discord',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Store',
                href: 'https://store.minevalley.org',
              }
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Minevalley. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
