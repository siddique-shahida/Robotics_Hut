console.log("Nodemailer Service is Live");
const nodemailer = require('nodemailer');
const mailGun = require('nodemailer-mailgun-transport');

const auth = {
    auth: {
        api_key: '37860a14bcc8291672929680f4f0d89e-054ba6b6-504273ea',
        domain: 'sandboxbc33518fab8c4b1fb43dfdf925a2e624.mailgun.org'
    }
};

const transporter = nodemailer.createTransport(mailGun(auth));

const sendMail = (name, email, subject, text, cb) => {
    //Recipient will remain fixed...
    const mailOptions = {
        sender: name,
        from: email,
        to: '14sohaibbk97@gmail.com',
        subject: subject,
        text: text
    };
    transporter.sendMail(mailOptions, function (err, data) {
        if (err) {
            cb(err, null);
        } else {
            cb(null, data);
        }
    });
}

// Exporting the sendmail
module.exports = sendMail;