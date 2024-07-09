---
layout: default
title: Outgoing Webhook
nav_order: 10
---

# Outgoing Webhook
Outgoing webhook provides listening to events in SurveySparrow and sends information related to the event to third-party applications. This allows for the automated transmission of data from SurveySparrow to other applications.

## Event
Event can be defined as an action or a change of state. In lamen terms, if a task is performed, it can be called an event. For instance, when a user submits a response on a survey or when a new contact is created, it is called an event.

The outgoing webhook provides access to such events in SurveySparrow and performs actions when the events get triggered.

--- 

# Setup
Outgoing webhook is a no-code platform designed solely to ease up the webhook creation process. To locate the outgoing webhook, visit the URL - [https://appnest.surveysparrow.com](https://appnest.surveysparrow.com).

![Webhook](https://static.surveysparrow.com/application/marketplace/global-webhook/webhook.png)

Another way to find and create your webhook is through your SurveySparrow account.

- From your SurveySparrow dashboard, click on settings in the top-right corner.

- In the left panel, scroll down to find **APPS AND INTEGRATIONS**.

- Click on the **Developer Portal** button

- You will find two tabs - **APPS** and **WEBHOOK.** Choose **WEBHOOK**.

- Click on **+ New Webhook** to create the App.

- You will be redirected to a page where you should fill in all the required information for the outgoing webhook.

Refer to this [documentation](https://codelabs.surveysparrow.com/codelabs/level-5-global-webhook-app/index.html?index=../..index#2) explaining what each field denotes.

![Webhook](https://static.surveysparrow.com/application/marketplace/global-webhook/webhook-creation.png)

---
# Configurations
After the initial setup, you will be redirected to the configurations section.

![Webhook](https://static.surveysparrow.com/application/marketplace/global-webhook/webhook-config.png)

## Secret Token

The secret token helps in the process of verifying that the event payload is sent from SurveySparrow to your application/server.

## Endpoint URL

The outgoing webhook will send the information (event payload) to the your server through this Endpoint URL.

### Endpoint URL Requirements

The Endpoint URL must meet specific requirements:

- It must be a publicly accessible HTTPS Endpoint URL.

- It must be capable of handling HTTP POST requests.

- It must be capable of returning either a 200 or 204 HTTP Status Code.

### Behind The Scenes
When the selected events get triggered, the webhook app will make a
POST request to the Endpoint URL. The POST request includes the
information (event payload) in the request body.

## Validate

When you click the **Validate** button, the platform checks if the Endpoint URL is valid. It does this by sending a request to the URL. The expected response from the URL should have a status code of 200, indicating success, and the content type should be set to application/json. Below is a sample response that meets these criteria.

```bash
HTTP/1.1 200 OK
Content-Type: application/json
```

## Authentication Header

The platform provides various authentication methods to secure the webhook. These are passed as extra headers in the request to the Endpoint URL.

### Basic Authentication

- Basic Authentication requires a username and password to be sent with the headers.
- You can validate the username and password by accessing the headers in the endpoint URL you specified above.

    **String-based conversion:** The username and password specified will be converted to a string-based form - **username:password**
    <br/>

    **Base 64 Format:** - It will then be encrypted to a **base64 string** and then sent with the headers in the below format.

    ```bash
    "authorization":"Basic {encrypted_string}"
    ```

    **Encrytion and Validation:** - To validate this encrypted string, you can do so by encrypting the username and password on your server and then comparing them with the base64 string sent  in the authorization headers.

![Webhook](https://static.surveysparrow.com/application/marketplace/global-webhook/basic-auth.png)

### OAuth Authentication

- If your server requires oauth-based authentication, just specify the client ID, client secret, token URL, and scope (optional) of the application.
- That is, your server should have an endpoint to handle this token URL along with the endpoint URL.
- The token URL is responsible for sending access tokens.

![Webhook](https://static.surveysparrow.com/application/marketplace/global-webhook/oauth-auth.png)

### Token Authentication

- Token Authentication is quite similar to OAuth Authentication but here the client ID, client secret, and token URL are the only required fields.
- The scope is not defined in Token Authentication.

![Webhook](https://static.surveysparrow.com/application/marketplace/global-webhook/token-auth.png)

**NOTE:** In Both Token And OAuth Authentication, there are few procedures that need to be implmented on your server. Refer to this [section](../global-webhook/#oauth-and-token-authentication-procedure) for more information.

### Custom Headers

The Outgoing Webhook might require customized key-value pairs to be
sent with the headers.

![Webhook](https://static.surveysparrow.com/application/marketplace/global-webhook/custom-headers.png)

---

# OAuth and Token Authentication Procedure
In terms of OAuth and Token Authentication, there are few procedures that need to be implemented on your server.

## Obtain Access Token
- The webhook will first send a POST request to this token URL to fetch the access token on the initial event trigger.
- In your server, write the Token URL endpoint which is responsible for sending access tokens.
- The platform expects the Token URL to return the response in the below format.

```bash
HTTP/1.1 200 OK
Content-Type: application/json

{
    "access_token":"MTQ0NjJkZmQ5OTM2NDE1ZTZjNGZmZjI3",
    "token_type":"Bearer/Basic",
    "expires_in":3600,
}
```

The response should include the Content-Type as application/JSON and the status code of 200.

**access_token** - The access token is the secure encrypted token that is used for authorizing third-party applications.

**token_type** - It denotes how the access_token is sent with the request. It could be Bearer, Basic, and much more.

**expires_in** - The access token will have an expiry date and no request shall be made if it's expired. The expires_in is a number field and should be specified in "seconds" format.

## Passing Headers to Endpoint URL
After fetching the access token, the webhook makes a POST request to the Endpoint URL with the access token passed in the Authorization headers.

## Access Token Expiry
- If the access_token expires, the webhook sends another request to the same token URL and fetches the new access token.
- So, the Token URL is responsible for providing access token and also re-sharing a new one when it expires.

---

# Event Subscriptions

**Subscriptions** define the specific events for which a webhook should send information, often referred to as event payloads, to a third-party application.


When you set up a webhook integration, you typically specify which
events you want to monitor, and when those events occur, the webhook
will automatically send the relevant data to the designated
endpoint.

![Webhook](https://static.surveysparrow.com/application/marketplace/global-webhook/select-events.png)

## **Event Categories**

### Response

The list of events present in the **Response** tab is associated with Survey responses.

- **onSubmissionComplete** - An event that is triggered when a user submits a response on any survey.

### Contact

The list of events present in the **Contact** tab is associated with contacts.

- **onContactCreate:** An event that is triggered when a new contact is created.

- **onContactUpdate:** An event that is triggered when a new contact is updated.

- **onContactDelete:** An event that is triggered when a new contact is deleted.

Click on **save** and your webhook will be created successfully!!

You can find the list of all the webhooks on the [developer portal](https://appnest.surveysparrow.com/).

![Webhook](https://static.surveysparrow.com/application/marketplace/global-webhook/all-webhooks.png)

---

# Endpoint URL Request
When the event gets triggered, the event payload will be sent to the
third-party application where extra key-value pairs will be passed in
the headers for each request. Find the reference to the request headers
down below.

```bash
user-agent: SurveySparrow AppNest
x-appnest-signature: ef1ee97cf88e42bb12c14f7885
authorization: Bearer eyJ0eXAi0iJKV1QiLCJub25jZSI6I
traceid: e549501a-aa1c-4e45-9cea-9a0e05d7311b
x-appnest-timestamp: 1705565839
```

- In the x-appnest-signature, there is a token encrypted with the help of event payload and the secret token in the webhook using the SHA384 algorithm.

- So, every time the event payload is sent to your server, you can validate this x-appnest-signature by encrypting the event payload with a secret token using the SHA384 algorithm. After that, you can check if both the encrypted tokens are the same.

- To encrypt it, first convert the payload(sent by SurveySparrow) place the secret token(visible in the webhook) in the salt field, and then compare it with the x-appnest-signature sent in the headers.

- This is an additional security measure to ensure that the event payload is sent from SurveySparrow.

--- 

# Rate Limiting

SurveySparrow implements a rate limiting mechanism to govern the transmission of event payloads to third-party applications. This limitation imposes a cap of 5000 occurrences per day for each unique event payload transmitted via a single webhook.

In essence, this equates to a maximum of 5000 payload transmissions per day for any given event associated with a specific webhook.

--- 

# Alerts

If a webhook experiences 500 event trigger failures within a 12-hour timeframe, it will be automatically disabled. Furthermore, in the event of a webhook being disabled, an email notification will be sent to the respective ID specified when creating the webhook.

Should you require further assistance or clarification regarding this matter, please do not hesitate to mail us at **support@surveysparrow.dev**