---
layout: default
title: Installation Parameters
parent: Configuration
nav_order: 2
---
# Installation Parameters

The SSDK enables you to define and use parameters whose values app users can set when they install an app. These parameters are termed installation parameters or iparams. To define and use iparams:

&emsp;&emsp; 1. Configure the iparams. During app installation, the configured iparams are displayed on an installation page. App users can enter appropriate values for the iparams and click INSTALL. The entered values are validated and saved.

&emsp;&emsp; 2. In the app logic, use the following code to retrieve the iparam values (for secure iparams):

```js
<%= iparams.api_key %>
&emsp;&emsp; Note: To prevent exposure of sensitive iparam information, secure iparams can only be retrieved through the Request Method, as part of HTTPS request headers.

For serverless apps, the configured iparams are passed as part of event payloads. The app logic can retrieve the iparams values from the payload.

## Configure:

1. From your app’s root directory, navigate to the config/iparam.json file.

2. Configure iparams by using the following sample format.
 
|s.no| Attribute name | Data Type | Description |
| ------------- |:-------------:| :-------------: |-----:|
|1.| display_name | String | Identifier of a parameter on the installation page.|
|2.| description | String | Helper text that is displayed along with the parameter, on the installation page. The description can include examples. |
|3.| type | String | Type of input field displayed, for the iparam, on the installation page. Possible values: text, email, number, phone_number, date, url, api_key, radio |
| 4.| required | boolean | Specifies whether the iparam is displayed as a mandatory parameter. An asterix is displayed next to the parameter on the installation page. |
| 5. | type_attributes | Object | Specifies the product with the key value pair as product and product name respectively. For eg: {product: surveysparrow}. (this field is only for api_key type)

## Configure iparams.json:

```js
{
  "surveysparrow_api_key": {
      "display_name": "SurveySparrow API Key",
      "description": "Please enter your SurveySparrow API key. You can find it in Settings -> Apps & Integrations -> Custom Apps",
      "required": true,
      "secure": true,
      "type": "api_key",
      "type_attributes": {
        "product": "surveysparrow"
      }
    }
  ,
  "name": {
    "display_name": "Name",
    "description": "Please enter your Name here",
    "type": "text",
    "required": false
  }
}

```

[How to create an API key in surveysparrow](https://support.surveysparrow.com/hc/en-us/articles/7080599894173-Integrating-with-Third-party-applications-using-SurveySparrow-API)

## Installation Page:

![image-4](https://static.surveysparrow.com/application/marketplace/ssdk-assets/image4.png)

## Installation Page on local app:

While developing the app in local environment you can access the iparams page [here](https://localhost:30001/custom_configs)

![image-7](https://static.surveysparrow.com/application/marketplace/ssdk-assets/image7.png)



