let express = require('express');
let router = express.Router();
const {signout, signup, signin, isSignedIn } = require('../controllers/auth');
const {check}=require("express-validator");

router.post("/signup",[
    check("name","name should be atleast 3 character").isLength({min:3}),
    check("email","email required").isEmail(),
    check("password","password should be atleast 3 character").isLength({min:3})
],
signup);

router.post("/signin",[
    check("email","email required").isEmail(),
    check("password","password field is require").isLength({min:3})
],
signin);

router.get("/signout",signout);



module.exports=router;