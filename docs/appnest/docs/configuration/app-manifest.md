---
layout: default
title: App Manifest
parent: Configuration
nav_order: 1
---

# App Manifest

The manifest.json file contains information such as the platform version used by a product, locations on the product UI where an app can be rendered (for front-end apps), dependent packages used by the app, SMI functions that can be invoked from an app’s front-end component, events and the corresponding callbacks (for serverless apps), and the Node.js and SSDK versions used to build, test, validate, and pack the app.

The manifest.json lists the configured urls for api calls that the app invokes to construct and send secure HTTP requests to the third-party domains. manifest.json whitelists all the third-party domains with which the app can interact. 

### Sample manifest.json:

```js
{
    "platform-version": "1.0",
    "product": {
    "surveysparrow": {
      "location":{
        "full_page_app":{
          "url": "index.html",
          "icon": "styles/images/icon.svg"
        }
      },
      "events": {
        "onSubmissionComplete": {
          "handler": "onSubmissionComplete"
        }
      },
      "functions":{
        "callSmiEvent":{
          "timeout":10        
        }
      }
    }
    },
    "whitelisted-domains":["https://www.google.com"],
    "engines": {
        "node": "18.16.0",
        "ssdk": "0.1.3"
    }
  
}


```

|S.No | Attribute name | Data type | Description |
| ------------- |:-------------:| :-------------: |-----:|
|1.| platform-version | String |  When the app files are created, this field value is auto-generated. The value specifies which version of the platform is used to build the app. The version information is used to ensure backward compatibility when a new platform version is released.|
|2.| product <br/>**Mandatory** | Object | Associates a surveysparrow product with the information that is necessary to render the app on the specified product.(child parameter: surveysparrow) |
|3. | surveysparrow<br/>**Mandatory** | Object | Specifies information that is necessary to render the app on the surveysparrow UI.(Child parameter: location) |
|4. | location <br/>**Mandatory for all except serverless apps** | Object | Specifies the multiple locations on the SurveySparrow UI, where the app is to be rendered.(Child parameter: full_page_app) |
|5.| full_page_app<br/>**(this is one of the eleven locations where the app is rendered in UI)** | Object | Specifies information necessary to render the app on the SurveySparrow UI, in the account level integration page under installed Apps<br/>Attributes: url, icon. The location should be one of [full_page_app](#full_page_app), [builder_integrations_list](#builder_integrations_list),[response_details](#response_details),[contact_details](#contact_details),[new_survey_shares](#new_survey_shares), [contact_import](#contact_import), [response_import](#response_import), [home_navigation](#home_navigation), [home_left_panel](#home_left_panel), [survey_settings](#survey_settings) |
|6.| url<br/>**Mandatory** | String | Specifies the relative path from the app project directory to the index.html file based on which the app is rendered. The contents of the index.html file are used to render the app in an IFrame at the specified location. Default value:index.html (file in the app directory)
|7.| icon<br/>**Mandatory** | String | Specifies the relative path from the app project directory to an image file (in SVG format). The image is used as the app’s icon when the app is rendered on the UI. The resolution of the image needs to be 64x64 pixels. Default value: icon.svg (file in the app directory) | 
|8. | engines | Object | Specifies the Node.js version and SSDK version that are used to build the app. SSDK auto-populates this value.|
|9.| events<br/>**Mandatory for serverless apps** | Object | Contains the various serverless events and the corresponding call-back function names, specified in the following format:<br/>`"events":{"onSubmissionComplete":{"handler":"submissionHandler"}}` |
|10.|functions<br/>**Mandatory for SMI** | Object | Lists the SMI functions (server methods) defined in the exports code block of server.js, in the following format:<br/>`"functions":{"surveyConverter":{"timeout":10}}`<br/>Child attribute:timeout (integer): Time in seconds beyond which the app execution times out, if the SMI function does not return a valid response to the front-end component. You can specify an appropriate timeout value based on the SMI function.<br/>Valid values : 5, 10, 15, and 20 |
|11.| whitelisted_domains<br/>**Mandatory** | Array of Strings | To make secure HTTP calls to third-party domains, apps must use the Request Methods. For the method to work, in manifest.json, the third-party domains must be listed as the whitelisted-domains.<br/>It should be in the following format:`[https://(.*).surveysparrow.com(.*)]`|
|12.| modalSize<br/>**Optional** | String | It allows us to control the size of the modal. The possible values for this field are: **'sm', 'md', 'lg', 'xl', 'full'**. The default value is **full**. The property should be placed along with the **url** and **icon** in the manifest.json. Currently, this property is only available for the applications built by choosing **ThriveSparrow** as the product.

There are totally 10 locations where the app can be rendered inside surveysparow:

Like already mentioned the app's location should be mentioned in manifest.json.

## Locations

Below is the list of various locations for viewing your AppNest applications.

- ### full_page_app (Home->Settings->Installed Apps):

![image-11](https://static.surveysparrow.com/application/marketplace/ssdk-assets/full_page_app.png)

- ### builder_integrations_list (Home->Any Survey->Integrate Tab):

![image-13](https://static.surveysparrow.com/application/marketplace/ssdk-assets/builder_integrations_list.png)

- ### response_details (Home->Any Survey->Results Tab->Any Response->Apps):
![image-14](https://static.surveysparrow.com/application/marketplace/ssdk-assets/response_details.png)

- ### contact_details (Home->Contacts->Contact Details):
![image-15](https://static.surveysparrow.com/application/marketplace/ssdk-assets/contact_details.png)

- ### new_survey_shares (Home->Any Survey->Share Tab->Apps):
![imgae-16](https://static.surveysparrow.com/application/marketplace/ssdk-assets/new_survey_shares.png)

- ### contact_import (Home->Contacts->Import->Apps):
![image-17](https://static.surveysparrow.com/application/marketplace/ssdk-assets/contact_import.png)

- ### response_import (Home->Any Survey->Results tab->Imports):
![image-18](https://static.surveysparrow.com/application/marketplace/ssdk-assets/response_import.png)

- ### home_navigation (Home->Apps(top right)):
![image-19](https://static.surveysparrow.com/application/marketplace/ssdk-assets/home_navigation.png)

<br />

![image-20](https://static.surveysparrow.com/application/marketplace/ssdk-assets/home_navigation_2.png)

- ### home_left_panel (Home->Apps(Left panel)):
![image-21](https://static.surveysparrow.com/application/marketplace/ssdk-assets/home_left_panel.png)

- ### survey_settings (Home->Any Survey->Build Tab->Settings->Apps):
![image-22](https://static.surveysparrow.com/application/marketplace/ssdk-assets/survey_settings.png)

## Multiple Locations

The AppNest applications can be rendered on multiple locations. After installing the app on the page, **APPS AND INTEGRATION** - `https://domain.surveysparrow.com/settings/apps-integration`, you can preview the same app on multiple locations as specified in the manifest.json file.

Here's the sample manifest.json file for rendering the app on multiple locations.

```js
{
  "platform-version": "1.0",
  "product": {
    "surveysparrow": {
      "location": {
        "full_page_app": {
          "url": "index.html",
          "icon": "icon.svg"
        },

        "home_left_panel":{
          "url": "index.html",
          "icon": "icon.svg"
        },
        
        "response_import":{
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