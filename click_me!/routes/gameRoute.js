const express = require("express");

const gameController = require("../controllers/game");

users = [];
const router = express.Router();

router.post("/game", gameController.postStartGame);

router.post("/game/buy-product", gameController.postBuyProduct);

router.post("/game/buy-upgrade", gameController.postBuyUpgrade);

//TEST
router.post("/game/clicks", gameController.postClicks);

router.get("/game/prodsjson", gameController.getProductsJson);

router.get("/game/upsjson", gameController.getUpgradesJson);

router.get("/game", gameController.getGame);


exports.router = router;
