import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'The Despacito DDoS Protection Protocol',
  tagline: 'Open and decentralised Application Layer DDoS protection',

  // Set the production url of your site here
  url: 'https://despacito.bot',
  baseUrl: '/',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',

  i18n: {
    defaultLocale: 'en-gb',
    locales: ['en-gb'],
  },

  markdown: {
    mermaid: true,
  },

  presets: [
    [
      'classic',
      {
        blog: false,
        docs: {
          routeBasePath: '/',
          editUrl:
            'https://github.com/relaycorp/despacito-website/tree/main/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themes: ['@docusaurus/theme-mermaid'],

  themeConfig: {
    announcementBar: {
      content: `You're looking at a rough draft of the Despacito website, in case it wasn't obvious! 🚧`,
      isCloseable: false,
    },
    colorMode: {
        defaultMode: 'dark',
        disableSwitch: true,
        respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Despacito',
      items: [
        {
          type: 'doc',
          docId: 'overview',
          label: 'Overview',
        },
        {
          type: 'doc',
          docId: 'specs',
          label: 'Draft specs',
        },
        {
          type: 'doc',
          docId: 'contribute',
          label: 'Contribute',
        },
        {
          type: 'doc',
          position: 'right',
          docId: 'about',
          label: 'About',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Despacito',
          items: [
            {
              label: 'Overview',
              to: 'overview',
            },
            {
              label: 'Draft specs',
              to: 'specs',
            },
            {
              label: 'Contribute',
              to: 'contribute',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Spec discussions',
              href: 'https://github.com/relaycorp/despacito-website/discussions',
            },
            {
              label: 'Website repo',
              href: 'https://github.com/relaycorp/despacito-website',
            },
            {
              label: 'About',
              to: 'about',
            },
          ],
        },
        {
          title: 'Related projects by Relaycorp',
          items: [
            {
              label: 'The DDoS Report',
              href: 'https://ddos.report',
            },
            {
              label: 'Awala',
              href: 'https://awala.network',
            },
            {
              label: 'Letro',
              href: 'https://letro.app/en',
            },
            {
              label: 'VeraId',
              href: 'https://veraid.net',
            },
          ],
        },
      ],
      copyright: `Copyright © 2024 by <a href="https://relaycorp.tech">Relaycorp</a> and <a href="https://github.com/relaycorp/despacito-website/graphs/contributors">contributors</a>.
        The content of this website is available under the <a href="https://creativecommons.org/licenses/by-sa/4.0/">CC BY-SA 4.0 licence</a>.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
