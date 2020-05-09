import {Memento} from './memento'

export class Caretaker {
  savedArticles: Memento[] = []
  addMemento(memento: Memento) {
    this.savedArticles.push(memento)
  }
  getMemento(i: number): Memento {
    return this.savedArticles[i]
  }
}
