const express = require('express');
const messagesController = require('../controllers/messages.controller');

const messageRouter = express.Router();
messageRouter.get('/get',messagesController.getMessages);
messageRouter.post('/post',messagesController.postMessage);

module.exports = messageRouter;