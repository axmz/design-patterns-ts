import {GetATMData, ATMProxy} from './proxy'

export interface ATMState {
  insertCard(): void;
  ejectCard(): void;
  insertPIN(PIN: number): void;
  requestCash(amount: number): void;
}

////////////////////////////////////////////////////////////////////////////////
// class ATM
////////////////////////////////////////////////////////////////////////////////
export class ATM implements ATMState, GetATMData {
  private cashInATM = 2000;
  private correctPINEntered = false;
  protected hasCard: ATMState;
  protected noCard: ATMState;
  protected hasPIN: ATMState;
  protected noCash: ATMState;
  private ATMState: ATMState;

  constructor() {
    this.hasCard = new HasCard(this);
    this.noCard = new NoCard(this);
    this.hasPIN = new HasPIN(this);
    this.noCash = new NoCash(this);
    this.ATMState = this.noCard;
    if (this.cashInATM <= 0) {
      this.ATMState = this.noCash;
    }
  }


  ////////////////////////////////////////////////////////////
  // Getters and setters
  ////////////////////////////////////////////////////////////

  getATMState() {
    // this method is from GetATMData interface 
    return this.ATMState
  }

  setATMState(newState: ATMState): void {
    this.ATMState = newState;
  }

  setCorectPINEntered(bool: boolean) {
    this.correctPINEntered = bool;
  }

  getCashInATM(): number {
    // this method is from GetATMData interface 
    return this.cashInATM;
  }

  setCashInATM(amount: number): void {
    this.cashInATM = amount
  }

  ////////////////////////////////////////////////////////////
  // ATM STATE METHODS
  ////////////////////////////////////////////////////////////
  insertCard(): void {
    this.ATMState.insertCard();
  }
  ejectCard(): void {
    this.ATMState.ejectCard();
  }
  insertPIN(PIN: number): void {
    this.ATMState.insertPIN(PIN);
  }
  requestCash(amount: number): void {
    this.ATMState.requestCash(amount);
  }

  ////////////////////////////////////////////////////////////
  // Get respective state from ATM
  ////////////////////////////////////////////////////////////
  getHasCardState() {
    return this.hasCard;
  }
  getNoCardState() {
    return this.noCard;
  }
  getHasPIN() {
    return this.hasPIN;
  }
  getNoCashState() {
    return this.noCash;
  }
}

////////////////////////////////////////////////////////////////////////////////
// ATM States
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
// Has Card
////////////////////////////////////////////////////////////
class HasCard implements ATMState {
  constructor(private ATM: ATM) {}

  insertCard(): void {
    console.log("Card is already inserted");
  }
  ejectCard(): void {
    console.log("Card ejected");
    this.ATM.setATMState(this.ATM.getNoCardState());
  }
  insertPIN(PIN: number): void {
    if (PIN === 1234) {
      this.ATM.setCorectPINEntered(true);

      console.log("PIN is correct.");
      this.ATM.setATMState(this.ATM.getHasPIN());
    } else {
      this.ATM.setCorectPINEntered(false);

      console.log("PIN is incorect. Try again");
      this.ATM.setATMState(this.ATM.getHasCardState());
    }
  }
  requestCash(amount: number): void {
    console.log("Pls enter PIN");
  }
}

////////////////////////////////////////////////////////////
// No Card
////////////////////////////////////////////////////////////
class NoCard implements ATMState {
  constructor(private ATM: ATM) {}

  insertCard(): void {
    console.log("Card inserted. Pls enter your PIN");
    this.ATM.setATMState(this.ATM.getHasCardState());
  }
  ejectCard(): void {
    console.log("No card inserted");
  }
  insertPIN(PIN: number): void {
    console.log("Pls insert card");
  }
  requestCash(amount: number): void {
    console.log("Pls insert card");
  }
}

////////////////////////////////////////////////////////////
// Has PIN
////////////////////////////////////////////////////////////
class HasPIN implements ATMState {
  constructor(private ATM: ATM) {}
  insertCard(): void {
    console.log("Card is already inserted");
  }
  ejectCard(): void {
    console.log("Card ejected");
    this.ATM.setATMState(this.ATM.getNoCardState());
  }
  insertPIN(PIN: number): void {
    console.log("PIN is already introduced");
  }
  requestCash(amount: number): void {
    if (amount > this.ATM.getCashInATM()) {
      console.log("Not enough cash in ATM");
      console.log("Ejecting your card");
      this.ATM.setATMState(this.ATM.getNoCardState());
    } else {
      console.log("Here is your " + amount);
      console.log("Ejecting card");
      this.ATM.setCashInATM(this.ATM.getCashInATM() - amount)
      this.ATM.setATMState(this.ATM.getNoCardState());
    }
    if (this.ATM.getCashInATM() <= 0) {
      this.ATM.setATMState(this.ATM.getNoCashState());
    }
  }
}

////////////////////////////////////////////////////////////
// No Cash
////////////////////////////////////////////////////////////
class NoCash implements ATMState {
  constructor(private ATM: ATM) {}

  insertCard(): void {
    console.log("No cash in ATM");
    console.log("Ejecting card");
  }
  ejectCard(): void {
    console.log("No card");
  }
  insertPIN(PIN: number): void {
    console.log("No cash in ATM");
    console.log("No card");
  }
  requestCash(amount: number): void {
    console.log("No cash in ATM");
  }
}





// proxy is used for methods tracing
const atm = new ATM();

const handler = {
  get(target: any, prop: any, receiver: any) {
    console.log(`%c${prop}`, "background: #333; color: #bada55");
    return target[prop];
  }
};

const p = new Proxy(atm, handler);
p.insertCard();
p.insertPIN(1234);
p.insertPIN(1234)
p.ejectCard()
p.insertCard()
p.insertPIN(1234)
p.requestCash(1000)
p.insertCard()
p.insertPIN(1234)
p.requestCash(100)
const realATM = new ATM()
const atmProxy = new ATMProxy()
const cash = atmProxy.getCashInATM()
console.log(cash)