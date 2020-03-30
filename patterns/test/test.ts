////////////////////////////////////////////////////////////////////////////////
//
////////////////////////////////////////////////////////////////////////////////
// const PP = (function () {
// 	function PPP (name) {
// 		// console.log('run', that)
// 		this.name = name
// 	}
// 	return PPP
// }())

// const pp =  (PP())('pp')
// const ppp = new (PP()('ppp'))
// console.log(pp)
// console.log(ppp)

// let user = new function() {
//   console.log()
//   this.name = "John";
//   this.isAdmin = false;
// };

// console.log(user)

////////////////////////////////////////////////////////////////////////////////
//
////////////////////////////////////////////////////////////////////////////////
// class User {

//   constructor(private name: string) {
//     // invokes the setter
//     // this._name = name;
//   }

//   get name() {
//     return this._name;
//   }

//   set name(value) {
//     if (value.length < 4) {
//       console.log("Name is too short.");
//       return;
//     }
//     this._name = value;
//   }

// }

// let user = new User("Jn");
// console.log(user._name)

////////////////////////////////////////////////////////////////////////////////
// Singleton in typescript
////////////////////////////////////////////////////////////////////////////////
// class Department {
//   private static instance: Department

//   public employees: string[] = ['alex', 'tom', 'max']
//   private constructor(public name: string = "Accounting") {
//     // this.name = name
//   }

//   static getInstance() {
//     if(Department.instance) {
//       return Department.instance
//     } else {
//       this.instance = new Department('ACC')
//       return Department.instance
//     }
//   }
// }

// const dept2 = Department.getInstance()
// console.log(dept2)

////////////////////////////////////////////////////////////////////////////////
// extending a class at instantiation @decorator
////////////////////////////////////////////////////////////////////////////////
// @superCat('supercat')
// class Cat {
//   constructor(public name: string) {}

//   sound() {
//     console.log('meow')
//   }
// }

// function superCat (sound: string) {
//   return function (originalConstructor: any) {
//     return class SuperCat extends originalConstructor {
//       constructor(name: string) {
//         super(name)

//       }

//       sound() {
//         console.log('meeeeeow')
//       }
//     }
//   }
// }

// const supercat = new Cat('tom')
// supercat.sound()
// console.log(supercat)

////////////////////////////////////////////////////////////////////////////////
// autobind - what for?
////////////////////////////////////////////////////////////////////////////////

// class Printer {
//   message:string = 'works!'

//   @autobind
//   print () {
//     console.log(this.message)
//   }
// }

// function autobind (_: any, __: string, desc: PropertyDescriptor) {
//   console.log('desc',desc)
//   const originalMethod = desc.value
//   const adjDesc = {
//     configurable: true,
//     enumerable: false,
//     get() { return originalMethod.bind(this)}
//   }
//   console.log(desc, adjDesc)
//   return adjDesc
// }

// const printer = new Printer()
// const btn = document.querySelector('button')!
// console.dir(btn)
// btn.addEventListener('click', printer.print )

////////////////////////////////////////////////////////////////////////////////
// validation decorators
////////////////////////////////////////////////////////////////////////////////
// interface ValidatorConfig {
//   [className: string]: {
//     [propertyName: string] : string[]
//   }
// }

// const registeredValidators: ValidatorConfig ={}

// function Required (target: any, propName: string) {
//   const className = target.constructor.name
//     registeredValidators[className] = {
//       ...registeredValidators[className],
//       [propName] : ['required']
//   }
//   console.log(registeredValidators)
// }

// function Positive (target: any, propName: string) {
//   const className = target.constructor.name
//     registeredValidators[className] = {
//       ...registeredValidators[className],
//       [propName] : ['positive']
//   }
//   console.log(registeredValidators)}

// function validate(obj: {[prop: string]: any}) {
//   const objName = obj.constructor.name
//   const objValidationConfig = registeredValidators[objName]
//   let isValid = true

//   if (!objValidationConfig) return isValid

//   for (const prop in objValidationConfig) {
//     for (const validator of objValidationConfig[prop]) {
//       switch (validator) {
//         case 'required':
//           isValid = isValid && !!obj[prop]
//           if (!isValid) throw "Input required";
//           break;
//         case 'positive':
//           isValid = isValid && obj[prop] > 0;
//           if(!isValid) throw "Should be positive";
//           break;
//         default:
//           isValid
//           break;
//       }
//     }
//   }
//   return isValid
// }

// class Course {
//   @Required
//   title: string
//   @Positive
//   price: number
//   constructor(t: string, p: number) {
//     this.title = t
//     this.price = p
//   }
// }

// const form = document.querySelector('form')!
// form.addEventListener('submit', (event) => {
//   event.preventDefault()
//   const titleEl = form.querySelector('#title') as HTMLInputElement
//   const priceEl = form.querySelector('#price') as HTMLInputElement

//   const title: string = titleEl.value
//   const price: number = +priceEl.value

//   const course = new Course(title, price)
//   try {
//     validate(course)
//     console.log(course)
//   } catch (error) {
//     console.log(error)
//   }
// })

////////////////////////////////////////////////////////////////////////////////
// prototype
////////////////////////////////////////////////////////////////////////////////
// const Unit = function (this: any, name: string) {
//   this.name = name
//   this.getName = () => {
//     console.log(this.name)
//   }
// }
// Unit.prototype = {
//   getAnotherName() {
//     console.log(this.name)
//   }
// }
// Unit.prototype.constructor = Unit

// const unit = new Unit('alex')
// unit.getName()
// console.log(unit)
// console.dir(Unit)
// console.log(Unit.prototype)

////////////////////////////////////////////////////////////////////////////////
// Decorator design pattern
////////////////////////////////////////////////////////////////////////////////

// class IceCream {
//   constructor(flavor) {
//     this.flavor = flavor;
//   }

//   describe() {
//     // console.log(this.constructor.name);
//     console.log("Normal ice cream,", this.flavor, " flavored");
//   }
// }

// function decorateWith(object, decoration) {
//   object.decoration = decoration;
//   let oldDescr = object.describe; //saving the reference to the method so we can use it later
//   console.log('closure this', this)
//   object.describe = function() {
//     const that = this
//     console.log('this', this);
//     console.log('object', object);
//     oldDescr();
//     oldDescr.apply(object);
//     console.log("With extra", this.decoration);
//   };
//   return object;
// }

// let oIce = new IceCream("vanilla"); //A normal vanilla flavored ice cream...
// oIce.describe();

// let vanillaWithNuts = decorateWith(oIce, "nuts"); //... and now we add some nuts on top of it
// // debugger;
// vanillaWithNuts.describe();

////////////////////////////////////////////////////////////////////////////////
// this in Class and its Children
////////////////////////////////////////////////////////////////////////////////

// class Parent {
//   constructor(name) {
//     this.name = name
//   }

//   getName = () => {
//     console.log(this.name)
//     console.log('this', this)
//   }
// }

// class Child extends Parent {
//   constructor(name) {
//     super(name)
//   }
// }

// class ChildChild extends Child {
//   constructor(name) {
//     super(name)
//   }
// }
// const parent = new Parent('Parent')
// parent.getName()
// const child = new Child('Child')
// child.getName()
// const childchild = new ChildChild('ChildChild')
// child.getName()

////////////////////////////////////////////////////////////////////////////////
// typescript type annotation in functions
////////////////////////////////////////////////////////////////////////////////

// const sum: (a: number, b: number) => () => number = (a: number, b: number) => {
//   return () => a + b;
// };

// const sum  = (a: number, b: number): number => {
//   return a + b
// }

// const sum: (a: number, b: number) => number = (a: number, b: number) => {
//   return a + b
// }

// console.log("sum", sum(2, 2));
