class Upgrade {
  constructor(id, title, description, price, effect) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.price = price;
    this.effect = effect;
  }
}

const fountainPen = new Upgrade(
  1,
  "Fountain Pen",
  "Came from grandpa!",
  "15 clicks",
  "Clicking is twice as effective!!"
)

exports.upgrades = [fountainPen];