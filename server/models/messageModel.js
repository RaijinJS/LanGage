const LanGageMessage = require('./messageSchema')

async function postMessage (message) {
  try {
    const newMessageWithId = await LanGageMessage.create(message);
    return newMessageWithId;
  } catch (e) {
    console.log('User message not posted:', e);
    throw e;
  }
}

async function retrieveConversation(conversationID) {
  try {
    const conversationByID = await LanGageMessage.find({ conversationID: conversationID });
    return conversationByID;
  } catch (e) {
    console.log('Conversation retrieval failed:', e);
    throw e;
  }
}

async function retrieveConversationList() {
  try {
    const conversationList = await LanGageMessage.distinct('conversationID');
    console.log('conversationList: ',conversationList);
    return conversationList;
  } catch (e) {
    console.log('Conversation list retrieval failed:', e);
    throw e;
  }
}

// add addGPTReplyProp(replyWithID, _id) function to update the userMessage to which the gptreply responds to with a property that holds the reply

async function addGPTReplyProp (gptReply, id) {
  try {
    await LanGageMessage.updateOne(
      { _id: id },
      { $set: { reply: gptReply } }
    );
  } catch (e) {
    console.log('User message not posted:', e);
    throw e;
  }
}


module.exports = { postMessage, retrieveConversation, retrieveConversationList, addGPTReplyProp }