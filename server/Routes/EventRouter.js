const router=require('express').Router();
const { addEvents,showEvents } = require('../Controllers/EventController');

router.post('/addEvents', addEvents);
router.post('/showEvents', showEvents);

module.exports=router;