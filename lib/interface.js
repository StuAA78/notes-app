function updateNotes() {
  document.querySelector("#notes").innerHTML = "";
  notebook.listNotes().forEach(function(note, index) {
    document.querySelector("#notes").innerHTML += `<li><a href="#${index}">${note.getDisplayText()}</li>`;
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
  document.querySelector("#notebook").style.display = "block"
}

function showNote() {
  document.querySelector("#note").style.display = "block"
}

function hideNotebook() {
  document.querySelector("#notebook").style.display = "none"
}

function hideNote() {
  document.querySelector("#note").style.display = "none"
}

function displayNote(note) {
  document.querySelector("#note").innerHTML = notebook.getNote(note);
}
