interface ElectronicDevice {
  on(): void;
  off(): void;
  volumeUp(): void;
  volumeDown(): void;
}

class Television implements ElectronicDevice {
  private volume: number = 0;

  on(): void {
    console.log("TV is on");
  }

  off(): void {
    console.log("TV is off");
  }

  volumeUp(): void {
    this.volume++;
    console.log(`Volume at ${this.volume}`);
  }

  volumeDown(): void {
    this.volume--;
    console.log(`Volume at ${this.volume}`);
  }
}

interface Command {
  execute(): void;
  undo(): void
}

class TurnTVOn implements Command {
  constructor(public device: ElectronicDevice) {}
  undo(): void {
    this.device.off()
  }
  execute(): void {
    this.device.on()
  }
}

class TurnTVOff implements Command {
  constructor(public device: ElectronicDevice) {}
  undo(): void {
    this.device.on()
  }
  execute(): void {
    this.device.off()
  }
}

class TurnTVUp implements Command {
  constructor(public device: ElectronicDevice) {}
  undo(): void {
    this.device.volumeDown()
  }
  execute(): void {
    this.device.volumeUp()
  }
}

class TurnTVDown implements Command {
  constructor(public device: ElectronicDevice) {}
  undo(): void {
    this.device.volumeUp()
  }
  execute(): void {
    this.device.volumeDown()
  }
}

function instantiateCommands() {
  const tv = new Television()

  const tvOn = new TurnTVOn(tv)
  const tvOff = new TurnTVOff(tv)
  const tvUp = new TurnTVUp(tv)
  const tvDown = new TurnTVDown(tv)

  function executeCommand (command: any) {
    command.execute()
  }
  function undoCommand (command: any) {
    command.undo()
  }

  return {
    on: () => executeCommand(tvOn),
    undoOn: () => undoCommand(tvOn),
    off: () => executeCommand(tvOff),
    tvUp: () => executeCommand(tvUp),
    tvDown: () => executeCommand(tvDown)
  }
}

const press = instantiateCommands()
press.on()
press.undoOn()
// press.off()