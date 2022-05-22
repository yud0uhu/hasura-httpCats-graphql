const axios = require("axios");
const { Client } = require("graphqurl");
const statuses = require("./lib/statuses.js");

const client = new Client({
  endpoint: "http://localhost:8080/v1/graphql",
  headers: {
    "Content-Type": "application/json",
    "X-Hasura-Access-Key": "mysecretkey",
  },
});
statuses().forEach(async (value) => {
  await axios
    .get(`https://http.cat/${value.code}.jpg`, {})
    .then((result) => {
      const createStatus = `mutation insert_status (
            $status_code: Int,
            $status_image: String
            $status_message: String
        ) {
            insert_status ( objects: [
                    {
                        status_code: $status_code,
                        status_image: $status_image,
                        status_message: $status_message,
                    }
                ]) {
                affected_rows
                    returning {
                        status_code
                        status_image
                        status_message
                    }
                }
            }`;

      const statusDatails = {
        status_code: value.code,
        status_image: `https://http.cat/${value.code}.jpg`,
        status_message: value.message,
      };

      client.query(createStatus, statusDatails).catch((error) => {
        console.log(error);
      });
    })
    .catch((code) => {
      console.error("error:" + code);
    });
});
