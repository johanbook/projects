// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Projects",
  tagline: "My projects",
  url: "https://johanbook.com",
  baseUrl: "/projects/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "https://johanbook.com/favicon.ico",
  organizationName: "johanbook",
  projectName: "projects",

  presets: [
    [
      "@docusaurus/preset-classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js"),
        },
        theme: {},
      }),
    ],
  ],

  scripts: [
    {
      src: "https://johanbook.com/dreamdata-analytics.js",
      defer: true,
    },
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "Johan Book",
        logo: {
          alt: "Site logo",
          src: "https://johanbook.com/fs/logo_light.png",
          srcDark: "https://johanbook.com/fs/logo_dark.png",
          href: "https://johanbook.com",
          target: "_self",
        },
        items: [
          {
            label: "Coding",
            position: "left",
            target: "_self",
            to: "https://johanbook.com/docs",
          },
          {
            label: "Cooking",
            position: "left",
            target: "_self",
            to: "https://johanbook.com/cooking",
          },
          {
            target: "_self",
            to: "https://johanbook.com/workout",
            label: "Workout",
            position: "left",
          },
          {
            to: "/",
            label: "Projects",
            position: "left",
          },
        ],
      },
      colorMode: {
        respectPrefersColorScheme: true,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
