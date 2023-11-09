const router = require('express').Router();
const { gptReply } = require('./controllers/messagesController')

router.post('/messages', gptReply);

module.exports = router;