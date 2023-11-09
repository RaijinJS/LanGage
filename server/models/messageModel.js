const LanGageMessage = require('./messageSchema')

async function postUserMessage (req, res) {
  try {
    const newMessageWithId = await LanGageMessage.create(req.body)
    return newMessageWithId;
  } catch (e) {
    console.log('User message not posted:', e);
    res.sendStatus(500);
  }
};

module.exports = { postUserMessage }