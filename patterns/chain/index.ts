interface Chain {
  setNextChain(next: Chain): void
  calculate(request: Numbers): void
}

class Numbers {
  constructor(public nr1: number, public nr2: number, public operation: string) {}

}

class AddNumbers implements Chain {
  constructor(public nextInChain: Chain) {}

  setNextChain(next: Chain): void {
    this.nextInChain = next
  }  

  calculate(request: Numbers): void {
    const {nr1, nr2, operation} = request
    if (operation === 'sum') {
      let res = nr1 + nr2
      console.log(`${nr1} + ${nr2} = ${res}`)
    } else {
      this.nextInChain.calculate(request)
    }
  }
}

class SubNumbers implements Chain {
  constructor(public nextInChain: Chain) {}

  setNextChain(next: Chain): void {
    this.nextInChain = next
  }  

  calculate(request: Numbers): void {
    const {nr1, nr2, operation} = request
    if (operation === 'sub') {
      let res = nr1 - nr2
      console.log(`${nr1} - ${nr2} = ${res}`)
    } else {
      this.nextInChain.calculate(request)
    }
  }
}

class MulNumbers implements Chain {
  constructor(public nextInChain: Chain) {}

  setNextChain(next: Chain): void {
    this.nextInChain = next
  }  

  calculate(request: Numbers): void {
    const {nr1, nr2, operation} = request
    if (operation === 'mul') {
      let res = nr1 * nr2
      console.log(`${nr1} * ${nr2} = ${res}`)
    } else {
      this.nextInChain.calculate(request)
    }
  }
}

class DivNumbers implements Chain {
  // constructor(public nextInChain: Chain) {}

  setNextChain(next: Chain): void {
    // this.nextInChain = next
  }  

  calculate(request: Numbers): void {
    const {nr1, nr2, operation} = request
    if (operation === 'div') {
      let res = nr1 / nr2
      console.log(`${nr1} / ${nr2} = ${res}`)
    } else {
      console.log('Only add, sub, mul, div allowed')
    }
  }
}

const chain = new AddNumbers(new SubNumbers(new MulNumbers( new DivNumbers()) ))
const numbers = new Numbers(3,5,'vx')
chain.calculate(numbers)