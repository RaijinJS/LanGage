const GPT = require('../gpt/gptAPI');
const { postMessage } = require('../models/messageModel')

async function gptReply (req, res) {
  try {

    // sanitize req

    if (req.method === 'POST') {
      await postMessage(req.body);
    }
    const {role, content, conversationID} = req.body
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

module.exports = { gptReply };