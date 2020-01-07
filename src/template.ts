abstract class Hoagie {
  protected abstract addMeat(): void
  protected abstract addChease(): void
  protected abstract addVegetables(): void
  protected abstract addCondiments(): void

  private cutBun(): void {
    console.log('Cutting the bun')
  }

  private wrapTheHoagie(): void {
    console.log('The sandwitch is wraped')
  }

  private customerWantsMeat(): boolean {return true}
  private customerWantsChease(): boolean { return true}
  private customerWantsVegetables(): boolean {return true}
  private customerWantsCondiments(): boolean {return true}

  makeSandwitch() {
    this.cutBun()
    this.customerWantsMeat() ? this.addMeat() : 'do nothing'
    this.customerWantsChease() ? this.addChease() :'do nothing'
    this.customerWantsVegetables() ? this.addVegetables() :'do nothing'
    this.customerWantsCondiments() ? this.addCondiments() : 'do nothing'
    this.wrapTheHoagie()
  }
}

class ItalianHoagie extends Hoagie {
  protected addMeat(): void { console.log('Meat added') }
  protected addChease(): void { console.log('Chease added') }
  protected addVegetables(): void { console.log('Vegetables added') }
  protected addCondiments(): void { console.log('Condiments added') }
} 

class VegetarianHoagie extends Hoagie {
  protected addMeat(): void { }  
  protected addChease(): void { }
  protected addVegetables(): void { console.log('Vegetables added') }
  protected addCondiments(): void { console.log('Condiments added') }
}

const italian = new ItalianHoagie
italian.makeSandwitch()
const vegetarian = new VegetarianHoagie
vegetarian.makeSandwitch()