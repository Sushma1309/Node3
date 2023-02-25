const express= require('express');
const cors = require('cors');

const app=express();

const middleware=(req,res,next)=>{
    console.log("I am in middleware");
    console.log("I got the first request");
    next();
}

const middleware2=(req,res,next)=>{
    console.log("I am in middleware second");
    // console.log("I got the second request");
    next();
}

app.get("/home",middleware,(req,res)=>{
    console.log("Received the login request");
    res.send("middleware1")
    res.end();
})


app.get("/about",middleware2,(req,res)=>{
    console.log("Second middleware request received");
    res.send("middleware2")
    res.end();
})

app.get("/cors",(req,res)=>{
    res.json({
        "student": [
            // 'name': "Prasidh jain"
        ]
    })
})

app.listen(3000,()=>{
    console.log("Running")
})

























