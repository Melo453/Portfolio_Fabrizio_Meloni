const express = require('express');
const nodemailer = require('nodemailer');

const {vistaPrincipal,vistaCV} = require('../controllers/pageControllers')
const router = express.Router();

router.get('/', vistaPrincipal)

router.post('/send-email',async (req,res) =>{
    const { name, email, message } = req.body;
    
    contentHTML = `
        <h1>User Information</h1>
        <ul>
            <li>Username: ${name}</li>
            <li>User Email: ${email}</li>
        </ul>
        <p>${message}</p>
    `;

    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true, // true for 465, false for other ports
        auth: {
            user: 'fabrielcapo1235@gmail.com', // generated ethereal user
            pass: 'tdllogkanzfsrerx'
        },
        tls:{
            rejectUnauthorized: false
        }
    });

    const info = await transporter.sendMail({
        from: '"Formulario Contacto" <fabrielcapo1235@gmail.com>',
        to: 'fabrielcapo1235@gmail.com',
        subject: 'Website contact form',
        html: contentHTML
    });
    res.redirect('/#contact');
});

module.exports = {routes: router};
