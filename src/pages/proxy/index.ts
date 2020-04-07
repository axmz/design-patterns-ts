import {ATMState, ATM} from '../state'

export interface GetATMData {
  getATMState(): ATMState
  getCashInATM(): number
}

export class ATMProxy implements GetATMData {
  getATMState(): ATMState {
    const realATM = new ATM()
    return realATM.getATMState()
  }  

  getCashInATM(): number {
    const realATM = new ATM()
    return realATM.getCashInATM()
  }
}