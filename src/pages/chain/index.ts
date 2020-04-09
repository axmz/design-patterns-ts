interface Chain {
  calculate(request: Numbers): void;
}

abstract class AbstractChain implements Chain {
  constructor(public next?: Chain) {}

  // this will act as default. 
  // in child classes it is called with super.calculate();
  calculate(request: Numbers): void {
    if (!this.next) {
      console.log("Only add, sub, mul, div allowed");
    } else {
      this.next.calculate(request);
    }
  }
}

class Numbers {
  constructor(public nr1: number, public nr2: number, public operation: string) {}
}

class AddNumbers extends AbstractChain {
  calculate(request: Numbers): void {
    const { nr1, nr2, operation } = request;
    if (operation === "sum") {
      let res = nr1 + nr2;
      console.log(`${nr1} + ${nr2} = ${res}`);
    } else {
      super.calculate(request);
    }
  }
}

class SubNumbers extends AbstractChain {
  calculate(request: Numbers): void {
    const { nr1, nr2, operation } = request;
    if (operation === "sub") {
      let res = nr1 - nr2;
      console.log(`${nr1} - ${nr2} = ${res}`);
    } else {
      super.calculate(request);
    }
  }
}

class MulNumbers extends AbstractChain {
  calculate(request: Numbers): void {
    const { nr1, nr2, operation } = request;
    if (operation === "mul") {
      let res = nr1 * nr2;
      console.log(`${nr1} * ${nr2} = ${res}`);
    } else {
      super.calculate(request);
    }
  }
}

class DivNumbers extends AbstractChain {
  calculate(request: Numbers): void {
    const { nr1, nr2, operation } = request;
    if (operation === "div") {
      let res = nr1 / nr2;
      console.log(`${nr1} / ${nr2} = ${res}`);
    } else {
      super.calculate(request);
    }
  }
}

const chain = new AddNumbers(new SubNumbers(new MulNumbers(new DivNumbers())));
const numbers = new Numbers(3, 5, "sub");
chain.calculate(numbers);