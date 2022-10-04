const express = require("express");
const product = require("../public/js/Products");

const gameController = require("../controllers/game");

users = [];
const router = express.Router();

router.post("/game", gameController.postStartGame);

router.post("/game/buy-product", gameController.postBuyProduct);

router.post("/game/buy-upgrade", gameController.postBuyUpgrade);

router.get("/game", gameController.getGame);

exports.router = router;
