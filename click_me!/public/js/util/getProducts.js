export function getProducts() {
  return fetch("/game/prodsjson", { method: "GET" })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      return data;
    })
    .catch((err) => {
      console.log(err);
    });
}

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

getProducts()
  .then((products) => {
    products.forEach((prod) => {
      productsArray.push(
        new Product(
          prod.id,
          prod.title,
          prod.description,
          prod.price,
          prod.priceNum,
          prod.effect,
          prod.effectNum
        )
      );
    });
  })
  .catch((err) => {
    console.log(err);
  });

export const productsArray = [];
