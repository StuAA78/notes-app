function Notebook() {
  this.notes = []
}

Notebook.prototype.addNote = function(text) {
  note = new Note()
  note.write(text)
  this.notes.push(note)
}

Notebook.prototype.listNotes = function() {
  return this.notes
}
