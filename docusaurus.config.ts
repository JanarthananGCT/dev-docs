// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";
import type * as OpenApiPlugin from "docusaurus-plugin-openapi-docs";
import { PluginOptions as OpenAPIOptions } from "docusaurus-plugin-openapi-docs/src/types";
import { src } from "./src/utils/logo";

// Function to get version object from localStorage or use default
function getVersionObjectFromLocalStorage() {
  // Check if localStorage is defined (client-side context)
  if (typeof localStorage !== "undefined") {
    const storedVersionObject = localStorage.getItem("selectedVersion");
    if (storedVersionObject) {
      try {
        return JSON.parse(storedVersionObject);
      } catch (error) {
        console.error("Error parsing stored version object:", error);
      }
    }
  }

  // Default version object if localStorage is not available or item is not found/parsable
  return {
    version: "v3",
    label: "version 3",
    baseUrl: "/rest-apis/v3",
  };
}

const config: Config = {
  title: "SurveySparrow APIs | Connect and REST assured",
  tagline: "SurveySparrow APIs | Connect and REST assured",
  url: "https://dev-docs-sigma.vercel.app",
  baseUrl: "/",
  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",
  favicon: src,
  organizationName: "",
  projectName: "SurveySparrow API Docs",

  presets: [
    [
      "classic",
      {
        docs: {
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.ts"),
          docItemComponent: "@theme/ApiItem",
        },
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      } satisfies Preset.Options,
    ],
  ],
  themeConfig: {
    docs: {
      sidebar: {
        autoCollapseCategories: false,
      },
    },
    colorMode: {
      defaultMode: "dark",
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    algolia: {
      apiKey: "abd3bea0ec77da01c12788c63924af62",
      indexName: "dev_survey",
      appId: "DZTMW46IAP",
      contextualSearch: true,
      searchParameters: {
        facetFilters: [], // Dynamically fetch version from object
      },
      searchPagePath: "search",
    },
    navbar: {
      title: "SurveySparrow",
      logo: {
        alt: "logo",
        src: src,
      },
      hideOnScroll: true,
    },
    prism: {
      additionalLanguages: ["ruby", "csharp", "php", "java", "powershell"],
    },
    languageTabs: [
      {
        highlight: "bash",
        language: "curl",
        logoClass: "bash",
      },
      {
        highlight: "python",
        language: "python",
        logoClass: "python",
        variant: "requests",
      },
      {
        highlight: "go",
        language: "go",
        logoClass: "go",
      },
      {
        highlight: "javascript",
        language: "nodejs",
        logoClass: "nodejs",
        variant: "axios",
      },
      {
        highlight: "ruby",
        language: "ruby",
        logoClass: "ruby",
      },
      {
        highlight: "csharp",
        language: "csharp",
        logoClass: "csharp",
        variant: "httpclient",
      },
      {
        highlight: "php",
        language: "php",
        logoClass: "php",
      },
      {
        highlight: "java",
        language: "java",
        logoClass: "java",
        variant: "unirest",
      },
      {
        highlight: "powershell",
        language: "powershell",
        logoClass: "powershell",
      },
    ],
  } satisfies Preset.ThemeConfig,

  plugins: [
    [
      "docusaurus-plugin-openapi-docs",
      {
        id: "api", //plugin id
        docsPluginId: "classic", // id of plugin-content-docs or preset for rendering docs
        config: {
          ss_versioned: {
            specPath: `yaml/v3.yaml`, // Dynamic specPath based on version
            outputDir: `docs/rest-apis/v3`, // Dynamic outputDir based on version
            sidebarOptions: {
              groupPathsBy: "tag",
              categoryLinkSource: "tag",
            },
            version: "v3", // Current version
            label: "Version 3", // Current version label
            baseUrl: "/rest-apis/v3", // Current baseUrl
            versions: {
              v2: {
                specPath: "yaml/v2.yaml",
                outputDir: "docs/rest-apis/v2", // No trailing slash
                label: "v2.0.0",
                baseUrl: "/rest-apis/v2", // Leading slash is important
              },
              v1: {
                specPath: "yaml/v1.yaml",
                outputDir: "docs/rest-apis/v1", // No trailing slash
                label: "v1.0.0",
                baseUrl: "/rest-apis/v1", // Leading slash is important
              },
            },
          },
        },
      } satisfies OpenAPIOptions,
    ],
  ],
  themes: ["docusaurus-theme-openapi-docs"],
  stylesheets: [
    {
      href: "https://use.fontawesome.com/releases/v5.11.0/css/all.css",
      type: "text/css",
    },
  ],
};

async function createConfig() {
  const lightTheme = (await import("./src/utils/prismLight.mjs")).default;
  const darkTheme = (await import("./src/utils/prismLight.mjs")).default;

  if (config.themeConfig?.prism) {
    config.themeConfig.prism.theme = lightTheme;
    config.themeConfig.prism.darkTheme = darkTheme;
  }
  return config;
}

module.exports = createConfig;
