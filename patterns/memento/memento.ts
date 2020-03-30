class Memento {
  constructor(private _article: string) {}
  get article () {
    return this._article
  }

  set article (art) {
    this._article = art
  }
}

class Originator {
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

class Caretaker {
  savedArticle: Memento[] = []
  addMemento(memento: Memento) {
    this.savedArticle.push(memento)
  }
  getMemento(i: number): Memento {
    return this.savedArticle[i]
  }
}

const textarea = document.getElementById('textarea') as HTMLTextAreaElement
const save = document.getElementById('save') as HTMLButtonElement
const undo = document.getElementById('undo') as HTMLButtonElement
const redo = document.getElementById('redo') as HTMLButtonElement

const originator = new Originator()
const caretaker = new Caretaker()

let saveFiles = 0
let currentArticle = 0

function onSave() {
  originator.set(textarea.value)
  const m = originator.storeInMemento()
  caretaker.addMemento(m)
  saveFiles++
  currentArticle++
 }

function onUndo() { 
  if (currentArticle >= 1){ 
    currentArticle--
    const m = caretaker.getMemento(currentArticle)
    const text = originator.restoreFromMemento(m)
    textarea.value = text
  }
}
function onRedo() { 
  if((saveFiles-1) > currentArticle)
  {
    currentArticle++
    const m = caretaker.getMemento(currentArticle)
    const text = originator.restoreFromMemento(m)
    textarea.value = text
  }
}

save.addEventListener('click', onSave)
undo.addEventListener('click', onUndo)
redo.addEventListener('click', onRedo)

