const router=express.Router();
const { createcomment,getallcomment,getbyidcomment,updatecommentbyid,deletecommentbyid} = require("../controllers/commentscontroller");
const {auth}=require("../middlewares/Authmiddlewares")
router.post('/',auth,createcomment);
router.get('/',auth, getallcomment);
router.get('/:id',auth, getbyidcomment);
router.put('/:id',auth,updatecommentbyid)
router.delete('/:id' ,auth,deletecommentbyid)



module.exports = router;