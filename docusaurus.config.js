/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
module.exports = {
  title: "Develop with Palo Alto Networks",
  tagline:
    "Explore our API Doc, Quickstarts, and Blog or dive right in and play in our sandbox. We have all the tools you needs to make the next big security innovation. SDKs in your favorite languages, detailed walk-throughs for sample apps, and all the resources you’ll need to flourish.",
  url: process.env.CI_PAGES_URL ? process.env.CI_PAGES_URL : "https://pan.dev",
  baseUrl: process.env.CI_MERGE_REQUEST_IID
    ? `/-/${process.env.CI_PROJECT_NAME}/-/jobs/${process.env.CI_JOB_ID}/artifacts/public/`
    : "/",

  favicon: "img/PANW_Parent_Glyph_Red.svg",
  organizationName: "PaloAltoNetworks",
  projectName: "pan.dev",
  themeConfig: {
    colorMode: {
      defaultMode: "light",
    },
    /*
    algolia: {
      apiKey: "6869800b232f5f8362e83901d79110ee",
      appId: "XC7919KOX3",
      indexName: "pan",
      searchParameters: {
        typoTolerance: false,
        facetFilters: [
          ["tags:prisma", "tags:strata", "tags:xsoar", "tags:cortex"],
        ],
      }, // Optional, if provided by Algolia
    },
    */
    hideOnScroll: true,
    navbar: {
      title: "",
      logo: {
        alt: "Palo Alto Networks for Developers",
        src: "img/pan_dev_black.png",
        srcDark: "img/pan_dev_white.png",
      },
      items: [
        {
          label: "Secure Access Service Edge",
          to: "sase",
          items: [
            {
              to: "#",
              label: "Docs",
              className: "section__docs",
            },
            {
              to: "sase/docs",
              label: "Prisma SASE",
              className: "indent",
            },
            {
              to: "sase-services/docs",
              label: "SASE Services",
              className: "indent",
            },
            {
              to: "#",
              label: "Prisma SASE API Reference",
              className: "section__docs",
            },
            {
              to: "sase/api/msp",
              label: "Prisma SASE Multitenant Platform",
              className: "indent",
            },
            {
              to: "sase/api/prisma-access-config",
              label: "Prisma Access Configuration",
              className: "indent",
            },
            {
              to: "#",
              label: "SASE Services API Reference",
              className: "section__docs",
            },
            {
              to: "sase-services/api/auth-service",
              label: "Authentication Service",
              className: "indent",
            },
            {
              to: "sase-services/api/identity-and-access-management",
              label: "Identity and Access Management",
              className: "indent",
            },
            {
              to: "sase-services/api/tenancy-service",
              label: "Tenancy Service",
              className: "indent",
            },
          ],
        },
        {
          label: "Other Developer Docs",
          position: "right",
          items: [
            {
              href: "https://cortex.pan.dev",
              label: "Cortex Data Lake",
              logo: "/img/cortexfavicon.png",
            },
            {
              href: "https://xsoar.pan.dev",
              label: "Cortex XSOAR",
              logo: "/img/Cortex-XSOAR-product-green.svg",
            },
            {
              href: "https://panos.pan.dev",
              label: "PAN-OS",
              logo: "/img/strata_favicon.png",
            },
            {
              href: "https://prisma.pan.dev",
              label: "Prisma",
              logo: "/img/prismafavicon.png",
            },
          ],
        },
        {
          to: "https://gallery.pan.dev",
          className: "header-github-link",
          position: "right",
        },
        {
          href: "https://medium.com/palo-alto-networks-developer-blog",
          className: "header-blog-link",
          position: "right",
          "aria-label": "Palo Alto Networks Developer Blog",
        },
      ],
    },
    announcementBar: {
      id: "announcementBar",
      content: `This documentation is in an early preview state. It is subject to change without notice.`,
    },
    footer: {
      style: "light",
      logo: {
        alt: "Palo Alto Networks for developers",
        src: "img/PANW_Parent_Logo_White.svg",
      },
      copyright: `Copyright © ${new Date().getFullYear()} Palo Alto Networks, Inc.`,
    },
  },
  themes: [
    [
      require.resolve("./docusaurus-plugin-panw/src/index.cjs"),
      {
        gtm: "GTM-PLXD79N",
      },
    ],
  ],
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./contributing/sidebars.js"),
          path: "contributing",
        },
        theme: {
          customCss: [require.resolve("./src/css/custom.css")],
        },
      },
    ],
  ],
  plugins: [
    /*
    [
      "@docusaurus/plugin-sitemap",
      {
        id: "pan-sitemap",
        changefreq: "weekly",
        priority: 0.5,
      },
    ],
    */
    [
      require.resolve("./plugin-sitemap-coveo/src/index.cjs"),
      {
        id: "coveo-sitemap",
        changefreq: "weekly",
        priority: 0.5,
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "sase",
        path: "sase",
        routeBasePath: "sase",
        sidebarPath: require.resolve("./sase/sidebar.js"),
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "sase-services",
        path: "sase-services",
        routeBasePath: "sase-services",
        sidebarPath: require.resolve("./sase-services/sidebar.js"),
      },
    ],
  ],
  stylesheets: [
    {
      href: "https://use.fontawesome.com/releases/v5.15.0/css/all.css",
      type: "text/css",
      rel: "stylesheet",
    },
  ],
  onDuplicateRoutes: "error",
  onBrokenLinks: "error",
  onBrokenMarkdownLinks: "error",
};
