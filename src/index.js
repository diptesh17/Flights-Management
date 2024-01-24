const express = require("express");
const bodyParser = require("body-parser");
const { PORT } = require("./config/serverConfig");

const ApiRoutes = require("./routes/index");
const db = require("./models/index");

const serverSetup = async () => {
  const app = express();

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.use("/api", ApiRoutes);
  app.listen(PORT, async () => {
    console.log(`Server Started : ${PORT}`);

    // const repo = new CityRepository();
    // repo.createCity({ name: "Pune" });

    // Till here the routes setup is done
    // if (process.env.SYNC_DB) {
    //   db.sequelize.sync({ alter: true });
    // }
  });
};

serverSetup();
