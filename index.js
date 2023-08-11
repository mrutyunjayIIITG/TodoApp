const express=require('express');
const router = require ('./routes');
const path=require('path');


const app=express();
const port=7000;


// app.get('/',(req,res)=>{

//     res.send('<h1>  hello world </h1>');
// })

//use express router 
app.use('/',require('./routes')); //use for any request 







app.listen(port,(err)=>{
    if(err)
    {
        console.log('error in running the server:',err);
    }
    console.log(`server running succesfullly at ${port}`);
})




