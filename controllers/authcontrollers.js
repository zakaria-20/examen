const bcrypt=require("bcrypt")
const jwt=require("jwt")
const User =require("../models/Users")
exports.RegisterUser=async(req,res)=>{
    function getrole() {
        if(email===process.env.ADMIN_EMAIL){
            return "admin"
        }else if (email===process.env.Editor_EMAIL){
            return "editor"
        }else {
            return "user"
        }
    }
    try{
    const {name,email,password}=req.body
    const hashpassword=await bcrypt.hash(password,10)
    const RegisterUser=await User.create({
        name:name,
        email:email,
        password:hashpassword,
        role:getrole()
});
    res.status(200).send("succsufly registerUser")
}catch(error){
    console.log("error in register user:",error)
    res.satust(500).json({message:"error in server"})
}
}
exports.LoginUser=async(req,res)=>{
    try{
        const {email,password}=req.body
        const user= await User.findOne({email})
        if(!user){
            return res.status(401).send("email not found")
        }
        const passwordvalid=await bcrypt.compare(password,user.password)
        if(!passwordvalid){
            return res.status(401).send("password not found")
        }
        const token=jwt.sing({id:user._id,role:user.role},process.env.JWT_SECRET,{
            expiresIn: '24h',
        })
        res.status(200).send({
            name: user.name,
            email: user.email,
            role:user.role,
            token: token,
        })
        return
    }catch(error){
        console.log("error in loggin user:",error)
        res.status(500).json({message:"error in server"})
    }
}