function Notebook() {
  this.notes = []
}

Notebook.prototype.addNote = function(text) {
  console.log(text)
  note = new Note()
  note.write(text)
  this.notes.push(note)
}

Notebook.prototype.listNotes = function() {
  return this.notes
}

Notebook.prototype.getNote = function(note) {
  return this.notes[note].getText()
}
