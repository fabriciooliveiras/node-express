const express = require('express');

//INDEX CONTROLLER
const indexController = require('./controllers/index.controller');

//ROUTERS
const friendsRouter = require('./routes/friends.router.js');
const messageRouter = require('./routes/messages.router.js');

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

app.use('/friends',friendsRouter);
app.use('/messages',messageRouter);
app.get('/',indexController.renderIndex);

//-------------------------------START OF THE SERVER-------------------------------
app.listen(PORT,()=>{
    console.log(`Listening to port ${PORT}...`)
});