const fs = require("fs");
const chalk = require("chalk");

const addNote = (title, body) => {
  const notes = loadNotes();
  const duplicateNote = notes.find((note) => note.title === title);

  debugger

  if (!duplicateNote) {
    notes.push({
      title: title,
      body: body,
    });
    saveNotes(notes);
    console.log(chalk.green.inverse("New Note added"));
  } else {
    console.log(chalk.red.inverse("Node title taken"));
  }
};

const removeNote = (title) => {
  const notes = loadNotes();
  const notesToKeep = notes.filter((note) => note.title !== title);
  saveNotes(notesToKeep);
  if (notes.length > notesToKeep.length) {
    console.log(chalk.green.inverse("Note removed"));
  } else {
    console.log(chalk.red.inverse("No node found"));
  }
};

const listNote = () => {
  const notes = loadNotes();
  console.log(chalk.inverse("Your notes"));
  notes.forEach((note) => console.log(note.title));
};

const readNote=(title)=>{
  const notes = loadNotes();
  const note = notes.find((note)=>note.title===title)
if(note){
  console.log(chalk.inverse(note.title))
  console.log(note.body)
}
else{
  console.log(chalk.red.inverse("Node not found"))
}
}

const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};
const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (error) {
    return [];
  }
};

module.exports = {
  addNote: addNote,
  removeNote: removeNote,
  listNote: listNote,
  readNote:readNote
};
