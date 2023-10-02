const nodeMailer = require("nodemailer");
const sendEmail = async (options)=>{
    const transporter = nodeMailer.createTransport({
        service:process.env.SMPT_SERVICE,
        host: process.env.SMPT_HOST,
        port: 465,
        secure: true,
        auth:{
            user:process.env.SMPT_MAIL,
            pass:process.env.SMPT_PASSWORD, //miksou101
        }
    })
    const mailOptions = {
        from:"",
        to:options.email,
        subject:options.subject,
        text:options.message,
    };
    await transporter.sendMail(mailOptions);
};

module.exports = sendEmail