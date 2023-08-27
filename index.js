const express = require("express");
const app = express();
const routes = require("./routes/index");

app.set("view engine", "ejs");
app.set("views", "./views");

app.use(express.json());

app.use("/", routes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`App is running on port ${PORT}`);
});
