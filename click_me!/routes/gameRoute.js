const express = require("express");

users = [];
const router = express.Router();

router.post("/game", (req, res, next) => {
  users.push({ username: req.body.username, password: req.body.password });
  console.log(users);
  res.redirect("/game")
});

router.get("/game", (req, res, next) => {
  res.render("game.ejs");
});

exports.router = router;
