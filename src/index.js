const express = require("express");

const app = express();

const { PORT } = require("./config/serverConfig");
app.listen(PORT, () => {
  console.log(`Server Started : ${PORT}`);
});
