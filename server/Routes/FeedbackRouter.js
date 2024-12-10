const router=require('express').Router();
const { feedback } = require('../Controllers/feedbackController');

router.post('/feedback', feedback);

module.exports=router;