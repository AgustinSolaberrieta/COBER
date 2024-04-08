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
        "ya29.a0Ad52N38KhcVmv0npFu0N4Ims9nEBIGA5Xc4n-kQ0BNzbU6jj2K7_1tAQKMkUYMcsdWjLpwqTiC68O0gy3vH7YVtfw-QpBNCy-9jRFpGMRG1F5N-zhuAJxXkBDYWZBpmF1M1nTk6S0_a78Jq0MdhyBl2eS4-s_OXJjanpaCgYKAUwSARMSFQHGX2Mio484SDfUGS00mUYn6BbmwA0171";

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
