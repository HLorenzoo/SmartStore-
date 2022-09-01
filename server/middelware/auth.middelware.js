require("dotenv").config();
const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const token = req.cookies.token;
  console.log(token);
  const payload = jwt.verify(token, process.env.SECRET);
  console.log(payload);
  !payload && res.status(401).json({ status: "Fallo descripcion del token" });
  req.user = payload;
  res.send(req.user);
};

const verifyTokenAdmin = (req, res, next) => {
  const token = req.cookies.token;
  const payload = jwt.verify(token, process.env.SECRET);
  req.user = payload;
  if (req.user.isAdmin) {
    next();
  }
  res.sendStatus(401);
};

module.exports = { verifyToken, verifyTokenAdmin };
