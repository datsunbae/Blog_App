const db = require("../db");

const postController = {
  getPosts: (req, res) => {
    const query = req.query.cat
      ? "SELECT * FROM posts WHERE cat=?"
      : "SELECT * FROM posts";

    db.query(query, [req.query.cat], (err, results) => {
      if (err) {
        return res.status(500).json(err);
      }

      return res.status(200).json(results);
    });
  },
  getPost: (req, res) => {
  
    const query =
      "SELECT p.id, `username`, `title`, `desc`, p.img, u.img AS userImg, `cat`,`date`, content FROM user u JOIN posts p ON u.id = p.uid WHERE p.id = ? ";
    db.query(query, [req.params.id], (err, results) => {
      if (err) {
        return res.status(500).json(err);
      }

      return res.status(200).json(results[0]);
    });
  },
  addPost: (req, res) => {
    res.json("post controller");
  },
  updatePost: (req, res) => {
    res.json("post controller");
  },
  deletePost: (req, res) => {
    res.json("post controller");
  },
};

module.exports = postController;
