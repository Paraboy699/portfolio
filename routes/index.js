const express = require("express");
const router = express.Router();

// GET route for the root URL
router.get("/", (req, res) => {
  res.send("Hello World");
});

// GET route with parameters
router.get("/:name/:roll", (req, res) => {
  const { name, roll } = req.params;
  console.log(`Your name is ${name} and your roll number is ${roll}`);
  res.send(`Name: ${name}, Roll: ${roll}`);
});

module.exports = router;
