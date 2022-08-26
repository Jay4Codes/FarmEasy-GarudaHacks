var jwt = require("jsonwebtoken")
const JWT_SECRET = "jainamshah";

const fetchBuyer = (req, res, next) => {
  const token = req.header("auth-token");
  if (!token) {
    res.status(401).send({ error: "Error occured" });
  }
  try {
    const data = jwt.verify(token, JWT_SECRET);
    req.buyers = data.buyers;
    next();
  } catch (error) {
    res.status(401).send({ error: "Error occured" });
  }
};

module.exports = fetchBuyer;