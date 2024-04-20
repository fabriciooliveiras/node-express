const model = require("../models/friends.model");

function postFriend(req,res){
    if(!req.body.name){
        res.status(400).json({error:"Invalid entry for the name."})
    }else{
        const newFriend = {id:model.length,name:req.body.name};
        model.push(newFriend);
        res.json(newFriend);
    }
}

function getParticularFriend(req,res){

    const friendId = Number(req.params.friendId);
    const friend = model[friendId];

    (friend) ? res.json(friend) : res.status(404).json({error:'Friend does not exist.'});
}

function getAllFriends(req,res){
    res.json(model);
}

module.exports = {
    postFriend,
    getParticularFriend,
    getAllFriends
}