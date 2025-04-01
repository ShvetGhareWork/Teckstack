const jwt = require("jsonwebtoken");

const AuthUser = async (req, res, next) => {
  try {
    // Get the Authorization header
    const authHeader = req.header("Authorization");
    if (!authHeader) {
      return res
        .status(401)
        .json({ success: false, message: "Access denied. No token provided." });
    }

    // Extract the token from the Authorization header
    const token = authHeader.replace("Bearer ", "").trim();
    if (!token) {
      return res
        .status(401)
        .json({
          success: false,
          message: "Access denied. Invalid token format.",
        });
    }

    // Verify the token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // Attach the decoded user data to the request object
    next(); // Proceed to the next middleware or route handler
  } catch (error) {
    console.error("Error in AuthUser middleware:", error.message);
    res.status(400).json({ success: false, message: "Invalid token." });
  }
};

module.exports = AuthUser;
