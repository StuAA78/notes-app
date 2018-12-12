function updateNotes() {
  document.getElementById("notes").innerHTML = "";
  notebook.listNotes().forEach(function(note, index) {
    document.getElementById("notes").innerHTML += `<li><a href="#${index}">${note.getDisplayText()}</li>`;
  })
}

function notebookUrlListener() {
  window.addEventListener("hashchange", refreshCurrentPage);
}

function refreshCurrentPage() {
  option = getNoteFromUrl(window.location);
  if (option === "notes" || option === undefined) {
    showNotebook();
    hideNote();
  } else {
    showNote();
    hideNotebook();
    displayNote(option);
  }
}

function getNoteFromUrl(location) {
  return location.hash.split("#")[1];
};

function showNotebook() {
  document.getElementById("notebook").style.display = "block"
}

function showNote() {
  document.getElementById("note").style.display = "block"
}

function hideNotebook() {
  document.getElementById("notebook").style.display = "none"
}

function hideNote() {
  document.getElementById("note").style.display = "none"
}

function displayNote(note) {
  document.getElementById("note").innerHTML = notebook.getNote(note);
}
