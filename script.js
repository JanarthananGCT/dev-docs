const fs = require("fs").promises; // Use promises version of fs
const fs2 = require("fs");
const path = require("path");
const axios = require("axios");
const yaml = require("js-yaml");

const getOpenAPI = async () => {
  try {
    const { data } = await axios.get(
      "https://api.surveysparrow.com/swagger.json"
    );
    //remove introduction key from openapi object
    delete data.info;
    const tags = [];

    Object.keys(data.paths).forEach((path) => {
      const pathItem = data.paths[path];
      Object.keys(pathItem).forEach((method) => {
        if (pathItem[method].tags) {
          const tag = pathItem[method].tags[0];
          if (!tags.includes(tag)) {
            tags.push(tag);
          }
        }
      });
    });

    data.tags = tags.map((tag) => ({
      name: tag,
      "x-displayName": tag
        .replace(/_/g, " ") // Replace underscores with spaces
        .replace(/[^a-zA-Z0-9 ]/g, "") // Keep alphanumeric characters and spaces
        .split(" ") // Split into words
        .map(
          (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
        ) // Capitalize first letter of each word
        .join(" "), // Join words back into a string
    }));

    data.securityDefinitions = {
      API_KEY: {
        type: "apiKey",
        name: "Authorization",
        in: "header",
      },
    };

    data.servers = [
      { url: "https://app.surveysparrow.com" },
      { url: "https://eu-ff-app.surveysparrow.com" },
      { url: "http://ap-mi-app.surveysparrow.com" },
      { url: "http://me-uae-app.surveysparrow.com" },
      { url: "http://eu-ln-app.surveysparrow.com" },
      { url: "http://ap-sy-app.surveysparrow.com" },
      { url: "http://ca-app.surveysparrow.com" },
    ];

    delete data.host;
    delete data.basePath;

    const v1Data = { ...data, paths: {} };
    const v2Data = { ...data, paths: {} };
    const v3Data = { ...data, paths: {} };

    for (const [path, pathData] of Object.entries(data.paths)) {
      //add security Bearer token to all paths
      for (const method of Object.values(pathData)) {
        method.security = [{ API_KEY: [] }];
      }
      for (const method of Object.values(pathData)) {
        method.tags = method.tags.filter(
          (tag) => !["v1", "v2", "v3"].includes(tag)
        );
      }

      if (path.includes("/v1/")) {
        v1Data.paths[path] = pathData;
      } else if (path.includes("/v2/")) {
        v2Data.paths[path] = pathData;
      } else if (path.includes("/v3/")) {
        v3Data.paths[path] = pathData;
      }
    }

    async function writeDataToFile(version, data) {
      //if the directory does not exist, create it
      if (!fs2.existsSync(path.join(__dirname, "yaml"))) {
        fs2.mkdirSync(path.join(__dirname, "yaml"));
      }
      await fs.writeFile(
        path.join(__dirname, "yaml", `${version}.yaml`),
        yaml.dump(data)
      );
    }

    await writeDataToFile("v1", v1Data);
    await writeDataToFile("v2", v2Data);
    await writeDataToFile("v3", v3Data);
  } catch (error) {
    console.error(`Error in generating YAML files: ${error}`);
  }
};

getOpenAPI();
