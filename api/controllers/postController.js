const db = require("../db");
const jwt = require("jsonwebtoken");

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

      if(!results){
        return res.status(404).json("Post is not found");
      }

      return res.status(200).json(results[0]);
    });
  },
  getPostLatest: (req, res) => {

    const query = "SELECT p.id, `username`, `title`, `desc`, p.img, `date` FROM posts p JOIN user u ON p.uid = u.id ORDER BY p.id DESC LIMIT 1";

    db.query(query, (err, results) => {
      if(err){
        return res.status(500).json(err);
      }
      return res.status(200).json(results[0]);
    })
  },
  addPost: (req, res) => {
    res.json("post controller");
  },
  updatePost: (req, res) => {
    res.json("post controller");
  },
  deletePost: (req, res) => {
    const token = req.cookies.access_token;
    if(!token){
      return res.status(401).json("You're not authenticated");
    }

    jwt.verify(token, process.env.JWT_ACCESS_TOKEN, (err, userInfo) => {
      if(err){
        return res.status(403).json("Token is not valid!");
      }
      console.log(userInfo);
      const postId = req.params.id;
      const query = "DELETE FROM posts WHERE `id` = ? AND `uid` = ?";
      db.query(query, [postId, userInfo.id], (err, results) => {
        if(err){
          return res.status(500).json(err);
        }
        return res.status(200).json("Post has been deleted");
      });
    })
  },
};

module.exports = postController;
