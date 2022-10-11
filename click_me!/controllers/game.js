const express = require("express");
const product = require("../models/Products");
const upgrade = require("../models/Upgrades.js");

exports.postStartGame = (req, res, next) => {
  users.push({ username: req.body.username, password: req.body.password });
  res.redirect("/game");
};

exports.getGame = (req, res, next) => {
  res.render("game.ejs", {
    prods: product.products,
    ups: upgrade.upgrades,
  });
};

exports.postBuyProduct = (req, res, next) => {
  const title = req.body.productTitle;
  const selProd = product.products.filter((prod) => prod.title === title);
  res.redirect("/game");
  console.log(selProd);
};

exports.postBuyUpgrade = (req, res, next) => {
  const title = req.body.upgradeTitle;
  const selUpgrade = upgrade.upgrades.filter((up) => up.title === title)[0];

  selUpgrade.buy();
  upgrade.upgrades.pop(selUpgrade);
  res.redirect("/game");

  //Dev Purposes Only!!!
  console.log(selUpgrade);
  const devAddBack = setTimeout(() => {
    console.log(`
      DevMode: Adding back;
      Logging from controllers/game.js ln 37;
    `);
    upgrade.upgrades.push(selUpgrade);
  }, 1000);
};

exports.getUpgradesJson = (req, res, next) => {
  res.send(JSON.stringify(upgrade.upgrades));
}
