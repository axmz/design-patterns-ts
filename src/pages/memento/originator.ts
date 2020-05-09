import {Memento} from './memento'

export class Originator {
  private article: string = ''

  set(newArticle: string): void {
    console.log('Originator: current version = ' + newArticle)
    this.article = newArticle
  }

  storeInMemento(): Memento {
    console.log('Originator: storing to memento = ' + this.article)
    return new Memento(this.article)
  }

  restoreFromMemento(memento: Memento): string {
    console.log('Originator: restore from memento = ' + memento.article)
    this.article = memento.article
    return this.article
  }
}
