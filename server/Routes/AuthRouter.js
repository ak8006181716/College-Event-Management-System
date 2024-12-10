const router=require('express').Router();
const { loginAsAttendees, loginAsOrganizers,loginAsFaculty,registerAsFaculty, registerAsAttendees, registerAsOrganizers } = require('../Controllers/AuthController');
const { signupValidation, loginValidation } = require('../Middlewares/AuthValidation');


router.post('/loginAsAttendees', loginValidation, loginAsAttendees);
router.post('/registerAsAttendees', signupValidation, registerAsAttendees);

router.post('/loginAsFaculty',loginValidation,loginAsFaculty);
router.post('/registerAsFaculty',signupValidation,registerAsFaculty);

router.post('/loginAsOrganizers',loginValidation,loginAsOrganizers);
router.post('/registerAsOrganizers',signupValidation,registerAsOrganizers)


// router.post('/feedback',(req,res)=>{
//     res.send("signup Suce");
// });

// router.post('/attendees',(req,res)=>{
//     res.send("signup Suce");
// });

// router.post('/organizers',(req,res)=>{
//     res.send("signup Suce");
// });

module.exports=router;