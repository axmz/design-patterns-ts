import { StockPricesSubject } from "./subject";
import { StockPricesObserver } from "./observer";
import {run} from './observer with singleton' // example: observer + singleton patterns used together

const subject = new StockPricesSubject();
const observer1 = new StockPricesObserver(subject, 'Obs1');
const observer2 = new StockPricesObserver(subject, 'Obs2');

subject.setPrices({ibm: 100, aapl: 200, goog: 300})
subject.unregister(observer2);
subject.setPrices({ibm: 150, aapl: 250, goog: 350})
subject.unregister(observer1);
// subject.notify(); // notify without price setting

console.log('-------------- observer + singleton --------------')
run();