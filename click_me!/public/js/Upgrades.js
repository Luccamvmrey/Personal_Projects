class Upgrade {
  constructor(title, description, price, effect) {
    this.title = title;
    this.description = description;
    this.price = price;
    this.effect = effect;
  }
}

const fountainPen = new Upgrade(
  "Fountain Pen",
  "Came from grandpa!",
  "15 clicks",
  "Clicking is twice as effective!!"
)

exports.upgrades = [fountainPen];