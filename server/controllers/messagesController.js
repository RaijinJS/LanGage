const GPT = require('../gpt/gptAPI');
const { postMessage, retrieveConversation, retrieveConversationList, addGPTReplyProp } = require('../models/messageModel')
const { reduceAndSortConversationHistory } = require('../util.js')


async function postNewMessage(req, res) {
  try {

    // sanitize req

    const newMessageWithID = await postMessage(req.body);
    res.status(200).json(newMessageWithID);
  } catch (e) {
    console.log('New message post failed:', e);
    res.sendStatus(500);
  }
  }



async function gptReply(req, res) {
  try {
    const { role, content, conversationID, _id } = req.body;
    const userMessage = {role, content};
    const dbConversationHistory = await retrieveConversation(conversationID);
    const conversationHistory = reduceAndSortConversationHistory(dbConversationHistory);
    const gptOutput = await GPT.main(userMessage, conversationHistory);
    const reply = gptOutput.message;
    reply.conversationID = conversationID;
    const replyWithID = await postMessage(reply);
    await addGPTReplyProp(replyWithID.content, _id);
    res.status(200).json(replyWithID);
  } catch (e) {
    console.log('AI call failed:', e);
    res.sendStatus(500);
  }
}

async function getConversation (req, res) {
  try {
    const conversationID = req.params.id;
    const conversationHistory = await retrieveConversation(conversationID);
    res.status(200).json(conversationHistory);
    } catch (e) {
    console.log('Got an error:', e);
    res.sendStatus(500);
    }
}

async function getConversationsList (req, res) {
  try {
    const conversationList = await retrieveConversationList();
    console.log('conversationList: ',conversationList);
    res.status(200).json(conversationList);
    } catch (e) {
    console.log('Got an error:', e);
    res.sendStatus(500);
    }
}

module.exports = { gptReply, getConversation, postNewMessage, getConversationsList };