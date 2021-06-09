const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'bisho395850@gmail.com',
        pass: '********'
    }
})

function sendEmail(name, email,text,callback) {

    const mailOption ={
        from: 'bisho395850@gmail.com',
        to: 'bsalman395850@gmail.com',
        text: email + '\n' + name + '\n' + text
    }
    transporter.sendMail(mailOption, function (error, info) {
        if(error){
            console.log(error);
            callback(false);
            
        } else {
            console.log("info",info.response);
            callback(true);
        }
      })

  }

  module.exports = { sendEmail }