const express = require("express");
const app = express();
require("dotenv").config();

const nodemailer = require("nodemailer");

const PORT = process.env.PORT || 4000;

// Middlewares
app.use(express.static("public"));
app.use(express.json());

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

// app.post("/", (req, res) => {
//   console.log(req.body);

//   const transporter = nodemailer.createTransport({
//     service: "gmail",
//     auth: {
//       user: "process.env.user",
//       pass: "process.env.password",
//     },
//   });

//   const mailOptions = {
//     from: req.body.email,
//     to: process.env.user,
//     subject: `Message from ${req.body.email}: ${req.body.subject}`,
//     text: req.body.message,
//   };

//   transporter.sendMail(mailOptions, (error, info) => {
//     if (error) {
//       console.log(error.message);
//       res.send("Error sending mail");
//     } else {
//       console.log("Email sent:" + info.response);
//       res.send("Success");
//     }
//   });
// });

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
