const fs = require("fs");

function getNotes() {
  return "Your notes...";
}

const addNote = (title, body) => {
  const notes = loadNotes();

  notes.push({
    title: title,
    body: body
  });

  saveNotes(notes);
};

const saveNotes = function(notes) {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json").toString();
    return JSON.parse(dataBuffer);
  } catch (e) {
    return [];
  }
};

module.exports = {
  getNotes: getNotes,
  addNote: addNote
};
