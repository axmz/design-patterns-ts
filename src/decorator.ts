interface Pizza {
	getDescription(): string;
	getCost(): number;
}

class PlainPizza implements Pizza {
	getDescription(): string {
		return "Plain Dough";
	}
	getCost(): number {
		return 4;
	}
}

abstract class ToppingDecorator implements Pizza {
	protected tempPizza: Pizza;

	constructor(public newPizza: Pizza) {
		this.tempPizza = newPizza;
	}

	getDescription(): string {
		return this.tempPizza.getDescription();
	}

	getCost(): number {
		return this.newPizza.getCost();
	}
}

class Mozzarella extends ToppingDecorator {
	constructor(public newPizza: Pizza) {
		super(newPizza);
	}

	getDescription(): string {
		return this.tempPizza.getDescription() + " + Mozzarella";
	}

	getCost(): number {
		return this.newPizza.getCost() + 0.5;
	}
}

class TomatoSauce extends ToppingDecorator {
	constructor(public newPizza: Pizza) {
		super(newPizza);
	}

	getDescription(): string {
		return this.tempPizza.getDescription() + " + Tomato Sauce";
	}

	getCost(): number {
		return this.newPizza.getCost() + 0.35;
	}
}

const pizza = new Mozzarella(new TomatoSauce(new PlainPizza()));
console.log(pizza.getDescription());
console.log(pizza.getCost());
