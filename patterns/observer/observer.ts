import { Subject, Data } from "./subject";

export interface Observer {
  name: string;
  update(data: Data): void;
}

export class StockPricesObserver implements Observer {
  constructor(public subject: Subject, public name: string = "no name") {
    this.subject.register(this);
  }

  update(data: Data) {
    console.log(`observer %c${this.name}`, "color: red", "table:");
    console.table(data);
  }
}
