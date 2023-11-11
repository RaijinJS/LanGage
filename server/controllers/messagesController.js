const GPT = require('../gpt/gptAPI');
const { postMessage, retrieveConversation } = require('../models/messageModel')


async function postNewMessage(req, res) {
  try {

    // sanitize req

    const newMessageWithID = await postMessage(req.body);
    res.status(200).json(newMessageWithID);
  } catch (e) {
    console.log('New message post failed:', e);
    res.sendStatus(500);
  }
  };



async function gptReply(req, res) {
  try {

    // sanitize req
    const { role, content, conversationID } = req.body;
    const userMessage = {role, content};

    const gptOutput = await GPT.main(userMessage);
    const reply = gptOutput.message;
    reply.conversationID = conversationID;
    replyWithID = await postMessage(reply);
    res.status(200).json(replyWithID);
  } catch (e) {
    console.log('AI call failed:', e);
    res.sendStatus(500);
  }
};

async function getConversation (req, res) {
  try {
    const conversationID = req.params.id
    console.log(conversationID)
    const conversationHistory = await retrieveConversation(conversationID);
    res.status(200).json(conversationHistory)
    } catch (e) {
    console.log('Got an error:', e);
    res.sendStatus(500);
    }
}




module.exports = { gptReply, getConversation, postNewMessage };