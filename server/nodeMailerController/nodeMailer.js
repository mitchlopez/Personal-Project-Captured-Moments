const nodemailer = require("nodemailer");
require("dotenv").config();

function sendEmail(req, res) {
  console.log(req.body);
  const { returnAddress, message, picture, name } = req.body;

  const htmlEmail = `
    <h2>from: ${returnAddress}</h2>
    <h2>Name: ${name} </h2>
    <h2>about picture: ${picture}</h2>
    <h3>${message}</h3>
    `;
  const transporter = nodemailer.createTransport(
    {
      service: "Gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS
      }
    },
    err => {
      console.log(err);
    }
  );

  const mailOptions = {
    from: `${returnAddress}`,
    to: process.env.GMAIL_USER,
    subject: `Concerning Picture: ${picture}`,
    text: `${message}`,
    html: htmlEmail
  };

  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      return console.log(err);
    }
    console.log("Message sent: %s", info.messageId);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  });
}

module.exports = {
  sendEmail
};
