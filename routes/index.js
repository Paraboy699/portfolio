const express = require("express");
const router = express.Router();

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

router.get("/:name", (req, res) => {
  const { name } = req.params;
  res.render("index", { name: name ? name : "" });
});

router.post("/", (req, res) => {
  console.log("Received POST request");
  res.send("Hello POST World");
});

module.exports = router;
