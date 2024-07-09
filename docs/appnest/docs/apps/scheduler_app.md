---
layout: default
title: Scheduler App
parent: Building Apps
nav_order: 5
---

# Scheduler App

As the name suggests, scheduler application provides the functionality to schedule tasks. For instance, if you want to schedule the task - **creating a specific survey at a specific time every week**, that's where the SSDK CLI's scheduler feature comes in.

Scheduler Application requrie similar setup to Serverless Applications. And you can combine that with the React Application. 

## How does it work?

### Step 1

- Run the command `ssdk create` to initialize the application.
- Choose a product, either SurveySparrow or ThriveSparrow.
- Select **serverless_app** which will generate the boilerplate files for the serverless application.

### Step 2

- Create tasks to schedule within the event handlers or within the SMI functions. 
- Please refer to the [scheduler section](../scheduler/index.html) to learn more

