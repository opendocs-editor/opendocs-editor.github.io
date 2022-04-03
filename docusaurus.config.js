// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'OpenDocs',
  tagline: 'A WYSIWYG editor like Google Docs that supports Dyslexia, and as a bonus, custom fonts.',
  url: 'https://opendocs-editor.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'opendocs-editor',
  projectName: 'opendocs',
  plugins: [
    [
      require.resolve("@cmfcmf/docusaurus-search-local"),
      {
        indexDocs: true
      }
    ]
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/opendocs-editor/opendocs.github.io/edit/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'OpenDocs',
        logo: {
          alt: 'OpenDocs Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Documentation',
          },
          {
            href: 'https://docs.nosadnile.net/',
            label: 'Live Demo',
            position: 'left'
          },
          {
            type: "docsVersionDropdown",
            position: "right",
          },
          {
            href: 'https://github.com/opendocs-editor/opendocs-editor.github.io',
            label: 'GitHub',
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
                label: 'Introduction',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Project Board',
                href: 'https://github.com/orgs/opendocs-editor/projects/1',
              },
              {
                label: 'Discussions',
                href: 'https://github.com/opendocs-editor/opendocs/discussions'
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/xxxxxxxx',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Live Demo',
                href: 'https://docs.nosadnile.net/',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/opendocs-editor',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} <a href="https://github.com/RedstoneWizard08">Jacob Sapoznikow</a>. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
