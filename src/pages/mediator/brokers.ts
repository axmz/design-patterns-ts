import {Mediator} from './mediator'

// Broker is a participant at the stock exchange, who sells and buys stocks.
export abstract class Broker {
  public name: string;
  // the code is used to identify the brokers.
  public code: number = 0; // 0 is used only to infer type, the code is assigned by the mediator on the instantiation.

  constructor(public mediator: Mediator ) {
    // self registration at mediator.
    this.mediator.registerBroker(this);
    // the name is taken from the constructor, so that you don't have to provide a name.
    this.name = this.constructor.name 
    console.log(`${this.name} signed up @ SockExchange`);
  }

  // read sell
  ask(stock: string, shares: number) {
    const offer = {stock, shares, brokerCode: this.code}
    this.mediator.ask(offer);
  }

  // read buy
  bid(stock: string, shares: number) {
    const bid = {stock, shares, brokerCode: this.code} 
    this.mediator.bid(bid);
  }
}

// specific Broker that trades at the Stock Exchange
export class GormanSlacks extends Broker {
  constructor(mediator: Mediator) {
    super(mediator);
  }
}

// specific Broker that trades at the Stock Exchange
export class JTPoorman extends Broker {
  constructor(mediator: Mediator) {
    super(mediator);
  }
}