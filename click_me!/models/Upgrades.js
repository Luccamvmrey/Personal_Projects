class Upgrade {
  constructor(id, title, description, price, effect) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.price = price;
    this.effect = effect;
    this.bought = false;
  }

  buy() {
    this.bought = true;
    console.log(`${this.title}: I was bought`);
  }
}

const fountainPen = new Upgrade(
  0,
  "Fountain Pen",
  "Came from grandpa!",
  "15 clicks",
  "Clicking is twice as effective!!"
);

const biggerMouse = new Upgrade(
  1,
  "A Bigger Mouse",
  "Why click twice, when clicking once do the trick",
  "30 clicks",
  "Clicking is twice as effective!!"
);

exports.upgrades = [fountainPen, biggerMouse];



