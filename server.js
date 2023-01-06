const express = require('express');
const apiRouter = require('./src/routes/index');
const {connect} = require('./src/config/db');
const User = require('./src/models/user');
const app = express();

app.use('/api',apiRouter);

app.get('/',(req,res)=>{
    res.send('Hello');
});

app.listen(2000,async()=>{
    await connect();
    console.log("Connectde to database");
    console.log("Server Started");
    // let user = await User.create({
    //     email:"abc@gmail.com",
    //     password:1234,
    //     username:"abc"
    // });
    // console.log(user);
});