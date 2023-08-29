const express = require("express");
const router = express.Router();
const { sendEmail } = require("../services/mailService");

router.get("/", (req, res) => res.render("index"));
router.get("/contact", (req, res) => res.render("contact"));
router.get("/portfolio", (req, res) => res.render("portfolio"));
router.get("/service", (req, res) => res.render("service"));

router.post("/mail", async (req, res) => {
  const { name, email, subject, message } = req.body;
  const success = await sendEmail({ name, email, subject, message });

  if (success) {
    res.send("Email sent successfully!");
  } else {
    res.status(500).send("Error sending email.");
  }
});

module.exports = router;
