const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

const startRoute = require("./routes/startRoute");
const gameRoute = require("./routes/gameRoute");

app.use(startRoute);
app.use(gameRoute.router);


app.listen(3000, "192.168.88.237", () => {
  console.log("Listening on 192.168.88.237:3000");
});
