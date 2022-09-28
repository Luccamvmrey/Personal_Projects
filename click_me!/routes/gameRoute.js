const express = require("express");
const product = require("../public/js/Products");

users = [];
const router = express.Router();

router.post("/game", (req, res, next) => {
  users.push({ username: req.body.username, password: req.body.password });
  console.log(users);
  res.redirect("/game");
});

router.get("/game", (req, res, next) => {
  res.render("game.ejs", {
    prods: product,
  });
});

exports.router = router;
