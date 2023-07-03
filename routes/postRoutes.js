const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');
const adminMiddleware = require('../middleware/adminMiddleware');

// Admin-only route, accessible to authenticated admins
router.get('/posts', adminMiddleware, postController.getAllPosts);

// router.get('/posts', postController.getAllPosts);
router.post('/posts', postController.createPost);

module.exports = router;
