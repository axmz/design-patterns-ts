// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"test.js":[function(require,module,exports) {
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

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
var IceCream =
/*#__PURE__*/
function () {
  function IceCream(flavor) {
    _classCallCheck(this, IceCream);

    this.flavor = flavor;
  }

  _createClass(IceCream, [{
    key: "describe",
    value: function describe() {
      // console.log(this.constructor.name);
      console.log("Normal ice cream,", this.flavor, " flavored");
    }
  }]);

  return IceCream;
}();

function decorateWith(object, decoration) {
  object.decoration = decoration;
  var oldDescr = object.describe; //saving the reference to the method so we can use it later

  console.log('closure this', this);

  object.describe = function () {
    var that = this;
    console.log('this', this);
    console.log('object', object);
    oldDescr();
    oldDescr.apply(object);
    console.log("With extra", this.decoration);
  };

  return object;
}

var oIce = new IceCream("vanilla"); //A normal vanilla flavored ice cream...

oIce.describe();
var vanillaWithNuts = decorateWith(oIce, "nuts"); //... and now we add some nuts on top of it
// debugger;

vanillaWithNuts.describe();

var Parent =
/*#__PURE__*/
function () {
  function Parent(name) {
    _classCallCheck(this, Parent);

    this.name = name;
  }

  _createClass(Parent, [{
    key: "getName",
    value: function getName() {
      console.log(this.name);
      console.log('this', this);
    }
  }]);

  return Parent;
}();

var Child =
/*#__PURE__*/
function (_Parent) {
  _inherits(Child, _Parent);

  function Child(name) {
    _classCallCheck(this, Child);

    return _possibleConstructorReturn(this, _getPrototypeOf(Child).call(this, name));
  }

  return Child;
}(Parent);

var parent = new Parent('Parent');
parent.getName();
var child = new Child('Child');
child.getName();
},{}],"../node_modules/parcel/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "10467" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel/src/builtins/hmr-runtime.js","test.js"], null)
//# sourceMappingURL=/test.e98b79dd.js.map