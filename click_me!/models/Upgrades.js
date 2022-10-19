class Upgrade {
  constructor(id, title, description, price, priceNum, effect, effectNum, target) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.price = price;
    this.priceNum = priceNum;
    this.effect = effect;
    this.effectNum = effectNum;
    this.target = target;
  }
}

const fountainPen = new Upgrade(
  0,
  "Fountain Pen",
  "Came from grandpa!",
  "15 clicks",
  15,
  "Clicking is twice as effective!!",
  2,
  "mouse"
);

const biggerMouse = new Upgrade(
  1,
  "A Bigger Mouse",
  "Why click twice, when clicking once do the trick",
  "30 clicks",
  30,
  "Clicking is twice as effective!!",
  2,
  "mouse"
);

exports.upgrades = [fountainPen, biggerMouse];



