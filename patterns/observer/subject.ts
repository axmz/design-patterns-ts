import { Observer } from "./observer";

export interface Subject {
  register(o: Observer): void;
  unregister(o: Observer): void;
  notify(): void;
}

export interface Data {
  ibm: number;
  aapl: number;
  goog: number;
}

export class StockPricesSubject implements Subject {
  observers: Observer[];
  stockPrices!: Data; // ! is to avoid initialisation in constructor function
  constructor() {
    this.observers = [];
  }

  register(o: Observer) {
    this.observers.push(o);
    console.log(`observer %c${o.name} %cregistered`, 'color: red', 'color: inherit');
  }

  unregister(o: Observer) {
    this.observers = this.observers.filter(el => {
      return el !== o;
    });
    console.log(`observer %c${o.name} %cunregistered`, 'color: red', 'color: inherit')
  }

  notify() {
    const data = this.stockPrices;
    this.observers.forEach(o => o.update(data));
  }

  setPrices(data: Data) {
    this.stockPrices = data;
    this.notify()
  }
}
