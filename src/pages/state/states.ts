import {ATM} from './atm'

export interface ATMState {
  insertCard(): void;
  ejectCard(): void;
  insertPIN(PIN: number): void;
  requestCash(amount: number): void;
}

////////////////////////////////////////////////////////////
// Has Card
////////////////////////////////////////////////////////////
export class HasCard implements ATMState {
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
export class NoCard implements ATMState {
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
export class HasPIN implements ATMState {
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
      this.ATM.setCashInATM(this.ATM.getCashInATM() - amount);
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
export class NoCash implements ATMState {
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