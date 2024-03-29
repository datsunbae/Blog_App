const express = require('express');
const postController = require('../controllers/postController');
const router = express.Router();

router.get("/latest", postController.getPostLatest);
router.get("/", postController.getPosts);
router.get("/:id", postController.getPost);
router.post("/", postController.addPost);
router.delete("/:id", postController.deletePost);
router.put("/:id", postController.updatePost);

module.exports = router;