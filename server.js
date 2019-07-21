const nodemailer = require("nodemailer");
require('dotenv').config();

let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        type: 'OAuth2',
        user: 'snackimike@gmail.com',
        clientId: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        refreshToken: process.env.REFRESH_TOKEN,
        accessToken: process.env.ACCESS_TOKEN,
    }
});

let mailOptions = {
    from: "snackimike@gmail.com",
    to: "mikesnacki@gmail.com",
    subject: "testing",
    text: "IT WORKS"
}

transporter.sendMail(mailOptions, function (err, res) {
    if (err) {
        console.log("error occurs", err)
    } else {
        console.log(res)
    }
})

// const send = ({ email, name, text }) => {
//     const from = name && email ? `${name} <${email}>` : `${name || email}`
//     const message = {
//         from: "snackimike@gmail.com",
//         to: 'snackimike@gmail.com',
//         subject: `New message from ${from}`,
//         text,
//         replyTo: from
//     };

//     return new Promise((resolve, reject) => {
//         transporter.sendMail(message, (error, info) =>
//             error ? reject(error) : resolve(info)
//         )
//     })
// }

// export default send
