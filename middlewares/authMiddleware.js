const JWT = require("jsonwebtoken");

module.exports = async (req, res, next) => {
  const authHeader = req.header("Authorization");
  if (!authHeader || !authHeader.startsWith("Bearer ")) return res.status(401).json({msg: "Access Denied. No auth token provided")

  const token = authHeader.split(' ')[1];
  if (!token) return res.status(401).json({msg: "Access Denied. No auth token provided"});

  try{
    const decoded = JWT.verify(token, process.env.JWY_SECRET);
    req.body.id = decode.id;
    next()
  }catch(err){
    console.log(err.stack)
    res.status(400).json({msg: "Invalid Token"});
  }
}
