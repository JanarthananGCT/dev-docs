import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "category",
      label: "Share",
      link: {
        type: "doc",
        id: "rest-apis/v2/share",
      },
      items: [
        {
          type: "doc",
          id: "rest-apis/v2/post-v-2-survey-surveyid-shares-email-share-id",
          label: "Trigger email share V2",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "rest-apis/v2/put-v-2-survey-surveyid-shares-sms-channelid",
          label: "Update SMS survey V2",
          className: "api-method put",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
