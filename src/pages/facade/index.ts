class WelcomeToBank {
  constructor() {
    console.log('Welcome to Bank')
  }
}

class AccountNumberCheck {
  private acc: number = 12345678

  public checkAccount(accToCheck: number): boolean {
    if(accToCheck === this.acc) {
      return true
    } else {
      return false
    }
  }
}

class SecurityCodeCheck {
  private secCode: number = 1234

  public checkCode(secCodeToCheck: number): boolean {
    if(secCodeToCheck === this.secCode) {
      return true
    } else {
      return false
    }
  }
}

class FundsCheck {
  private cashInAcc: number = 1000

  decreaseCashInAcc(amount: number):void {
    this.cashInAcc -= amount
  }
  increaseCashInAcc(amount: number):void {
    this.cashInAcc += amount
  }

  haveEnoughMoney(amount: number): boolean {
    if(this.cashInAcc >= amount) {
      this.decreaseCashInAcc(amount)
      console.log('Withdrawal complete: current balance ', this.cashInAcc)
      return true
    } else {
      console.log('Not enough money in the account: current balance: ', this.cashInAcc)
      return false
    }
  }

  makeDeposit(amount: number): void {
    this.increaseCashInAcc(amount)
    console.log('Deposit complete: current balance ', this.cashInAcc)
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
      console.log('Operation failed')
    }
  }

  depositCash (amount: number): void {
    if(this.access) {
      this.fundsCheck.makeDeposit(amount)
      console.log('Operation complete')
    } else {
      console.log('Operation failed')
    }
  }
}

const bank = new BankFacade(12345678, 1234)
bank.depositCash(100)
bank.depositCash(100)
bank.withdrawCash(400)
bank.withdrawCash(900)