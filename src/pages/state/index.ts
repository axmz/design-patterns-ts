import {ATM } from './atm'

const atm = new ATM();

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