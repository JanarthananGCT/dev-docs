---
layout: default
title: Data Storage
nav_order: 7
---

# Data Storage

Some apps need to store and retrieve data. For example apps like Power BI needs to store mapping details of each user. To achieve this we have key - value data storage where the data of the users are stored as a key-value pair and can also be retrieved. 

For this tutorial let say we have an object:

```js
const newData = {
    id: 123,
    name: "john doe"
  }
```

- ## Store

set can be used to set a key-value pair for every installed user for the app.

**app.js:**

  ```js
  await client.db.set("data", newData);
  ```

**server.js:**

  ```js
  await $Storage.set("data", newData);
  ```

- ## Retrieve:

  get can be used to retrieve a value for that particular installed user. It returns a stringified object which can be then converted to json by `JSON.parse(result)`.
  
**app.js:**

  ```js
  const result = JSON.parse(await window.client.db.get("data"));
  ```

**server.js:**

```js
const result = await $Storage.get("data");
```

## Handling Errors

- **500 error** is thrown when you try to fetch a key that is not present in the database.

- Data storage methods directly return an `Error` object if any error occurs. So, it's not required to handle the error in the try-catch block.