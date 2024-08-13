const nodemailer = require("nodemailer")

const transporter = nodemailer.createTransport({
    service:'gmail',
    auth:{
        user: 'emmanuelsamson33333@gmail.com',
        pass:'vcjw yvsc rlyn zujg',
    }
})

const mailOptions = {
    from:'emmanuelsamson33333@gmail.com',
    to:'footwearsbysammy@gmail.com',
    subject:"sending Email using nodemailer",
    text:'That was easy!'
};

transporter.sendMail(mailOptions, function(err, info){
    if(err){
        console.log(err)
    }else{
        console.log("Email sent:" +info.response);
    }
})