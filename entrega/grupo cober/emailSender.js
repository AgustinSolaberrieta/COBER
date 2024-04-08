// const nodemailer = require("nodemailer");

// // Configura el transporte SMTP
// const transporter = nodemailer.createTransport({
//   host: "smtp.gmail.com", // Cambia esto por la dirección del servidor SMTP de tu proveedor de correo
//   port: 465, // El número de puerto puede variar según la configuración de tu proveedor de correo
//   secure: false, // Si tu servidor SMTP utiliza SSL, cambia esto a true
//   auth: {
//     user: "asolaberrietaw08@gmil.com", // Cambia esto por tu nombre de usuario de correo
//     pass: "rasty1004", // Cambia esto por tu contraseña de correo
//   },
// });

// // Configura el correo electrónico a enviar
// const mailOptions = {
//   from: "agustinasolaberrieta08@gmil.com", // Cambia esto por tu dirección de correo
//   to: "asolaberrietaw08@gmil.com", // Cambia esto por la dirección del destinatario
//   subject: "Asunto del correo",
//   text: "Contenido del correo electrónico",
// };

// // Envía el correo electrónico
// transporter.sendMail(mailOptions, (error, info) => {
//   if (error) {
//     console.log("Error al enviar el correo:", error);
//   } else {
//     console.log("Correo enviado:", info.response);
//   }
// });
