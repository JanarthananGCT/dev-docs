---
sidebar_position: 3
hide_title: false
sidebar_label: Building Apps
title: Building Apps
id: building-apps
---

# Building Apps
Below are the various ways you can build apps on AppNest.

#### [React App](../apps/react_app)

#### [Serverless App](../apps/serverless_app)

#### [React + Serverless App](../apps/react_serverless_app)

#### [SMI App](../apps/smi_app)

#### [Scheduler App](../apps/scheduler_app)

# Third Party Integration

There are mainly two ways to integrate third party applications with AppNest applications. One is [OAuth](../features/#oauth) and the other is [IParams](../configuration/installation-parameters.md).

## OAuth

The OAuth feature of SSDK CLI simplifies the OAuth2 authorization with third party applications. All that is needed is specifying certain configurations such as client_id, client_secret, auth_url, token_url, etc.

The SSDK CLI will handle fetching access tokens, verifying if the access token expired and obtaining new access token using the refresk token. It also handles the secure storage of the access tokens.

First, create a file named **oauth_config.json** within the config folder and pass the necessary configurations to perform third party OAuth. Refer to the [OAuth section](../features/#oauth) for detailed information.


## IParams
The other way is IParams (Installation Parameters). Usually, third party applications offer a way to generate a private API key or an access token. The IParams can act as a form where the users can pass in their own private API Keys of the third party application right before installing the application.

As a developer, you should specify the fields in the iparams.json file within the config folder. The field can be anything that you want from the user.

As a user, when you try to install the app by toggling the icon, you will be redirected to the IParams page which asks you enter the fields that the developer specified.

To set up the IParams in your application, refer the [IParams Section](../configuration/installation-parameters.md) for more detailed information.