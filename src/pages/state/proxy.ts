import { ATM } from "./atm";
import { ATMState } from "./states";

export interface GetATMData {
  getATMState(): ATMState;
  getCashInATM(): number;
}

export class ATMProxy implements GetATMData {
  getATMState(): ATMState {
    const realATM = new ATM();
    return realATM.getATMState();
  }

  getCashInATM(): number {
    const realATM = new ATM();
    return realATM.getCashInATM();
  }
}

// proxy is used for methods tracing
// const handler = {
//   get(target: any, prop: any, receiver: any) {
//     console.log(`%c${prop}`, "background: #333; color: #bada55");
//     return target[prop];
//   }
// };

// const p = new Proxy(atm, handler);