const express = require('express');

const indexController = require('./controllers/index.controller');
const friendsController = require('./controllers/friends.controller');
const messagesController = require('./controllers/messages.controller');

const PORT = 3000;

const app = express();


//------------------------------MIDDLEWARES------------------------------

//MIDDLEWARE THAT LOGS INFO ABOUT EVERY REQUEST
app.use((req,res,next)=>{
    
    const start = Date.now();
    
    //CODE ABOVE WILL RUN BEFORE THE ENDPOINT
    next();
    //CODE BELOW WILL RUN AFTER THE ENDPOINT 

    const delta = Date.now() - start;
    console.log(`${req.method} | ${req.url} | ${delta}ms`);
});

//MIDDLEWARE THAT ALOWS FOR USING THE REQ.BODY
app.use(express.json());

//-------------------------------ENDPOINTS-------------------------------
app.get('/friends/get',friendsController.getAllFriends);

app.get('/friends/get/:friendId',friendsController.getParticularFriend);

app.post('/friends/post',friendsController.postFriend);

app.get('/messages/get',messagesController.getMessages);
app.post('/messages/post',messagesController.postMessage);

app.get('/',indexController.renderIndex);


//-------------------------------START OF THE SERVER-------------------------------
app.listen(PORT,()=>{
    console.log(`Listening to port ${PORT}...`)
});