const express = require("express");
const massive = require("massive");
const albumController = require("./albumController/albumController");
const pictureController = require("./pictureController/pictureController");
require("dotenv").config();

const app = express();

app.use(express.json());

massive(process.env.CONNECTION_STRING).then(dbInstance => {
  app.set("db", dbInstance);
  console.log("Database Connected :)");
});

app.get("/album/landscape", albumController.getLandscapeAlbum);
app.get("/album/moon", albumController.getMoonAlbum);
app.get("/album/sunset", albumController.getSunsetAlbum);
app.get("/album/travel", albumController.getTravelAlbum);
app.get("/album/wildlife", albumController.getWildlifeAlbum);
app.get("/album/other", albumController.getOtherAlbum);
app.get("/albums", albumController.getAlbums);
app.put("/albums", albumController.updateAlbums);

app.get("/featured", pictureController.getFeatured);
app.put("/featured", pictureController.updateFeatured);

app.get("/photo/comments/:id", pictureController.getCommentsByPhotoId);
app.get("/photo/:id", pictureController.getPhotoInfoByPhotoId);
app.post("/photo/comment/:id", pictureController.postCommentByPhotoId);
app.delete("/photo/comment/:id", pictureController.deleteCommentByCommentId);
app.put("/photo/description/:id", pictureController.updateDescriptionByPhotoId);
app.post("/photo", pictureController.addPicture);
app.delete("/photo/:id", pictureController.deletePicture);

app.listen(process.env.SERVER_PORT, () =>
  console.log(`Now listening on Port:${process.env.SERVER_PORT}`)
);
