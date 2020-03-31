interface Animal {
  name: string;
  makeCopy(): Animal;
}

class Sheep implements Animal {
  public name: string;
  constructor() {
    this.name = "noname";
  }

  makeCopy(): Animal {
    let clone = Object.assign(Object.create(Object.getPrototypeOf(this)), this); // https://stackoverflow.com/questions/41474986/how-to-clone-a-javascript-es6-class-instance
    return clone;
  }
}

class CloneFactory {
  getClone(animal: Animal): Animal {
    return animal.makeCopy();
  }
}

const cloneFactory = new CloneFactory();
const sheep = new Sheep();
const dolly = cloneFactory.getClone(sheep);
const dolly2 = cloneFactory.getClone(dolly);
sheep.name = "sheep";
dolly.name = "dolly";
console.log("sheep", sheep);
console.log("dolly", dolly);
console.log("dolly2", dolly2);
