---
layout: default
title: Incoming Webhook
nav_order: 11
---

# Incoming Webhook

Incoming webhook provides retrieving information from third-party applications to SurveySparrow. It automates the process of transferring data every time a specific event occurs in the third-party application.

# Getting Started
Incoming webhooks can be configured by building a serverless application through the SSDK CLI.

**NOTE:** Make sure that the SSDK CLI is installed successfully.

## 1. App Initialization
- Create an empty directory, open the terminal on the empty directory, and run the command SSDK CREATE
- Choose the product - SurveySparrow
- Select serverless_app to initialize the serverless application.

---

## 2. Configure Incoming Webhook Event
- In the server.js file, create a handler function - handleExternalEvent that will run when the third party sends a request to the incoming webhook.
- The handler function has one parameter which holds the payload sent from the third party.

    ```
    exports = {
        handleExternalEvent: function (args){
            console.log("Data sent from third-party is : ", args)
        }
    }
    ```

- In the manifest.json file, add the onExternalEvent. It is responsible for listening to requests sent from the third-party applications.
    ```bash
    {
        "platform-version": "1.0",
        "product": {
            "surveysparrow": {
            "events": {
                "onExternalEvent":{
                "handler":"handleExternalEvent"
                } 
            }
            }
        },
        "whitelisted-domains": [],
        "engines": {
            "node": "18.19.0",
            "ssdk": "0.1.10"
        }
    }
    ```

---

## 3. Test the incoming webhook

To test the application, run the command - `ssdk run` from the root directory.

### A. Simulate

- Since the application is in development mode, you can simulate the functionality of the incoming webhook by visiting the URL - `https://localhost:30001/web/test`
- The simulated environment is an exact depiction of the process involved in the incoming webhook.
- Choose **onExternalEvent** and the sample payload specified in the onExternalEvent.json will be displayed here.
- Click on the **simulate** button and the respective handler function **handleExternalEvent** will be executed.

### B. Test the Incoming Webhook Locally

- To test the incoming webhook locally, you can specify the URL - **https://localhost:30001/onExternalEvent** on the third-party application. The event payloads of the third party application will then be sent to this URL in the below event payload structure.

### C. Test the Incoming Webhook Locally - NGROK Tunnel (Alternative)
- Certain third-party applications might not allow using the URL - **https://localhost:30001/onExternalEvent**. In such cases, an alternative solution for testing the incoming webhook locally is by creating secure tunnels to your application. That is, generating a HTTPS endpoint for your application. You can use **NGROK** or other similar tools to create tunnels.

- The application must be running at `https://localhost:30001` for the tunnel to work.

- After installing [NGROK](https://ngrok.com/download), open a new terminal on the same location, run the below command
    ```bash
    ngrok http https://localhost:30001
    ```
- Then, you can specify the NGROK's URL on the third party applications.

- Please note that these procedures are only for development purposes. On publishing the app, you will receive a secure HTTPS URL automatically.

### The Event Payload Structure:

```bash
{
  accountId: 1,
  requestUrl: '/onExternalEvent',
  eventType: 'onExternalEvent',
  data: {},
  headers: {},
  params: {}
}
```

Here, **data** is the information passed in the request body, **headers** (Request Headers) contain information about the request, **params** basically denotes query params passed along with the webhook URL.

### The Sample Event Payload:

```bash
{
    "accountId": 2,
    "headers": {
        "authorization": "Bearer prp_hwl3MagTFGz4woJv2_OEO2gidT1nQaL4uCBOvGVWzo8Y1FcdavJRBcE7R6NHQqYuAQOBaRC_1kNX8R2DbRdw",
        "user-agent": "PostmanRuntime/7.36.3",
        "accept": "*/*",
    },
    "data": {
        "actionFields": {
            "name": "virat",
            "email": "virat@gmail.com"
        },
        "ifttt_source": {
            "id": "2",
            "url": "https://ifttt.com/myrecipes/personal/2"
        },
        "user": {
            "timezone": "America/Los_Angeles"
        }
    },
    "requestUrl": "/NjoyOjEmaGFzaD1ObzNCdzQ2UmZSVGVydWw/ifttt/v1/actions/createcontact",
    "eventType": "onExternalEvent"
}
```

---

## 4. Publish the webhook!

To test the application in production to experiment with the actual event triggers, the app should be published on AppNest. Visit the developer portal or Go to Settings -> **APPS AND INTEGRATIONS** -> Click on the **Developer Portal** button to publish your app.

- In the **APPS** tab, create a new app, fill in all the necessary fields, and publish it.
- You will find the **Endpoint URL** (or Webhook URL) within the published app in the Developer Portal.
- Click on the copy icon and start utilizing the incoming webhook functionality.

![Copy Webhook URL](https://static.surveysparrow.com/application/marketplace/codelabs/incoming-webhook.png)








