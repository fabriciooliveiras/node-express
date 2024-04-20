const express = require('express');
const friendsController = require('../controllers/friends.controller');

const friendsRouter = express.Router();
friendsRouter.get('/get',friendsController.getAllFriends);
friendsRouter.get('/get/:friendId',friendsController.getParticularFriend);
friendsRouter.post('/post',friendsController.postFriend);

module.exports = friendsRouter;