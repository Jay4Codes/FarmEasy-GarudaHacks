var jwt = require("jsonwebtoken")
const JWT_SECRET = "jainamshah";

const fetchFarmer = (req, res, next) => {
  const token = req.header("auth-token");
  if (!token) {
    res.status(401).send({ error: "Error occured" });
  }
  try {
    const data = jwt.verify(token, JWT_SECRET);
    req.farmer = data.farmer;
    // console.log(req.farmer);
    next();
  } catch (error) {
    res.status(401).send({ error: "Error occured" });
  }
};

module.exports = fetchFarmer;