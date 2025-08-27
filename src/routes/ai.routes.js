const express=require('express');
const aiController=require("../controllers/ai.controller")
const router=express.Router();

router.post("/get-review", aiController.getReview)
    //konsa controller hoga sirf vahi aayega, controller content present in controller file... 
    
module.exports= router;