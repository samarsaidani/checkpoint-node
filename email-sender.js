// // email
const nodemailer = require("nodemailer");


const transporter = nodemailer.createTransport({
  service: 'gmail',
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
   user: "samsaidani5@gmail.com",
   pass: 'mmna cxgx kfrk vyri'
  },
    tls: {
        ciphers:'SSLv3'
    },
    logger: true,
    debug: true
 })


  const mailOptions = {
      from :'samsaidani5@gmail.com',
          to : 'samarsaidani10@gmail.com',
          subject : 'email ' ,
          text : 'hello samar  '
 };

 transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log('Error in sending email  ' + error);
    return true;
  } else {
   console.log('Email sent: ' + info.response);
   return false;
  }
 })

 


