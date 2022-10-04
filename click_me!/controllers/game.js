const express = require("express");
const product = require("../public/js/Products");
const upgrade = require("../public/js/Upgrades");

exports.postStartGame = (req, res, next) => {
  users.push({ username: req.body.username, password: req.body.password });
  res.redirect("/game");
}

exports.getGame = (req, res, next) => {
  res.render("game.ejs", {
    prods: product.products,
    ups: upgrade.upgrades,
  });
}

exports.postBuyProduct = (req, res, next) => {
  const title = req.body.productTitle;
  const selProd = product.products.filter(prod => prod.title === title);
  res.redirect("/game");
  console.log(selProd);
}

exports.postBuyUpgrade = (req, res, next) => {
  const title = req.body.upgradeTitle;
  const selUpgrade = upgrade.upgrades.filter(up => up.title === title);
  res.redirect("/game");
  console.log(selUpgrade);
}