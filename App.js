const NodeMailer = require('nodemailer');
const config = require('./config.json');

const transporter = NodeMailer.createTransport(config.auth);

const mailOptions = config.mailOptions;

async function sendMail() {
    try {
        console.log('Executing Script...');
        result = await transporter.sendMail(mailOptions);
        console.log(result.response);
    } catch (error) {
        console.error(error.message);
    }
}

sendMail();