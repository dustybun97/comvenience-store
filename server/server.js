const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.json("Wellcome to my server");
});

app.listen(5000, () => {
  console.log("Server is starting at port 5000 ;)");
});
