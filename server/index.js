const express = require("express");

const app = express();

app.use(express.json());

massive(process.env.CONNECTION_STRING).then(dbInstance => {
  app.set("db", dbInstance);
  console.log("Database Connected");
});

app.listen(process.env.SERVER_PORT, () =>
  console.log(`Now listening on Port:${process.env.SERVER_PORT}`)
);
