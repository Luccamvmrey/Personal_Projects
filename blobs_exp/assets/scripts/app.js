class Default {
  defaultTime = 1000;

  constructor(funcPackage) {
    this.funcPackage = funcPackage;
  }

  time() {
    this.time = setInterval(this.funcPackage, this.defaultTime);
  }

  stopTime() {
    clearInterval(this.time);
  }
}

class Reserve extends Default {
  constructor(startingAmount = 100) {
    super(() => {});
    this.startingAmount = startingAmount;
  }
}

class Food extends Default {
  constructor(startingAmount = 100) {
    super(startingAmount);
  }
}

class Water extends Default {
  constructor(startingAmount = 100) {
    super(startingAmount);
  }
}

class Blob extends Default {
  id = Math.random();
  age = 0;
  isAlive = true;

  constructor() {
    super(() => {
      //List of functions executed every second
      this.getOlder();
    });
    this.render();
  }

  render() { //Renders the blobs to the tribe screen
    const screenTribe = document.getElementById("screen-tribe");
    this.blobBody = document.createElement("div");
    this.blobBody.className = "blob";
    screenTribe.append(this.blobBody);
  }

  // hoverInfo() { //todo: Do Later!
  //   this.blobBody.addEventListener("mouseenter", () => {

  //   })
  // }

  getOlder() { //Ages the blobs
    this.age++;
    console.log(`${this.name} just got older, he's ${this.age} years old!`);
  }
}

class Tribe {
  constructor(initialBlobs) {
    this.createBlob(initialBlobs);
  }

  createBlob(blobs) {
    for (let i = 0; i < blobs; i++) {
      setTimeout(() => {
        new Blob();
      }, 750);
    }
  }
}

// const testBlob = new Blob();
