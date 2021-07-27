export default class NotesView {
  constructor(root, {}) {
    this.root = root;
    this.root.innerHTML = this._getTemplate();
    this.saveButn = this.root.querySelector(".notes__add");
    this.inputTitle = this.root.querySelector("#title");
    this.inputBody = this.root.querySelector("#body");
    this.activeNote = null;
  }

  _getTemplate() {
    return `
      <div class="notes__sidebar">
            <button class="notes__add" type="button">Add Note</button>
            <div class="notes__list">
            </div>
        </div>
        <div class="notes__preview">
            <input id="title" class="notes__title" type="text" name="title" placeholder="Enter a title ..."/>
            <textarea id="body" class="notes__body" name="body" ></textarea>
        </div>

        `;
  }
}
