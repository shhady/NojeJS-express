const https = require("https");

const url = "https://cat-fact.herokuapp.com/facts";
const request = https.request(url, (response) => {
  let data = "";
  response.on("data", (chunck) => {
    data = data + chunck.toString();
  });
  response.on("end", () => {
    const body = JSON.parse(data);
    console.log(body);
  });
});

request.on("error", (error) => {
  console.log("an Error", error);
});

request.end();
