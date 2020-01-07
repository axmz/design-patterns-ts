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
})({"proxy.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var state_1 = require("./state");

var ATMProxy =
/** @class */
function () {
  function ATMProxy() {}

  ATMProxy.prototype.getATMState = function () {
    var realATM = new state_1.ATM();
    return realATM.getATMState();
  };

  ATMProxy.prototype.getCashInATM = function () {
    var realATM = new state_1.ATM();
    return realATM.getCashInATM();
  };

  return ATMProxy;
}();

exports.ATMProxy = ATMProxy;
},{"./state":"state.ts"}],"state.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var proxy_1 = require("./proxy"); ////////////////////////////////////////////////////////////////////////////////
// class ATM
////////////////////////////////////////////////////////////////////////////////


var ATM =
/** @class */
function () {
  function ATM() {
    this.cashInATM = 2000;
    this.correctPINEntered = false;
    this.hasCard = new HasCard(this);
    this.noCard = new NoCard(this);
    this.hasPIN = new HasPIN(this);
    this.noCash = new NoCash(this);
    this.ATMState = this.noCard;

    if (this.cashInATM <= 0) {
      this.ATMState = this.noCash;
    }
  } ////////////////////////////////////////////////////////////
  // Getters and setters
  ////////////////////////////////////////////////////////////


  ATM.prototype.getATMState = function () {
    // this method is from GetATMData interface 
    return this.ATMState;
  };

  ATM.prototype.setATMState = function (newState) {
    this.ATMState = newState;
  };

  ATM.prototype.setCorectPINEntered = function (bool) {
    this.correctPINEntered = bool;
  };

  ATM.prototype.getCashInATM = function () {
    // this method is from GetATMData interface 
    return this.cashInATM;
  };

  ATM.prototype.setCashInATM = function (amount) {
    this.cashInATM = amount;
  }; ////////////////////////////////////////////////////////////
  // ATM STATE METHODS
  ////////////////////////////////////////////////////////////


  ATM.prototype.insertCard = function () {
    this.ATMState.insertCard();
  };

  ATM.prototype.ejectCard = function () {
    this.ATMState.ejectCard();
  };

  ATM.prototype.insertPIN = function (PIN) {
    this.ATMState.insertPIN(PIN);
  };

  ATM.prototype.requestCash = function (amount) {
    this.ATMState.requestCash(amount);
  }; ////////////////////////////////////////////////////////////
  // Get respective state from ATM
  ////////////////////////////////////////////////////////////


  ATM.prototype.getHasCardState = function () {
    return this.hasCard;
  };

  ATM.prototype.getNoCardState = function () {
    return this.noCard;
  };

  ATM.prototype.getHasPIN = function () {
    return this.hasPIN;
  };

  ATM.prototype.getNoCashState = function () {
    return this.noCash;
  };

  return ATM;
}();

exports.ATM = ATM; ////////////////////////////////////////////////////////////////////////////////
// ATM States
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
// Has Card
////////////////////////////////////////////////////////////

var HasCard =
/** @class */
function () {
  function HasCard(ATM) {
    this.ATM = ATM;
  }

  HasCard.prototype.insertCard = function () {
    console.log("Card is already inserted");
  };

  HasCard.prototype.ejectCard = function () {
    console.log("Card ejected");
    this.ATM.setATMState(this.ATM.getNoCardState());
  };

  HasCard.prototype.insertPIN = function (PIN) {
    if (PIN === 1234) {
      this.ATM.setCorectPINEntered(true);
      console.log("PIN is correct.");
      this.ATM.setATMState(this.ATM.getHasPIN());
    } else {
      this.ATM.setCorectPINEntered(false);
      console.log("PIN is incorect. Try again");
      this.ATM.setATMState(this.ATM.getHasCardState());
    }
  };

  HasCard.prototype.requestCash = function (amount) {
    console.log("Pls enter PIN");
  };

  return HasCard;
}(); ////////////////////////////////////////////////////////////
// No Card
////////////////////////////////////////////////////////////


var NoCard =
/** @class */
function () {
  function NoCard(ATM) {
    this.ATM = ATM;
  }

  NoCard.prototype.insertCard = function () {
    console.log("Card inserted. Pls enter your PIN");
    this.ATM.setATMState(this.ATM.getHasCardState());
  };

  NoCard.prototype.ejectCard = function () {
    console.log("No card inserted");
  };

  NoCard.prototype.insertPIN = function (PIN) {
    console.log("Pls insert card");
  };

  NoCard.prototype.requestCash = function (amount) {
    console.log("Pls insert card");
  };

  return NoCard;
}(); ////////////////////////////////////////////////////////////
// Has PIN
////////////////////////////////////////////////////////////


var HasPIN =
/** @class */
function () {
  function HasPIN(ATM) {
    this.ATM = ATM;
  }

  HasPIN.prototype.insertCard = function () {
    console.log("Card is already inserted");
  };

  HasPIN.prototype.ejectCard = function () {
    console.log("Card ejected");
    this.ATM.setATMState(this.ATM.getNoCardState());
  };

  HasPIN.prototype.insertPIN = function (PIN) {
    console.log("PIN is already introduced");
  };

  HasPIN.prototype.requestCash = function (amount) {
    if (amount > this.ATM.getCashInATM()) {
      console.log("Not enough cash in ATM");
      console.log("Ejecting your card");
      this.ATM.setATMState(this.ATM.getNoCardState());
    } else {
      console.log("Here is your " + amount);
      console.log("Ejecting card");
      this.ATM.setCashInATM(this.ATM.getCashInATM() - amount);
      this.ATM.setATMState(this.ATM.getNoCardState());
    }

    if (this.ATM.getCashInATM() <= 0) {
      this.ATM.setATMState(this.ATM.getNoCashState());
    }
  };

  return HasPIN;
}(); ////////////////////////////////////////////////////////////
// No Cash
////////////////////////////////////////////////////////////


var NoCash =
/** @class */
function () {
  function NoCash(ATM) {
    this.ATM = ATM;
  }

  NoCash.prototype.insertCard = function () {
    console.log("No cash in ATM");
    console.log("Ejecting card");
  };

  NoCash.prototype.ejectCard = function () {
    console.log("No card");
  };

  NoCash.prototype.insertPIN = function (PIN) {
    console.log("No cash in ATM");
    console.log("No card");
  };

  NoCash.prototype.requestCash = function (amount) {
    console.log("No cash in ATM");
  };

  return NoCash;
}(); // proxy is used for methods tracing


var atm = new ATM();
var handler = {
  get: function get(target, prop, receiver) {
    console.log("%c" + prop, "background: #333; color: #bada55");
    return target[prop];
  }
};
var p = new Proxy(atm, handler);
p.insertCard();
p.insertPIN(1234);
p.insertPIN(1234);
p.ejectCard();
p.insertCard();
p.insertPIN(1234);
p.requestCash(1000);
p.insertCard();
p.insertPIN(1234);
p.requestCash(100);
var realATM = new ATM();
var atmProxy = new proxy_1.ATMProxy();
var cash = atmProxy.getCashInATM();
console.log(cash);
},{"./proxy":"proxy.ts"}],"../node_modules/parcel/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "8077" + '/');

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
},{}]},{},["../node_modules/parcel/src/builtins/hmr-runtime.js","state.ts"], null)
//# sourceMappingURL=/state.aa6d5b85.js.map