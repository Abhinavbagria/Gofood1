
// import mongoose from "mongoose";
// import express from "express";
const mongoose = require('mongoose');
const express = require('express');
const User =require('./Configration');
const signConfiration= require('./Config2');
 const cors= require('cors');
// require('./Food')

const app = express();
app.use(cors());
app.use(express.json());


app.get('/login',async (req, resp) => {
  
    const b= await signConfiration.findOne(req.body);
   console.log(b);
   resp.send(b);
   
});
// app.post('/sign', async (req, resp)=>{
//     let Models = new User(req.body);
//     let result = await Models.save();
//     resp.send("workingg perfectly ")
//     console.log(result);

// })
app.post('/sign',async (req, resp )=>{
const a= await signConfiration(req.body);
const result = a.save();

       
    resp.send(result);
});



app.listen(38000);
// var app = require('express')(),
//     server = require('http').createServer(app);

// server.listen(80, function() {
//     console.log('ready to go!');
// });