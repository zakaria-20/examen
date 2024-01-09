const express=require("express")
const router=express.Router();
const {createPost,getallPosts,getbyidpost,updatepostbyid,deletepostbyid} = require("../controllers/PostController");
const {auth}=require("../middlewares/Authmiddlewares")
router.post('/',auth,createPost);
router.get('/',auth, getallPosts);
router.get('/:id',auth, getbyidpost);
router.put('/:id',auth,updatepostbyid)
router.delete('/:id',auth ,auth,deletepostbyid)



module.exports = router;