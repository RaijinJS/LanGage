const GPT = require('../gpt/gptAPI');
const { postMessage } = require('../models/messageModel')

async function gptReply (req, res) {
  try {

    // sanitize req

    if (req.method === 'POST') {
      await postMessage(req, res);
    }
    const {role, content, conversationID} = req.body
    const userMessage = {role, content};

    const reply = await GPT.main(userMessage);
    await postMessage(req, res);
    res.status(200).json(reply.message)
  } catch (e) {
    console.log('AI call failed:', e);
    res.sendStatus(500);
  }
 };

module.exports = { gptReply };