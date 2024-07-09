/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebars: SidebarsConfig = {
  "ss_versioned-v2": [
    {
      type: "doc",
      id: "Introduction",
      className: "sidebar-item-Introduction",
    },
    {
      type: "category",
      label: "Appnest",
      collapsed: true,
      link: {
        type: "doc",
        id: "appnest/docs/Appnest",
      },
      items: [
        {
          type: "category",
          label: "Tutorial",
          collapsed: true,
          link: {
            type: "generated-index",
            title: "Welcome to AppNest Codelabs",
            description:
              "Discover a seamless and interactive learning experience on our Developer Platform through detailed codelabs, empowering you to unleash your full potential by building SurveySparrow applications and exploring its rich features.",
            slug: "appnest/code-labs",
          },
          items: [
            {
              type: "doc",
              id: "appnest/code-labs/simple_sdk_app",
            },
            {
              type: "doc",
              id: "appnest/code-labs/event_app",
            },
            {
              type: "doc",
              id: "appnest/code-labs/react_app",
            },
            {
              type: "doc",
              id: "appnest/code-labs/scheduler_app",
            },
            {
              type: "doc",
              id: "appnest/code-labs/global_webhook",
            },
            {
              type: "doc",
              id: "appnest/code-labs/submitting_app_for_review",
            },
          ],
        },
        {
          type: "category",
          label: "SDK Docs",
          collapsed: true,
          link: {
            type: "generated-index",
            title: "SurveySparrow SDK Documentation",
            description:
              "This documentation helps developer to build apps using surveysparrow software development kit",
            slug: "appnest/docs/Appnest",
          },
          items: [
            {
              type: "category",
              label: "Getting Started",
              collapsed: true,
              link: {
                type: "doc",
                id: "appnest/docs/getting-started/getting-started",
              },
              items: [
                {
                  type: "doc",
                  id: "appnest/docs/getting-started/quick-start",
                },
                {
                  type: "doc",
                  id: "appnest/docs/getting-started/first-app",
                },
              ],
            },
            {
              type: "category",
              label: "Building Apps",
              collapsed: true,
              link: {
                type: "doc",
                id: "appnest/docs/apps/building-apps",
              },
              items: [
                {
                  type: "doc",
                  id: "appnest/docs/apps/react_app",
                },
                {
                  type: "doc",
                  id: "appnest/docs/apps/react_serverless_app",
                },
                {
                  type: "doc",
                  id: "appnest/docs/apps/scheduler_app",
                },
                {
                  type: "doc",
                  id: "appnest/docs/apps/serverless_app",
                },
                {
                  type: "doc",
                  id: "appnest/docs/apps/smi_app",
                },
              ],
            },
            {
              type: "doc",
              id: "appnest/docs/sparrow-cli/index",
            },
            {
              type: "category",
              label: "Configuration",
              collapsed: true,
              link: {
                type: "doc",
                id: "appnest/docs/configuration/index",
              },
              items: [
                {
                  type: "doc",
                  id: "appnest/docs/configuration/app-manifest",
                },
                {
                  type: "doc",
                  id: "appnest/docs/configuration/installation-parameters",
                },
              ],
            },
            {
              type: "doc",
              id: "appnest/docs/app-category-types/index",
            },
            {
              type: "doc",
              id: "appnest/docs/data-storage/index",
            },
            {
              type: "doc",
              id: "appnest/docs/features/index",
            },
            {
              type: "doc",
              id: "appnest/docs/global-webhook/index",
            },
            {
              type: "doc",
              id: "appnest/docs/incoming-webhook/index",
            },
            {
              type: "doc",
              id: "appnest/docs/logs/index",
            },
            {
              type: "doc",
              id: "appnest/docs/scheduler/index",
            },
            {
              type: "doc",
              id: "appnest/docs/serverless/index",
            },
            {
              type: "doc",
              id: "appnest/docs/terms-and-privacy/index",
            },
          ],
        },
      ],
    },
    {
      type: "category",
      label: "SurveySparrow V2 API",
      collapsed: true,
      link: {
        type: "generated-index",
        title: "SurveySparrow API (v2)",
        description: "SurveySparrow V2 API",
        slug: "/rest-apis/v2",
      },
      items: [
        {
          type: "doc",
          id: "rest-apis/v2/Introduction",
        },
        {
          type: "doc",
          id: "rest-apis/v2/OAuth",
        },
        ...require("./docs/rest-apis/v2/sidebar.js"),
      ],
    },
  ],
  "ss_versioned-v1": [
    {
      type: "doc",
      id: "Introduction",
    },
    {
      type: "category",
      label: "Appnest",
      collapsed: true,
      link: {
        type: "doc",
        id: "appnest/docs/Appnest",
      },
      items: [
        {
          type: "category",
          label: "Tutorial",
          collapsed: true,
          link: {
            type: "generated-index",
            title: "Welcome to AppNest Codelabs",
            description:
              "Discover a seamless and interactive learning experience on our Developer Platform through detailed codelabs, empowering you to unleash your full potential by building SurveySparrow applications and exploring its rich features.",
            slug: "appnest/code-labs",
          },
          items: [
            {
              type: "doc",
              id: "appnest/code-labs/simple_sdk_app",
            },
            {
              type: "doc",
              id: "appnest/code-labs/event_app",
            },
            {
              type: "doc",
              id: "appnest/code-labs/react_app",
            },
            {
              type: "doc",
              id: "appnest/code-labs/scheduler_app",
            },
            {
              type: "doc",
              id: "appnest/code-labs/global_webhook",
            },
            {
              type: "doc",
              id: "appnest/code-labs/submitting_app_for_review",
            },
          ],
        },
        {
          type: "category",
          label: "SDK Docs",
          collapsed: true,
          link: {
            type: "generated-index",
            title: "SurveySparrow SDK Documentation",
            description:
              "This documentation helps developer to build apps using surveysparrow software development kit",
            slug: "appnest/docs/Appnest",
          },
          items: [
            {
              type: "category",
              label: "Getting Started",
              collapsed: true,
              link: {
                type: "doc",
                id: "appnest/docs/getting-started/getting-started",
              },
              items: [
                {
                  type: "doc",
                  id: "appnest/docs/getting-started/quick-start",
                },
                {
                  type: "doc",
                  id: "appnest/docs/getting-started/first-app",
                },
              ],
            },
            {
              type: "category",
              label: "Building Apps",
              collapsed: true,
              link: {
                type: "doc",
                id: "appnest/docs/apps/building-apps",
              },
              items: [
                {
                  type: "doc",
                  id: "appnest/docs/apps/react_app",
                },
                {
                  type: "doc",
                  id: "appnest/docs/apps/react_serverless_app",
                },
                {
                  type: "doc",
                  id: "appnest/docs/apps/scheduler_app",
                },
                {
                  type: "doc",
                  id: "appnest/docs/apps/serverless_app",
                },
                {
                  type: "doc",
                  id: "appnest/docs/apps/smi_app",
                },
              ],
            },
            {
              type: "doc",
              id: "appnest/docs/sparrow-cli/index",
            },
            {
              type: "category",
              label: "Configuration",
              collapsed: true,
              link: {
                type: "doc",
                id: "appnest/docs/configuration/index",
              },
              items: [
                {
                  type: "doc",
                  id: "appnest/docs/configuration/app-manifest",
                },
                {
                  type: "doc",
                  id: "appnest/docs/configuration/installation-parameters",
                },
              ],
            },
            {
              type: "doc",
              id: "appnest/docs/app-category-types/index",
            },
            {
              type: "doc",
              id: "appnest/docs/data-storage/index",
            },
            {
              type: "doc",
              id: "appnest/docs/features/index",
            },
            {
              type: "doc",
              id: "appnest/docs/global-webhook/index",
            },
            {
              type: "doc",
              id: "appnest/docs/incoming-webhook/index",
            },
            {
              type: "doc",
              id: "appnest/docs/logs/index",
            },
            {
              type: "doc",
              id: "appnest/docs/scheduler/index",
            },
            {
              type: "doc",
              id: "appnest/docs/serverless/index",
            },
            {
              type: "doc",
              id: "appnest/docs/terms-and-privacy/index",
            },
          ],
        },
      ],
    },
    {
      type: "category",
      label: "SurveySparrow V1 API",
      collapsed: true,
      link: {
        type: "generated-index",
        title: "SurveySparrow API (v1)",
        description: "SurveySparrow V1 API",
        slug: "/rest-apis/v1",
      },
      items: [
        {
          type: "doc",
          id: "rest-apis/v1/Introduction",
        },
        {
          type: "doc",
          id: "rest-apis/v1/OAuth",
        },
        ...require("./docs/rest-apis/v1/sidebar.js"),
      ],
    },
  ],
  "ss_versioned-v3": [
    {
      type: "doc",
      id: "Introduction",
    },
    {
      type: "category",
      label: "Appnest",
      collapsed: true,
      link: {
        type: "doc",
        id: "appnest/docs/Appnest",
      },
      items: [
        {
          type: "category",
          label: "Tutorial",
          collapsed: true,
          link: {
            type: "generated-index",
            title: "Welcome to AppNest Codelabs",
            description:
              "Discover a seamless and interactive learning experience on our Developer Platform through detailed codelabs, empowering you to unleash your full potential by building SurveySparrow applications and exploring its rich features.",
            slug: "appnest/code-labs",
          },
          items: [
            {
              type: "doc",
              id: "appnest/code-labs/simple_sdk_app",
            },
            {
              type: "doc",
              id: "appnest/code-labs/event_app",
            },
            {
              type: "doc",
              id: "appnest/code-labs/react_app",
            },
            {
              type: "doc",
              id: "appnest/code-labs/scheduler_app",
            },
            {
              type: "doc",
              id: "appnest/code-labs/global_webhook",
            },
            {
              type: "doc",
              id: "appnest/code-labs/submitting_app_for_review",
            },
          ],
        },
        {
          type: "category",
          label: "SDK Docs",
          collapsed: true,
          link: {
            type: "generated-index",
            title: "SurveySparrow SDK Documentation",
            description:
              "This documentation helps developer to build apps using surveysparrow software development kit",
            slug: "appnest/docs/Appnest",
          },
          items: [
            {
              type: "category",
              label: "Getting Started",
              collapsed: true,
              link: {
                type: "doc",
                id: "appnest/docs/getting-started/getting-started",
              },
              items: [
                {
                  type: "doc",
                  id: "appnest/docs/getting-started/quick-start",
                },
                {
                  type: "doc",
                  id: "appnest/docs/getting-started/first-app",
                },
              ],
            },
            {
              type: "category",
              label: "Building Apps",
              collapsed: true,
              link: {
                type: "doc",
                id: "appnest/docs/apps/building-apps",
              },
              items: [
                {
                  type: "doc",
                  id: "appnest/docs/apps/react_app",
                },
                {
                  type: "doc",
                  id: "appnest/docs/apps/react_serverless_app",
                },
                {
                  type: "doc",
                  id: "appnest/docs/apps/scheduler_app",
                },
                {
                  type: "doc",
                  id: "appnest/docs/apps/serverless_app",
                },
                {
                  type: "doc",
                  id: "appnest/docs/apps/smi_app",
                },
              ],
            },
            {
              type: "doc",
              id: "appnest/docs/sparrow-cli/index",
            },
            {
              type: "category",
              label: "Configuration",
              collapsed: true,
              link: {
                type: "doc",
                id: "appnest/docs/configuration/index",
              },
              items: [
                {
                  type: "doc",
                  id: "appnest/docs/configuration/app-manifest",
                },
                {
                  type: "doc",
                  id: "appnest/docs/configuration/installation-parameters",
                },
              ],
            },
            {
              type: "doc",
              id: "appnest/docs/app-category-types/index",
            },
            {
              type: "doc",
              id: "appnest/docs/data-storage/index",
            },
            {
              type: "doc",
              id: "appnest/docs/features/index",
            },
            {
              type: "doc",
              id: "appnest/docs/global-webhook/index",
            },
            {
              type: "doc",
              id: "appnest/docs/incoming-webhook/index",
            },
            {
              type: "doc",
              id: "appnest/docs/logs/index",
            },
            {
              type: "doc",
              id: "appnest/docs/scheduler/index",
            },
            {
              type: "doc",
              id: "appnest/docs/serverless/index",
            },
            {
              type: "doc",
              id: "appnest/docs/terms-and-privacy/index",
            },
          ],
        },
      ],
    },
    {
      type: "category",
      label: "SurveySparrow V3 API",
      collapsed: true,
      link: {
        type: "generated-index",
        title: "SurveySparrow API (v3)",
        description: "SuvreySparrow v3 API",
        slug: "/rest-apis/v3",
      },
      items: [
        {
          type: "doc",
          id: "rest-apis/v3/Introduction",
        },
        {
          type: "doc",
          id: "rest-apis/v3/OAuth",
        },
        ...require("./docs/rest-apis/v3/sidebar.js"),
      ],
    },
  ],
};

export default sidebars;
