const GPT = require('../gpt/gptAPI');
const { postUserMessage } = require('../models/messageModel')

async function gptReply (req, res) {
  try {

    // sanitize req

    if (req.method === 'POST') {
      await postUserMessage(req, res);
    }
    const reply = await GPT.main();
    res.status(200).json(reply)
  } catch (e) {
    console.log('AI call failed:', e);
    res.sendStatus(500);
  }
 };

module.exports = { gptReply };