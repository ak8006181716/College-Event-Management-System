const router=require('express').Router();
const { addEvents } = require('../Controllers/EventController');

router.post('/addEvents', addEvents);

module.exports=router;