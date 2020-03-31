interface RobotPlan {
  setRobotHead(head: string): void;
  setRobotTorso(torso: string): void;
  setRobotArms(arms: string): void;
  setRobotLegs(legs: string): void;
}

interface RobotBuilder {
  robot: RobotPlan;
  buildRobotHead(): this;
  buildRobotTorso(): this;
  buildRobotArms(): this;
  buildRobotLegs(): this;
}

class Robot implements RobotPlan {
  head: string = "";
  torso: string = "";
  arms: string = "";
  legs: string = "";

  constructor() {}

  setRobotHead(head: string): void {
    this.head = head;
  }
  setRobotTorso(torso: string): void {
    this.torso = torso;
  }
  setRobotArms(arms: string): void {
    this.arms = arms;
  }
  setRobotLegs(legs: string): void {
    this.legs = legs;
  }
}

class CoolRobotBuilder implements RobotBuilder {
  robot: RobotPlan;
  constructor() {
    this.robot = new Robot();
  }

  buildRobotHead(): this {
    this.robot.setRobotHead("Tin head");
    return this;
  }
  buildRobotTorso(): this {
    this.robot.setRobotTorso("Tin torso");
    return this;
  }
  buildRobotArms(): this {
    this.robot.setRobotArms("Blowtorch arm");
    return this;
  }
  buildRobotLegs(): this {
    this.robot.setRobotLegs("Roller skates");
    return this;
  }
  build(): this {
    return this;
  }
}

class RobotEngineer {
  constructor(public robotBuilder: RobotBuilder) {}

  makeRobot() {
    this.robotBuilder.buildRobotHead();
    this.robotBuilder.buildRobotTorso();
    this.robotBuilder.buildRobotArms();
    this.robotBuilder.buildRobotLegs();
    return this.robotBuilder.robot;
  }
}

const coolRobotBuilder = new CoolRobotBuilder();
const robotEngineer = new RobotEngineer(coolRobotBuilder);
const robotRob = robotEngineer.makeRobot();
console.log(robotRob);

////////////////////////////////////////////////////////////////////////////////
// Builder patter but a more simple example
////////////////////////////////////////////////////////////////////////////////

interface SimpleRobotBuilder {
  buildRobotHead(head: string): this;
  buildRobotBody(body: string): this;
  buildRobotArms(arms: string): this;
  buildRobotLegs(legs: string): this;
}


class SimpleRobot implements SimpleRobotBuilder {
  head: string = "";
  body: string = "";
  arms: string = "";
  legs: string = "";

  buildRobotHead(head: string): this {
    this.head = head;
    return this;
  }
  buildRobotBody(body: string): this {
    this.body = body;
    return this;
  }
  buildRobotArms(arms: string): this {
    this.arms = arms;
    return this;
  }
  buildRobotLegs(legs: string): this {
    this.legs = legs;
    return this;
  }
  build(): this {
    return this;
  }
}

const simpleRobot = new SimpleRobot();
simpleRobot
  .buildRobotHead("tin head")
  .buildRobotBody("tin body")
  .buildRobotArms("blowtorch arms")
  .buildRobotLegs("roller skates")
  .build();
console.log( simpleRobot);
