const express = require("express");
const nodemailer = require("nodemailer");
// const { google } = express.Router();
const { google } = require("googleapis");
const router = express.Router();

router.post("/send-email", (req, res) => {
  const { email } = req.body;
  const contentHTML = `
  <h1>Nuevo registro de usuario</h1>
  <p>Se ha registrado un nuevo usuario con el correo: ${email}</p>
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
        "ya29.a0Ad52N393DP7GouPCwAh1FyD85EcRYw5i7v-zUJTISqUbPwHLxAFnnDcLlTvRXYAlkLXzE8I_DRmCqIW6OXNBbZQyUVp59iKeNOGGQheJUSnSjPyUx__cNtGSESZlcWbzyd1EdYZdnKnclrsFOeDuTPrS7hsMs3AZvRRyaCgYKAXgSARMSFQHGX2MiZr91jrIsA9efpuPaw9KqWA0171";

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
        from: "Pagina  Web",
        to: "asolaberrietaw08@gmail.com",
        subject: "Grupo Cober",
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
