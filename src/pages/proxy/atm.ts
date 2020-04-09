import {ATMState, HasCard, HasPIN, NoCard, NoCash} from './states'
import { GetATMData } from "./proxy";

////////////////////////////////////////////////////////////////////////////////
// ATM class
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
    return this.ATMState;
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
    this.cashInATM = amount;
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