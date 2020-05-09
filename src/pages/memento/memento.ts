export class Memento {
  constructor(private _article: string) {}
  get article () {
    return this._article
  }

  set article (art) {
    this._article = art
  }
}

