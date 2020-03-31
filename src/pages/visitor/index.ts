interface Visitor {
  visit(item: Liquor): number;
  visit(item: Tobacco): number;
}

class TaxVisitor implements Visitor {
  visit(item: Liquor): number;
  visit(item: Tobacco): number;
  visit(item: any) {
    if (item instanceof Liquor) {
      return item.price * 1.2
    } else if (item instanceof Tobacco) {
      return item.price * 1.2
    } else {
      return item.price * 1.0
    }
  }
}

class HolidayTaxVisitor implements Visitor {
  visit(item: Liquor): number;
  visit(item: Tobacco): number;
  visit(item: any) {
    if (item instanceof Liquor) {
      return item.price * 1.4
    } else if (item instanceof Tobacco) {
      return item.price * 1.4
    } else {
      return item.price * 1.1
    }
  }
}

interface Visitable {
  accept(visitor: Visitor): number;
}

class Liquor implements Visitable {
  constructor(public price: number) {}

  accept(visitor: Visitor): number {
    return visitor.visit(this);
  }
}

class Tobacco implements Visitable {
  constructor(public price: number) {}

  accept(visitor: Visitor): number {
    return visitor.visit(this);
  }
}

const liquor = new Liquor(15)
const tobacco = new Tobacco(10)
const taxVisitor = new TaxVisitor()
const holidayTaxVisitor = new HolidayTaxVisitor()
// debugger;
const priceLiquor =taxVisitor.visit(liquor)
const priceTobacco = taxVisitor.visit(tobacco)
console.log(priceLiquor)
console.log(priceTobacco)