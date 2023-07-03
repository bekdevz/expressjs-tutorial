const adminMiddleware = (req, res, next) => {
    // Check if the user is an admin (you can modify this logic based on your authentication mechanism)
    const isAdmin = true; // Assuming the user is an admin
    if (!isAdmin) {
      return res.status(403).json({ error: 'Unauthorized access' });
    }

    // /!req.session || !req.session.user || 
    // if (req.session.user.role !== 'admin') {
    //     return res.status(403).json({ error: 'Unauthorized access' });
    //   }

    // If the user is an admin, proceed to the next middleware or route handler
    next();
  };
module.exports = adminMiddleware;
  