function Note() {
  this.text = ""
}

Note.prototype.write = function(text) {
  this.text = text
}

Note.prototype.getText = function() {
  return this.text
}

Note.prototype.getDisplayText = function() {
  if (this.text.length <= 20) {
    return this.text
  }
  return this.text.substring(0, 20) + "..."
}
