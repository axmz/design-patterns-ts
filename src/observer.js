////////////////////////////////////////////////////////////////////////////////
// Simple observer
////////////////////////////////////////////////////////////////////////////////

// class Subject {
//   constructor() {
//     this.observers = [];
//   }

//   register(o) {
//     this.observers.push(o);
//     console.log("observer registered");
//   }

//   unregister() {}

//   notify(e) {
//     this.observers.forEach(o => o.update(e));
//   }
// }

// class Observer {
//   update(e) {
//     console.log(e);
//   }
// }

// const subject = new Subject();
// const observer = new Observer();

// subject.register(observer);
// subject.notify('some data')
// subject.notify('some data')

////////////////////////////////////////////////////////////////////////////////
//
////////////////////////////////////////////////////////////////////////////////

class Subject {
  constructor() {
    this.observers = [];
    this.ibm = 100;
    this.aapl = 200;
    this.goog = 300;
  }

  register(o) {
    this.observers.push(o);
    console.log("observer registered");
  }

  unregister() {}

  notify() {
    this.observers.forEach(o => o.update(this.ibm, this.aapl, this.goog));
  }

  setIBMPrice() {
    this.ibm;
    this.notify();
  }
  setAAPLPrice() {
    this.ibm;
    this.notify();
  }
  setGOOGPrice() {
    this.ibm;
    this.notify();
  }
}

// class Observer {
//   constructor (subject) {
//     this.subject = subject
//   }

//   init() {
//     console.log("initialized");
//     this.subject.register(this);
//   }

//   update(ibm, appl, goog) {
//     console.log(ibm, appl, goog);
//   }
// }

const Observer = function (subject) {
  this.subject = subject

  // self registration to subject. not possible in class.
  this.init = function() {
    console.log('initialized')
    this.subject.register(this)
  }
  this.init();

  this.update = function(ibm, appl, goog) {
    console.log(ibm, appl, goog);
  }
}

const subject = new Subject();
const observer = new Observer(subject);

// subject.register(observer);
subject.notify();
subject.notify();
