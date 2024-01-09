const express=require("express")
const router=express.Router();
const { RegisterUse,LoginUser} = require("../controllers/authcontrollers");

router.post("/sign-up",RegisterUse)
router.post("/sign-in",LoginUser)



module.exports = router;


