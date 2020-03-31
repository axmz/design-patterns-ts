import { EnemyShipFactory } from './shipFactory'

const factory = new EnemyShipFactory()
const rocket = factory.make('RocketEnemyShip')
const ufo = factory.make('UFOEnemyShip')

rocket.attack();
ufo.attack();