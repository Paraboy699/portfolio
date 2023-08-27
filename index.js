const express = require("express");
const app = express();
const routes = require("./routes/index");

// Serve static files from the "public" directory
app.use(express.static("public"));

// Set view engine and views directory
app.set("view engine", "ejs");
app.set("views", "./views");

// Parse JSON bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Use routes from the "./routes/index" module
app.use("/", routes);

// Start the server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`App is running on port ${PORT}`);
});
