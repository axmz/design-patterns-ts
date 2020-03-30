import { Animal } from "./animal";
import { CantFly } from "./flies";

export class Dog extends Animal {
  constructor(name: string, sound: string) {
    super(name, sound);
    this.setFlying(new CantFly)
  }
}
