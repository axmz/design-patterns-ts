interface EnemyAttacker {
  fireWeapon(): void,
  driveForward(): void,
  assignDriver(name: string): void
}

class EnemyTank implements EnemyAttacker {
  random: number = Math.random()

  fireWeapon(): void {
    console.log(`Attacks -${this.random}`)
  }  

  driveForward(): void {
    console.log(`Drives distance ${this.random}`)
  }

  assignDriver(name: String): void {
    console.log(`${name} is driving the tank`)
  }
}

class EnemyRobot {
  random: number = Math.random()

  smashWithHands(): void {
    console.log(`Smashes -${this.random}`)
  }

  walkForward(): void {
    console.log(`Walks distance ${this.random}`)
  }

  reactToHuman(name: string): void {
    console.log(`Tramps on ${name}`)
  }
}

class EnemyRobotAdapter implements EnemyAttacker {
  constructor(private robot: EnemyRobot){}

  fireWeapon(): void {
    this.robot.smashWithHands()
  }

  driveForward(): void {
    this.robot.walkForward()
  }
  
  assignDriver(name: string): void {
    this.robot.reactToHuman(name)
  }
}

const tank = new EnemyTank()
const robot = new EnemyRobot()
const adaptedRobot = new EnemyRobotAdapter(robot)

tank.fireWeapon()
tank.driveForward()
tank.assignDriver('Bill')
robot.smashWithHands()
robot.walkForward()
robot.reactToHuman('Bill')
adaptedRobot.fireWeapon()
adaptedRobot.driveForward()
adaptedRobot.assignDriver('Bill')