class WelcomeToBank {
  constructor() {
    console.log('Welcome to Bank')
  }
}

class AccountNumberCheck {
  private acc: number = 12345678

  private getAcc(): number {
    return this.acc
  }

  public checkAccount(accToCheck: number): boolean {
    if(accToCheck === this.getAcc()) {
      return true
    } else {
      return false
    }
  }
}

class SecurityCodeCheck {
  private secCode: number = 1234

  private getSecCode(): number {
    return this.secCode
  }

  public checkCode(secCodeToCheck: number): boolean {
    if(secCodeToCheck === this.getSecCode()) {
      return true
    } else {
      return false
    }
  }
}

class FundsCheck {
  private cashInAcc: number = 1000

  getCashInAcc(): number {
    return this.cashInAcc
  }

  decreaseCashInAcc(amount: number):void {
    this.cashInAcc -= amount
  }
  increaseCashInAcc(amount: number):void {
    this.cashInAcc += amount
  }

  haveEnoughMoney(amount: number): boolean {
    if(this.getCashInAcc() >= amount) {
      this.decreaseCashInAcc(amount)
      console.log('Withdrawal complete: current balance ', this.getCashInAcc())
      return true
    } else {
      console.log('Not enough money in the account')
      console.log('Current balance: ', this.getCashInAcc())
      return false
    }
  }

  makeDeposit(amount: number): void {
    this.increaseCashInAcc(amount)
    console.log('Deposit complete: current balance ', this.getCashInAcc())
  }
}

class BankFacade {
  private access: boolean = false
  private fundsCheck: FundsCheck  
  constructor(private cardNr: number, private secCode: number) {
    new WelcomeToBank()
    const accountNumbercheck = new AccountNumberCheck()
    const securityCodeCheck = new SecurityCodeCheck()
    this.fundsCheck = new FundsCheck()

    const step1 = accountNumbercheck.checkAccount(cardNr)
    const step2 = securityCodeCheck.checkCode(secCode)

    if (step1 && step2) {
      this.access = true
      console.log('Access granted')
    } else {
      this.access = false
      console.log('Access denied')
    }
  }

  withdrawCash (amount: number): void {
    if(this.access && this.fundsCheck.haveEnoughMoney(amount)) {
      console.log('Operation complete')
    } else {
      console.log('Operation faild')
    }
  }

  depositCash (amount: number): void {
    if(this.access) {
      this.fundsCheck.makeDeposit(amount)
      console.log('Operation complete')
    } else {
      console.log('Operation faild')
    }
  }
}

// const bank = new BankFacade(123, 123)
// bank.depositCash(1000)

const bank = new BankFacade(12345678, 1234)
bank.depositCash(100)
bank.depositCash(100)
bank.withdrawCash(400)
bank.withdrawCash(900)