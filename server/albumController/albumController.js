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
function getMoonAlbum(req, res) {
  const dbInstance = req.app.get("db");

  dbInstance
    .getMoonAlbum()
    .then(images => res.status(200).json(images))
    .catch(error => {
      res.status(500).json("Oops, something went wrong");
      console.log(error);
    });
}
function getTravelAlbum(req, res) {
  const dbInstance = req.app.get("db");

  dbInstance
    .getTravelAlbum()
    .then(images => res.status(200).json(images))
    .catch(error => {
      res.status(500).json("Oops, something went wrong");
      console.log(error);
    });
}
function getSunsetAlbum(req, res) {
  const dbInstance = req.app.get("db");

  dbInstance
    .getSunsetAlbum()
    .then(images => res.status(200).json(images))
    .catch(error => {
      res.status(500).json("Oops, something went wrong");
      console.log(error);
    });
}
function getWildlifeAlbum(req, res) {
  const dbInstance = req.app.get("db");

  dbInstance
    .getWildlifeAlbum()
    .then(images => res.status(200).json(images))
    .catch(error => {
      res.status(500).json("Oops, something went wrong");
      console.log(error);
    });
}
function getOtherAlbum(req, res) {
  const dbInstance = req.app.get("db");

  dbInstance
    .getOtherAlbum()
    .then(images => res.status(200).json(images))
    .catch(error => {
      res.status(500).json("Oops, something went wrong");
      console.log(error);
    });
}
module.exports = {
  getLandscapeAlbum,
  getMoonAlbum,
  getTravelAlbum,
  getSunsetAlbum,
  getWildlifeAlbum,
  getOtherAlbum
};
