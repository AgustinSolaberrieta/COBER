const express = require("express");
const app = express();
const path = require("path");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(require("./routes/index"));
app.use(express.static(path.join(__dirname, "layer")));

// app.listen(3001, () => {
//   console.log("Server running on port 3001");
// });

// const emailSender = require("../emailSender");
// const express = require("express");
// const bodyParser = require("body-parser");
// const sendmail = require("sendmail")();

// const app = express();

// app.get("/", (req, res) => {
//   res.send("¡Hola, mundo!");
// });

// // Configurar middleware para analizar el cuerpo de las solicitudes
// app.use(bodyParser.urlencoded({ extended: false }));

// // Ruta para manejar el envío del formulario
// app.post("/enviar-correo", (req, res) => {
//   const email = req.body.email;

//   // Configurar el correo electrónico a enviar
//   const mailOptions = {
//     from: "asolaberrieta08@gmail.com",
//     to: "asolaberrietaw08@gmail.com", // correo del destinatario
//     subject: "Nuevo correo ingresado desde el formulario",
//     text: `El usuario ingresó el correo: ${email}`,
//   };

//   // Enviar el correo electrónico utilizando sendmail
//   sendmail(mailOptions, (error, info) => {
//     if (error) {
//       console.log(error);
//       res.send("Hubo un error al enviar el correo.");
//     } else {
//       console.log("Correo enviado:", info);
//       res.send("Correo enviado correctamente.");
//     }
//   });
// });

// // Iniciar el servidor
const PORT = 3001; // Cambia 3001 por el puerto que desees utilizar
app.listen(PORT, () => {
  console.log(`Servidor en funcionamiento en http://localhost:${PORT}`);
});
