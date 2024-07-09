---
layout: default
title: React App
parent: Building Apps
nav_order: 1
---

# React App

AppNest allows users to build react applications using the SSDK CLI. These applications possess a solid UI and possibly integrates SurveySparrow or ThriveSparrow with other third-party services. For example, ease up the survey creation process by integrating ChatGPT to generate questions based on the given prompt.

## How to set up the React application?

It is mandatory to utilize [Twigs](https://twigs.surveysparrow.com) to construct the UI components. Twigs is a react-component library that contains pre-built optimized components that speed up your UI development process. It is specifically built for AppNest applications. Employing Twigs ensures that the application aligns with the SurveySparrow products' theme.

### Step 1

- Run the command `ssdk create` to initialize the application.
- Choose a product, either SurveySparrow or ThriveSparrow.
- Select **react_app** which will generate the boilerplate files for react application.

### Step 2

- The manifest.json file contains crucial details such as locations and whitelisted domains. Kindly refer the [App Manifest](https://sdk.surveysparrow.dev/docs/configuration/app-manifest.html) to learn more. 

### Step 3

- Run the command ``` npm install ``` or ``` npm i ``` to install all the necessary dependencies which includes Twigs library.
- Run the command ``` ssdk run ``` to view your application on your SurveySparrow account within an Iframe.

### Step 4
- Go to this url - **https://domain.surveysparrow.com/settings/apps-integration?dev=true**. Make sure to append **?dev=true** as your application is in development mode.

- Find the **SurveySparrow App** at the bottom of the page and toggle the icon to install it. If you have specified IParams or OAuth in your application, you will be redirected to another page. Otherwise, the app will be installed right away.

- The default location for previewing your application is **full_page_app** which you can find in the manifest.json file. The URL for this location is **https://domain.surveysparrow.com/settings/marketplace-apps?dev=true**

- Refer the [App Manifest](https://sdk.surveysparrow.dev/docs/configuration/app-manifest.html) to learn more about the various locations to preview the React applications.
