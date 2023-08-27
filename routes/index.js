const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");

router.get("/", (req, res) => {
  res.render("index");
});

router.get("/contact", (req, res) => {
  res.render("contact");
});

router.get("/portfolio", (req, res) => {
  res.render("portfolio");
});

router.get("/service", (req, res) => {
  res.render("service");
});

router.post("/mail", async (req, res) => {
  try {
    console.log(req);
    const { name, email, subject, message } = req.body;

    const transporter = nodemailer.createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      auth: {
        user: "aaliyah.denesik@ethereal.email",
        pass: "BRAjhbe5fNREgZp7mt",
      },
    });

    const mailOptions = {
      from: email,
      to: "myassa92@gmail.com",
      subject: subject,
      text: `From: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent: " + info.response);
    res.send("Email sent successfully!");
  } catch (error) {
    console.error(error);
    res.status(500).send("Error sending email.");
  }
});

module.exports = router;
