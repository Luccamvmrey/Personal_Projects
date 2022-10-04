class Product {
  constructor(id, title, description, price, effect) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.price = price;
    this.effect = effect;
  }
}

const Lucca = new Product(
  0,
  "Lucca",
  "He coded this, but doesn't do much.",
  "10 Clicks",
  "0.1 CpS"
);

const Henrique = new Product(
  1,
  "Henrique",
  "Clicks for you, but tells terrible jokes",
  "100 Clicks",
  "0.5 Cps"
);

const Carolina = new Product(
  2,
  "Carolina",
  "Look how cute she is. Just soft.",
  "1000 Clicks",
  "2.5 CpS"
);

const Alexandre = new Product(
  3,
  "Alexandre",
  "Careful, he bites!",
  "5000 Clicks",
  "10 CpS"
);

exports.products = [Lucca, Henrique, Carolina, Alexandre];
