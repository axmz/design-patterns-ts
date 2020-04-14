import { Broker } from "./brokers";

// this defines the details of the sale (offer) or buy (bid) offers.
export class BuySellOffer {
  constructor(public stock: string, public shares: number, public brokerCode: number) {}
}

export interface Mediator {
  // here all of the offers are recorded and the transactions are netted.
  brokers: Broker[];
  sellOffers: BuySellOffer[]
  bidOffers: BuySellOffer[]
  bid(buyOffer: BuySellOffer): void;
  ask(sellOffer: BuySellOffer): void;
  registerBroker(broker: Broker): void;
}

export class StockExchange implements Mediator {
  brokers: Broker[] = [];
  sellOffers: BuySellOffer[]=[];
  bidOffers: BuySellOffer[]=[];
  brokerUniqueRegistrationCode: number = 0;

  constructor() {
    console.log("Trading started @ SockExchange");
  }

  registerBroker(broker: Broker): void {
    this.brokers.push(broker);
    // assigns a code to the broker.
    broker.code = this.brokerUniqueRegistrationCode;
    this.brokerUniqueRegistrationCode++;
  }

  // searches for bid offers, if finds one that matches exactly, then, sells.
  ask(sellOffer: BuySellOffer): void {
    const { stock, shares, brokerCode } = sellOffer;
    const brokerName = this.brokers[brokerCode].name;

    const counteroffer = this.bidOffers.findIndex(o => o.shares === shares && o.stock === stock)
    if (counteroffer !== -1) {
      this.bidOffers = this.bidOffers.filter((_, i) => i !== counteroffer)
      console.log(`${stock} in amount of ${Math.abs(shares)} stocks were sold by ${brokerName}`);
    } else {
      this.sellOffers.push(sellOffer)
      console.log(`${stock} in amount of ${shares} offered by ${brokerName}`);
    }

    // this.getStockOffers(); // to print current offers after every offer
  }

  // searches for sell offers, if finds one that matches exactly, then, acquires it.
  bid(bidOffer: BuySellOffer): void {
    const { stock, shares, brokerCode } = bidOffer;
    const brokerName = this.brokers[brokerCode].name;

    const counteroffer = this.sellOffers.findIndex(o => o.shares === shares && o.stock === stock)
    if (counteroffer !== -1) {
      this.sellOffers = this.sellOffers.filter((_, i) => i !== counteroffer)
      console.log(`${stock} in amount of ${Math.abs(shares)} stocks were bought by ${brokerName}`);
    } else {
      this.bidOffers.push(bidOffer)
      console.log(`${stock} in amount of ${shares} requested by ${brokerName}`);
    }

    // this.getStockOffers(); // to print current offers after every bid
  }

  // prints current bid and sell offers
  getStockOffers() {
    this.sellOffers.forEach(o => {
      console.log(`ask ${o.stock} : ${o.shares}`);
    })
    this.bidOffers.forEach(o => {
      console.log(`bid ${o.stock} : ${o.shares}`);
    })
  }
}
