const router = require('express').Router();
const { gptReply, getConversation } = require('./controllers/messagesController')

router.post('/messages', gptReply);
router.get('/messages/:id', getConversation)

module.exports = router;