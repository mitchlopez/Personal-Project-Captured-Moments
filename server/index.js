const express = require("express");
const massive = require("massive");
const albumController = require("./albumController/albumController");
const pictureController = require("./pictureController/pictureController");
const session = require("express-session");
const path = require("path");
const nodeMailerController = require("./nodeMailerController/nodeMailer");
require("dotenv").config();

const app = express();

app.use(express.static(`${__dirname}/../build`));

app.use(express.json());
app.use(
  session({
    resave: false,
    saveUninitialized: true,
    secret: process.env.SESSION_SECRET,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 //one day
    }
  })
);

massive(process.env.CONNECTION_STRING).then(dbInstance => {
  app.set("db", dbInstance);
  console.log("Database Connected :)");
});

app.get("/album/:album", albumController.getAlbumByAlbumName);
app.get("/albums", albumController.getAlbums);
app.put("/albums", albumController.updateAlbums);

app.get("/featured", pictureController.getFeatured);
app.put("/featured", pictureController.updateFeatured);
app.post("/auth", pictureController.checkLogin);
app.get("/auth", (req, res) => {
  // console.log("hit");
  if (req.session.user) {
    res.status(200).json(req.session.user);
  } else {
    res.status(200).json({
      isAdmin: false
    });
  }
});
app.post("/auth/signout", pictureController.logout);

app.get("/photo/comments/:id", pictureController.getCommentsByPhotoId);
app.get("/photo/:id", pictureController.getPhotoInfoByPhotoId);
app.post("/photo/comment/:id", pictureController.postCommentByPhotoId);
app.delete("/photo/comment/:id", pictureController.deleteCommentByCommentId);
app.put("/photo/description/:id", pictureController.updateDescriptionByPhotoId);
app.post("/photo", pictureController.addPicture);
app.delete("/photo/:id", pictureController.deletePicture);
app.post("/photo/contact", nodeMailerController.sendEmail);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../build/index.html"));
});

app.listen(process.env.SERVER_PORT, () =>
  console.log(`Now listening on Port:${process.env.SERVER_PORT}`)
);
