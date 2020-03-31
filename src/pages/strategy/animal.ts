import { Flies } from "./flies";

export class Animal {
  flyingType: Flies;
  constructor(public name: string, public sound: string) {
    this.flyingType = new Flies();
  }

  sayName() {
    console.log(`My name is ${this.name}`);
  }

  mySound() {
    console.log(`My sound is ${this.sound}`);
  }

  setFlying(newFlyType: Flies) {
    this.flyingType = newFlyType;
  }

  fly() {
    return this.flyingType.fly();
  }
}
