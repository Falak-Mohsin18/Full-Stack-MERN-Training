const express = require("express");

const app = express();

app.get("/",(req,res)=>{
    res.send("Home Page...")
}).listen(2000,()=>{
    console.log("Express server is working properly");
}); 