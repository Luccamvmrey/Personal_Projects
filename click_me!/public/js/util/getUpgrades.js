export function getUpgrades() {
  return fetch("/game/upsjson", { method: "GET" })
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
    this.bought = false;
  }

  buy() {
    this.bought = true;
    console.log(`${this.title}: I was bought`);
  }
}

getUpgrades()
  .then((upgrades) => {
    upgrades.forEach((up) => {
      upgradesArray.push(
        new Upgrade(up.id, up.title, up.description, up.price, up.priceNum, up.effect, up.effectNum, up.target)
      );
    });
  })
  .catch((err) => {
    console.log(err);
  });

export const upgradesArray = [];
