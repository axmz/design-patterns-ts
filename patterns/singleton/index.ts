export class Singleton {
  private static instance: Singleton;
  proof!: string;

  private constructor() { }

  static get Instance(): Singleton {
    return this.instance || (this.instance = new this())
  }

  // static getInstance(): Singleton {
  //   return this.instance || (this.instance = new this())
  // }

  // static getInstance(): Singleton {
  //   if (this.instance) {
  //     return this.instance;
  //   } else {
  //     this.instance = new Singleton();
  //     return this.instance;
  //   }
  // }

}

const singleton1 = Singleton.Instance;
const singleton2 = Singleton.Instance;
singleton1.proof = "it's the same";
console.log('singleton1', singleton1)
console.log('singleton2', singleton2)
console.log('are they the same?', singleton1 === singleton2)