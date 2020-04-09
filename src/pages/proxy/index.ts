import {ATM } from './atm'
import { ATMProxy, logger } from './proxy';

const atm = new ATM();

// it is a native JS Proxy example - it has nothing to do with proxy design pattern.
// this proxy handler is used for methods tracing (loggin). 
console.groupCollapsed('native Proxy example') 
const p = new Proxy(atm, logger);
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
console.groupEnd();

// here the access to ATM methods is restricted by Proxy design pattern
console.group('proxy design pattern example') 
const atmProxy = new ATMProxy(atm)
const cashInAtm = atmProxy.getCashInATM()
console.log({ cashInAtm })
console.groupEnd();