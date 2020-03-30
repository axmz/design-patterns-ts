import {
  ShipType,
  RocketEnemyShip,
  UFOEnemyShip
} from "./ships";

export class EnemyShipFactory {
  ships = {
    RocketEnemyShip: RocketEnemyShip,
    UFOEnemyShip: UFOEnemyShip
  };

  make(type: ShipType) {
    return new this.ships[type]()
  }
}
