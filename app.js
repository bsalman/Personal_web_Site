const express = require('express');
const fs = require('fs');
const emailSender=require('./modules/emailSend')
const fileupload = require('express-fileupload');

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
app.use(express.urlencoded({extended: false}));
const port = process.env.PORT || 4000;
/////////////////////////////////////////////
app.post('/Contacts',(req,res)=>{
    console.log("body",req.body);
    const name = req.body.name
    const email = req.body.email
    const message = req.body.text
    if(name != "" && name.length < 100 ){
        emailSender.sendEmail(name, email,message,(ok) => {
            if(ok){
                console.log(ok);
                //res.sendStatus(200);
                res.render('Contacts', {sent: "E-Mail successfully sended"})
            } else{
                //res.sendStatus(500);
                res.render('Contacts', {sent: "Email not sended"})
            }
        });
    }
})
//////////////////////////////////////////////////
app.use('/', (req, res) => {
    const html = fs.readFileSync(__dirname + '/index.html', 'utf-8')
    res.send(html);
})
app.listen(port, () => {
    console.log(`App listening on port ${port}!`);
});