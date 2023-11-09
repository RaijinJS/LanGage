const LanGageMessage = require('./messageSchema')

async function postMessage (message) {
  try {
    const newMessageWithId = await LanGageMessage.create(message)
    return newMessageWithId;
  } catch (e) {
    console.log('User message not posted:', e);
    res.sendStatus(500);
  }
};

// TODO: update conversation ID

module.exports = { postMessage }