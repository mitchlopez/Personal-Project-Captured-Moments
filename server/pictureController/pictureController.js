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

function getFeatured(req, res) {
  const dbInstance = req.app.get("db");

  dbInstance
    .getFeatured()
    .then(info => {
      res.status(200).json(info);
    })
    .catch(e => {
      res.status(500).json("oops, something went wrong");
      console.log(e);
    });
}

function updateFeatured(req, res) {
  const dbInstance = req.app.get("db");
  const { first, second, third, first_id, second_id, third_id } = req.body;

  dbInstance
    .updateFeatured([first, second, third, first_id, second_id, third_id])
    .then(() => {
      res.sendStatus(200);
    })
    .catch(e => {
      res.status(500).json("oops, something went wrong");
      console.log(e);
    });
}

function addPicture(req, res) {
  const dbInstance = req.app.get("db");
  const { url, album_id, description } = req.body;

  dbInstance
    .addPicture([url, album_id, description])
    .then(() => {
      res.sendStatus(200);
    })
    .catch(e => {
      res.status(500).json("oops, something went wrong");
      console.log(e);
    });
}

function deletePicture(req, res) {
  const dbInstance = req.app.get("db");
  const { id } = req.params;

  dbInstance
    .deletePhotoByPhotoId(id)
    .then(() => {
      res.sendStatus(200);
    })
    .catch(e => {
      res.status(500).json("oops, something went wrong");
      console.log(e);
    });
}

function checkLogin(req, res) {
  const dbInstance = req.app.get("db");
  const { username, password } = req.body;

  dbInstance
    .checkLogin([username, password])
    .then(result => {
      if (result[0].count > 0) {
        req.session.user = {
          isAdmin: true
        };
      }
      res.status(200).json(req.session.user);
    })
    .catch(e => {
      res.status(500).json("oops, something went wrong");
      console.log(e);
    });
}

function logout(req, res) {
  // console.log("hit");
  req.session.destroy();
  res.status(200).json(res.session);
}

module.exports = {
  getPhotoInfoByPhotoId,
  getCommentsByPhotoId,
  postCommentByPhotoId,
  deleteCommentByCommentId,
  updateDescriptionByPhotoId,
  getFeatured,
  updateFeatured,
  addPicture,
  deletePicture,
  checkLogin,
  logout
};
