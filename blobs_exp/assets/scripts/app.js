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
  age = 0;
  isAlive = true;

  constructor() {
    super(() => {
      //List of functions executed every second
      this.getOlder();
    });
  }

  getOlder() {
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
      new Blob();
    }
  }
}

const testBlob = new Blob();
