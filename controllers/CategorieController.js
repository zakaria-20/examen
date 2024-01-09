const Category=require("../models/Categories")
exports.createcategory=async(req,res)=>{
    try{
    const category=await Category.create(req.body)
    res.status(200).send("succsufly create category")
}catch(error){
    console.log("error in create category :",error)
    res.status(500).json({message:"error in server"})
}

}
exports.getallcategory=async(req,res)=>{
    try{
        const category=await Category.find({})
        res.status(200).json(category)
    }catch(error){
        console.log("error in get all category :",error)
        res.status(500).json({message:"error in server"})
    }
}
exports.getbyidcategory=async(req,res)=>{
    try{
        const {id}=req.params
        const category=await Category.findById(id)
        res.status(200).json(category)
    }catch(error){
        console.log("error in get by id category :",error)
        res.status(500).json({message:"error in server"})
    }

}
exports.updatecategory=async(req,res)=>{
    try{
        const {id}=req.params
        const category=await UserModel.findByIdAndUpdate(id,req.body)
        if(!category){
        return res.status(404).json({message:"cannot find any category"})
        }
        res.status(200).json(category)
        }catch(err){
        console.log(err)
        res.status(500).json({message:"Internal server error"})
    }
}
exports.deletecategorybyid=async(req,res)=>{
	try{
	const {id}=req.params
	const category =await UserModel.findByIdAndDelete(id,req.body)
	res.status(200).json(category)
	}catch(err){
	console.log(err)
	res.status(500).json({message:"Internal server error"})
}
}