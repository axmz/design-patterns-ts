export class Flies {
  fly(): string {
    return `Flying not set`
  };
}

export class CanFly implements Flies {
  fly(): string {
    return `Can Fly`
  }
}

export class CantFly implements Flies {
  fly(): string {
    return `Can't Fly`
  }
}

