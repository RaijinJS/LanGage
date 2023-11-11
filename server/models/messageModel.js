const LanGageMessage = require('./messageSchema')

async function postMessage (message) {
  try {
    const newMessageWithId = await LanGageMessage.create(message);
    return newMessageWithId;
  } catch (e) {
    console.log('User message not posted:', e);
    res.sendStatus(500);
  }
}

// TODO: update conversation ID
async function retrieveConversation(conversationID) {
  try {
    const conversationByID = await LanGageMessage.find({ conversationID: conversationID });
    return conversationByID;
  } catch (e) {
    console.log('Conversation retrieval failed:', e);
    res.sendStatus(500);
  }
}

module.exports = { postMessage, retrieveConversation }