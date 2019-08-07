const express = require("express");
const massive = require("massive");
const albumController = require("./albumController/albumController");
require("dotenv").config();

const app = express();

app.use(express.json());

massive(process.env.CONNECTION_STRING).then(dbInstance => {
  app.set("db", dbInstance);
  console.log("Database Connected :)");
});

app.get("/album/landscape", albumController.getLandscapeAlbum);
// app.get("/album/landscape", () => {
//   console.log("hit");
// });

app.listen(process.env.SERVER_PORT, () =>
  console.log(`Now listening on Port:${process.env.SERVER_PORT}`)
);
