const express = require('express');
const fs = require('fs');
const fileupload = require('express-fileupload');

const emailSender=require('./modules/emailSend');
const dataModule =require('./modules/mySqlDataModules');


const app = express();
app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({
    extended: false
}));
app.use(express.json());
app.use(fileupload({
    limits: {
        fileSize: 50 * 1024 * 1024
    }
}));

const port = process.env.PORT || 4000;
/////////////////////////////////////////////
app.post('/Contact',(req,res)=>{
    console.log("body",req.body);
    const name = req.body.name
    const email = req.body.email
    const message = req.body.text
    if(name != "" && name.length < 100 ){
        emailSender.sendEmail(name, email,message,(ok) => {
            if(ok){
                
                res.json(2)
              
            } else{
                //res.sendStatus(500);
                res.json(3)
            }
        });
    }
})
//get myInfos from dat base
 app.post('/getAllMyInfos',(req,res)=>{
    dataModule.getMyInfo().then((myInfos)=>{
       
        res.json(myInfos)
    }).catch((error)=>{
        res.json(2)
    })
}) 
//////////////////////////////////////////////////
app.use('/', (req, res) => {
    const html = fs.readFileSync(__dirname + '/index.html', 'utf-8')
    res.send(html);
})
app.listen(port, () => {
    console.log(`App listening on port ${port}!`);
});