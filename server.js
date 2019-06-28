const express = require('express');
const bodyParser = require('body-parser');
const nodeMailer = require('nodemailer');

const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.post('/api/form', (req, res) => {
    nodeMailer.createTestAccount((err, account) => {
        const htmlEmail = `
            <h3>Contact Details</h3>
            <ul>
                <li> Name: ${req.body.name}</li>
                <li> Email: ${req.body.email}</li>
            </ul>
            <h3>Message</h3>
            <p>${req.body.message}</p>
        `

        let transporter = nodeMailer.createTransport({
            host: 'smtp.ethereal.email',
            port: 587,
            auth: {
                user: 'mariane.sawayn@ethereal.email',
                pass: 'aw8A6VGQfw36Dvxe1Y'
            }
        })

        let mailOptions = {
            from: 'test@testaccount.com',
            to: 'mariane.sawayn@ethereal.email',
            replyTo: 'test@testaccount.com',
            subject: req.body.subject,
            text: req.body.message,
            html: htmlEmail
        }

        transporter.sendMail(mailOptions, (err, info) => {
            if (err) {
                return console.log(err)
            }
            console.log('Message sent: %s', info.message)
            console.log('Message url: %s', nodeMailer.getTestMessageUrl(info))
        })
    })
})

const PORT = 5000;

app.listen(PORT, ()=>console.log(`Server started on port ${PORT}`));
