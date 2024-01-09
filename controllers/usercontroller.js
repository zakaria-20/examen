const UserModel=require("../models/Users")
exports.createUser=async(req,res)=>{

	try{
	const newUser=await UserModel.create(req,body)
	res.status(200).json(newUser)
	}catch(err){
		console.log(err)
		res.status(500).json({err:"Internal server error"})
	}
}

exports.getallUsers=async(req,res)=>{
	try{
	const users=await UserModel.find({})
	res.status(200).json(users)
	}catch(err){
		console.log(err)
		res.status(500).json({err:"Internal server error"})
	}
}

exports.getbyidusers=async(req,res)=>{
	try{
	const {id}=req.params
	const user=await UserModel.findById(id)
	res.status(200).json(user)
	}catch(err){
		console.log(err)
		res.status(500).json({err:"Internal server error"})
	}
}

exports.updateuserbyid=async(req,res)=>{
	try{
	const {id}=req.params
	const user=await UserModel.findByIdAndUpdate(id,req.body)
	if(!user){
	return res.status(404).json({message:"cannot find any product"})
	}
	res.status(200).json(user)
	}catch(err){
	console.log(err)
	res.status(500).json({err:"Internal server error"})
}
}
exports.manageUserPermissions = async (req, res) => {
    try {
        const { role } = req.body;

        if (!['admin', 'editor', 'guest'].includes(role)) {
            return res.status(400).json({ error: 'Invalid role' });
        }

        const updatedUser = await User.findByIdAndUpdate(req.params.id, { role }, { new: true });
        res.json(updatedUser);
    } catch (error) {
        res.status(404).json({ error: 'User not found' });
    }
};

exports.deleteuserbyid=async(req,res)=>{
	try{
	const {id}=req.params
	const user =await UserModel.findByIdAndDelete(id,req.body)
	res.status(200).json(user)
	}catch(err){
	console.log(err)
	res.status(500).json({message:"Internal server error"})
}
}