const Comment=require("../models/Comments")
exports.createcomment=async(req,res)=>{
	try{
	const newComment=await Comment.create(req,body)
	res.status(200).json(newComment)
	}catch(err){
		console.log(err)
		res.status(500).json({err:"Internal server error"})
	}
}
//get all
exports.getallcomment=async(req,res)=>{
	try{
	const comment=await Comment.find({})
	res.status(200).json(comment)
	}catch(err){
		console.log(err)
		res.status(500).json({err:"Internal server error"})
	}
}
//get by id
exports.getbyidcomment=async(req,res)=>{
	try{
	const {id}=req.params
	const comment=await Comment.findById(id)
	res.status(200).json(comment)
	}catch(err){
		console.log(err)
		res.status(500).json({err:"Internal server error"})
	}
}
//update by id
exports.updatecommentbyid=async(req,res)=>{
	try{
	const {id}=req.params
	const comment=await Comment.findByIdAndUpdate(id,req.body)
	if(!comment){
	return res.status(404).json({message:"cannot find any product"})
	}
	res.status(200).json(user)
	}catch(err){
	console.log(err)
	res.status(500).json({message:"Internal server error"})
}
}

exports.deletecommentbyid=async(req,res)=>{
	try{
	const {id}=req.params
	const comment =await Comment.findByIdAndDelete(id,req.body)
	res.status(200).json(comment)
	}catch(err){
	console.log(err)
	res.status(500).json({message:"Internal server error"})
}
}