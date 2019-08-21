function getAlbums(req, res) {
  const dbInstance = req.app.get("db");

  dbInstance
    .getAlbums()
    .then(images => res.status(200).json(images))
    .catch(error => {
      res.status(500).json("Oops, something went wrong");
      console.log(error);
    });
}

function updateAlbums(req, res) {
  const dbInstance = req.app.get("db");
  const {
    landscape,
    sunset,
    moon,
    travel,
    wildlife,
    other,
    landscapeOffset,
    sunsetOffset,
    moonOffset,
    travelOffset,
    wildlifeOffset,
    otherOffset
  } = req.body;

  dbInstance
    .updateAlbums([
      landscape,
      sunset,
      moon,
      travel,
      wildlife,
      other,
      landscapeOffset,
      sunsetOffset,
      moonOffset,
      travelOffset,
      wildlifeOffset,
      otherOffset
    ])
    .then(images => res.status(200).json(images))
    .catch(error => {
      res.status(500).json("Oops, something went wrong");
      console.log(error);
    });
}

function getAlbumByAlbumName(req, res) {
  const dbInstance = req.app.get("db");
  const { album } = req.params;

  dbInstance
    .getAlbumByAlbumName(album)
    .then(images => res.status(200).json(images))
    .catch(error => {
      res.status(500).json("Oops, something went wrong");
      console.log(error);
    });
}

module.exports = {
  getAlbums,
  updateAlbums,
  getAlbumByAlbumName
};
