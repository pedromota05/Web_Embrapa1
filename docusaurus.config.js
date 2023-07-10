// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Embrapa Agropecuária Oeste - Portal Embrapa',
  tagline: 'Dinosaurs are cool',
  favicon: 'img/favicon_Embrapa.ico',

  // Set the production url of your site here
  url: 'http://localhost:3000/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr'],
    path: 'i18n',
    localeConfigs: {
      en: {
        label: 'English',
        direction: 'ltr',
        htmlLang: 'en-US',
        calendar: 'gregory',
        path: 'en',
      },
      fa: {
        label: 'فارسی',
        direction: 'rtl',
        htmlLang: 'fa-IR',
        calendar: 'persian',
        path: 'fa',
      },
    },
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
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
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      algolia: {
        appId: 'JI1RY889EC',
        apiKey: '50137ebf5d223dedcc3a5d5c245829b1',
        indexName: 'Embrapa_Teste',
        contextualSearch: true,
        placeholder: 'Search in my beautiful website',
      },
      navbar: {
        hideOnScroll: false,
        logo: {
          alt: 'Logo Embrapa',
          src: 'img/logo-embrapa.png',
        },
        items: [
          {
            type: 'dropdown',
            label: 'A Embrapa',
            position: 'right',
            items: [
              {
                label: 'Pesquisa',
                to: 'https://www.embrapa.br/pesquisa',
              },
              {
                label: 'Ações e campanhas',
                to: 'https://www.embrapa.br/acoes-e-campanhas',
              },
              {
                label: 'Sobre a Embrapa',
                to: 'https://www.embrapa.br/sobre-a-embrapa',
              },
              {
                label: 'Agência Embrapa de Informação Tecnológica - Ageitec',
                to: 'https://www.embrapa.br/agencia-de-informacao-tecnologica/inicial',
              },
              {
                label: 'Atuação internacional',
                to: 'https://www.embrapa.br/atuacao-internacional',
              },
              {
                label: 'Missão, visão e valores',
                to: 'https://www.embrapa.br/missao-visao-e-valores',
              },
              {
                label: 'Fale conosco',
                to: 'https://www.embrapa.br/fale-conosco',
              },
              {
                label: 'Unidades - Embrapa no Brasil',
                to: 'https://www.embrapa.br/embrapa-no-brasil',
              },
            ],
          },
          {
            type: 'localeDropdown',
            position: 'right',
            className: 'language',
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
