class Product {
  constructor(id, title, description, price, priceNum, effect, effectNum) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.price = price;
    this.priceNum = priceNum;
    this.effect = effect;
    this.effectNum = effectNum;
  }
}

const Lucca = new Product(
  0,
  "Lucca",
  "He coded this, but doesn't do much.",
  "10 Clicks",
  10,
  "0.1 CpS",
  0.1
);

const Henrique = new Product(
  1,
  "Henrique",
  "Clicks for you, but tells terrible jokes",
  "100 Clicks",
  100,
  "0.5 Cps",
  0.5
);

const Carolina = new Product(
  2,
  "Carolina",
  "Look how cute she is. Just soft.",
  "1000 Clicks",
  1000,
  "2.5 CpS",
  2.5
);

const Alexandre = new Product(
  3,
  "Alexandre",
  "Careful, he bites!",
  "5000 Clicks",
  5000,
  "10 CpS",
  10
);

exports.products = [Lucca, Henrique, Carolina, Alexandre];
