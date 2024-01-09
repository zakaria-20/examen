const Post=require("../models/Posts")



exports.createPost=async(req,res)=>{

	try{
	const newUser=await Post.create(req,body)
	res.status(200).json(newUser)
	}catch(err){
		console.log(err)
		res.status(500).json({err:"Internal server error"})
	}
}

exports.getallPosts=async(req,res)=>{
	try{
	const users=await Post.find({})
	res.status(200).json(users)
	}catch(err){
		console.log(err)
		res.status(500).json({err:"Internal server error"})
	}
}

exports.getbyidpost=async(req,res)=>{
	try{
	const {id}=req.params
	const user=await Post.findById(id)
	res.status(200).json(user)
	}catch(err){
		console.log(err)
		res.status(500).json({err:"Internal server error"})
	}
}

exports.updatepostbyid=async(req,res)=>{
	try{
	const {id}=req.params
	const user=await Post.findByIdAndUpdate(id,req.body)
	if(!user){
	return res.status(404).json({message:"cannot find any product"})
	}
	res.status(200).json(user)
	}catch(err){
	console.log(err)
	res.status(500).json({err:"Internal server error"})
}
}

exports.deletepostbyid=async(req,res)=>{
	try{
	const {id}=req.params
	const user =await Post.findByIdAndDelete(id,req.body)
	res.status(200).json(user)
	}catch(err){
	console.log(err)
	res.status(500).json({message:"Internal server error"})
}
}