function getLandscapeAlbum(req, res) {
  const dbInstance = req.app.get("db");

  dbInstance
    .getLandscapeAlbum()
    .then(images => res.status(200).json(images))
    .catch(error => {
      res.status(500).json("Oops, something went wrong");
      console.log(error);
    });
}

module.exports = {
  getLandscapeAlbum
};
