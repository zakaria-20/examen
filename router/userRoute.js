const express=require("express")
const router=express.Router();
const { createUser,getallUsers,getbyidusers,updateuserbyid,deleteuserbyid,manageUserPermissions} = require("../controllers/usercontroller");
const {auth}=require("../middlewares/Authmiddlewares")

router.post('/',auth,createUser);
router.get('/',auth, getallUsers);
router.get('/:id',auth, getbyidusers);
router.put('/:id',auth,updateuserbyid)
router.delete('/:id',auth ,deleteuserbyid)
router.patch('/:id/permissions',auth,manageUserPermissions);



module.exports = router;