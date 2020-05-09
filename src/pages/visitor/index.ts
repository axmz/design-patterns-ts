interface Visitor {
  visit(item: Liquor): number;
  visit(item: Tobacco): number;
}

class TaxVisitor implements Visitor {
  visit(item: Liquor): number;
  visit(item: Tobacco): number;
  visit(item: any) {
    if (item instanceof Liquor) {
      return item.price * 1.2;
    } else if (item instanceof Tobacco) {
      return item.price * 1.2;
    } else {
      return item.price * 1.0;
    }
  }
}

class HolidayTaxVisitor implements Visitor {
  visit(item: Liquor): number;
  visit(item: Tobacco): number;
  visit(item: any) {
    if (item instanceof Liquor) {
      return item.price * 1.4;
    } else if (item instanceof Tobacco) {
      return item.price * 1.4;
    } else {
      return item.price * 1.1;
    }
  }
}

interface Visitable {
  accept(visitor: Visitor): number;
}

class Liquor implements Visitable {
  constructor(public price: number) {}

  accept(visitor: Visitor): number {
    console.log("Liquor price, after tax: ")
    return visitor.visit(this);
  }
}

class Tobacco implements Visitable {
  constructor(public price: number) {}

  accept(visitor: Visitor): number {
    console.log("Tobacco price, after tax: ")
    return visitor.visit(this);
  }
}

const liquor = new Liquor(15);
const tobacco = new Tobacco(10);
const taxVisitor = new TaxVisitor();
const holidayTaxVisitor = new HolidayTaxVisitor();

console.group("Accepting visitors") 
console.log(tobacco.accept(taxVisitor));
console.log(tobacco.accept(holidayTaxVisitor));
console.log(liquor.accept(taxVisitor));
console.log(liquor.accept(holidayTaxVisitor));
console.groupEnd()

console.groupCollapsed("BTW, same results can be achieved by visiting() from Visitor")
console.log(taxVisitor.visit(tobacco));
console.log(holidayTaxVisitor.visit(tobacco));
console.log(taxVisitor.visit(liquor));
console.log(holidayTaxVisitor.visit(liquor));
console.groupEnd()