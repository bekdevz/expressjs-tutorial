const Post = require('../models/post');

class PostController {
  async getAllPosts(req, res) {
    try {
      const posts = await Post.findAll();
      res.json(posts);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch posts' });
    }
  }

  async createPost(req, res) {
    const { title, body } = req.body;
    try {
      const post = await Post.create({ title, body });
      res.json({ message: 'Post created successfully', post });
    } catch (error) {
      res.status(500).json({ error: 'Failed to create post' });
    }
  }
}

module.exports = new PostController();
