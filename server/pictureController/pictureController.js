function getPhotoInfoByPhotoId(req, res) {
  const dbInstance = req.app.get("db");
  const { id } = req.params;

  dbInstance
    .getPhotoInfoByPhotoId(id)
    .then(info => {
      res.status(200).json(info);
    })
    .catch(e => {
      res.status(500).json("oops, something went wrong");
      console.log(e);
    });
}

function getCommentsByPhotoId(req, res) {
  const dbInstance = req.app.get("db");
  const { id } = req.params;

  dbInstance
    .getCommentsByPhotoId(id)
    .then(comments => {
      res.status(200).json(comments);
    })
    .catch(e => {
      res.status(500).json("oops, something went wrong");
      console.log(e);
    });
}

function postCommentByPhotoId(req, res) {
  const dbInstance = req.app.get("db");
  const { id } = req.params;
  const { comment } = req.body;

  dbInstance
    .postCommentByPhotoId([comment, id])
    .then(() => {
      res.sendStatus(200);
    })
    .catch(e => {
      res.status(500).json("oops, something went wrong");
      console.log(e);
    });
}

function deleteCommentByCommentId(req, res) {
  const dbInstance = req.app.get("db");
  const { id } = req.params;
  // console.log(req.body);

  dbInstance
    .deleteCommentByCommentId(id)
    .then(() => {
      res.sendStatus(200);
    })
    .catch(e => {
      res.status(500).json("oops, something went wrong");
      console.log(e);
    });
}

function updateDescriptionByPhotoId(req, res) {
  const dbInstance = req.app.get("db");
  const { id } = req.params;
  const { description } = req.body;

  dbInstance
    .updateDescriptionByPhotoId([description, id])
    .then(() => {
      res.sendStatus(200);
    })
    .catch(e => {
      res.status(500).json("oops, something went wrong");
      console.log(e);
    });
}

module.exports = {
  getPhotoInfoByPhotoId,
  getCommentsByPhotoId,
  postCommentByPhotoId,
  deleteCommentByCommentId,
  updateDescriptionByPhotoId
};
