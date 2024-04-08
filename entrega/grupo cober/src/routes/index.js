const express = require("express");
const nodemailer = require("nodemailer");
// const { google } = express.Router();
const { google } = require("googleapis");
const router = express.Router();

router.post("/send-email", (req, res) => {
  const { email } = req.body;
  contentHTML = `
     <h1>Se registro</h1>
     <li>${email}</li>
    `;

  const { CLIENT_ID, CLIENT_SECRET, REDIRECT_URI, REFRESH_TOKEN } = process.env;

  const oAuth2Client = new google.auth.OAuth2(
    CLIENT_ID,
    CLIENT_SECRET,
    REDIRECT_URI
  );
  oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

  async function sendMail() {
    try {
      const accessToken =
        "ya29.a0Ad52N3_onbXSEcraQWYI5SePwXen1_tAZGOHFzopIU2XSVH3y6b2BzzUn7Mpo8poO1EM9cytwVh-kKgIPj6yqUQhx6emmb5BqorHVaqP9LtsCkqfOPbWczq4NLKxJVq-l5qumPSrWFr5IjFitygKae1pzN_OQn0gn38eaCgYKAeoSARMSFQHGX2Mi87Z8lU8veAfGHf5VAhGjNw0171";

      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          type: "OAuth2",
          user: "asolaberrietaw08@gmail.com",
          clientId: CLIENT_ID,
          clientSecret: CLIENT_SECRET,
          refreshToken: REFRESH_TOKEN,
          accessToken: accessToken,
        },
      });
      const mailOptions = {
        from: "Pag Web ",
        to: "asolaberrietaw08@gmail.com",
        subject: "Prueba",
        html: contentHTML,
      };
      const result = await transporter.sendMail(mailOptions);
      return result;
    } catch (error) {
      console.log(error);
    }
  }
  sendMail()
    .then((result) => res.status(200).send("enviado"))
    .catch((error) => console.log(error.message));
});
module.exports = router;
