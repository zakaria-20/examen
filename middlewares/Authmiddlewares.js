const jwt = require("jsonwebtoken");
const User = require("../models/Users");

exports.auth=async(req,res,next)=>{
  //console.log(req.headers)
//check if token exist ,if exist get
try{
  let token;
  if(req.headers && req.headers.authorization){
      //console.log(req.headers)
      token=req.headers.authorization?.split(' ')[1];
  }
  if(!token){
    return res.status(401)
  }
//verify token(no change happens,exprid token)
  const decoded=jwt.verify(token,process.env.JWT_SECRET)
  console.log('decoded',decoded)

  req.user = decoded
  //req.user=decoded._id
  next()
}catch(error){
  res.status(500).json(error)
}
}
exports.iseditor = (req, res, next) => {
    if (req.user.role === "editor") {
      next(); 
    } else {
      //isAdmin();
      res.status(403).json({ message: 'Access forbidden. Insufficient role.' });
    }
  };
  exports.isAdmin = (req, res, next) => {
    console.log(req.user)
    if (req.user.role === "admin") {
      next(); 
    } else {
      res.status(403).json({ message: 'Access forbidden. Insufficient role.' });
    }
  };
  
