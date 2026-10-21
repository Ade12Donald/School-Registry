import jwt from "jsonwebtoken";

export const verifyToken = (tokenName) => {
  return (req, res, next) => {
    const token = req.cookies[tokenName];
    if (!token) {
      return res.status(401).json({
        ERROR: "Not logged In",
      });
    }

    try {
      req.user = jwt.verify(token, process.env.JWT_SECRET);
      console.log(req.user);
      next();
    } catch (error) {
      console.error(error.name, "-", error.message);
      return res.status(401).json({
        ERROR: "Invalid or expired TOKEN",
      });
    }
  };
};
