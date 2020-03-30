class StockOffer {
  constructor(
    public stockSymbol: string,
    public stockShares: number,
    public collCode: number
  ) {}
}

interface Mediator {
  saleOffer(stock: string, shares: number, collCode: number): void;
  buyOffer(stock: string, shares: number, collCode: number): void;
  addColleague(colleague: Colleague): void;
}

abstract class Colleague {
  public colleagueCode: number = 0;
  constructor(public mediator: Mediator) {
    this.mediator.addColleague(this);
  }

  saleOffer(stock: string, shares: number) {
    this.mediator.saleOffer(stock, shares, this.colleagueCode);
  }
  buyOffer(stock: string, shares: number) {
    this.mediator.buyOffer(stock, shares, this.colleagueCode);
  }
}

class GormanSlacks extends Colleague {
  constructor(mediator: Mediator) {
    super(mediator);
    console.log("GS signed up @ stockexchange");
  }
}

class JTPoorman extends Colleague {
  constructor(mediator: Mediator) {
    super(mediator);
    console.log("JTP signed up @ stockexchange");
  }
}

class StockMediator implements Mediator {
  colleagues: Colleague[] = [];
  buyOffers: StockOffer[] = [];
  sellOffers: StockOffer[] = [];
  collCode: number = 0;
  constructor() {}
  addColleague(colleague: Colleague): void {
    this.colleagues.push(colleague);
    colleague.colleagueCode = this.collCode;
    this.collCode++;
  }

  saleOffer(stock: string, shares: number, collCode: number): void {
    let stockSold = false;
    this.buyOffers.some(offer => {
      if (offer.stockSymbol === stock && offer.stockShares === shares) {
        stockSold = true;
        console.log(`Stock ${stock} in amount of ${shares} stocks was acquired`);
        this.buyOffers = this.buyOffers.filter(
          of => of.stockSymbol === stock && of.stockShares === shares
        );
      }
    });

    if (!stockSold) {
      const offer = new StockOffer(stock, shares, collCode);
      this.sellOffers.push(offer);
      console.log(`${stock} in amount of ${shares} added to inventory`);
    }
  }

  buyOffer(stock: string, shares: number, collCode: number): void {
    let stockBought = false;
    this.sellOffers.some(offer => {
      if (offer.stockSymbol === stock && offer.stockShares === shares) {
        stockBought = true;
        console.log(`Stock ${stock} in amount of ${shares} stocks was sold`);
        this.sellOffers = this.sellOffers.filter(
          of => of.stockSymbol === stock && of.stockShares === shares
        );
      }
    });

      if (!stockBought) {
        const offer = new StockOffer(stock, shares, collCode);
        this.buyOffers.push(offer);
        console.log(`${stock} in amount of ${shares} added to inventory`);
      }
  }

  getStockOffers () {
    console.log('Stock SELL Offers')
    this.sellOffers.forEach(offer => {
      console.log(`${offer.stockShares} of ${offer.stockSymbol}`)
    })
    console.log('Stock BUY Offers')
    this.buyOffers.forEach(offer => {
      console.log(`${offer.stockShares} of ${offer.stockSymbol}`)
    })
  }
}

const mediator = new StockMediator()
const gs = new GormanSlacks(mediator)
const jtp = new JTPoorman(mediator)
console.log(gs.colleagueCode)
console.log(jtp.colleagueCode)
gs.saleOffer('GOOG', 100)
gs.saleOffer('AAPL', 300)
jtp.buyOffer('GOOG', 100)
jtp.saleOffer('TSLA', 300)
console.log(mediator.sellOffers)
console.log(mediator.buyOffers)
gs.buyOffer('TSLA', 400)
console.log(mediator.sellOffers)
console.log(mediator.buyOffers)
jtp.saleOffer('TSLA', 400)
console.log(mediator.sellOffers)
console.log(mediator.buyOffers)

mediator.getStockOffers()