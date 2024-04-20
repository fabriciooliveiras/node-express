function getMessages(req,res){
    res.send("<ul><li>Hellow World!</li></ul>");
}

function postMessage(req,res){
    res.json(req.body);
}

module.exports = {
    getMessages,
    postMessage
}