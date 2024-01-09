const express=require("express")
const router=express.Router();
const { createcategory,getallcategory,getbyidcategory,updatecategory,deletecategorybyid} = require("../controllers/CategorieController");
const {auth}=require("../middlewares/Authmiddlewares")
router.post('/',auth,createcategory);
router.get('/',auth, getallcategory);
router.get('/:id',auth, getbyidcategory);
router.put('/:id',updatecategory)
router.delete('/:id' ,auth,deletecategorybyid)



module.exports = router;