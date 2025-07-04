const nodeMailer = require('nodemailer');
require('dotenv').config()

const transporter = nodeMailer.createTransport({
    service: 'gmail',
    auth: {

    }
})

const sendOtpEmail = async (email, otp) => {
    try {
        const 
    } catch (error) {
        
    }
}