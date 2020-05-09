import { Originator } from "./originator";
import { Caretaker } from "./caretaker";

// Html elements
export class Editor {
  textarea: HTMLTextAreaElement;
  save: HTMLButtonElement;
  undo: HTMLButtonElement;
  redo: HTMLButtonElement;
  saves: number = 0;
  currentArticle: number = 0;

  constructor(private originator = new Originator(), private caretaker = new Caretaker()) {
    this.textarea = document.getElementById("textarea") as HTMLTextAreaElement;
    this.save = document.getElementById("save") as HTMLButtonElement;
    this.undo = document.getElementById("undo") as HTMLButtonElement;
    this.redo = document.getElementById("redo") as HTMLButtonElement;
    this.save.addEventListener('click', this.onSave)
    this.undo.addEventListener('click', this.onUndo)
    this.redo.addEventListener('click', this.onRedo)
    console.log("Text aditor initialized")
  }

  onSave() {
    this.originator.set(this.textarea.value);
    const m = this.originator.storeInMemento();
    this.caretaker.addMemento(m);
    this.saves++;
    this.currentArticle++;
  }

  onUndo = () => {
    if (this.currentArticle >= 1) {
      this.currentArticle--;
      const m = this.caretaker.getMemento(this.currentArticle);
      const text = this.originator.restoreFromMemento(m);
      this.textarea.value = text;
    }
  }

  onRedo = () => {
    if (this.saves - 1 > this.currentArticle) {
      this.currentArticle++;
      const m = this.caretaker.getMemento(this.currentArticle);
      const text = this.originator.restoreFromMemento(m);
      this.textarea.value = text;
    }
  }

}
