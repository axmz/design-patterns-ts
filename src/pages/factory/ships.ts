export type ShipType = 'RocketEnemyShip' | 'UFOEnemyShip';

export abstract class EnemyShip {
  abstract name: ShipType;
  attack(): void {
    console.log(`${this.name} attacks`);
  }
}

export class RocketEnemyShip extends EnemyShip {
  name: ShipType;
  constructor() {
    super();
    this.name = 'RocketEnemyShip';
  }
}

export class UFOEnemyShip extends EnemyShip {
  name: ShipType;
  constructor() {
    super();
    this.name = 'UFOEnemyShip'
  }
}


