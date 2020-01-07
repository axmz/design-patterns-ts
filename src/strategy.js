// https://www.youtube.com/watch?v=-NCgRD9-C6o&list=PLF206E906175C7E07&index=3
const util = require("util");

// Animals
class Animal {
  constructor(name, sound) {
    this.name = name;
    this.sound = sound;
    this.flyingType = new Flys();
  }

  sayName() {
    console.log(`My name is ${this.name}`);
  }

  mySound() {
    console.log(`My sound is ${this.sound}`);
  }

  setFlying(newFlyType) {
    this.flyingType = new newFlyType();
  }

  fly() {
    this.flyingType.fly();
  }
}

class Dog extends Animal {
  constructor(name, sound) {
    super(name, sound);
  }
}

// Flying
class Flys {
  fly() {
    console.log("Flys");
  }
}

class CanFly extends Flys {
  constructor() {
    super();
  }

  fly() {
    console.log(`Can Fly`);
  }
}

class CantFly extends Flys {
  constructor() {
    super();
  }

  fly() {
    console.log(`Can't Fly`);
  }
}


const dog = new Dog("botman", "whoof");
dog.fly();
dog.setFlying(CantFly);
dog.fly();
