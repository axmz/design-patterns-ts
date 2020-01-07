////////////////////////////////////////////////////////////////////////////////
// Singleton
////////////////////////////////////////////////////////////////////////////////

const Singleton = function() {
  this.firstInstance = null;

  this.createInstance = function() {
    this.firstInstance = {};
  };

  this.getInstance = function() {
    if (!this.firstInstance) {
      this.createInstance();
    }
    return this.firstInstance;
  };

  return this
};

const singleton1 = Singleton();
const singleton2 = Singleton();
const inst1 = singleton1.getInstance();
const inst2 = singleton2.getInstance();
console.log(singleton1.getInstance() === singleton2.getInstance());
inst1.name = "name";
console.log(inst1.name);
console.log(inst2.name);

// console.log(singleton1.getInstance() === singleton2.getInstance())
// console.log(singleton1.name)
// console.log(singleton2.name)
