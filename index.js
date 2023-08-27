const express = require("express");
const app = express();
const routes = require("./routes/index");

// Middleware
app.use(express.json());

// Attach routes
app.use("/", routes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`App is running on port ${PORT}`);
});
