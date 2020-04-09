import { ATM } from "./atm";
import { ATMState } from "./states";

export interface GetATMData {
  // these are the only methods exposed with the proxy
  getATMState(): ATMState;
  getCashInATM(): number;
}

export class ATMProxy implements GetATMData {
  constructor(private realATM: ATM) {}

  getATMState(): ATMState {
    // const realATM = new ATM();
    return this.realATM.getATMState();
  }

  getCashInATM(): number {
    // const realATM = new ATM();
    return this.realATM.getCashInATM();
  }
}

// it is a native JS Proxy example - it has nothing to do with proxy design pattern.
// this proxy handler is used for methods tracing (loggin). 
export const logger = {
  get(target: any, prop: any, receiver: any) {
    console.log(`%c${prop}`, "background: #333; color: #bada55");
    return target[prop];
  }
};
