import {StockPricesSubject, Subject, Data } from "./subject";

export interface Observer {
  name: string;
  update(data: Data): void;
}

export class StockPricesObserver implements Observer {
  constructor(public name: string) {
    Singleton.Instance.register(this)
  }

  update(data: Data) {
    console.table(data);
  }
}

export class Singleton {
  private static instance: StockPricesSubject;
  data!: any;

  private constructor() {}

  static get Instance(): StockPricesSubject {
    return this.instance || (this.instance = new StockPricesSubject());
  }
}

export function run () {
  const subject = Singleton.Instance;
  const observer1 = new StockPricesObserver('O1');
  const observer2 = new StockPricesObserver('O2');
  subject.setPrices({ibm: 100, aapl: 200, goog: 400})
  subject.unregister(observer2);
  subject.setPrices({ibm: 120, aapl: 220, goog: 420})
  subject.unregister(observer1);
  subject.notify()
}

