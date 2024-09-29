---
layout: default
title: Serverless
nav_order: 8
---

# Serverless

The SurveySparrow app development platform includes a serverless environment to enable you to create apps that run in response to events such as SurveySparrow product, app setup, and external events. Serverless computing involves servers, but they are abstracted away from developers.

To use this feature, all you need to do is configure an event listener and the callback method. When the event occurs, the callback method is executed on a server.

Whenever an event happens in the server of the SurveySparrow then that event is captured and sent to the app. With this payload the app can do whatever it wants.

In order to capture and use this event the app has to register what are all events that it is using in the `manifest.json` file.

Under the product name:

```json
"events": {
  "<eventName>": {
    "handler": "<eventCallbackMethod>"
  },
  "<eventName>": {
    "handler": "<eventCallbackMethod>"
  }
}
```

Sample:

```json
"events":{
  "onSubmissionComplete":{
    "handler":"onSubmissionComplete"
  },
  "onContactCreate": {
    "handler": "onContactCreate"
  }
}
```

**server.js**

```bash
exports = {
  onSubmissionComplete: function (args) {
    console.log('Hello, Survey Id is ' + args['data']['survey_id']);
  },
  onContactCreate: function (args) {
    console.log('Hello, Contact Id is ' + args['data']['id'])
  }
};
```

In this, whenever a submission has happened in SurveySparrow then that payload will be passed to the app. In the server.js the mentioned handler will get the payload of the submission.

**Note:** The event handler's name must be same as the event name. For instance, if you are using the event, onContactCreate, then, the callback method name should be "onContactCreate" as well.

Each of the events can be simulated in the app which is running locally. In order to simulate the events it is important to add them in the manifest file. To simulate the events you can go [here](https://localhost:30001/web/test) after running your app using ssdk run command.

How it looks when you simulate an event in your local app:

![image-8](https://public-us.surveysparrow.com/static/marketplace/toggle-serverless-events.png)

![image-9](https://public-us.surveysparrow.com/static/marketplace/view-serverless-payload.png)

![image-10](https://static.surveysparrow.com/application/marketplace/ssdk-assets/image10.png)

(The simulated event has come to handler in server.js)

<br />

## Sample payloads of each of the events:

All these payloads can be found in server/test_data in your app directory and can be modified accordingly.

##### OnSubmissionComplete(Event is triggered when a submission is completed in surveysparrow)

<details>
  <summary>Click to expand </summary>
  <pre>
  For CX Surveys:
    <code>
    ```json
    {
  "eventType": "onSubmissionComplete",
  "ruleEvent": "SUBMISSION_COMPLETED",
  "objectType": "SUBMISSION",
  "data": {
    "id": 1000056325,
    "time_taken": "5.00",
    "state": "COMPLETED",
    "device_type": "COMPUTER",
    "feedback": null,
    "ip": null,
    "location": null,
    "language": "en",
    "geo_info": {},
    "created_at": "2024-02-23T07:20:22.474Z",
    "updated_at": "2024-02-23T07:20:22.497Z",
    "account_id": 1000056200,
    "survey_id": 1000035288,
    "contact": {
      "email": "naveen@gmail.com",
      "full_name": "naveen",
      "last_name": "",
      "first_name": "naveen",
      "createddate": "02-23-2024",
      "id": 1003695263
    },
    "score": 5,
    "meta_data": {
      "browser": "Chrome 118.0.0.0",
      "os": "macOS 10.15.7",
      "time_zone": "Asia/Calcutta",
      "browser_language": "en-GB"
    },
    "survey": {
      "id": 1000035288,
      "survey_type": "CSAT",
      "name": "Naveenrk CSAT"
    },
    "folder": {
      "id": 1000056356,
      "name": "General"
    },
    "answers": {
      "1000406992": {
        "answer": 5,
        "question": "How satisfied are you with our service?",
        "question_type": "CSATScore",
        "question_tags": [],
        "question_id": 1000406992,
        "skipped": false
      },
      "1000406993": {
        "answer": "I was focused.",
        "question": "What is the primary reason for your score?",
        "question_type": "CSATFeedback",
        "question_tags": [],
        "question_id": 1000406993,
        "skipped": false,
        "parent_question_id": 1000406992
      }
    },
    "variables": {},
    "expressions": {},
    "channel": {
      "id": 1000009054,
      "type": "LINK",
      "name": "Web Link Share",
      "status": "ACTIVE",
      "web_url": "https://domain.surveysparrow.com/s/Naveenrk-CSAT/ntt-fCYi7nYTWtAZd2HfL3i4ng"
    }
  },
  "account_id": 1000056200
}
 ```
    </code>
  For Other Surveys : 
  <code>
  ```json
  {
    "eventType": "onSubmissionComplete",
    "ruleEvent": "SUBMISSION_COMPLETED",
    "objectType": "SUBMISSION",
    "data": {
      "id": 1001001581,
      "time_taken": "6.00",
      "state": "COMPLETED",
      "start_time": "2023-12-01T11:16:23.007Z",
      "completed_time": "2023-12-01T11:16:29.007Z",
      "device_type": "COMPUTER",
      "feedback": null,
      "ip": null,
      "location": null,
      "language": "en",
      "geo_info": {},
      "created_at": "2023-12-01T11:16:28.935Z",
      "updated_at": "2023-12-01T11:16:29.007Z",
      "account_id": 12,
      "nomination_id": null,
      "survey_id": 1001000164,
      "survey": {
        "id": 1001000164,
        "survey_type": "ClassicForm",
        "name": "Employee Experience Survey"
      },
      "folder": {
        "id": 12,
        "name": "General"
      },
      "contact": {
        "email": "eldridge777l@surveysparrow.com",
        "mobile": "424-998-0848",
        "full_name": "Eldridge Rogahn",
        "last_name": "Rogahn",
        "first_name": "Eldridge",
        "createddate": "10-10-2023",
        "id": 1001000589
      },
      "meta_data": {
        "browser": "Chrome 119.0.0.0",
        "os": "macOS 10.15.7",
        "time_zone": "Asia/Calcutta",
        "browser_language": "en-US"
      },
      "answers": {
        "1001000645": {
          "answer": 9,
          "step": 10,
          "question": "op 1",
          "question_tags": [],
          "question_type": "",
          "question_id": 1001000645,
          "skipped": false
        },
        "1001000646": {
          "answer": "yui",
          "answer_sentiment": null,
          "question": "trext",
          "question_tags": [],
          "question_type": "",
          "question_id": 1001000646,
          "skipped": false
        }
      },
      "variables": {
        "variable_1": "56"
      },
      "expressions": {
        "1001000001": "9.000000000000000"
      },
      "channel": {
        "id": 1001000246,
        "type": "EMBED",
        "name": "Embed Share 1",
        "status": "ACTIVE",
        "subject": "Could you spare a quick moment to give some feedback?",
        "is_default": false,
        "limits": null,
        "token": "tt-wuMTgKw8kTZE2bhqAT1Brp",
        "web_url": "https://ayesha.surveysparrow.com/s/test/tt-853e56"
      }
    },
    "account_id": 100000001
  }
  ```
  </code>
  </pre>
</details>

##### OnContactCreate(Event is triggered when a contact is created in surveysparrow)

<details>
  <summary>Click to expand </summary>
  <pre>
    <code>
    ```json
{
  eventType: "onContactCreate",
  ruleEvent: "CONTACT_CREATED",
  objectType: "CONTACT",
  objectId: 100000321,
  data: {
    id: 100000321,
    contact_type_id: 3,
    attrs: {
      email: "srirdsdam.r@surveysparrow.com",
      phone: "6383683088",
      mobile: "9736277722",
      full_name: "new contact",
      job_title: "contact",
      language: "en",
      last_name: "contact",
      first_name: "new",
      createddate: "09-12-2023",
      extra_property: "abcd",
      new_employee_property: "abcd",
    },
    hidden: false,
    account_id: 100000001,
    created_at: "2023-09-12T02:49:27.804Z",
    manager_id: null,
    is_active: true,
    deactivated: false,
    unsubscribed: false,
    unsubscribed_at:null,
    bounced: false,
    full_name: "new contact",
    role: "default",
    updated_at: "2023-09-12T02:49:27.804Z",
    deleted_at: null,
    contact_lists: [
      {
        id: 100000005,
        name: "test",
        description: null,
        type: "STATIC",
        properties: {
        },
        contact_type_id: 3,
        created_at: "2023-08-21T10:43:49.684Z",
        updated_at: "2023-09-12T02:49:27.911Z",
        deleted_at: null,
        account_id: 100000001,
      },
      {
        id: 100000006,
        name: "sample-contacts (1)",
        description: "Auto created during the contact import (sample-contacts (1))",
        type: "STATIC",
        properties: {
        },
        contact_type_id: 3,
        created_at: "2023-08-21T10:57:29.170Z",
        updated_at: "2023-09-12T02:49:27.911Z",
        deleted_at: null,
        account_id: 100000001,
      },
    ],
    contact_property_value_mapping: [
    ],
    manager: null,
  },
  account_id: 100000001,
}
```
    </code>
  </pre>
</details>

##### OnContactUpdate(Event is triggered when a contact is updated in surveysparrow)

<details>
  <summary>Click to expand </summary>
  <pre>
    <code>
    ```json
{
  eventType: "onContactUpdate",
  ruleEvent: "CONTACT_UPDATED",
  objectType: "CONTACT",
  objectId: 100000321,
  data: {
    id: 100000321,
    contact_type_id: 3,
    attrs: {
      email: "srirdsdam.r@surveysparrow.com",
      phone: "6383683088",
      mobile: "",
      full_name: "new contact",
      job_title: "contact",
      language: "en",
      last_name: "contact",
      first_name: "new",
      createddate: "09-12-2023",
      extra_property: "abcd",
      new_employee_property: "abcd",
    },
    hidden: false,
    account_id: 100000001,
    created_at: "2023-09-12T02:49:27.804Z",
    manager_id: null,
    is_active: true,
    deactivated: false,
    unsubscribed: false,
    unsubscribed_at:null,
    bounced: false,
    full_name: "new contact",
    role: "default",
    updated_at: "2023-09-12T02:50:56.795Z",
    deleted_at: null,
    contact_lists: [
      {
        id: 100000005,
        name: "test",
        description: null,
        type: "STATIC",
        properties: {
        },
        contact_type_id: 3,
        created_at: "2023-08-21T10:43:49.684Z",
        updated_at: "2023-09-12T02:49:27.911Z",
        deleted_at: null,
        account_id: 100000001,
      },
      {
        id: 100000006,
        name: "sample-contacts (1)",
        description: "Auto created during the contact import (sample-contacts (1))",
        type: "STATIC",
        properties: {
        },
        contact_type_id: 3,
        created_at: "2023-08-21T10:57:29.170Z",
        updated_at: "2023-09-12T02:49:27.911Z",
        deleted_at: null,
        account_id: 100000001,
      },
    ],
    contact_property_value_mapping: [
    ],
    manager: null,
  },
  account_id: 100000001,
}
```
    </code>
  </pre>
</details>

##### OnContactDelete(Event is triggered when a contact is deleted in surveysparrow)

<details>
  <summary>Click to expand </summary>
  <pre>
    <code>
    ```json
    {
      eventType: "onContactDelete",
      ruleEvent: "CONTACT_DELETED",
      objectType: "CONTACT",
      objectId: 100000321,
      data: {
        id: 100000321,
        first_name: "new",
        last_name: "contact",
        email: "srirdsdam.r@surveysparrow.com",
        phone: "6383683088",
        mobile: "",
        job_title: "contact",
        active: true,
        unsubscribed: false,
        bounced: false,
        spam_victim: false,
        disposable: false,
        attrs: {
          email: "srirdsdam.r@surveysparrow.com",
          phone: "6383683088",
          mobile: "",
          full_name: "new contact",
          job_title: "contact",
          language: "en",
          last_name: "contact",
          first_name: "new",
          createddate: "09-12-2023",
          extra_property: "abcd",
          new_employee_property: "abcd",
        },
        role: "default",
        hidden: false,
        language: "en",
        contact_type_id: 3,
        deactivated: false,
        portal_language: "ENGLISH",
        email_lowercase: null,
        created_at: "2023-09-12T02:49:27.804Z",
        updated_at: "2023-09-12T02:50:56.795Z",
        deleted_at: "2023-09-12T02:52:06.216Z",
        account_id: 100000001,
        manager_id: null,
      },
      account_id: 100000001,
    }
    ```
        </code>
      </pre>
    </details>

##### OnContactListCreate(Event is triggered when a contact list is created in surveysparrow)

<details>
  <summary>Click to expand </summary>
  <pre>
    <code>
    ```json
    {
    "eventType": "onContactListCreate",
    "ruleEvent": "CONTACT_LIST_CREATED",
    "objectType": "CONTACT_LIST",
    "objectId": 1001000008,
    "data": {
      "id": 1001000008,
      "name": "fullname",
      "description": null,
      "type": "DYNAMIC",
      "properties": {
        "conditions": {
          "filter_groups": [
            {
              "connector": "AND",
              "filters": [
                {
                  "property": {
                    "type": "contact",
                    "name": "fullName",
                    "data_type": "STRING",
                    "label": "Full Name",
                    "meta": {}
                  },
                  "comparator": "HAS_VALUE",
                  "value": null
                }
              ]
            }
          ],
          "global_connector": "AND"
        }
      },
      "contact_type_id": 2,
      "created_at": "2024-02-21T07:04:04.134Z",
      "updated_at": "2024-02-21T07:04:04.134Z",
      "deleted_at": null,
      "account_id": 12
    },
    "account_id": 12
  }
  ```
    </code>
      </pre>
    </details>

##### OnContactListUpdate(Event is triggered when a contact list is updated in surveysparrow)

  <details>
  <summary>Click to expand </summary>
  <pre>
    <code>
    ```json
    {
    "eventType": "onContactListUpdate",
    "ruleEvent": "CONTACT_LIST_UPDATED",
    "objectType": "CONTACT_LIST",
    "objectId": 1001000008,
    "data": {
      "id": 1001000008,
      "name": "fullname",
      "description": null,
      "type": "DYNAMIC",
      "properties": {
        "conditions": {
          "filter_groups": [
            {
              "connector": "AND",
              "filters": [
                {
                  "property": {
                    "type": "contact",
                    "name": "fullName",
                    "data_type": "STRING",
                    "label": "Full Name",
                    "meta": {}
                  },
                  "comparator": "HAS_VALUE",
                  "value": null
                },
                {
                  "property": {
                    "type": "contact",
                    "name": "jobTitle",
                    "data_type": "STRING",
                    "label": "Job Title",
                    "meta": {}
                  },
                  "comparator": "HAS_VALUE",
                  "value": null
                }
              ]
            }
          ],
          "global_connector": "AND"
        }
      },
      "contact_type_id": 2,
      "created_at": "2024-02-21T07:04:04.134Z",
      "updated_at": "2024-02-21T07:08:51.339Z",
      "deleted_at": null,
      "account_id": 12
    },
    "account_id": 12
  }
  ```
    </code>
      </pre>
    </details>

##### OnContactListDelete(Event is triggered when a contact list is deleted in surveysparrow)

  <details>
  <summary>Click to expand </summary>
  <pre>
    <code>
    ```json
    {
    "eventType": "onContactListDelete",
    "ruleEvent": "CONTACT_LIST_DELETED",
    "objectType": "CONTACT_LIST",
    "objectId": 1001000008,
    "data": {
      "id": 1001000008,
      "name": "fullname",
      "description": null,
      "type": "DYNAMIC",
      "properties": {
        "conditions": {
          "filter_groups": [
            {
              "connector": "AND",
              "filters": [
                {
                  "property": {
                    "type": "contact",
                    "name": "fullName",
                    "data_type": "STRING",
                    "label": "Full Name",
                    "meta": {}
                  },
                  "comparator": "HAS_VALUE",
                  "value": null
                },
                {
                  "property": {
                    "type": "contact",
                    "name": "jobTitle",
                    "data_type": "STRING",
                    "label": "Job Title",
                    "meta": {}
                  },
                  "comparator": "HAS_VALUE",
                  "value": null
                }
              ]
            }
          ],
          "global_connector": "AND"
        }
      },
      "contact_type_id": 2,
      "created_at": "2024-02-21T07:04:04.134Z",
      "updated_at": "2024-02-21T07:11:40.144Z",
      "deleted_at": "2024-02-21T07:11:40.143Z",
      "account_id": 12
    },
    "account_id": 12
  }
  ```
    </code>
      </pre>
    </details>

##### onQuestionCreate(Event is triggered when a question is created in surveysparrow)

  <details>
  <summary>Click to expand </summary>
  <pre>
    <code>
    ```json
    {
    "eventType": "onQuestionCreate",
    "ruleEvent": "QUESTION_CREATED",
    "objectType": "QUESTION",
    "objectId": 1001000809,
    "data": {
      "id": 1001000809,
      "txt": "",
      "rtxt": {
        "entity_map": {},
        "blocks": [
          {
            "key": "1hern",
            "text": "",
            "type": "unstyled",
            "depth": 0,
            "inline_style_ranges": [],
            "entity_ranges": [],
            "data": {}
          }
        ]
      },
      "desc": null,
      "rdesc": {
        "entity_map": {},
        "blocks": [
          {
            "key": "1hern",
            "text": "",
            "type": "unstyled",
            "depth": 0,
            "inline_style_ranges": [],
            "entity_ranges": [],
            "data": {}
          }
        ]
      },
      "img": null,
      "video": null,
      "type": "EmailInput",
      "position": "0.000000000000",
      "has_display_logic": false,
      "display_logic": {
        "version": "1",
        "logics": []
      },
      "has_jump_logic": false,
      "jump_logic": {
        "version": "1",
        "logics": []
      },
      "properties": {
        "data": {}
      },
      "has_score": false,
      "required": false,
      "randomized": false,
      "multiple_answers": false,
      "options_stacked": false,
      "sub_question": false,
      "disabled": false,
      "multi_language_rtxt": null,
      "multi_language_properties": null,
      "multi_language_desc": null,
      "multi_language_rdesc": null,
      "piped_source_type": null,
      "piped_source_id": null,
      "created_at": "2024-02-21T10:46:57.849Z",
      "updated_at": "2024-02-21T10:46:57.849Z",
      "deleted_at": null,
      "account_id": 12,
      "parent_question_id": null,
      "piped_qid": null,
      "section": {
        "id": 1001000514,
        "name": "Untitled Section",
        "desc": "",
        "name_rtxt": null,
        "desc_rtxt": null,
        "has_display_logic": false,
        "display_logic": {
          "version": "1",
          "logics": []
        },
        "img": null,
        "video": null,
        "abstract": true,
        "position": "2.000000000000000",
        "properties": {
          "section_randomise": false,
          "skip_section": false
        },
        "multi_language_name_rtxt": null,
        "multi_language_desc_rtxt": null,
        "multi_language_properties": null,
        "created_at": "2024-02-21T10:46:52.531Z",
        "updated_at": "2024-02-21T10:46:52.531Z",
        "deleted_at": null,
        "account_id": 12,
        "survey_id": 1001000163
      },
      "survey": {
        "id": 1001000163,
        "name": "name",
        "welcome_rtxt": null,
        "welcome_description": null,
        "welcome_screen_yes_button_text": "builder.welcome_yes_proceed",
        "thankyou_json": [
          {
            "message": {
              "entity_map": {},
              "blocks": [
                {
                  "key": "1hern",
                  "text": "Thank you for your time!",
                  "type": "unstyled",
                  "depth": 0,
                  "inline_style_ranges": [],
                  "entity_ranges": [],
                  "data": {}
                }
              ]
            },
            "branding": true,
            "description_boolean": false,
            "description": {
              "entity_map": {},
              "blocks": [
                {
                  "key": "1hern",
                  "text": "",
                  "type": "unstyled",
                  "depth": 0,
                  "inline_style_ranges": [],
                  "entity_ranges": [],
                  "data": {}
                }
              ]
            }
          }
        ],
        "archived": false,
        "visibility": "Mine",
        "survey_type": "ClassicForm",
        "template_name": null,
        "properties": {
          "autosize_heading": true,
          "survey_randomiser": false,
          "progress": {
            "builder_completed": true,
            "share_completed": true,
            "design_completed": true
          },
          "start_assessment": true
        },
        "published": true,
        "eui_version": 3,
        "phishing": false,
        "phishing_details": {},
        "primary_language": "en",
        "multi_language_welcome_rtxt": null,
        "multi_language_welcome_description": null,
        "multi_language_welcome_screen_yes_button_text": null,
        "multi_language_thankyou_json": null,
        "multi_language_name": null,
        "multi_language_properties": {},
        "response_blocked": false,
        "logic_blocked": false,
        "created_at": "2022-10-20T17:09:42.655Z",
        "updated_at": "2024-02-21T10:47:04.557Z",
        "deleted_at": null,
        "account_id": 12,
        "user_id": 1000000003,
        "survey_folder_id": 1000000003,
        "thankyou_template_id": null,
        "theme_id": 1001000022
      }
    },
    "account_id": 12
  }
  ```
    </code>
      </pre>
    </details>

##### onQuestionUpdate(Event is triggered when a question is updated in surveysparrow)

 <details>
<summary>Click to expand </summary>
  <pre>
  <code>
  ```json
  {
    "eventType": "onQuestionUpdate",
    "ruleEvent": "QUESTION_UPDATED",
    "objectType": "QUESTION",
    "objectId": 1001000809,
    "data": {
      "id": 1001000809,
      "txt": "",
      "rtxt": {
        "blocks": [
          {
            "key": "1hern",
            "text": "hi",
            "type": "unstyled",
            "depth": 0,
            "inline_style_ranges": [],
            "entity_ranges": [],
            "data": {}
          }
        ],
        "entity_map": {}
      },
      "desc": null,
      "rdesc": {
        "entity_map": {},
        "blocks": [
          {
            "key": "1hern",
            "text": "",
            "type": "unstyled",
            "depth": 0,
            "inline_style_ranges": [],
            "entity_ranges": [],
            "data": {}
          }
        ]
      },
      "img": null,
      "video": null,
      "type": "EmailInput",
      "position": "0.000000000000",
      "has_display_logic": false,
      "display_logic": {
        "version": "1",
        "logics": []
      },
      "has_jump_logic": false,
      "jump_logic": {
        "version": "1",
        "logics": []
      },
      "properties": {
        "data": {}
      },
      "has_score": false,
      "required": false,
      "randomized": false,
      "multiple_answers": false,
      "options_stacked": false,
      "sub_question": false,
      "disabled": false,
      "multi_language_rtxt": null,
      "multi_language_properties": null,
      "multi_language_desc": null,
      "multi_language_rdesc": null,
      "piped_source_type": null,
      "piped_source_id": null,
      "created_at": "2024-02-21T10:46:57.849Z",
      "updated_at": "2024-02-21T10:56:52.406Z",
      "deleted_at": null,
      "account_id": 12,
      "parent_question_id": null,
      "piped_qid": null,
      "section": {
        "id": 1001000514,
        "name": "Untitled Section",
        "desc": "",
        "name_rtxt": null,
        "desc_rtxt": null,
        "has_display_logic": false,
        "display_logic": {
          "version": "1",
          "logics": []
        },
        "img": null,
        "video": null,
        "abstract": true,
        "position": "2.000000000000000",
        "properties": {
          "section_randomise": false,
          "skip_section": false
        },
        "multi_language_name_rtxt": null,
        "multi_language_desc_rtxt": null,
        "multi_language_properties": null,
        "created_at": "2024-02-21T10:46:52.531Z",
        "updated_at": "2024-02-21T10:46:52.531Z",
        "deleted_at": null,
        "account_id": 12,
        "survey_id": 1001000163
      },
      "survey": {
        "id": 1001000163,
        "name": "name",
        "welcome_rtxt": null,
        "welcome_description": null,
        "welcome_screen_yes_button_text": "builder.welcome_yes_proceed",
        "thankyou_json": [
          {
            "message": {
              "entity_map": {},
              "blocks": [
                {
                  "key": "1hern",
                  "text": "Thank you for your time!",
                  "type": "unstyled",
                  "depth": 0,
                  "inline_style_ranges": [],
                  "entity_ranges": [],
                  "data": {}
                }
              ]
            },
            "branding": true,
            "description_boolean": false,
            "description": {
              "entity_map": {},
              "blocks": [
                {
                  "key": "1hern",
                  "text": "",
                  "type": "unstyled",
                  "depth": 0,
                  "inline_style_ranges": [],
                  "entity_ranges": [],
                  "data": {}
                }
              ]
            }
          }
        ],
        "archived": false,
        "visibility": "Mine",
        "survey_type": "ClassicForm",
        "template_name": null,
        "properties": {
          "autosize_heading": true,
          "survey_randomiser": false,
          "progress": {
            "builder_completed": true,
            "share_completed": true,
            "design_completed": true
          },
          "start_assessment": true
        },
        "published": true,
        "eui_version": 3,
        "phishing": false,
        "phishing_details": {},
        "primary_language": "en",
        "multi_language_welcome_rtxt": null,
        "multi_language_welcome_description": null,
        "multi_language_welcome_screen_yes_button_text": null,
        "multi_language_thankyou_json": null,
        "multi_language_name": null,
        "multi_language_properties": {},
        "response_blocked": false,
        "logic_blocked": false,
        "created_at": "2022-10-20T17:09:42.655Z",
        "updated_at": "2024-02-21T10:57:04.198Z",
        "deleted_at": null,
        "account_id": 12,
        "user_id": 1000000003,
        "survey_folder_id": 1000000003,
        "thankyou_template_id": null,
        "theme_id": 1001000022
      }
    },
    "account_id": 12
  }
  ```
        </code>
    </pre>
</details>

##### onQuestionDelete(Event is triggered when a question is deleted in surveysparrow)

 <details>
<summary>Click to expand </summary>
<pre>
  <code>
 ```json
  {
    "eventType": "onQuestionDelete",
    "ruleEvent": "QUESTION_DELETED",
    "objectType": "QUESTION",
    "objectId": 1001000809,
    "data": {
      "id": 1001000809,
      "txt": "",
      "rtxt": {
        "blocks": [
          {
            "key": "1hern",
            "text": "hi",
            "type": "unstyled",
            "depth": 0,
            "inline_style_ranges": [],
            "entity_ranges": [],
            "data": {}
          }
        ],
        "entity_map": {}
      },
      "desc": null,
      "rdesc": {
        "entity_map": {},
        "blocks": [
          {
            "key": "1hern",
            "text": "",
            "type": "unstyled",
            "depth": 0,
            "inline_style_ranges": [],
            "entity_ranges": [],
            "data": {}
          }
        ]
      },
      "img": null,
      "video": null,
      "type": "EmailInput",
      "position": "0.000000000000",
      "has_display_logic": false,
      "display_logic": {
        "version": "1",
        "logics": []
      },
      "has_jump_logic": false,
      "jump_logic": {
        "version": "1",
        "logics": []
      },
      "properties": {
        "data": {}
      },
      "has_score": false,
      "required": false,
      "randomized": false,
      "multiple_answers": false,
      "options_stacked": false,
      "sub_question": false,
      "disabled": false,
      "multi_language_rtxt": null,
      "multi_language_properties": null,
      "multi_language_desc": null,
      "multi_language_rdesc": null,
      "piped_source_type": null,
      "piped_source_id": null,
      "created_at": "2024-02-21T10:46:57.849Z",
      "updated_at": "2024-02-21T10:56:52.406Z",
      "deleted_at": "2024-02-21T11:02:20.072Z",
      "account_id": 12,
      "parent_question_id": null,
      "piped_qid": null,
      "section": {
        "id": 1001000514,
        "name": "Untitled Section",
        "desc": "",
        "name_rtxt": null,
        "desc_rtxt": null,
        "has_display_logic": false,
        "display_logic": {
          "version": "1",
          "logics": []
        },
        "img": null,
        "video": null,
        "abstract": true,
        "position": "2.000000000000000",
        "properties": {
          "section_randomise": false,
          "skip_section": false
        },
        "multi_language_name_rtxt": null,
        "multi_language_desc_rtxt": null,
        "multi_language_properties": null,
        "created_at": "2024-02-21T10:46:52.531Z",
        "updated_at": "2024-02-21T11:02:13.598Z",
        "deleted_at": "2024-02-21T11:02:13.598Z",
        "account_id": 12,
        "survey_id": 1001000163
      },
      "survey": {
        "id": 1001000163,
        "name": "name",
        "welcome_rtxt": null,
        "welcome_description": null,
        "welcome_screen_yes_button_text": "builder.welcome_yes_proceed",
        "thankyou_json": [
          {
            "message": {
              "entity_map": {},
              "blocks": [
                {
                  "key": "1hern",
                  "text": "Thank you for your time!",
                  "type": "unstyled",
                  "depth": 0,
                  "inline_style_ranges": [],
                  "entity_ranges": [],
                  "data": {}
                }
              ]
            },
            "branding": true,
            "description_boolean": false,
            "description": {
              "entity_map": {},
              "blocks": [
                {
                  "key": "1hern",
                  "text": "",
                  "type": "unstyled",
                  "depth": 0,
                  "inline_style_ranges": [],
                  "entity_ranges": [],
                  "data": {}
                }
              ]
            }
          }
        ],
        "archived": false,
        "visibility": "Mine",
        "survey_type": "ClassicForm",
        "template_name": null,
        "properties": {
          "autosize_heading": true,
          "survey_randomiser": false,
          "progress": {
            "builder_completed": true,
            "share_completed": true,
            "design_completed": true
          },
          "start_assessment": true
        },
        "published": true,
        "eui_version": 3,
        "phishing": false,
        "phishing_details": {},
        "primary_language": "en",
        "multi_language_welcome_rtxt": null,
        "multi_language_welcome_description": null,
        "multi_language_welcome_screen_yes_button_text": null,
        "multi_language_thankyou_json": null,
        "multi_language_name": null,
        "multi_language_properties": {},
        "response_blocked": false,
        "logic_blocked": false,
        "created_at": "2022-10-20T17:09:42.655Z",
        "updated_at": "2024-02-21T10:57:04.198Z",
        "deleted_at": null,
        "account_id": 12,
        "user_id": 1000000003,
        "survey_folder_id": 1000000003,
        "thankyou_template_id": null,
        "theme_id": 1001000022
      }
    },
    "account_id": 12
  }
  ```
    </code>
  </pre>
</details>

##### onQuestionTypeChanged(Event is triggered when a question type is changed in surveysparrow)

<details>
<summary>Click to expand </summary>
<pre>
    <code>
    ```json
    {
    "eventType": "onQuestionTypeChanged",
    "ruleEvent": "QUESTION_TYPE_CHANGED",
    "objectType": "QUESTION",
    "objectId": 1001000709,
    "data": {
      "id": 1001000709,
      "txt": "",
      "rtxt": {
        "blocks": [
          {
            "key": "1hern",
            "text": "Slider",
            "type": "unstyled",
            "depth": 0,
            "inline_style_ranges": [],
            "entity_ranges": [],
            "data": {}
          }
        ],
        "entity_map": {}
      },
      "desc": null,
      "rdesc": {
        "entity_map": {},
        "blocks": [
          {
            "key": "1hern",
            "text": "",
            "type": "unstyled",
            "depth": 0,
            "inline_style_ranges": [],
            "entity_ranges": [],
            "data": {}
          }
        ]
      },
      "img": null,
      "video": null,
      "type": "TextInput",
      "position": "0.000000000000",
      "has_display_logic": false,
      "display_logic": {
        "version": "1",
        "logics": []
      },
      "has_jump_logic": false,
      "jump_logic": {
        "version": "1",
        "logics": []
      },
      "properties": {
        "data": {
          "slider_type": "lineSlider",
          "range": {
            "min": 1,
            "max": 100
          },
          "show_progress": true,
          "set_start_position": true,
          "segments": 5,
          "decimals": 0,
          "type": "SINGLE_LINE",
          "min": "builder.opinion_scale.min",
          "max": "builder.opinion_scale.max",
          "reversed_order": false,
          "mid": "builder.opinion_scale.mid",
          "step": 10,
          "start": 0,
          "not_applicable_tooltip_text": "Not Applicable",
          "icon_array_name": "RATING_STAR",
          "rating_scale": 5,
          "yes": "builder.yes_no.yes",
          "no": "builder.yes_no.no",
          "icon_shape": "YES_NO_ICON_THUMBS",
          "show_total": true,
          "min_value": 0,
          "max_value": 100,
          "total_sum": null,
          "symbol": null,
          "symbol_position": "PREFIX",
          "start_position": false,
          "start_values": {}
        }
      },
      "has_score": false,
      "required": true,
      "randomized": false,
      "multiple_answers": false,
      "options_stacked": false,
      "sub_question": false,
      "disabled": false,
      "multi_language_rtxt": null,
      "multi_language_properties": null,
      "multi_language_desc": null,
      "multi_language_rdesc": null,
      "piped_source_type": null,
      "piped_source_id": null,
      "created_at": "2023-07-13T22:42:27.852Z",
      "updated_at": "2024-02-22T10:34:19.051Z",
      "deleted_at": null,
      "account_id": 12,
      "parent_question_id": null,
      "piped_qid": null,
      "section": {
        "id": 1001000474,
        "name": "Untitled Section",
        "desc": "",
        "name_rtxt": null,
        "desc_rtxt": null,
        "has_display_logic": false,
        "display_logic": {
          "version": "1",
          "logics": []
        },
        "img": null,
        "video": null,
        "abstract": true,
        "position": "1.000000000000000",
        "properties": {
          "section_randomise": false,
          "skip_section": false
        },
        "multi_language_name_rtxt": null,
        "multi_language_desc_rtxt": null,
        "multi_language_properties": null,
        "created_at": "2023-07-13T22:42:27.840Z",
        "updated_at": "2023-07-13T22:42:27.840Z",
        "deleted_at": null,
        "account_id": 12,
        "survey_id": 1001000163
      },
      "survey": {
        "id": 1001000163,
        "name": "name",
        "welcome_rtxt": null,
        "welcome_description": null,
        "welcome_screen_yes_button_text": "builder.welcome_yes_proceed",
        "thankyou_json": [
          {
            "message": {
              "entity_map": {},
              "blocks": [
                {
                  "key": "1hern",
                  "text": "Thank you for your time!",
                  "type": "unstyled",
                  "depth": 0,
                  "inline_style_ranges": [],
                  "entity_ranges": [],
                  "data": {}
                }
              ]
            },
            "branding": true,
            "description_boolean": false,
            "description": {
              "entity_map": {},
              "blocks": [
                {
                  "key": "1hern",
                  "text": "",
                  "type": "unstyled",
                  "depth": 0,
                  "inline_style_ranges": [],
                  "entity_ranges": [],
                  "data": {}
                }
              ]
            }
          }
        ],
        "archived": false,
        "visibility": "Mine",
        "survey_type": "ClassicForm",
        "template_name": null,
        "properties": {
          "autosize_heading": true,
          "survey_randomiser": false,
          "progress": {
            "builder_completed": true,
            "share_completed": true,
            "design_completed": true
          },
          "start_assessment": true
        },
        "published": true,
        "eui_version": 3,
        "phishing": false,
        "phishing_details": {},
        "primary_language": "en",
        "multi_language_welcome_rtxt": null,
        "multi_language_welcome_description": null,
        "multi_language_welcome_screen_yes_button_text": null,
        "multi_language_thankyou_json": null,
        "multi_language_name": null,
        "multi_language_properties": {},
        "response_blocked": false,
        "logic_blocked": false,
        "created_at": "2022-10-20T17:09:42.655Z",
        "updated_at": "2024-02-22T10:35:05.688Z",
        "deleted_at": null,
        "account_id": 12,
        "user_id": 1000000003,
        "survey_folder_id": 1000000003,
        "thankyou_template_id": null,
        "theme_id": 1001000022
      }
    },
    "account_id": 12
  }
  ```json
    </code>
</pre>
</details>

##### onSectionCreate(Event is triggered when a section is created in surveysparrow)

<details>
<summary>Click to expand </summary>
<pre>
    <code>
    ```json
     {
    "eventType": "onSectionCreate",
    "ruleEvent": "SECTION_CREATED",
    "objectType": "SECTION",
    "objectId": 1001000515,
    "data": {
      "id": 1001000515,
      "name": "Untitled Section",
      "desc": "",
      "name_rtxt": null,
      "desc_rtxt": null,
      "has_display_logic": false,
      "display_logic": {
        "version": "1",
        "logics": []
      },
      "img": null,
      "video": null,
      "abstract": true,
      "position": "3.000000000000000",
      "properties": {
        "section_randomise": false,
        "skip_section": false
      },
      "multi_language_name_rtxt": null,
      "multi_language_desc_rtxt": null,
      "multi_language_properties": null,
      "created_at": "2024-02-22T11:21:39.050Z",
      "updated_at": "2024-02-22T12:48:52.331Z",
      "deleted_at": null,
      "account_id": 12,
      "survey": {
        "id": 1001000163,
        "name": "name",
        "welcome_rtxt": null,
        "welcome_description": null,
        "welcome_screen_yes_button_text": "builder.welcome_yes_proceed",
        "thankyou_json": [
          {
            "message": {
              "entity_map": {},
              "blocks": [
                {
                  "key": "1hern",
                  "text": "Thank you for your time!",
                  "type": "unstyled",
                  "depth": 0,
                  "inline_style_ranges": [],
                  "entity_ranges": [],
                  "data": {}
                }
              ]
            },
            "branding": true,
            "description_boolean": false,
            "description": {
              "entity_map": {},
              "blocks": [
                {
                  "key": "1hern",
                  "text": "",
                  "type": "unstyled",
                  "depth": 0,
                  "inline_style_ranges": [],
                  "entity_ranges": [],
                  "data": {}
                }
              ]
            }
          }
        ],
        "archived": false,
        "visibility": "Mine",
        "survey_type": "ClassicForm",
        "template_name": null,
        "properties": {
          "autosize_heading": true,
          "survey_randomiser": false,
          "progress": {
            "builder_completed": true,
            "share_completed": true,
            "design_completed": true
          },
          "start_assessment": true
        },
        "published": true,
        "eui_version": 3,
        "phishing": false,
        "phishing_details": {},
        "primary_language": "en",
        "multi_language_welcome_rtxt": null,
        "multi_language_welcome_description": null,
        "multi_language_welcome_screen_yes_button_text": null,
        "multi_language_thankyou_json": null,
        "multi_language_name": null,
        "multi_language_properties": {},
        "response_blocked": false,
        "logic_blocked": false,
        "created_at": "2022-10-20T17:09:42.655Z",
        "updated_at": "2024-02-22T11:47:58.144Z",
        "deleted_at": null,
        "account_id": 12,
        "user_id": 1000000003,
        "survey_folder_id": 1000000003,
        "thankyou_template_id": null,
        "theme_id": 1001000022
      }
    },
    "account_id": 12
  }  
  ```json
    </code>
</pre>
</details>

##### onSectionUpdate(Event is triggered when a section is updated in surveysparrow)

<details>
<summary>Click to expand </summary>
<pre>
    <code>
    ```json
    {
    "eventType": "onSectionUpdated",
    "ruleEvent": "SECTION_UPDATED",
    "objectType": "SECTION",
    "objectId": 1001000515,
    "data": {
      "id": 1001000515,
      "name": "Section 1",
      "desc": "",
      "name_rtxt": null,
      "desc_rtxt": null,
      "has_display_logic": false,
      "display_logic": {
        "version": "1",
        "logics": []
      },
      "img": null,
      "video": null,
      "abstract": true,
      "position": "3.000000000000000",
      "properties": {
        "section_randomise": false,
        "skip_section": false
      },
      "multi_language_name_rtxt": null,
      "multi_language_desc_rtxt": null,
      "multi_language_properties": null,
      "created_at": "2024-02-22T11:21:39.050Z",
      "updated_at": "2024-02-22T12:48:52.331Z",
      "deleted_at": null,
      "account_id": 12,
      "survey": {
        "id": 1001000163,
        "name": "name",
        "welcome_rtxt": null,
        "welcome_description": null,
        "welcome_screen_yes_button_text": "builder.welcome_yes_proceed",
        "thankyou_json": [
          {
            "message": {
              "entity_map": {},
              "blocks": [
                {
                  "key": "1hern",
                  "text": "Thank you for your time!",
                  "type": "unstyled",
                  "depth": 0,
                  "inline_style_ranges": [],
                  "entity_ranges": [],
                  "data": {}
                }
              ]
            },
            "branding": true,
            "description_boolean": false,
            "description": {
              "entity_map": {},
              "blocks": [
                {
                  "key": "1hern",
                  "text": "",
                  "type": "unstyled",
                  "depth": 0,
                  "inline_style_ranges": [],
                  "entity_ranges": [],
                  "data": {}
                }
              ]
            }
          }
        ],
        "archived": false,
        "visibility": "Mine",
        "survey_type": "ClassicForm",
        "template_name": null,
        "properties": {
          "autosize_heading": true,
          "survey_randomiser": false,
          "progress": {
            "builder_completed": true,
            "share_completed": true,
            "design_completed": true
          },
          "start_assessment": true
        },
        "published": true,
        "eui_version": 3,
        "phishing": false,
        "phishing_details": {},
        "primary_language": "en",
        "multi_language_welcome_rtxt": null,
        "multi_language_welcome_description": null,
        "multi_language_welcome_screen_yes_button_text": null,
        "multi_language_thankyou_json": null,
        "multi_language_name": null,
        "multi_language_properties": {},
        "response_blocked": false,
        "logic_blocked": false,
        "created_at": "2022-10-20T17:09:42.655Z",
        "updated_at": "2024-02-22T11:47:58.144Z",
        "deleted_at": null,
        "account_id": 12,
        "user_id": 1000000003,
        "survey_folder_id": 1000000003,
        "thankyou_template_id": null,
        "theme_id": 1001000022
      }
    },
    "account_id": 12
  }
  ```
    </code>
</pre>
</details>

##### onSectionDelete(Event is triggered when a section is deleted in surveysparrow)

<details>
<summary>Click to expand </summary>
<pre>
    <code>
    ```json
    {
    "eventType": "onSectionDelete",
    "ruleEvent": "SECTION_DELETED",
    "objectType": "SECTION",
    "objectId": 1001000515,
    "data": {
      "id": 1001000515,
      "name": "Untitled Section",
      "desc": "",
      "name_rtxt": null,
      "desc_rtxt": null,
      "has_display_logic": false,
      "display_logic": {
        "version": "1",
        "logics": []
      },
      "img": null,
      "video": null,
      "abstract": true,
      "position": "3.000000000000000",
      "properties": {
        "section_randomise": false,
        "skip_section": false
      },
      "multi_language_name_rtxt": null,
      "multi_language_desc_rtxt": null,
      "multi_language_properties": null,
      "created_at": "2024-02-22T11:21:39.050Z",
      "updated_at": "2024-02-22T12:48:52.331Z",
      "deleted_at": "2024-02-22T12:48:52.331Z",
      "account_id": 12,
      "survey": {
        "id": 1001000163,
        "name": "name",
        "welcome_rtxt": null,
        "welcome_description": null,
        "welcome_screen_yes_button_text": "builder.welcome_yes_proceed",
        "thankyou_json": [
          {
            "message": {
              "entity_map": {},
              "blocks": [
                {
                  "key": "1hern",
                  "text": "Thank you for your time!",
                  "type": "unstyled",
                  "depth": 0,
                  "inline_style_ranges": [],
                  "entity_ranges": [],
                  "data": {}
                }
              ]
            },
            "branding": true,
            "description_boolean": false,
            "description": {
              "entity_map": {},
              "blocks": [
                {
                  "key": "1hern",
                  "text": "",
                  "type": "unstyled",
                  "depth": 0,
                  "inline_style_ranges": [],
                  "entity_ranges": [],
                  "data": {}
                }
              ]
            }
          }
        ],
        "archived": false,
        "visibility": "Mine",
        "survey_type": "ClassicForm",
        "template_name": null,
        "properties": {
          "autosize_heading": true,
          "survey_randomiser": false,
          "progress": {
            "builder_completed": true,
            "share_completed": true,
            "design_completed": true
          },
          "start_assessment": true
        },
        "published": true,
        "eui_version": 3,
        "phishing": false,
        "phishing_details": {},
        "primary_language": "en",
        "multi_language_welcome_rtxt": null,
        "multi_language_welcome_description": null,
        "multi_language_welcome_screen_yes_button_text": null,
        "multi_language_thankyou_json": null,
        "multi_language_name": null,
        "multi_language_properties": {},
        "response_blocked": false,
        "logic_blocked": false,
        "created_at": "2022-10-20T17:09:42.655Z",
        "updated_at": "2024-02-22T11:47:58.144Z",
        "deleted_at": null,
        "account_id": 12,
        "user_id": 1000000003,
        "survey_folder_id": 1000000003,
        "thankyou_template_id": null,
        "theme_id": 1001000022
      }
    },
    "account_id": 12
  }   
  ```
    </code>
</pre>
</details>

##### onChannelCreate(Event is triggered when a channel is created in surveysparrow)

<details>
<summary>Click to expand </summary>
<pre>
    <code>
    ```json
    {
    "eventType": "onChannelCreate",
    "ruleEvent": "CHANNEL_CREATED",
    "objectType": "CHANNEL",
    "objectId": 1000023688,
    "data": {
        "id": 1000023688,
        "type": "EMBED",
        "name": "Embed Share - 1",
        "status": "ACTIVE",
        "subject": "EMBED Share",
        "properties": {
            "type": "autoTriggered",
            "auto_triggered": {
                "background_color": "4D3446",
                "border_color": "F6F5F6",
                "start_type": "startWithGreeting",
                "position": "bottomRight",
                "trigger": "triggerAfter",
                "trigger_after": 0,
                "trigger_after_scroll": 5,
                "trigger_on_matching_params": "url-path",
                "sample_rate": 100,
                "logo": false
            },
            "user_invoked": {
                "background_color": "4D3446",
                "border_color": "F6F5F6",
                "type": "teardrop",
                "button_label": "Got a moment",
                "icon": "chat",
                "position": "bottomRight",
                "sample_rate": 100,
                "trigger": "triggerAfter",
                "trigger_after": 0,
                "trigger_after_scroll": 5,
                "trigger_on_matching_params": "url-path"
            },
            "inline_embed": {
                "background_color": "4D3446",
                "border_color": "F6F5F6",
                "width": 90,
                "width_unit": "%",
                "height": 500,
                "height_unit": "px"
            },
            "pop_up": {
                "button_label": "Open Survey",
                "button_font_size": 16,
                "button_color": "4A9CA6",
                "button_text_color": "FFFFFF",
                "button_border_radius": 100,
                "size": "small",
                "trigger": "noTrigger",
                "trigger_after": 0,
                "trigger_after_scroll": 5,
                "trigger_on_matching_params": "url-path"
            },
            "side_panel": {
                "button_label": "Open Survey",
                "button_font_size": 16,
                "button_color": "4A9CA6",
                "button_text_color": "FFFFFF",
                "button_border_radius": 100,
                "position": "right",
                "trigger": "noTrigger",
                "trigger_after": 0,
                "trigger_after_scroll": 5,
                "trigger_on_matching_params": "url-path"
            }
        },
        "is_default": false,
        "multi_language_subject": {},
        "mode": null,
        "is_primary": false,
        "created_at": "2024-03-05T06:59:10.098Z",
        "updated_at": "2024-03-05T06:59:10.098Z",
        "deleted_at": null,
        "account_id": 1000001103,
        "device_id": null,
        "survey": {
            "id": 1000019556,
            "name": "Survey created using API {{current_timestamp}}",
            "welcome_rtxt": null,
            "welcome_description": null,
            "welcome_screen_yes_button_text": "builder.welcome_yes_proceed",
            "thankyou_json": [],
            "archived": false,
            "visibility": "Public",
            "survey_type": "ClassicForm",
            "template_name": null,
            "properties": {
                "has_llmsentiment": true,
                "autosize_heading": true,
                "survey_randomiser": false
            },
            "published": true,
            "eui_version": 3,
            "phishing": false,
            "phishing_details": {},
            "primary_language": "en",
            "multi_language_welcome_rtxt": null,
            "multi_language_welcome_description": null,
            "multi_language_welcome_screen_yes_button_text": null,
            "multi_language_thankyou_json": null,
            "multi_language_name": null,
            "multi_language_properties": {},
            "response_blocked": false,
            "logic_blocked": false,
            "created_at": "2024-03-05T06:59:09.995Z",
            "updated_at": "2024-03-05T06:59:09.995Z",
            "deleted_at": null,
            "account_id": 1000001103,
            "user_id": 1000002296,
            "survey_folder_id": 1000002325,
            "thankyou_template_id": null,
            "theme_id": null
        }
    },
    "account_id": 1000001103
}
```
    </code>
</pre>
</details>

##### onChannelUpdate(Event is triggered when a channel is updated in surveysparrow)

<details>
<summary>Click to expand </summary>
<pre>
    <code>
    ```json
    {
    "eventType": "onChannelUpdate",
    "ruleEvent": "CHANNEL_UPDATED",
    "objectType": "CHANNEL",
    "objectId": 1000023688,
    "data": {
        "id": 1000023688,
        "type": "EMBED",
        "name": "Embed Share - 1",
        "status": "ACTIVE",
        "subject": "EMBED Share",
        "properties": {
            "type": "autoTriggered",
            "auto_triggered": {
                "background_color": "4D3446",
                "border_color": "F6F5F6",
                "start_type": "startWithGreeting",
                "position": "bottomRight",
                "trigger": "triggerAfter",
                "trigger_after": 0,
                "trigger_after_scroll": 5,
                "trigger_on_matching_params": "url-path",
                "sample_rate": 100,
                "logo": false
            },
            "user_invoked": {
                "background_color": "4D3446",
                "border_color": "F6F5F6",
                "type": "teardrop",
                "button_label": "Got a moment",
                "icon": "chat",
                "position": "bottomRight",
                "sample_rate": 100,
                "trigger": "triggerAfter",
                "trigger_after": 0,
                "trigger_after_scroll": 5,
                "trigger_on_matching_params": "url-path"
            },
            "inline_embed": {
                "background_color": "4D3446",
                "border_color": "F6F5F6",
                "width": 90,
                "width_unit": "%",
                "height": 500,
                "height_unit": "px"
            },
            "pop_up": {
                "button_label": "Open Survey",
                "button_font_size": 16,
                "button_color": "4A9CA6",
                "button_text_color": "FFFFFF",
                "button_border_radius": 100,
                "size": "small",
                "trigger": "noTrigger",
                "trigger_after": 0,
                "trigger_after_scroll": 5,
                "trigger_on_matching_params": "url-path"
            },
            "side_panel": {
                "button_label": "Open Survey",
                "button_font_size": 16,
                "button_color": "4A9CA6",
                "button_text_color": "FFFFFF",
                "button_border_radius": 100,
                "position": "right",
                "trigger": "noTrigger",
                "trigger_after": 0,
                "trigger_after_scroll": 5,
                "trigger_on_matching_params": "url-path"
            }
        },
        "is_default": false,
        "multi_language_subject": {},
        "mode": null,
        "is_primary": false,
        "created_at": "2024-03-05T06:59:10.098Z",
        "updated_at": "2024-03-05T06:59:10.098Z",
        "deleted_at": null,
        "account_id": 1000001103,
        "device_id": null,
        "survey": {
            "id": 1000019556,
            "name": "Survey created using API {{current_timestamp}}",
            "welcome_rtxt": null,
            "welcome_description": null,
            "welcome_screen_yes_button_text": "builder.welcome_yes_proceed",
            "thankyou_json": [],
            "archived": false,
            "visibility": "Public",
            "survey_type": "ClassicForm",
            "template_name": null,
            "properties": {
                "has_llmsentiment": true,
                "autosize_heading": true,
                "survey_randomiser": false
            },
            "published": true,
            "eui_version": 3,
            "phishing": false,
            "phishing_details": {},
            "primary_language": "en",
            "multi_language_welcome_rtxt": null,
            "multi_language_welcome_description": null,
            "multi_language_welcome_screen_yes_button_text": null,
            "multi_language_thankyou_json": null,
            "multi_language_name": null,
            "multi_language_properties": {},
            "response_blocked": false,
            "logic_blocked": false,
            "created_at": "2024-03-05T06:59:09.995Z",
            "updated_at": "2024-03-05T06:59:09.995Z",
            "deleted_at": null,
            "account_id": 1000001103,
            "user_id": 1000002296,
            "survey_folder_id": 1000002325,
            "thankyou_template_id": null,
            "theme_id": null
        }
    },
    "account_id": 1000001103
}
```
    </code>
</pre>
</details>

##### onChannelDelete(Event is triggered when a channel is deleted in surveysparrow)

<details>
<summary>Click to expand </summary>
<pre>
    <code>
    ```json
    {
    "eventType": "onChannelDelete",
    "ruleEvent": "CHANNEL_DELETED",
    "objectType": "CHANNEL",
    "objectId": 1000023746,
    "data": {
        "id": 1000023746,
        "type": "EMAIL",
        "name": "Terry",
        "status": "ACTIVE",
        "subject": "Could you spare a quick moment to give some feedback?",
        "properties": {
            "email": {
                "mail_content_lists": [
                    {
                        "id": "q1rs",
                        "type": "TEXT",
                        "value": {
                            "blocks": [
                                {
                                    "key": "1hern",
                                    "text": "Hello  \n Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen boo",
                                    "type": "unstyled",
                                    "depth": 0,
                                    "inline_style_ranges": [],
                                    "entity_ranges": [],
                                    "data": {}
                                }
                            ],
                            "entity_map": {}
                        },
                        "component_properties": {
                            "align_items": "center"
                        }
                    },
                    {
                        "id": "d611",
                        "type": "SPACER",
                        "value": "",
                        "component_properties": {
                            "align_items": "center"
                        }
                    },
                    {
                        "id": "3g81",
                        "type": "LINK",
                        "value": "Get Started",
                        "component_properties": {
                            "align_items": "center",
                            "parameters": []
                        }
                    }
                ],
                "html": {
                    "header": "",
                    "footer": "<table style=\"width:100%;background-color: #F6F6F6;\">\n<tbody>\n  <tr>\n    <td style=\"padding: 32px 0\">\n      <table style=\"width:100%;\" align=\"center\">\n        <tbody>\n          <tr>\n            <td class=\"ss-360--block\" style=\"padding: 0 48px\" align=\"center\">\n                <a href=\"https://surveysparrow.com\" target=\"_blank\"><img style=\"max-width: 120px;height:auto\"\n                    width=\"120\" height=\"auto\"\n                    src=\"https://static.surveysparrow.com/email-templates/e360/surveysparrow-logo-new.png\"></a>\n            </td>\n          </tr>\n        </tbody>\n      </table>\n      <table class=\"spacer\"\n        style=\"border-collapse:collapse;border-spacing:0;font-family: -apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen-Sans,Ubuntu,Cantarell,'Helvetica Neue',sans-serif;padding:0;text-align:left;vertical-align:top;width:100%\">\n        <tbody\n          style=\"font-family: -apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen-Sans,Ubuntu,Cantarell,'Helvetica Neue',sans-serif\">\n          <tr\n            style=\"font-family: -apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen-Sans,Ubuntu,Cantarell,'Helvetica Neue',sans-serif;padding:0;text-align:left;vertical-align:top\">\n            <td height=\"24px\"\n              style=\"-moz-hyphens:auto;-webkit-hyphens:auto;Margin:0;border-collapse:collapse!important;color:#0a0a0a;font-family: -apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen-Sans,Ubuntu,Cantarell,'Helvetica Neue',sans-serif;font-size:24px;font-weight:400;hyphens:auto;line-height:24px;margin:0;mso-line-height-rule:exactly;padding:0;text-align:left;vertical-align:top;word-wrap:break-word\">\n              &#xA0;</td>\n          </tr>\n        </tbody>\n      </table>\n      <table style=\"width:100%;\" align=\"center\">\n        <tbody>\n          <tr>\n            <td class=\"ss-360--block\" style=\"padding: 0 48px\" align=\"center\">\n                <table style=\"width:50%;\">\n                  <tbody>\n                    <tr>\n                      <td style=\"text-align: center;\">\n                        <a href=\"https://www.facebook.com/surveysparrow/\" target=\"_blank\"><img\n                            style=\"max-width: 24px;height:auto\" width=\"24\" height=\"24\"\n                            src=\"https://static.surveysparrow.com/email-templates/e360/facebook.png\"></a>\n                      </td>\n                      <td style=\"text-align: center;\">\n                        <a href=\"https://twitter.com/surveysparrow\" target=\"_blank\"><img\n                            style=\"max-width: 24px;height:auto\" width=\"24\" height=\"24\"\n                            src=\"https://static.surveysparrow.com/email-templates/e360/twitter.png\"></a>\n                      </td>\n                      <td style=\"text-align: center;\">\n                        <a href=\"https://www.linkedin.com/company/surveysparrow/\" target=\"_blank\"><img\n                            style=\"max-width: 24px;height:auto\" width=\"24\" height=\"24\"\n                            src=\"https://static.surveysparrow.com/email-templates/e360/linkedin-logo.png\"></a>\n                      </td>\n                      <td style=\"text-align: center;\">\n                        <a href=\"https://www.instagram.com/surveysparrow/\" target=\"_blank\"><img\n                            style=\"max-width: 24px;height:auto\" width=\"24\" height=\"24\"\n                            src=\"https://static.surveysparrow.com/email-templates/e360/instagram.png\"></a>\n                      </td>\n                    </tr>\n                  </tbody>\n                </table>\n            </td>\n          </tr>\n        </tbody>\n      </table>\n      <table class=\"spacer\"\n        style=\"border-collapse:collapse;border-spacing:0;font-family: -apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen-Sans,Ubuntu,Cantarell,'Helvetica Neue',sans-serif;padding:0;text-align:left;vertical-align:top;width:100%\">\n        <tbody\n          style=\"font-family: -apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen-Sans,Ubuntu,Cantarell,'Helvetica Neue',sans-serif\">\n          <tr\n            style=\"font-family: -apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen-Sans,Ubuntu,Cantarell,'Helvetica Neue',sans-serif;padding:0;text-align:left;vertical-align:top\">\n            <td height=\"24px\"\n              style=\"-moz-hyphens:auto;-webkit-hyphens:auto;Margin:0;border-collapse:collapse!important;color:#0a0a0a;font-family: -apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen-Sans,Ubuntu,Cantarell,'Helvetica Neue',sans-serif;font-size:24px;font-weight:400;hyphens:auto;line-height:24px;margin:0;mso-line-height-rule:exactly;padding:0;text-align:left;vertical-align:top;word-wrap:break-word\">\n              &#xA0;</td>\n          </tr>\n        </tbody>\n      </table>\n      <table style=\"width:100%;\">\n        <tbody>\n          <tr>\n            <td class=\"ss-360--block\" style=\"padding: 0 48px\">\n              <p style=\"text-align: center; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif !important;color:#25292D !important;font-size:14px !important;line-height:1.4 !important;text-align: center !important;margin-bottom: 8px !important;margin-top: 0px !important;font-weight: normal !important;\">2345 Yale St FL 1, Palo Alto, CA 94306</p>\n              <p style=\"text-align: center; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif !important;color:#63686F !important;font-size:12px !important;line-height:1.4 !important;text-align: center !important;margin-bottom: 8px !important;margin-top: 0px !important;font-weight: normal !important;\">Copyright Â© SurveySparrow Inc. 2021</p>\n              <p style=\"text-align: center; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;text-align: center;margin-bottom:0px!important;line-height:1.4;font-size:10px;color:#BDBDBD;\">\n                {unsubscribeLink} | <a href={privacyPolicyLink} style=\"Margin:0;color:#BDBDBD;font-family:Montserrat,sans-serif!important;font-size:14px;font-weight:400;line-height:1.3;margin:0;text-align:left;text-decoration:underline; font-size:10px;\"><span style=\"font-size:10px;\">Privacy Policy</span></a>\n              </p>\n            </td>\n          </tr>\n        </tbody>\n      </table>\n    </td>\n  </tr>\n</tbody>\n</table>",
                    "body": "<html><head></head><body><tr><td width=\"32px\" style=\"width:32px;\"></td><td style=\"font-family:'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif !important; padding:0;text-align: center;color:{bodyProperties.textColor};\"><p style=\"color:{bodyProperties.textColor};margin-block-start:0!important;margin-block-end:0!important;Margin:0!important;font-size:16px!important;font-weight:300!important;line-height:1.4!important;font-family:'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif !important;\">Hello &nbsp;<br style=\"margin: 0px;\">\n Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen boo</p></td><td width=\"32px\" style=\"width:32px;\"></td></tr></body></html>\n    <tr>\n      <td colspan=\"3\" height=\"32px\" style=\"height:32px;\">&#xA0;</td>\n    </tr>{component.3g81}"
                }
            },
            "email_header": {
                "logo": null,
                "brand_name": null
            },
            "show_survey_sparrow_branding": true,
            "embed_first_question": true,
            "reply_to": "Yadira.Daugherty@hotmail.com",
            "custom_footer": false,
            "from_address": "sankarsuite@mailer.paid-existing-non-business-non-bulk2.helpsparrow.com"
        },
        "is_default": false,
        "multi_language_subject": {},
        "mode": null,
        "is_primary": false,
        "created_at": "2024-03-05T09:03:00.233Z",
        "updated_at": "2024-03-05T09:10:55.724Z",
        "deleted_at": "2024-03-05T09:10:55.724Z",
        "account_id": 1000001103,
        "device_id": null,
        "survey": {
            "id": 1000019502,
            "name": "sankar classic",
            "welcome_rtxt": null,
            "welcome_description": null,
            "welcome_screen_yes_button_text": "builder.welcome_yes_proceed",
            "thankyou_json": [],
            "archived": false,
            "visibility": "Mine",
            "survey_type": "ClassicForm",
            "template_name": null,
            "properties": {
                "has_llmsentiment": true,
                "autosize_heading": true,
                "survey_randomiser": false,
                "progress": {
                    "builder_completed": true,
                    "design_completed": true,
                    "share_completed": true
                },
                "start_assessment": true
            },
            "published": true,
            "eui_version": 3,
            "phishing": false,
            "phishing_details": {},
            "primary_language": "en",
            "multi_language_welcome_rtxt": null,
            "multi_language_welcome_description": null,
            "multi_language_welcome_screen_yes_button_text": null,
            "multi_language_thankyou_json": null,
            "multi_language_name": null,
            "multi_language_properties": {},
            "response_blocked": false,
            "logic_blocked": false,
            "created_at": "2024-03-04T09:51:56.813Z",
            "updated_at": "2024-03-05T08:04:40.636Z",
            "deleted_at": null,
            "account_id": 1000001103,
            "user_id": 1000002296,
            "survey_folder_id": 1000002325,
            "thankyou_template_id": null,
            "theme_id": null
        }
    },
    "account_id": 1000001103
}  
```
    </code>
</pre>
</details>

##### onSurveyCreate(Event is triggered when a survey is created in surveysparrow)

<details>
<summary>Click to expand </summary>
<pre>
    <code>
    ```json
    {
    "eventType": "onSurveyCreate",
    "ruleEvent": "SURVEY_CREATED",
    "objectType": "SURVEY",
    "objectId": 1000019556,
    "data": {
        "id": 1000019556,
        "name": "Survey created using API {{current_timestamp}}",
        "welcome_rtxt": null,
        "welcome_description": null,
        "welcome_screen_yes_button_text": "builder.welcome_yes_proceed",
        "thankyou_json": [],
        "archived": false,
        "visibility": "Public",
        "survey_type": "ClassicForm",
        "template_name": null,
        "properties": {
            "has_llmsentiment": true,
            "autosize_heading": true,
            "survey_randomiser": false
        },
        "published": true,
        "eui_version": 3,
        "phishing": false,
        "phishing_details": {},
        "primary_language": "en",
        "multi_language_welcome_rtxt": null,
        "multi_language_welcome_description": null,
        "multi_language_welcome_screen_yes_button_text": null,
        "multi_language_thankyou_json": null,
        "multi_language_name": null,
        "multi_language_properties": {},
        "response_blocked": false,
        "logic_blocked": false,
        "created_at": "2024-03-05T06:59:09.995Z",
        "updated_at": "2024-03-05T06:59:09.995Z",
        "deleted_at": null,
        "account_id": 1000001103,
        "user_id": 1000002296,
        "survey_folder_id": 1000002325,
        "thankyou_template_id": null,
        "theme_id": null
    },
    "account_id": 1000001103
}
```
    </code>
</pre>
</details>

##### onSurveyEdit(Event is triggered when a survey is edited in surveysparrow)

<details>
<summary>Click to expand </summary>
<pre>
    <code>
    ```json
    {
    "eventType": "onSurveyEdit",
    "ruleEvent": "SURVEY_EDITED",
    "objectType": "SURVEY",
    "objectId": 1000019502,
    "data": {
        "id": 1000019502,
        "name": "sankar classic",
        "welcome_rtxt": null,
        "welcome_description": null,
        "welcome_screen_yes_button_text": "builder.welcome_yes_proceed",
        "thankyou_json": [],
        "archived": false,
        "visibility": "Mine",
        "survey_type": "ClassicForm",
        "template_name": null,
        "properties": {
            "has_llmsentiment": true,
            "autosize_heading": true,
            "survey_randomiser": false,
            "progress": {
                "builder_completed": true,
                "design_completed": true,
                "share_completed": true
            }
        },
        "published": true,
        "eui_version": 3,
        "phishing": false,
        "phishing_details": {},
        "primary_language": "en",
        "multi_language_welcome_rtxt": null,
        "multi_language_welcome_description": null,
        "multi_language_welcome_screen_yes_button_text": null,
        "multi_language_thankyou_json": null,
        "multi_language_name": null,
        "multi_language_properties": {},
        "response_blocked": false,
        "logic_blocked": false,
        "created_at": "2024-03-04T09:51:56.813Z",
        "updated_at": "2024-03-04T10:36:32.088Z",
        "deleted_at": null,
        "account_id": 1000001103,
        "user_id": 1000002296,
        "survey_folder_id": 1000002325,
        "thankyou_template_id": null,
        "theme_id": null
    },
    "account_id": 1000001103
}  
```
    </code>
</pre>
</details>

##### onSurveyDelete(Event is triggered when a survey is deleted in surveysparrow)

<details>
<summary>Click to expand </summary>
<pre>
    <code>
    ```json
    {
    "eventType": "onSurveyDelete",
    "ruleEvent": "SURVEY_DELETED",
    "objectType": "SURVEY",
    "objectId": 1000019504,
    "data": {
        "id": 1000019504,
        "name": "class",
        "welcome_rtxt": null,
        "welcome_description": null,
        "welcome_screen_yes_button_text": "builder.welcome_yes_proceed",
        "thankyou_json": [],
        "archived": true,
        "visibility": "Mine",
        "survey_type": "ClassicForm",
        "template_name": null,
        "properties": {
            "has_llmsentiment": true,
            "autosize_heading": true,
            "survey_randomiser": false
        },
        "published": true,
        "eui_version": 3,
        "phishing": false,
        "phishing_details": {},
        "primary_language": "en",
        "multi_language_welcome_rtxt": null,
        "multi_language_welcome_description": null,
        "multi_language_welcome_screen_yes_button_text": null,
        "multi_language_thankyou_json": null,
        "multi_language_name": null,
        "multi_language_properties": {},
        "response_blocked": false,
        "logic_blocked": false,
        "created_at": "2024-03-04T10:25:12.633Z",
        "updated_at": "2024-03-04T10:29:31.254Z",
        "deleted_at": "2024-03-04T10:29:31.254Z",
        "account_id": 1000001103,
        "user_id": 1000002296,
        "survey_folder_id": 1000002325,
        "thankyou_template_id": null,
        "theme_id": null
    },
    "account_id": 1000001103
}  
```
    </code>
</pre>
</details>

##### onSurveyMove(Event is triggered when a survey is moved in surveysparrow)

<details>
<summary>Click to expand </summary>
<pre>
    <code>
    ```json
    {
    "eventType": "onSurveyMove",
    "ruleEvent": "SURVEY_MOVED",
    "objectType": "SURVEY",
    "objectId": 1001000182,
    "data": {
      "id": 1001000182,
      "name": "new",
      "welcome_rtxt": null,
      "welcome_description": null,
      "welcome_screen_yes_button_text": "builder.welcome_yes_proceed",
      "thankyou_json": [],
      "archived": false,
      "visibility": "Public",
      "survey_type": "ClassicForm",
      "template_name": null,
      "properties": {
        "has_llmsentiment": true,
        "autosize_heading": true,
        "survey_randomiser": false,
        "progress": {
          "builder_completed": true,
          "share_completed": true,
          "design_completed": true
        },
        "start_assessment": true
      },
      "published": true,
      "eui_version": 3,
      "phishing": false,
      "phishing_details": {},
      "primary_language": "en",
      "multi_language_welcome_rtxt": null,
      "multi_language_welcome_description": null,
      "multi_language_welcome_screen_yes_button_text": null,
      "multi_language_thankyou_json": null,
      "multi_language_name": null,
      "multi_language_properties": {},
      "response_blocked": false,
      "logic_blocked": false,
      "created_at": "2024-02-27T10:01:37.154Z",
      "updated_at": "2024-02-27T12:46:38.910Z",
      "deleted_at": null,
      "account_id": 12,
      "user_id": 1000000003,
      "survey_folder_id": 1000000007,
      "thankyou_template_id": null,
      "theme_id": null
    },
    "account_id": 12
  }  
  ```
    </code>
</pre>
</details>

##### onSurveyClose(Event is triggered when a survey is closed in surveysparrow)

<details>
<summary>Click to expand </summary>
<pre>
    <code>
    ```json
    {
    "eventType": "onSurveyClose",
    "ruleEvent": "SURVEY_CLOSED",
    "objectType": "SURVEY",
    "objectId": 1001000171,
    "data": {
      "id": 1001000171,
      "name": "Offline",
      "welcome_rtxt": null,
      "welcome_description": null,
      "welcome_screen_yes_button_text": "builder.welcome_yes_proceed",
      "thankyou_json": [],
      "archived": true,
      "visibility": "Mine",
      "survey_type": "OfflineApp",
      "template_name": null,
      "properties": {
        "autosize_heading": true,
        "survey_randomiser": false,
        "progress": {
          "builder_completed": true,
          "design_completed": true
        }
      },
      "published": true,
      "eui_version": 1,
      "phishing": false,
      "phishing_details": {},
      "primary_language": "en",
      "multi_language_welcome_rtxt": null,
      "multi_language_welcome_description": null,
      "multi_language_welcome_screen_yes_button_text": null,
      "multi_language_thankyou_json": null,
      "multi_language_name": null,
      "multi_language_properties": {},
      "response_blocked": false,
      "logic_blocked": false,
      "created_at": "2023-07-14T19:52:08.851Z",
      "updated_at": "2024-02-27T13:16:52.468Z",
      "deleted_at": null,
      "account_id": 12,
      "user_id": 1000000003,
      "survey_folder_id": 1000000003,
      "thankyou_template_id": null,
      "theme_id": null
    },
    "account_id": 12
  }  
  ```
    </code>
</pre>
</details>

##### onSurveyRestore(Event is triggered when a survey is restored in surveysparrow)

<details>
<summary>Click to expand </summary>
<pre>
    <code>
    ```json
    {
    "eventType": "onSurveyRestore",
    "ruleEvent": "SURVEY_RESTORED",
    "objectType": "SURVEY",
    "objectId": 1001000159,
    "data": {
      "id": 1001000159,
      "name": "Adminprakash NPS - 5",
      "welcome_rtxt": null,
      "welcome_description": null,
      "welcome_screen_yes_button_text": "builder.welcome_yes_proceed",
      "thankyou_json": [
        {
          "message": {
            "entity_map": {},
            "blocks": [
              {
                "key": "1hern",
                "text": "Thank you for your time!",
                "type": "unstyled",
                "depth": 0,
                "inline_style_ranges": [],
                "entity_ranges": [],
                "data": {}
              }
            ]
          },
          "branding": true,
          "description_boolean": false,
          "description": {
            "entity_map": {},
            "blocks": [
              {
                "key": "1hern",
                "text": "",
                "type": "unstyled",
                "depth": 0,
                "inline_style_ranges": [],
                "entity_ranges": [],
                "data": {}
              }
            ]
          }
        }
      ],
      "archived": false,
      "visibility": "Mine",
      "survey_type": "NPS",
      "template_name": null,
      "properties": {
        "email": {
          "body": "",
          "subject": "Your feedback matters! Help us serve you better.",
          "reply_email": "adminprakash@surveysparrow.com"
        },
        "accent_color": "19B885",
        "company_name": "adminprakash",
        "variables": [],
        "thank_you": {
          "default": "<p data-alignment=\"center\" style=\"text-align:center\">Thanks for your valuable feedback on your experience with us. We sincerely appreciate your insight because it helps us build a better customer experience.</p>",
          "advanced": false,
          "promoters": "<p data-alignment=\"center\" style=\"text-align:center\">Thank you for your feedback. We are happy to hear that you had a great experience with us. Your feedback helps us discover new opportunities to improve ourselves and make sure you have the best experience.</p>",
          "passives": "<p data-alignment=\"center\" style=\"text-align:center\">Thank you for your feedback. We want to give you the best possible experience. Your inputs and suggestions play a major role in helping us  improve.</p>",
          "detractors": "<p data-alignment=\"center\" style=\"text-align:center\">Thank you for your feedback. We value all your inputs and suggestions. In the future, our team might reach out to you to learn more about how we can further improve your experience so that it exceeds your expectations.</p>"
        },
        "redirection": {
          "basic": false,
          "default": null,
          "advanced": false,
          "promoters": null,
          "passives": null,
          "detractors": null
        },
        "response_notification": {
          "enabled": false
        },
        "follow_up_email": {
          "enabled": false,
          "advanced": false,
          "default": {
            "subject": "Thanks for your feedback. It means a lot to us.",
            "body": "Dear {contact.firstName},\n\n  Thanks for your valuable feedback on your experience with us. We sincerely appreciate your insight because it helps us build a better customer experience.\n\n  If you have any more questions, comments, or concerns or compliments, please feel welcome to reach out to us. We would be more than happy to assist.\n\n  Best,\n\n  {user.name}"
          },
          "promoters": {
            "subject": "Thanks for your feedback. It means a lot to us.",
            "body": "Dear {contact.firstName},\n\n  We are delighted to know that you would recommend us to your friends! Your insight helps us improve and build a better customer experience.\n\n  If you have any more questions, comments, or concerns or compliments, please feel welcome to reach out to us. We would be more than happy to assist.\n\n  Best,\n\n  {user.name}"
          },
          "detractors": {
            "subject": "Thanks for your feedback. It means a lot to us.",
            "body": "Dear {contact.firstName},\n\n  Thanks for your valuable feedback on your experience with us. We sincerely appreciate your insight because it helps us build a better customer experience.\n\n  Weâ€™re sorry you didnâ€™t have the best experience with us. Please reach out to us to know how we can serve you better. We would be more than happy to assist. \n\n  Best,\n\n  {user.name}"
          },
          "passives": {
            "subject": "Thanks for your feedback. It means a lot to us.",
            "body": "Dear {contact.firstName},\n\n  Thanks for your valuable feedback on your experience with us. We sincerely appreciate your insight because it helps us build abetter customer experience.\nPlease reach out to us to know how we can serve you better. We wouldbe more than happy to assist.\n\n  Best,\n\n  {user.name}"
          }
        },
        "autosize_heading": true,
        "survey_randomiser": false,
        "progress": {
          "builder_complete": true,
          "design_completed": true,
          "configure_complete": false,
          "share_complete": true,
          "result_complete": true
        }
      },
      "published": true,
      "eui_version": 3,
      "phishing": false,
      "phishing_details": {},
      "primary_language": "en",
      "multi_language_welcome_rtxt": null,
      "multi_language_welcome_description": null,
      "multi_language_welcome_screen_yes_button_text": null,
      "multi_language_thankyou_json": null,
      "multi_language_name": null,
      "multi_language_properties": {},
      "response_blocked": false,
      "logic_blocked": false,
      "created_at": "2022-10-14T09:50:28.384Z",
      "updated_at": "2024-02-27T13:18:38.970Z",
      "deleted_at": null,
      "account_id": 12,
      "user_id": 1000000003,
      "survey_folder_id": 1000000003,
      "thankyou_template_id": null,
      "theme_id": 1001000020
    },
    "account_id": 12
  }   
  ```
    </code>
</pre>
</details>

##### onSurveyDuplicate(Event is triggered when a survey is duplicated in surveysparrow)

<details>
<summary>Click to expand </summary>
<pre>
    <code>
    ```json
    {
    "eventType": "onSurveyDuplicate",
    "ruleEvent": "SURVEY_DUPLICATED",
    "objectType": "SURVEY",
    "objectId": 1001000187,
    "data": {
      "id": 1001000187,
      "name": "classic - Clone - Clone - Clone",
      "welcome_rtxt": null,
      "welcome_description": null,
      "welcome_screen_yes_button_text": "builder.welcome_yes_proceed",
      "thankyou_json": [],
      "archived": false,
      "visibility": "Mine",
      "survey_type": "ClassicForm",
      "template_name": null,
      "properties": {
        "autosize_heading": true,
        "survey_randomiser": false,
        "progress": {},
        "start_assessment": true,
        "is_survey": true,
        "clone": {
          "id": 1001000185,
          "parent_survey_type": "ClassicForm"
        }
      },
      "published": true,
      "eui_version": 2,
      "phishing": false,
      "phishing_details": {},
      "primary_language": "en",
      "multi_language_welcome_rtxt": null,
      "multi_language_welcome_description": null,
      "multi_language_welcome_screen_yes_button_text": null,
      "multi_language_thankyou_json": null,
      "multi_language_name": null,
      "multi_language_properties": {},
      "response_blocked": false,
      "logic_blocked": false,
      "created_at": "2024-02-27T13:47:53.018Z",
      "updated_at": "2024-02-27T13:47:53.915Z",
      "deleted_at": null,
      "account_id": 12,
      "user_id": 1000000003,
      "survey_folder_id": 1000000003,
      "thankyou_template_id": null,
      "theme_id": null
    },
    "account_id": 12
  }
  ```
    </code>
</pre>
</details>

##### onSubmissionCreate(Event is triggered when a submission is created in surveysparrow)

<details>
<summary>Click to expand </summary>
<pre>
    <code>
    ```json
    {
    "eventType": "onSubmissionCreate",
    "ruleEvent": "SUBMISSION_CREATED",
    "objectType": "SUBMISSION",
    "objectId": 1000238197,
    "data": {
        "id": 1000238197,
        "state": "STARTED",
        "start_time": "2024-03-01T13:06:22.508Z",
        "device_type": "COMPUTER",
        "feedback": null,
        "ip": null,
        "location": null,
        "language": null,
        "geo_info": {},
        "created_at": "2024-03-01T13:06:22.526Z",
        "updated_at": "2024-03-01T13:06:22.526Z",
        "account_id": 1000001103,
        "nomination_id": null,
        "survey_id": 1000014426,
        "contact": null,
        "meta_data": {
            "os": "macOS 10.15.7",
            "browser": "Chrome 121.0.0.0",
            "time_zone": "Asia/Calcutta",
            "browser_language": "en-GB"
        },
        "survey": {
            "id": 1000014426,
            "survey_type": "ClassicForm",
            "name": "classic"
        },
        "folder": {
            "id": 1000002325,
            "name": "General"
        },
        "channel": {
            "id": 1000018047,
            "type": "LINK",
            "name": "Web Link Share",
            "status": "ACTIVE",
            "subject": "LINK Share",
            "is_default": true,
            "limits": null,
            "web_url": "https://sankarsuite.surveysparrow.com/s/classic/tt-tiK6x6nTvnXzLwoZdxx7Ae"
        }
    },
    "account_id": 1000001103
}  
```
    </code>
</pre>
</details>

##### onSubmissionUpdate(Event is triggered when a submission is updated in surveysparrow)

<details>
<summary>Click to expand </summary>
<pre>
    <code>
    ```json
    {
    "eventType": "onSubmissionUpdate",
    "ruleEvent": "SUBMISSION_UPDATED",
    "objectType": "SUBMISSION",
    "objectId": 1000238196,
    "data": {
        "id": 1000238196,
        "time_taken": "2.00",
        "state": "STARTED",
        "start_time": "2024-03-01T13:06:00.856Z",
        "completed_time": null,
        "device_type": "COMPUTER",
        "feedback": null,
        "ip": null,
        "location": null,
        "language": "en",
        "geo_info": {},
        "created_at": "2024-03-01T13:06:00.933Z",
        "updated_at": "2024-03-01T13:06:01.567Z",
        "account_id": 1000001103,
        "nomination_id": null,
        "survey_id": 1000014426,
        "contact": null,
        "meta_data": {
            "os": "macOS 10.15.7",
            "browser": "Chrome 121.0.0.0",
            "time_zone": "Asia/Calcutta",
            "browser_language": "en-GB"
        },
        "survey": {
            "id": 1000014426,
            "survey_type": "ClassicForm",
            "name": "classic"
        },
        "folder": {
            "id": 1000002325,
            "name": "General"
        },
        "answers": {
            "1000148466": {
                "answer": 6,
                "step": 10,
                "question": "$Param_a.sr $Param_sr_12 opn",
                "question_type": "OpinionScale",
                "question_tags": [],
                "question_id": 1000148466,
                "skipped": false
            }
        },
        "variables": {},
        "expressions": {},
        "channel": {
            "id": 1000018047,
            "type": "LINK",
            "name": "Web Link Share",
            "status": "ACTIVE",
            "subject": "LINK Share",
            "is_default": true,
            "limits": null,
            "web_url": "https://sankarsuite.surveysparrow.com/s/classic/tt-tiK6x6nTvnXzLwoZdxx7Ae"
        }
    },
    "account_id": 1000001103
}  
```
    </code>
</pre>
</details>

##### onSubmissionDelete(Event is triggered when a submission is deleted in surveysparrow)

<details>
<summary>Click to expand </summary>
<pre>
    <code>
    ```json
    {
    "eventType": "onSubmissionDelete",
    "ruleEvent": "SUBMISSION_DELETED",
    "objectType": "SUBMISSION",
    "objectId": 1000240205,
    "data": {
        "id": 1000240205,
        "time_taken": "1.00",
        "state": "STARTED",
        "start_time": "2024-03-04T10:39:05.983Z",
        "completed_time": null,
        "device_type": "COMPUTER",
        "feedback": null,
        "ip": null,
        "location": null,
        "language": "en",
        "geo_info": {},
        "created_at": "2024-03-04T10:39:06.049Z",
        "updated_at": "2024-03-04T10:47:12.892Z",
        "account_id": 1000001103,
        "nomination_id": null,
        "survey_id": 1000019502,
        "contact": null,
        "meta_data": {
            "os": "macOS 10.15.7",
            "browser": "Chrome 122.0.0.0",
            "time_zone": "Asia/Calcutta",
            "browser_language": "en-GB"
        },
        "survey": {
            "id": 1000019502,
            "survey_type": "ClassicForm",
            "name": "sankar classic"
        },
        "folder": {
            "id": 1000002325,
            "name": "General"
        },
        "answers": {
            "1000194883": {
                "answer": 5,
                "step": 10,
                "question": "opn",
                "question_type": "OpinionScale",
                "question_tags": [],
                "question_id": 1000194883,
                "skipped": false
            }
        },
        "variables": {},
        "expressions": {},
        "channel": {
            "id": 1000023625,
            "type": "LINK",
            "name": "Web Link Share",
            "status": "ACTIVE",
            "subject": "LINK Share",
            "is_default": true,
            "limits": null,
            "web_url": "https://sankarsuite.surveysparrow.com/s/sankar-classic/tt-wiiHowmqitGMfEsUAEuNcg"
        }
    },
    "account_id": 1000001103
}   
```
    </code>
</pre>
</details>

##### OnTicketCreate(Event is triggered when a ticket is created in surveysparrow)

  <details>
    <summary>Click to expand </summary>
      <pre>
        <code>
        ```json
        {
    "eventType": "onTicketCreate",
    "ruleEvent": "TICKET_CREATED",
    "objectType": "TICKET",
    "objectId": 100000004,
    "data": {
        "id": 100000004,
        "subject": "Unable to restrict multiple submissions based on specific survey questions",
        "description": "Restriciting submissions based on contact is possible but doesn't work with specific questions in the survey",
        "created_at": "2023-12-20T10:53:18.507Z",
        "updated_at": "2023-12-21T07:00:49.754Z",
        "deleted_at": null,
        "submission_id": null,
        "nps_submission_id": null,
        "priority": {
            "id": 100000001,
            "value": "High"
        },
        "status": {
            "id": 100000004,
            "value": "Open"
        },
        "source": {
            "id": 100000006,
            "value": "Call"
        },
        "agent": {
            "id": 100000003,
            "name": "Gabriel",
            "email": "gabriel@surveysparrow.com"
        },
        "requester": {
            "id": 100000003,
            "name": "Gabriel",
            "email": "gabriel@surveysparrow.com",
            "phone": "9123456789",
            "mobile": "123456789"
        },
        "custom_fields": {
            "Text_field": "Random text"
        },
        "resolution_due": "2023-12-25T11:46:18.507Z",
        "first_response_due": "2023-12-18T11:46:18.507Z"
    },
    "account_id": 1000001115
}
```
        </code>
  </pre>
</details>

##### OnTicketUpdate(Event is triggered when a ticket is updated in surveysparrow)

<details>
  <summary>Click to expand </summary>
  <pre>
    <code>
    ```json
    {
    "eventType": "onTicketUpdate",
    "ruleEvent": "TICKET_UPDATED",
    "objectType": "TICKET",
    "objectId": 100000004,
    "data": {
        "id": 100000004,
        "subject": "Unable to restrict multiple submissions based on specific survey questions",
        "description": "Restriciting submissions based on contact is possible but doesn't work with specific questions in the survey",
        "created_at": "2023-12-20T10:53:18.507Z",
        "updated_at": "2023-12-21T07:00:49.754Z",
        "deleted_at": null,
        "submission_id": null,
        "nps_submission_id": null,
        "priority": {
            "id": 100000001,
            "value": "High"
        },
        "status": {
            "id": 100000004,
            "value": "Open"
        },
        "source": {
            "id": 100000006,
            "value": "Call"
        },
        "agent": {
            "id": 100000003,
            "name": "Gabriel",
            "email": "gabriel@surveysparrow.com"
        },
        "requester": {
            "id": 100000003,
            "name": "Gabriel",
            "email": "gabriel@surveysparrow.com",
            "phone": "9123456789",
            "mobile": "123456789"
        },
        "custom_fields": {
            "Text_field": "Random text"
        },
        "resolution_due": "2023-12-25T11:46:18.507Z",
        "first_response_due": "2023-12-18T11:46:18.507Z"
    },
    "account_id": 1000001115
}
```
    </code>
  </pre>
</details>

##### OnTicketDelete(Event is triggered when a ticket is deleted in surveysparrow)

<details>
  <summary>Click to expand </summary>
  <pre>
    <code>
    ```json
    {
    "eventType": "onTicketDelete",
    "ruleEvent": "TICKET_DELETED",
    "objectType": "TICKET",
    "objectId": 100000004,
    "data": {
        "id": 100000004,
        "subject": "Unable to restrict multiple submissions based on specific survey questions",
        "description": "Restriciting submissions based on contact is possible but doesn't work with specific questions in the surve",
        "created_at": "2023-12-20T10:53:18.507Z",
        "updated_at": "2023-12-21T07:00:49.754Z",
        "deleted_at": "2023-12-21T07:00:49.754Z",
        "submission_id": null,
        "nps_submission_id": null,
        "priority": {
            "id": 100000001,
            "value": "High"
        },
        "status": {
            "id": 100000004,
            "value": "Open"
        },
        "source": {
            "id": 100000006,
            "value": "Call"
        },
        "agent": {
            "id": 100000003,
            "name": "Gabriel",
            "email": "gabriel@surveysparrow.com"
        },
        "requester": {
            "id": 100000003,
            "name": "Gabriel",
            "email": "gabriel@surveysparrow.com",
            "phone": "9123456789",
            "mobile": "123456789"
        },
        "custom_fields": {
            "Text_field": "Random text"
        },
        "resolution_due": "2023-12-25T11:46:18.507Z",
        "first_response_due": "2023-12-18T11:46:18.507Z"
    },
    "account_id": 1000001115
}
  ```
    </code>
  </pre>
</details>

##### OnTicketCommentCreate(Event is triggered when a comment is made on a ticket in surveysparrow)

<details>
  <summary>Click to expand </summary>
  <pre>
    <code>
    ```json
    {
    "eventType": "onTicketCommentCreate",
    "ruleEvent": "TICKET_COMMENT_CREATED",
    "objectType": "TICKET_COMMENT",
    "objectId": 122,
    "data": {
        "body": "Will be resolved by a specific team of SurveySparrow",
        "id": 122,
        "ticket_id": 111,
        "type": "INTERNAL_NOTE/REPLY",
        "responder_type": "AGENT/REQUESTER",
        "agent": {
            "id": 333,
            "name": "Eldridge",
            "email": "eldridge777l@surveysparrow.com"
        },
        "created_at": "2023-12-20T10:53:18.507Z"
    },
    "account_id": 1000001115
}
```
    </code>
  </pre>
</details>

##### OnWidgetCreate(Event is triggered when a new widget is created)

<details>
  <summary>Click to expand </summary>
  <pre>
    <code>
    ```json
    {
    "eventType": "onWidgetCreate",
    "ruleEvent": "WIDGET_CREATE",
    "objectType": "DASHBOARD_WIDGET",
    "data": {
      "id": 1000001459,
      "name": "demo",
      "properties": {
        "date": {
          "date_range": {
            "end_date": null,
            "start_date": null,
            "display_string": "All Time"
          },
          "date_aggregation": "MONTHLY"
        },
        "meta": {},
        "filters": {
          "filter_groups": [],
          "global_connector": "AND"
        },
        "metrics": [
          {
            "aggregation": "COUNT",
            "resource_meta": {
              "metric_id": 1000001494,
              "metric_type": "OpinionScale",
              "metric_label": "some op qsttn",
              "metric_properties": {
                "data": {
                  "max": "builder.opinion_scale.max",
                  "mid": "builder.opinion_scale.mid",
                  "min": "builder.opinion_scale.min",
                  "step": 10,
                  "start": 0,
                  "reversed_order": false,
                  "not_applicable_tooltip_text": "Not Applicable"
                }
              }
            },
            "resource_type": "QUESTION",
            "data_source_id": 1000000375,
            "data_source_type": "survey",
            "data_survey_type": "ClassicForm"
          }
        ],
        "sources": [
          {
            "resource_id": 1000000375,
            "survey_type": "ClassicForm",
            "resource_type": "cognivue test 1"
          }
        ],
        "chart_type": {
          "type": "VERTICAL_BAR_CHART"
        },
        "color_theme": {
          "mono_color": null,
          "infographic_color": "#51D3D9"
        },
        "dimensions": [
          {
            "choices": {},
            "resource_meta": {
              "dimension_id": "submissionTime",
              "dimension_type": "SUBMISSION_TIME",
              "dimension_label": "Submission Time"
            },
            "resource_type": "CUSTOM",
            "data_source_id": 1000000375,
            "sub_dimensions": [],
            "data_source_type": "survey"
          }
        ]
      },
      "account_id": 1000000053,
      "dashboard_id": 1000000009
    },
    "account_id": 1000000053
  }
  ```
    </code>
  </pre>
</details>

##### OnWidgetUpdate(Event is triggered when a widget is updated)

<details>
  <summary>Click to expand </summary>
  <pre>
    <code>
    ```json
   {
    "eventType": "onWidgetUpdate",
    "ruleEvent": "WIDGET_UPDATE",
    "objectType": "DASHBOARD_WIDGET",
    "data": {
      "current_data": {
        "id": 1000001458,
        "name": "bar charrt 2",
        "properties": {
          "date": {
            "date_range": {
              "end_date": null,
              "start_date": null,
              "display_string": "All Time"
            },
            "date_aggregation": "MONTHLY"
          },
          "meta": {},
          "filters": {
            "filter_groups": [],
            "global_connector": "AND"
          },
          "metrics": [
            {
              "aggregation": "COUNT",
              "resource_meta": {
                "metric_id": 1000001489,
                "metric_type": "NPSScore",
                "metric_label": "How likely are you to recommend caseactivitylogs2 to a friend or colleague?",
                "metric_properties": {
                  "data": {
                    "labels": {
                      "left": "builder.opinion_scale.min",
                      "right": "builder.opinion_scale.max"
                    },
                    "appearance": {
                      "filled": true,
                      "button_shape": "Square"
                    },
                    "start_with_one": false,
                    "segment_colors": {
                      "passives": "FFDB78",
                      "promoters": "8DCD71",
                      "detractors": "FC9B9C"
                    },
                    "tinted_options": false,
                    "include_feedback": true,
                    "segmented_options": false
                  }
                }
              },
              "resource_type": "QUESTION",
              "data_source_id": 1000000372,
              "data_source_type": "survey",
              "data_survey_type": "NPS"
            }
          ],
          "sources": [
            {
              "resource_id": 1000000372,
              "survey_type": "NPS",
              "resource_type": "Feedback NPS"
            }
          ],
          "chart_type": {
            "type": "VERTICAL_BAR_CHART"
          },
          "color_theme": {
            "mono_color": null,
            "infographic_color": "#51D3D9"
          },
          "dimensions": [
            {
              "choices": {},
              "resource_meta": {
                "dimension_id": "submissionTime",
                "dimension_type": "SUBMISSION_TIME",
                "dimension_label": "Submission Time"
              },
              "resource_type": "CUSTOM",
              "data_source_id": 1000000372,
              "sub_dimensions": [],
              "data_source_type": "survey"
            }
          ]
        },
        "account_id": 1000000053,
        "dashboard_id": 1000000009
      },
      "previous_data": {
        "id": 1000001458,
        "name": "bar charrt",
        "properties": {
          "date": {
            "date_range": {
              "end_date": null,
              "start_date": null,
              "display_string": "All Time"
            },
            "date_aggregation": "MONTHLY"
          },
          "meta": {},
          "filters": {
            "filter_groups": [],
            "global_connector": "AND"
          },
          "metrics": [
            {
              "aggregation": "COUNT",
              "resource_meta": {
                "metric_id": 1000001489,
                "metric_type": "NPSScore",
                "metric_label": "How likely are you to recommend caseactivitylogs2 to a friend or colleague?",
                "metric_properties": {
                  "data": {
                    "labels": {
                      "left": "builder.opinion_scale.min",
                      "right": "builder.opinion_scale.max"
                    },
                    "appearance": {
                      "filled": true,
                      "button_shape": "Square"
                    },
                    "start_with_one": false,
                    "segment_colors": {
                      "passives": "FFDB78",
                      "promoters": "8DCD71",
                      "detractors": "FC9B9C"
                    },
                    "tinted_options": false,
                    "include_feedback": true,
                    "segmented_options": false
                  }
                }
              },
              "resource_type": "QUESTION",
              "data_source_id": 1000000372,
              "data_source_type": "survey",
              "data_survey_type": "NPS"
            }
          ],
          "sources": [
            {
              "resource_id": 1000000372,
              "survey_type": "NPS",
              "resource_type": "Feedback NPS"
            }
          ],
          "chart_type": {
            "type": "VERTICAL_BAR_CHART"
          },
          "color_theme": {
            "mono_color": null,
            "infographic_color": "#51D3D9"
          },
          "dimensions": [
            {
              "choices": {},
              "resource_meta": {
                "dimension_id": "submissionTime",
                "dimension_type": "SUBMISSION_TIME",
                "dimension_label": "Submission Time"
              },
              "resource_type": "CUSTOM",
              "data_source_id": 1000000372,
              "sub_dimensions": [],
              "data_source_type": "survey"
            }
          ]
        },
        "account_id": 1000000053,
        "dashboard_id": 1000000009
      }
    },
    "account_id": 1000000053
  }
  ```
    </code>
  </pre>
</details>

##### OnWidgetDelete(Event is triggered when a widget is deleted)

<details>
  <summary>Click to expand </summary>
  <pre>
    <code>
    ```json
    {
    "eventType": "onWidgetDelete",
    "ruleEvent": "WIDGET_DELETE",
    "objectType": "DASHBOARD_WIDGET",
    "data": {
      "id": 1000001459,
      "account_id": 1000000053,
      "dashboard_id": 1000000009
    },
    "account_id": 1000000053
  }
  ```
    </code>
  </pre>
</details>

##### OnDashboardCreate(Event is triggered when a new dashboard is created)

<details>
  <summary>Click to expand </summary>
  <pre>
    <code>
    ```json
    {
  "eventType": "onDashboardCreate",
  "ruleEvent": "DASHBOARD_CREATE",
  "objectType": "DASHBOARD",
  "data": {
    "id": 1000000170,
    "name": "ddd445",
    "description": "",
    "account_id": 1000000053,
    "visibility": "MINE",
    "properties": { "base_color": "#CDFBF2", "dashboard_icon": 5 }
  },
  "account_id": 1000000053
}
```
    </code>
  </pre>
</details>

##### OnDashboardUpdate(Event is triggered when a dashboard is updated)

<details>
  <summary>Click to expand </summary>
  <pre>
    <code>
    ```json
    {
  "eventType": "onDashboardUpdate",
  "ruleEvent": "DASHBOARD_UPDATE",
  "objectType": "DASHBOARD",
  "data": {
    "current_data": {
      "id": 1000000170,
      "name": "ddd445567",
      "description": "",
      "account_id": 1000000053,
      "visibility": "SHARED",
      "properties": { "base_color": "#CDFBF2", "dashboard_icon": 5 }
    },
    "previous_data": {
      "id": 1000000170,
      "name": "ddd445",
      "description": "",
      "account_id": 1000000053,
      "visibility": "MINE",
      "properties": { "base_color": "#CDFBF2", "dashboard_icon": 5 }
    }
  },
  "account_id": 1000000053
}
```
    </code>
  </pre>
</details>

##### OnDashboardDelete(Event is triggered when a dasboard is deleted)

<details>
  <summary>Click to expand </summary>
  <pre>
    <code>
    ```json
    {
  "eventType": "onDashboardDelete",
  "ruleEvent": "DASHBOARD_DELETE",
  "objectType": "DASHBOARD",
  "data": { "id": 1000000170, "account_id": 1000000053 },
  "account_id": 1000000053
}
```
    </code>
  </pre>
</details>

##### OnExternalEvent(Event is triggered when a third-party sends data to the incoming webhook)

<details>
  <summary>Click to expand </summary>
  <pre>
    <code>
    ```json
    {
        "data": {
            "accountId": 2,
            "headers": {
                "x-forwarded-for": "107.23.202.147",
                "x-forwarded-proto": "https",
                "x-forwarded-port": "443",
                "host": "marketplace.servicesparrow.app",
                "x-amzn-trace-id": "Root=1-65cb0d1c-05618b34238835eb0a23294e",
                "content-length": "221",
                "accept": "application/json",
                "accept-charset": "utf-8",
                "accept-encoding": "gzip, deflate",
                "user-agent": "IFTTT-Protocol/v1",
                "authorization": "Bearer pudtlUifqXOD66NYm0VVAmTTL8csRJG--fCiMGZrCOia2lGpw0cr3JQL7C9ghtpoNjzkaAP30YTKLBsK76U9t7Mw",
                "x-ifttt-realtime": "0",
                "x-request-id": "a58bc84e04654229b248dd97829b0d02",
                "content-type": "application/json",
                "x-datadog-trace-id": "4433809555521032027",
                "x-datadog-parent-id": "1666971791582876090",
                "x-datadog-sampling-priority": "0",
                "x-datadog-tags": "_dd.p.tid=65cb0d1c00000000",
                "traceparent": "00-65cb0d1c000000003d880e4ca6904f5b-172246032fe4d1ba-00",
                "tracestate": "dd=s:0",
                "sentry-trace": "884c1a7bb28b46daa394facf0ee24dc7-2e9cc74b25614d24",
                "baggage": "sentry-trace_id=884c1a7bb28b46daa394facf0ee24dc7,sentry-environment=production,sentry-release=ifttt_front_end%40production-v6189,sentry-public_key=f2dd1d54d35a4355ac4becccc9033596"
            },
            "data": {
                "triggerFields": {
                    "chosenSurvey": "1000010864"
                },
                "trigger_identity": "7eb6977c519b2a40c0df2083c36c720c73dd2f0d",
                "ifttt_source": {
                    "id": "136127942",
                    "url": "https://ifttt.com/applets/ZwWuyMJE"
                },
                "user": {
                    "timezone": "Asia/Kolkata"
                }
            },
            "requestUrl": "/NjoyOjEmaGFzaD1ObzNCdzQ2UmZSVGVydWw/ifttt/v1/triggers/submission",
            "eventType": "onExternalEvent"
        },
        "iparams": null
    }
    ```
    </code>
  </pre>
</details>

## Key Considerations

1. To integrate serverless functionalities on a react application created using SSDK CLI, just add a folder named **server** in the root directory and add the file **server.js** inside it. In the server.js file, add the necessary code as mentioned above such as the event configurations and the handlers.

2. When you want to import and use any NPM packages within the server folder, please add the NPM packages as dependencies in the manifest.json.

   ```bash
   {
     "platform-version": "1.0",
     "product": {
       "surveysparrow": {
         "location": {
           "full_page_app": {
             "url": "index.html",
             "icon": "icon.svg"
           }
         }
       }
     },
     "whitelisted-domains": [],
     "engines": {
       "node": "18.19.0",
       "ssdk": "0.1.10"
     },

     "dependencies":{
       "date":"2.0.4"
     }
   }
   ```

3. When importing local files or modules in any of the files within the server, the require() function returns a promise, so you need to await the require() call and then use the module. This is not a issue when importing NPM packages. Below is an example.

In the **db_schema.js** file present in the **server** folder,

```bash
const db_schema = {
  id:{
      type: "string",
      required: true,
  },

  survey_id:{
      type: "string",
      required:true,
  }
}

exports = {
  db_schema
}
```

In the **server.js** file,

```bash
const db_schema = require("./db_schema")

async function handler(){
    const db_schema_obj = await db_schema;
}
```

  <br/>

**Note:** When exporting data from a file within the **server** folder, ensure that you are using the **exports** keyword. Below is the syntax on exporting data inside the server folder.

```bash
// an Object
const sample_obj = {
  message: "sample text"
}

// a Function
const sample_function = async ()=>{
  return {
    "data":"sample data"
  }
}

// exporting the sample object and the sample Function
exports = {
  sample_obj,
  sample_function
}
```

## Server Method Invocation:

The Server Method Invocation (SMI) feature enables you to build an app with a front-end component that can invoke a serverless component. To do this:

1. In the manifest.json > functions object, specify all the server methods that are called from the front-end component of the app, to allowlist the methods.

2. In the front-end component (app.js), specify the method to invoke the serverless component and pass an appropriate payload to the serverless component. By default, the serverless environment adds the installation parameters set during app installation to the payload.

3. In the serverless component (server.js), define the server method (SMI function) that is allow-listed in the app manifest and called from the front-end component. In this server method, include the app logic that runs based on the payload passed and the method will return success and failure responses to the front-end component.

The SMI functions should be mentioned under the productName in manifest.json like:

```json
"functions": {
        "serverMethod1": {
          "timeout": 10
        },
        "serverMethod2": {
          "timeout": 15
        }
      }
```

Sample:

```json
"functions":{
"surveyConverter":{
    "timeout":10
   }
}
```

The server method can be invoked from the frontend using the client object like:

`client.request.invoke(functionName, data);`

Sample:

**in app.js**

```bash
const result = await window.client.request.invoke(â€œsurveyConverterâ€, {data:â€sample_dataâ€});
```

**server.js**

```bash
exports = {
  surveyConverter: async function(options) {
    console.log(options);
    return {
      "data":"demo"
    }
}
```

The Server method will recieve the data along with the iparams of the app user like:

```bash
{
  "iparams":{
    api_Key: "dafsfdfaasdsd"
  },
  "data":{
    data:â€sample_dataâ€
  }
}
```

After the app logic in the server method runs, the server method sends an appropriate response to the front-end component. To enable this:

- Navigate to the `server.js` file. In the exports code block, define the server method (SMI function) that is called from the front-end component. Place the app logic inside the server method.

The frontend component will get the value retired from this smi function and this value is stringified. The actual JSON can be taken from the retired value by `JSON.parse(returned_value)` in the frontend Component.
