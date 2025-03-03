---
layout: default
title: SMI App
parent: Building Apps
nav_order: 4
---

# Server Method Invocation(SMI) App

**Note:** Please read through the [Serverless App](../apps/serverless_app.md) and [React App](../apps/react_app.md) before learning about Server Method Invocation.

Server Method Invocation is used to invoke a server-side component from the client-side. To elaborate, let's say there is a function created in the serverless application and you want to call such functions from your React application. That's where you need to employ Server Method Invocation.

This approach was introduced to interact between client-side and server-side. The client-side is the React application and the server-side is the serverless application.

## How does it work?

### Step 1

- Run the command `ssdk create` to initialize the application.
- Choose a product, either SurveySparrow or ThriveSparrow.
- Select **react_app** which will generate the boilerplate files for react application.

### Step 2

- Create a folder named **server** within the root directory. Within the server folder, create a file name **server.js**.

- If the app requires handling events, write your handler functions within server.js. In the manifest.json, specify the events along with the name of the respective handler functions.

### Step 3

- To create an SMI function within the server.js file of your serverless application, please refer to the sample code below.
    - The SMI function must return some data in the object format.

    ```js
    exports = {

        // handling the onSubmissionComplete event
        handleSubmission: function (args){
            console.log(args)
        } 

        // creating an SMI Function
        surveyConverter: function (args){
            return {
                data:"SMI call successfull"
            }
        }
    }
    ```

    
- To configure the SMI functions within the manifest.json file, 

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

                // Events
                "events": {
                        "onSubmissionComplete": {
                        "handler": "handleSubmission"
                    }
                },

                // SMI Functions
                "functions":{
                    "surveyConverter":{
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

- Now, to invoke or call the SMI function from the React application, refer to the sample code below.

    ```js
    const result = await window.client.request.invoke("surveyConverter", {data:"sample_data"});
    ```

    - The invoke function takes in two arguments. The first argument is the SMI function name and the second argument is the data to be sent to the SMI function.

    - In the SMI function, the data will be present in the args paramater.

- For more information on SMI functionalities, refer to the [SMI documentation](../serverless/#server-method-invocation).
