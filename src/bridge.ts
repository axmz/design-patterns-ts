abstract class Device {
  deviceState: number = 0
  maxSetting: number = 0
  volumeLevel: number = 0

  public abstract buttonFive(): void
  public abstract buttonSix(): void
  public deviceFeedback(): void {
    if (this.deviceState > this.maxSetting || this.deviceState < 0 ) this.deviceState = 0
    console.log('On channel ' + this.deviceState)
  }

  public buttonSeven(): void {
    this.volumeLevel++
    console.log('Volume at ' + this.volumeLevel)
  }

  public buttonEight(): void {
    this.volumeLevel--
    console.log('Volume at ' + this.volumeLevel)
  }
}

class TVDevice extends Device {
  constructor(public deviceState: number, public maxSetting: number) {
    super()
  }

  public buttonFive(): void {
    this.deviceState--
    console.log('Channel down')
  }  
  
  public buttonSix(): void {
    this.deviceState++
    console.log('Channel up')
  }
}

abstract class Remote {
   constructor(public device: Device) { }

   buttonFive() {
     this.device.buttonFive()
   }

   buttonSix() {
     this.device.buttonSix()
   }

   deviceFeedback () {
     this.device.deviceFeedback()
   }

   abstract buttonNine(): void
}

class RemoteMute extends Remote{

  buttonNine(): void {
    console.log('Device muted')
  }
}

class RemotePause extends Remote{
  buttonNine(): void {
    console.log('Device paused')
  }
}

const tv = new TVDevice(100, 100)
const remoteMute = new RemoteMute(tv)
const remotePause = new RemotePause(tv)
tv.buttonSix()
tv.deviceFeedback()
tv.buttonSeven()

remoteMute.buttonNine()
remoteMute.buttonSix()
remoteMute.deviceFeedback()
// remoteMute.buttonSeven()

remotePause.buttonNine()
remotePause.buttonSix()
remotePause.deviceFeedback()
// remotePause.buttonSeven()