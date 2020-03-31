import {Bird} from './bird';
import {Dog} from './dog';
import {CantFly, CanFly} from './flies';

const dog = new Dog("sparky", "whoof");
const bird = new Bird("tweety", "tweet");

dog.sayName();
bird.sayName();
dog.mySound();
bird.mySound();

console.log(dog.fly());
console.log(bird.fly());
dog.setFlying(new CanFly())
bird.setFlying(new CantFly())
console.log(dog.fly());
console.log(bird.fly());
