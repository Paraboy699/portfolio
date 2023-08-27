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
    console.log(req.body);
    const { name, email, subject, message } = req.body;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "myassa92@gmail.com",
        pass: "asaeqndzxtayfscr",
      },
    });

    const mailOptions = {
      from: email,
      to: "spukar133@gmail.com",
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
