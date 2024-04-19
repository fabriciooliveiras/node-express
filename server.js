const express = require('express');

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

const friends = [
    {id:0,name:"Friend 0"},
    {id:1,name:"Friend 1"}
];


//-------------------------------ENDPOINTS-------------------------------
app.get('/friends/get',(req,res)=>{
    res.json(friends);
});

app.get('/friends/get/:friendId',(req,res)=>{

    const friendId = Number(req.params.friendId);
    const friend = friends[friendId];

    (friend) ? res.json(friend) : res.status(404).json({error:'Friend does not exist.'});
});

app.post('/friends/add',(req,res)=>{
    if(!req.body.name){
        res.status(400).json({error:"Invalid entry for the name."})
    }else{
        const newFriend = {id:friends.length,name:req.body.name};
        friends.push(newFriend);
        res.json(newFriend);
    }
});

app.get('/',(req,res)=>{
    res.send("Index");
});


//-------------------------------START OF THE SERVER-------------------------------
app.listen(PORT,()=>{
    console.log(`Listening to port ${PORT}...`)
});