const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello World");
});

router.get("/:name", (req, res) => {
  const { name } = req.params;
  console.log(`Your name is ${name}`);
  res.send(`Your name is ${name}`);
});

router.post("/", (req, res) => {
  console.log("Received POST request");
  res.send("Hello World");
});

module.exports = router;
