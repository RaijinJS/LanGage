const LanGageMessage = require('./messageSchema')

async function postMessage (req, res) {
  try {
    // const {message, conversation} = req.body
    const newMessageWithId = await LanGageMessage.create(req.body)
    return newMessageWithId;
  } catch (e) {
    console.log('User message not posted:', e);
    res.sendStatus(500);
  }
};

// TODO: update conversation ID

module.exports = { postMessage }