const express = require("express");
const bodyParser = require("body-parser");
const CityRepository = require("./repository/city-repository");
const { PORT } = require("./config/serverConfig");

const ApiRoutes = require("./routes/index");
const serverSetup = async () => {
  const app = express();

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.use("/api", ApiRoutes);
  app.listen(PORT, () => {
    console.log(`Server Started : ${PORT}`);

    // const repo = new CityRepository();
    // repo.createCity({ name: "Pune" });
  });
};

serverSetup();
