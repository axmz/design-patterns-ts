// couldn't make this work. couldn't make a copy of the obj as intended

// console.log("dolly2.name", dolly2.name);
// interface Animal {
//   makeCopy (): Animal
// }

// class Sheep implements Animal {
//   public name: string = ''
//   constructor() {
//     this.name = ''
//     console.log('sheep is created')
//   }

//   makeCopy(): Animal {
//     console.log('copy is being made')
//     console.log('this', this)
//     return Object.create(this)
//   }
// }

// class CloneFactory {
//   getClone (animal: Animal): Animal {
//     return animal.makeCopy()
//   }
// }

// const cloneFactory = new CloneFactory
// const sheep = new Sheep
// const dolly = cloneFactory.getClone(sheep)
// const dolly2 = cloneFactory.getClone(dolly)
// sheep.name = "sheep"
// dolly.name = 'dolly'
// console.log('sheep',sheep)
// console.log('dolly', dolly)
// console.log('dolly2', dolly2)
// console.log('dolly2.name', dolly2.name)
