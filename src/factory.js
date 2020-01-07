////////////////////////////////////////////////////////////////////////////////
// Factory 
////////////////////////////////////////////////////////////////////////////////

class EmployeeFactory {
  constructor(type, name) {
    return  new Professions[type](type, name)
  }
}

// to extend Carpenter and Plumber
class Employee {
  constructor(type, name) {
    this.type = type;
    this.name = name;
    this.wage = undefined
  }

  say() {
    console.log(`My name is ${this.name} and I am ${this.type}. I charge ${this.wage}$ per hour`);
  };

}

class Carpenter extends Employee {
  constructor (type, name) {
    super(type, name)
    this.wage = 20
  }
}

class Plumber extends Employee {
  constructor (type, name) {
    super(type, name)
    this.wage = 10
  }
}

// This is to keep all type of professions in one organized place
const Professions = {}
Professions[`carpenter`] = Carpenter;
Professions[`plumber`] = Plumber;

const carpenter = new EmployeeFactory("carpenter", "john")
carpenter.say();