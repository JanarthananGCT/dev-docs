import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "category",
      label: "Audit Logs",
      link: {
        type: "doc",
        id: "rest-apis/audit-logs",
      },
      items: [
        {
          type: "doc",
          id: "rest-apis/get-v-3-audit-logs",
          label: "List audit logs",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "rest-apis/get-v-3-audit-logs-events",
          label: "List subscribed events",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "rest-apis/post-v-3-audit-logs-events",
          label: "Create subscribed event",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "rest-apis/get-v-3-audit-logs-id",
          label: "Get audit log",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "rest-apis/delete-v-3-audit-logs-events-id",
          label: "Delete subscribed event",
          className: "api-method delete",
        },
      ],
    },
    {
      type: "category",
      label: "Contacts",
      link: {
        type: "doc",
        id: "rest-apis/contacts",
      },
      items: [
        {
          type: "doc",
          id: "rest-apis/get-v-3-contacts",
          label: "Get all Contacts",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "rest-apis/post-v-3-contacts",
          label: "Create a contact",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "rest-apis/get-v-3-contacts-id",
          label: "Get a contact",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "rest-apis/put-v-3-contacts-id",
          label: "Update a contact",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "rest-apis/delete-v-3-contacts-id",
          label: "Delete a contact",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "rest-apis/get-v-3-contacts-status-token",
          label: "Batch contact creation status",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "rest-apis/post-v-3-contacts-batch",
          label: "Create contacts",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Roles",
      link: {
        type: "doc",
        id: "rest-apis/roles",
      },
      items: [
        {
          type: "doc",
          id: "rest-apis/get-v-3-roles",
          label: "Get all roles",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Survey",
      link: {
        type: "doc",
        id: "rest-apis/survey",
      },
      items: [
        {
          type: "doc",
          id: "rest-apis/get-v-3-surveys",
          label: "Get all surveys",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "rest-apis/post-v-3-surveys",
          label: "Create a survey",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "rest-apis/get-v-3-surveys-id",
          label: "Get a survey",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "rest-apis/patch-v-3-surveys-id",
          label: "Update a survey",
          className: "api-method patch",
        },
        {
          type: "doc",
          id: "rest-apis/post-v-3-sections",
          label: "Create survey section",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "rest-apis/post-v-3-surveys-id-clone",
          label: "Clone a survey",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "rest-apis/put-v-3-sections-section-id",
          label: "Update survey section",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "rest-apis/delete-v-3-sections-section-id",
          label: "Delete a section",
          className: "api-method delete",
        },
      ],
    },
    {
      type: "category",
      label: "Targets",
      link: {
        type: "doc",
        id: "rest-apis/targets",
      },
      items: [
        {
          type: "doc",
          id: "rest-apis/get-v-3-targets",
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
        id: "rest-apis/teams",
      },
      items: [
        {
          type: "doc",
          id: "rest-apis/get-v-3-teams",
          label: "Get all teams",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "rest-apis/post-v-3-teams",
          label: "Create a team",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Users",
      link: {
        type: "doc",
        id: "rest-apis/users",
      },
      items: [
        {
          type: "doc",
          id: "rest-apis/get-v-3-users",
          label: "Get all users",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "rest-apis/post-v-3-users",
          label: "Create user",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "rest-apis/get-v-3-users-id",
          label: "Get a user",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "rest-apis/delete-v-3-users-id",
          label: "Delete a user",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "rest-apis/patch-v-3-users-id",
          label: "Update a user",
          className: "api-method patch",
        },
      ],
    },
    {
      type: "category",
      label: "Webhooks",
      link: {
        type: "doc",
        id: "rest-apis/webhooks",
      },
      items: [
        {
          type: "doc",
          id: "rest-apis/get-v-3-webhooks",
          label: "Get all webhooks",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "rest-apis/post-v-3-webhooks",
          label: "Create a webhook",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "rest-apis/put-v-3-webhooks-id",
          label: "Update a webhook",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "rest-apis/delete-v-3-webhooks-id",
          label: "Delete a webhook",
          className: "api-method delete",
        },
      ],
    },
    {
      type: "category",
      label: "Channels",
      link: {
        type: "doc",
        id: "rest-apis/channels",
      },
      items: [
        {
          type: "doc",
          id: "rest-apis/get-v-3-channels",
          label: "Get all channels",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "rest-apis/post-v-3-channels",
          label: "Create a channel",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "rest-apis/get-v-3-channels-id",
          label: "Get a channel",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "rest-apis/put-v-3-channels-id",
          label: "Update a channel",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "rest-apis/delete-v-3-channels-id",
          label: "Delete a channel",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "rest-apis/post-v-3-channels-create-unique-links",
          label: "Create unique survey links",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "rest-apis/post-v-3-channels-id-clone",
          label: "Clone a channel",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Contact Lists",
      link: {
        type: "doc",
        id: "rest-apis/contact-lists",
      },
      items: [
        {
          type: "doc",
          id: "rest-apis/get-v-3-contact-lists",
          label: "Get all contact lists",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "rest-apis/post-v-3-contact-lists",
          label: "Create a contact list",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "rest-apis/get-v-3-contact-lists-id",
          label: "Get a contact list",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "rest-apis/delete-v-3-contact-lists-id",
          label: "Delete a contact list",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "rest-apis/patch-v-3-contact-lists-id",
          label: "Update a contact list",
          className: "api-method patch",
        },
      ],
    },
    {
      type: "category",
      label: "Contact Properties",
      link: {
        type: "doc",
        id: "rest-apis/contact-properties",
      },
      items: [
        {
          type: "doc",
          id: "rest-apis/get-v-3-contact-properties",
          label: "Get all contact properties",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "rest-apis/post-v-3-contact-properties",
          label: "Create a contact property",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "rest-apis/delete-v-3-contact-properties-id",
          label: "Delete a contact property",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "rest-apis/patch-v-3-contact-properties-id",
          label: "Update a contact property",
          className: "api-method patch",
        },
      ],
    },
    {
      type: "category",
      label: "Email Theme",
      link: {
        type: "doc",
        id: "rest-apis/email-theme",
      },
      items: [
        {
          type: "doc",
          id: "rest-apis/get-v-3-email-themes",
          label: "Get email themes",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Expressions",
      link: {
        type: "doc",
        id: "rest-apis/expressions",
      },
      items: [
        {
          type: "doc",
          id: "rest-apis/get-v-3-expressions",
          label: "Get all survey expressions",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Nps",
      link: {
        type: "doc",
        id: "rest-apis/nps",
      },
      items: [
        {
          type: "doc",
          id: "rest-apis/get-v-3-metrics",
          label: "Get metrics",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "rest-apis/get-v-3-metrics-responses",
          label: "List respones based on metrics of CX surveys",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Questions",
      link: {
        type: "doc",
        id: "rest-apis/questions",
      },
      items: [
        {
          type: "doc",
          id: "rest-apis/get-v-3-questions",
          label: "Get all survey questions",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "rest-apis/post-v-3-questions",
          label: "Create a question",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "rest-apis/put-v-3-questions-question-id",
          label: "Update a question",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "rest-apis/delete-v-3-questions-question-id",
          label: "Delete a question",
          className: "api-method delete",
        },
      ],
    },
    {
      type: "category",
      label: "Reminder",
      link: {
        type: "doc",
        id: "rest-apis/reminder",
      },
      items: [
        {
          type: "doc",
          id: "rest-apis/get-v-3-reminders",
          label: "List Channel reminders",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "rest-apis/post-v-3-reminders",
          label: "Create Reminder for a channel",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "rest-apis/get-v-3-reminders-id",
          label: "Get a Channel reminder",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "rest-apis/delete-v-3-reminders-id",
          label: "Delete a channel reminder",
          className: "api-method delete",
        },
      ],
    },
    {
      type: "category",
      label: "Reports",
      link: {
        type: "doc",
        id: "rest-apis/reports",
      },
      items: [
        {
          type: "doc",
          id: "rest-apis/get-v-3-reports",
          label: "Get responses report public link",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Response",
      link: {
        type: "doc",
        id: "rest-apis/response",
      },
      items: [
        {
          type: "doc",
          id: "rest-apis/get-v-3-response-properties",
          label: "Get response properties",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "rest-apis/get-v-3-responses",
          label: "Get all responses",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "rest-apis/post-v-3-responses",
          label: "Create a response",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "rest-apis/get-v-3-responses-id",
          label: "Get a response",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "rest-apis/put-v-3-responses-id",
          label: "Update a response",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "rest-apis/delete-v-3-responses-id",
          label: "Delete a response",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "rest-apis/get-v-3-responses-status-token",
          label: "Batch response creation status",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "rest-apis/post-v-3-responses-batch",
          label: "Batch create responses",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "rest-apis/post-v-3-responses-new",
          label: "Start a new response",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "rest-apis/put-v-3-responses-response-id-complete",
          label: "Complete response",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "rest-apis/put-v-3-responses-response-id-update",
          label: "Add answers for response",
          className: "api-method put",
        },
      ],
    },
    {
      type: "category",
      label: "Survey Folder",
      link: {
        type: "doc",
        id: "rest-apis/survey-folder",
      },
      items: [
        {
          type: "doc",
          id: "rest-apis/get-v-3-survey-folders",
          label: "Get all survey folders",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "rest-apis/post-v-3-survey-folders",
          label: "Create a survey folder",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "rest-apis/get-v-3-survey-folders-id",
          label: "Get a survey folder",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "rest-apis/delete-v-3-survey-folders-id",
          label: "Delete a survey folder",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "rest-apis/patch-v-3-survey-folders-id",
          label: "Update a survey folder",
          className: "api-method patch",
        },
      ],
    },
    {
      type: "category",
      label: "Ticket Fields",
      link: {
        type: "doc",
        id: "rest-apis/ticket-fields",
      },
      items: [
        {
          type: "doc",
          id: "rest-apis/get-v-3-ticket-fields",
          label: "Get all ticket fields",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "rest-apis/get-v-3-ticket-fields-id",
          label: "Get a ticket field",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Tickets",
      link: {
        type: "doc",
        id: "rest-apis/tickets",
      },
      items: [
        {
          type: "doc",
          id: "rest-apis/get-v-3-tickets",
          label: "Get all tickets",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "rest-apis/post-v-3-tickets",
          label: "Create a ticket",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "rest-apis/get-v-3-tickets-id",
          label: "Get a ticket",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "rest-apis/put-v-3-tickets-id",
          label: "Edit a ticket",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "rest-apis/delete-v-3-tickets-id",
          label: "Delete a ticket",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "rest-apis/get-v-3-tickets-batch-status-token",
          label: "Batch ticket creation status",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "rest-apis/post-v-3-tickets-batch",
          label: "Create tickets in batch",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Variables",
      link: {
        type: "doc",
        id: "rest-apis/variables",
      },
      items: [
        {
          type: "doc",
          id: "rest-apis/get-v-3-variables",
          label: "Get all survey variables",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "rest-apis/post-v-3-variables",
          label: "Create a survey variable",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "rest-apis/post-v-3-variables-batch",
          label: "Create survey variables",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "rest-apis/delete-v-3-variables-variable-id",
          label: "Delete a survey variable",
          className: "api-method delete",
        },
      ],
    },
    {
      type: "category",
      label: "Reputation App Platforms",
      link: {
        type: "doc",
        id: "rest-apis/reputation-app-platforms",
      },
      items: [
        {
          type: "doc",
          id: "rest-apis/get-v-3-reputation-app-platforms",
          label: "Get all app platforms",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "rest-apis/get-v-3-reputation-app-platforms-id",
          label: "Get a app platform",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Reputation Platforms",
      link: {
        type: "doc",
        id: "rest-apis/reputation-platforms",
      },
      items: [
        {
          type: "doc",
          id: "rest-apis/get-v-3-reputation-platforms",
          label: "Get all platforms",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "rest-apis/get-v-3-reputation-platforms-id",
          label: "Get a platform",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Reputation Reviews",
      link: {
        type: "doc",
        id: "rest-apis/reputation-reviews",
      },
      items: [
        {
          type: "doc",
          id: "rest-apis/get-v-3-reputation-reviews",
          label: "Get all reviews",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "rest-apis/get-v-3-reputation-reviews-id",
          label: "Get a review",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Employee 360",
      link: {
        type: "doc",
        id: "rest-apis/employee-360",
      },
      items: [
        {
          type: "doc",
          id: "rest-apis/get-v-3-survey-approvers",
          label: "List approvers",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "rest-apis/get-v-3-survey-subjects",
          label: "List subjects",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "rest-apis/get-v-3-survey-subject-evaluators",
          label: "List subject evaluators",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "rest-apis/get-v-3-survey-subject-report",
          label: "Get subject report",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "rest-apis/post-v-3-survey-invite",
          label: "Create invite",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "rest-apis/put-v-3-survey-subject-updateinvite",
          label: "Update invite",
          className: "api-method put",
        },
      ],
    },
    {
      type: "category",
      label: "Ticket Comments",
      link: {
        type: "doc",
        id: "rest-apis/ticket-comments",
      },
      items: [
        {
          type: "doc",
          id: "rest-apis/get-v-3-tickets-id-comments",
          label: "Get all ticket comments",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "rest-apis/post-v-3-tickets-id-comments",
          label: "Create a comment",
          className: "api-method post",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
