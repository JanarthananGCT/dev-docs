import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "category",
      label: "Audit Logs",
      link: {
        type: "doc",
        id: "rest-apis/v1/audit-logs",
      },
      items: [
        {
          type: "doc",
          id: "rest-apis/v1/get-v-1-auditlogs",
          label: "List audit logs",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "rest-apis/v1/get-v-1-auditlogs-events",
          label: "List subscribed events",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "rest-apis/v1/get-v-1-auditlogs-id",
          label: "Get audit log",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "rest-apis/v1/post-v-1-auditlogs-events-subscribe",
          label: "Create subscribed event",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "rest-apis/v1/delete-v-1-auditlogs-events-id",
          label: "Delete subscribed event",
          className: "api-method delete",
        },
      ],
    },
    {
      type: "category",
      label: "Contact List",
      link: {
        type: "doc",
        id: "rest-apis/v1/contact-list",
      },
      items: [
        {
          type: "doc",
          id: "rest-apis/v1/get-v-1-contactlist",
          label: "List contact lists",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "rest-apis/v1/post-v-1-contactlist",
          label: "Create contact list",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "rest-apis/v1/get-v-1-contactlist-id-contacts",
          label: "List contacts in a list",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "rest-apis/v1/put-v-1-contactlist-id",
          label: "Update contact list",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "rest-apis/v1/delete-v-1-contactlist-id",
          label: "Delete contact list",
          className: "api-method delete",
        },
      ],
    },
    {
      type: "category",
      label: "Contacts",
      link: {
        type: "doc",
        id: "rest-apis/v1/contacts",
      },
      items: [
        {
          type: "doc",
          id: "rest-apis/v1/get-v-1-contacts",
          label: " Get Contacts",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "rest-apis/v1/post-v-1-contacts",
          label: "Create contact",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "rest-apis/v1/get-v-1-contacts-properties",
          label: "List contact properties",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "rest-apis/v1/post-v-1-contacts-properties",
          label: "Create contact property",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "rest-apis/v1/get-v-1-contacts-id",
          label: "Get contact",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "rest-apis/v1/put-v-1-contacts-id",
          label: "Update contact",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "rest-apis/v1/delete-v-1-contacts-id",
          label: "Delete contact",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "rest-apis/v1/post-v-1-contactlist-id-contacts",
          label: "Create/Add Contacts to a Custom Label",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "rest-apis/v1/get-v-1-contacts-id-shares",
          label: "Get all shares of a contact",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "rest-apis/v1/post-v-1-contactlist-active-contacts",
          label: "Create multiple contacts",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "rest-apis/v1/put-v-1-contacts-properties-id",
          label: "Update contact property",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "rest-apis/v1/delete-v-1-contacts-properties-id",
          label: "Delete contact property",
          className: "api-method delete",
        },
      ],
    },
    {
      type: "category",
      label: "Roles",
      link: {
        type: "doc",
        id: "rest-apis/v1/roles",
      },
      items: [
        {
          type: "doc",
          id: "rest-apis/v1/get-v-1-roles",
          label: "List roles",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Survey",
      link: {
        type: "doc",
        id: "rest-apis/v1/survey",
      },
      items: [
        {
          type: "doc",
          id: "rest-apis/v1/get-v-1-surveys",
          label: "Get surveys",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "rest-apis/v1/post-v-1-surveys",
          label: "Create survey",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "rest-apis/v1/get-v-1-surveythemes",
          label: "Get public themes for a Survey",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "rest-apis/v1/get-v-1-surveys-id",
          label: "Get survey",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "rest-apis/v1/put-v-1-surveys-id",
          label: "Update survey details",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "rest-apis/v1/get-v-1-survey-surveyid-integrations",
          label: "Get survey integrations",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "rest-apis/v1/get-v-1-surveys-id-settings",
          label: "Get Survey settings",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "rest-apis/v1/put-v-1-surveys-id-settings",
          label: "Update Survey settings",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "rest-apis/v1/get-v-1-surveys-id-questions",
          label: "Get survey questions",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "rest-apis/v1/get-v-1-surveys-survey-id-submissions",
          label: "Get survey responses",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "rest-apis/v1/get-v-1-surveys-id-variables",
          label: "List survey variables",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "rest-apis/v1/post-v-1-surveys-id-variables",
          label: "Create survey variable",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "rest-apis/v1/get-v-1-surveys-survey-id-submissions-id",
          label: "Get survey response",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "rest-apis/v1/delete-v-1-surveys-survey-id-submissions-id",
          label: "Delete survey response",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "rest-apis/v1/post-v-1-sections-id-questions",
          label: "Create question",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "rest-apis/v1/post-v-1-surveys-id-sections",
          label: "Create a section",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "rest-apis/v1/post-v-1-surveys-id-clone",
          label: "Clone survey",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "rest-apis/v1/put-v-1-surveys-id-questions-question-id",
          label: "Update question",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "rest-apis/v1/delete-v-1-surveys-id-questions-question-id",
          label: "Delete question",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "rest-apis/v1/put-v-1-surveys-id-sections-section-id",
          label: "Update survey section",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "rest-apis/v1/delete-v-1-surveys-id-sections-section-id",
          label: "Delete a section",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "rest-apis/v1/delete-v-1-submissions-id",
          label: "Delete survey response",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "rest-apis/v1/delete-v-1-surveys-id-variables-variable-id",
          label: "Delete survey variable",
          className: "api-method delete",
        },
      ],
    },
    {
      type: "category",
      label: "Targets",
      link: {
        type: "doc",
        id: "rest-apis/v1/targets",
      },
      items: [
        {
          type: "doc",
          id: "rest-apis/v1/get-v-1-targets",
          label: "List targets",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Teams",
      link: {
        type: "doc",
        id: "rest-apis/v1/teams",
      },
      items: [
        {
          type: "doc",
          id: "rest-apis/v1/get-v-1-teams",
          label: "List teams",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "rest-apis/v1/post-v-1-teams",
          label: "Create team",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Users",
      link: {
        type: "doc",
        id: "rest-apis/v1/users",
      },
      items: [
        {
          type: "doc",
          id: "rest-apis/v1/get-v-1-users",
          label: "List users",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "rest-apis/v1/post-v-1-users",
          label: "Create user",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "rest-apis/v1/get-v-1-users-id",
          label: "Get user",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "rest-apis/v1/put-v-1-users-id",
          label: "Update user",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "rest-apis/v1/delete-v-1-users-id",
          label: "Delete user",
          className: "api-method delete",
        },
      ],
    },
    {
      type: "category",
      label: "Webhooks",
      link: {
        type: "doc",
        id: "rest-apis/v1/webhooks",
      },
      items: [
        {
          type: "doc",
          id: "rest-apis/v1/get-v-1-webhooks",
          label: "List webhooks",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "rest-apis/v1/post-v-1-webhooks",
          label: "Create webhook",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "rest-apis/v1/get-v-1-surveys-survey-id-webhooks",
          label: "List survey webhooks",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "rest-apis/v1/put-v-1-webhooks-id",
          label: "Update webhook",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "rest-apis/v1/delete-v-1-webhooks-id",
          label: "Delete webhook",
          className: "api-method delete",
        },
      ],
    },
    {
      type: "category",
      label: "Workspaces",
      link: {
        type: "doc",
        id: "rest-apis/v1/workspaces",
      },
      items: [
        {
          type: "doc",
          id: "rest-apis/v1/get-v-1-workspaces",
          label: "List workspaces",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "rest-apis/v1/post-v-1-workspaces",
          label: "Create workspace",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "rest-apis/v1/get-v-1-workspaces-id",
          label: "Get workspace",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "rest-apis/v1/put-v-1-workspaces-id",
          label: "Update workspace",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "rest-apis/v1/delete-v-1-workspaces-id",
          label: "Delete workspace",
          className: "api-method delete",
        },
      ],
    },
    {
      type: "category",
      label: "Nps",
      link: {
        type: "doc",
        id: "rest-apis/v1/nps",
      },
      items: [
        {
          type: "doc",
          id: "rest-apis/v1/get-v-1-nps-surveyid-shares",
          label: "List NPS channels",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "rest-apis/v1/get-v-1-nps-survey-id-metrics",
          label: "Get NPS metrics",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "rest-apis/v1/get-v-1-nps-survey-id-responses",
          label: "List survey responses",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "rest-apis/v1/get-v-1-nps-survey-id-responses-passives",
          label: "List passives",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "rest-apis/v1/get-v-1-nps-survey-id-responses-promoters",
          label: "List promoters",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "rest-apis/v1/get-v-1-nps-survey-id-responses-detractors",
          label: "List detractors",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "rest-apis/v1/get-v-1-nps-surveyid-shares-channelid",
          label: "Get NPS Channel",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "rest-apis/v1/get-v-1-nps-surveyid-shares-channelid-triggers",
          label: "Get NPS Channel triggers",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "rest-apis/v1/get-v-1-nps-surveyid-shares-channelid-reminders",
          label: "List NPS reminders",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "rest-apis/v1/post-v-1-nps-surveyid-shares-channelid-reminders",
          label: "Create reminder",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "rest-apis/v1/post-v-1-nps",
          label: "Creates NPS Survey",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "rest-apis/v1/post-v-1-nps-survey-id-email",
          label: "Create NPS Email channel",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "rest-apis/v1/post-v-1-nps-survey-id-sms",
          label: "Create SMS share",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "rest-apis/v1/post-v-1-nps-survey-id-sms-id",
          label: "Share existing SMS Share",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "rest-apis/v1/post-v-1-nps-survey-id-email-channel-id",
          label: "Send NPS channel Blast",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "rest-apis/v1/delete-v-1-nps-surveyid-shares-channelid-reminders-reminderid",
          label: "Delete NPS reminder",
          className: "api-method delete",
        },
      ],
    },
    {
      type: "category",
      label: "Reports",
      link: {
        type: "doc",
        id: "rest-apis/v1/reports",
      },
      items: [
        {
          type: "doc",
          id: "rest-apis/v1/get-v-1-surveys-survey-id-report-link",
          label: "Get responses report public link",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Employee 360",
      link: {
        type: "doc",
        id: "rest-apis/v1/employee-360",
      },
      items: [
        {
          type: "doc",
          id: "rest-apis/v1/get-v-1-survey-surveyid-subjects",
          label: "List subjects",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "rest-apis/v1/get-v-1-survey-surveyid-approvers",
          label: "List approvers",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "rest-apis/v1/get-v-1-survey-surveyid-subject-subjectid-evaluators",
          label: "List subject evaluators",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "rest-apis/v1/get-v-1-survey-surveyid-subject-subjectid-report",
          label: "Get subject report",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "rest-apis/v1/post-v-1-survey-surveyid-invite",
          label: "Create invite",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "rest-apis/v1/put-v-1-survey-surveyid-subject-subjectid-invite",
          label: "Update invite",
          className: "api-method put",
        },
      ],
    },
    {
      type: "category",
      label: "Ces",
      link: {
        type: "doc",
        id: "rest-apis/v1/ces",
      },
      items: [
        {
          type: "doc",
          id: "rest-apis/v1/get-v-1-ces-survey-id-responses",
          label: "List survey responses",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "rest-apis/v1/get-v-1-ces-survey-id-metrics",
          label: "Get CES metrics",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "rest-apis/v1/get-v-1-ces-surveyid-shares",
          label: "List CES channels",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "rest-apis/v1/get-v-1-ces-surveyid-shares-channelid",
          label: "Get CES Channel",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "rest-apis/v1/get-v-1-ces-survey-id-responses-higheffort",
          label: "List HighEffort",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "rest-apis/v1/get-v-1-ces-survey-id-responses-loweffort",
          label: "List lowEffort",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "rest-apis/v1/get-v-1-ces-survey-id-responses-neutral",
          label: "List Neutral",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "rest-apis/v1/get-v-1-ces-survey-id-submissions-nps-submission-id",
          label: "Get response of an CES survey submission",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "rest-apis/v1/get-v-1-ces-surveyid-shares-channelid-reminders",
          label: "List CES reminders",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "rest-apis/v1/post-v-1-ces-surveyid-shares-channelid-reminders",
          label: "Create reminder",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "rest-apis/v1/get-v-1-ces-surveyid-shares-channelid-triggers",
          label: "Get CES Channel triggers",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "rest-apis/v1/post-v-1-ces",
          label: "Creates CES Survey",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "rest-apis/v1/post-v-1-ces-survey-id-sms",
          label: "Create SMS share",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "rest-apis/v1/post-v-1-ces-survey-id-email",
          label: "Create CES Email channel",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "rest-apis/v1/post-v-1-ces-survey-id-email-channel-id",
          label: "Send CES channel Blast",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "rest-apis/v1/post-v-1-ces-survey-id-sms-id",
          label: "Share existing SMS Share",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "rest-apis/v1/delete-v-1-ces-surveyid-shares-channelid-reminders-reminderid",
          label: "Delete CES reminder",
          className: "api-method delete",
        },
      ],
    },
    {
      type: "category",
      label: "Csat",
      link: {
        type: "doc",
        id: "rest-apis/v1/csat",
      },
      items: [
        {
          type: "doc",
          id: "rest-apis/v1/get-v-1-csat-survey-id-responses",
          label: "List survey responses",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "rest-apis/v1/get-v-1-csat-survey-id-metrics",
          label: "Get csat metrics",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "rest-apis/v1/get-v-1-csat-surveyid-shares",
          label: "List csat channels",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "rest-apis/v1/get-v-1-csat-surveyid-shares-channelid",
          label: "Get CSAT Channel",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "rest-apis/v1/get-v-1-csat-survey-id-responses-dissatisfied",
          label: "List Dissatisfied",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "rest-apis/v1/get-v-1-csat-survey-id-responses-satisfied",
          label: "List Satisfied",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "rest-apis/v1/get-v-1-csat-survey-id-responses-neutral",
          label: "List Neutral",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "rest-apis/v1/get-v-1-csat-survey-id-submissions-nps-submission-id",
          label: "Get response of an csat survey submission",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "rest-apis/v1/get-v-1-csat-surveyid-shares-channelid-reminders",
          label: "List csat reminders",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "rest-apis/v1/post-v-1-csat-surveyid-shares-channelid-reminders",
          label: "Create reminder",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "rest-apis/v1/get-v-1-csat-surveyid-shares-channelid-triggers",
          label: "Get csat Channel triggers",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "rest-apis/v1/post-v-1-csat",
          label: "Creates csat Survey",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "rest-apis/v1/post-v-1-csat-survey-id-sms",
          label: "Create SMS share",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "rest-apis/v1/post-v-1-csat-survey-id-email",
          label: "Create csat Email channel",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "rest-apis/v1/post-v-1-csat-survey-id-email-channel-id",
          label: "Send csat channel Blast",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "rest-apis/v1/post-v-1-csat-survey-id-sms-id",
          label: "Share existing SMS Share",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "rest-apis/v1/delete-v-1-csat-surveyid-shares-channelid-reminders-reminderid",
          label: "Delete csat reminder",
          className: "api-method delete",
        },
      ],
    },
    {
      type: "category",
      label: "Public",
      link: {
        type: "doc",
        id: "rest-apis/v1/public",
      },
      items: [
        {
          type: "doc",
          id: "rest-apis/v1/post-v-1-surveys-id-questions",
          label: "postV1SurveysIdQuestions",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Share",
      link: {
        type: "doc",
        id: "rest-apis/v1/share",
      },
      items: [
        {
          type: "doc",
          id: "rest-apis/v1/get-v-1-surveys-survey-id-shares",
          label: "List all shares",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "rest-apis/v1/get-v-1-surveys-survey-id-shares-share-id",
          label: "Get share details",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "rest-apis/v1/post-v-1-shares-email-share-id",
          label: "Create email share",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "rest-apis/v1/post-v-1-surveys-survey-id-share-link",
          label: "Create link share for Survey",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "rest-apis/v1/post-v-1-survey-survey-id-channels-channel-id-contacts-surveylink",
          label: "Unique survey link for each contact",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "rest-apis/v1/put-v-1-survey-surveyid-shares-sms-channelid",
          label: "Update SMS share",
          className: "api-method put",
        },
      ],
    },
    {
      type: "category",
      label: "Accounts",
      link: {
        type: "doc",
        id: "rest-apis/v1/accounts",
      },
      items: [
        {
          type: "doc",
          id: "rest-apis/v1/post-v-1-signup",
          label: "Create account",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "rest-apis/v1/delete-v-1-delete",
          label: "Delete account",
          className: "api-method delete",
        },
      ],
    },
    {
      type: "category",
      label: "Kiosk",
      link: {
        type: "doc",
        id: "rest-apis/v1/kiosk",
      },
      items: [
        {
          type: "doc",
          id: "rest-apis/v1/post-v-1-kiosk-deviceid-submissions",
          label: "Create Kiosk Submissions",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Submissions",
      link: {
        type: "doc",
        id: "rest-apis/v1/submissions",
      },
      items: [
        {
          type: "doc",
          id: "rest-apis/v1/post-v-1-surveys-survey-id-submission-start",
          label: "Start submission",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "rest-apis/v1/put-v-1-survey-survey-id-submissions-submission-id-complete",
          label: "Complete submission",
          className: "api-method put",
        },
      ],
    },
    {
      type: "category",
      label: "integrations",
      items: [
        {
          type: "doc",
          id: "rest-apis/v1/get-v-1-survey-surveyid-integrations",
          label: "Get survey integrations",
          className: "api-method get",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
