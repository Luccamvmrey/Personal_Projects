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

getUpgrades()
  .then((upgrades) => {
    upgrades.forEach((up) => {
      upgradesArray.push(
        new Upgrade(up.id, up.title, up.description, up.price, up.effect)
      );
    });
  })
  .catch((err) => {
    console.log(errs);
  });

export const upgradesArray = [];
