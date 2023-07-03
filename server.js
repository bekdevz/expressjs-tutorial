const express = require('express');
const app = express();
const PORT = 3000;
const postRoutes = require('./routes/postRoutes');
const sequelize = require('./db');

// Import the Post model
require('./models/post');

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use('/api', postRoutes);

// Sync the database and start the server
sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
