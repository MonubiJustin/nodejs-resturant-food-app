const JWT = require("jsonwebtoken");

module.exports = async (req, res, next) => {
  // get token
  const token = req.headers["authorization"].split(" ")[1];
  if (!token) return res.status(401).send({success: false, message: "Access denied. No token provided"});

  try{
    const decoded = JWT.verify(token, process.env.JWT_SECRET);
    req.user.id = decoded.id
    next()
  }catch(err){
    console.log(err)
    res.status(400).send({ success: false, message: "Invalid Token"});
  }
}
