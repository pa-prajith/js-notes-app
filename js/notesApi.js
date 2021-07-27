export default class NotesAPI {
  static STORE_KEY = "notes_db";

  static getAllNotes() {
    const notes = NotesAPI.getAllNotes();
    return notes.length === 0 ? notes : NotesAPI._sort(notes);
  }

  static saveNote(note) {
    const hasId = note["id"] ? true : false;
    const notes = NotesAPI.getAllNotes();
    const existing = hasId ? notes.filter((n) => n.id === note.id) : null;

    if (existing) {
      existing.title = note.title;
      existing.body = note.body;
      existing.updated = NotesAPI._getDate();
    } else {
      note.id = NotesAPI._getId();
      note.updated = NotesAPI._getDate();
    }
  }

  static deleteNote(noteId) {
    const notes = NotesAPI.getALlNotes();
    const updatedNotes = notes.filter((n) => n.id !== noteId);
    NotesAPI._setDataToLS(updatedNotes);
  }

  static _getDataFromLS() {
    return JSON.parse(localStorage.getItem(NotesAPI.STORE_KEY) || []);
  }

  static _setDataToLS(notes) {
    localStorage.setItem(NotesAPI.STORE_KEY, JSON.stringify(nodes));
  }

  static _getId() {
    return Math.ceil(Math.random * 100000);
  }

  static _getDate() {
    return Date.now().toISOString();
  }

  static _sort(notes) {
    return notes.sort((a, b) =>
      new Date(a.updated) > new Date(b.updated) ? -1 : 1
    );
  }
}
