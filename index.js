const express = require("express");
const app = express();
const routes = require("./routes/index");

app.use(express.static("public"));

app.set("view engine", "ejs");
app.set("views", "./views");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", routes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`App is running on port ${PORT}`);
});
