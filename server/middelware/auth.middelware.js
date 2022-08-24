require("dotenv").config();
const verifyToken = (req, res, next) => {
  const token = req.cookies.token;

  const payload = jwt.verify(token, process.env.SECRET);
  req.user = payload;
  console.log(req.user, token);
  next();
};

module.exports = { verifyToken };
