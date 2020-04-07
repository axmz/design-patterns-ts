import {ATM } from './atm'
import { ATMProxy } from './proxy';
// proxy is used for methods tracing
const atm = new ATM();

const handler = {
  get(target: any, prop: any, receiver: any) {
    console.log(`%c${prop}`, "background: #333; color: #bada55");
    return target[prop];
  }
};

const p = new Proxy(atm, handler);
atm.insertCard();
atm.insertPIN(1234);
atm.insertPIN(1234);
atm.ejectCard();
atm.insertCard();
atm.insertPIN(1234);
atm.requestCash(1000);
atm.insertCard();
atm.insertPIN(1234);
atm.requestCash(100);
const realATM = new ATM();
const atmProxy = new ATMProxy()
const cash = atmProxy.getCashInATM()
console.log({ cash })