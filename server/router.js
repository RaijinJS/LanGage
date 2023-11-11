const router = require('express').Router();
const { gptReply, getConversation, postNewMessage } = require('./controllers/messagesController')

router.post('/messages/gpt', gptReply);
router.post('/messages/user', postNewMessage);
router.get('/messages/:id', getConversation)

module.exports = router;