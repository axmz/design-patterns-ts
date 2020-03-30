import {Animal} from './animal';
import { CanFly } from './flies';

export class Bird extends Animal {
  constructor(name: string, sound: string) {
    super(name, sound);
    this.setFlying(new CanFly()) 
  }
}
