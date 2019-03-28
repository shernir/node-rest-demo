const Logger = require('./logger');
const path = require('path');
const os = require('os');
const fs = require('fs');
const http =  require('http');
const express = require('express');
var logger = new Logger();
const app = express();
const Joi = require("joi");
const mongoos= require('mongoose');

const coursesRoutes = require('./routes/courses')
console.log(process.env.NODE_ENV)


mongoos.connect('mongodb://localhost/playground', { useNewUrlParser: true }).then(()=>{
    console.log('connected to mongo')
});


app.use(express.json())
app.use('/api/courses',coursesRoutes);
app.use((req,res,next)=>{
    console.log('logginh');
    next();
    
})





const port = process.env.PORT || 3000;
app.listen(port,()=>{
    console.log('Listen to port '+port);

})
// const server = http.createServer((req,res)=>{
//     if(req.url ==='/'){
//         res.write('hello world')
//         res.end();
//     }
//     if(req.url == '/courses'){
//         res.write(JSON.stringify(['Engilsh','Arabic','Math']));
//         res.end();
//     }
// });






// logger.on('messageLogged',(arg)=>{
//     console.log('Listener called'+ JSON.stringify(arg));
    
// })


// logger.log("New Message to Lisien")
// fs.readdir('$',function(err,files){
//     if(!err) {
//         console.log('Results '+files);
//     } else {
//         console.log(err);
        
//     }

// })


