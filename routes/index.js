const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello GET World");
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
