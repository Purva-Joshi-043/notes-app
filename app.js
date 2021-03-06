const chalk = require("chalk");
const yargs = require("yargs");
const notes = require("./notes");

//Customise yargs version
yargs.version("1.1.0");

//Create add command
yargs.command({
  command: "add",
  describe: "ADD a new note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Note Body",
      demandOption: true,
      type: "string",
    },
  },

  handler: (argv) => notes.addNote(argv.title, argv.body),
});
//create remove command
yargs.command({
  command: "remove",
  describe: "remove a  note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
  },

  handler: (argv) => notes.removeNote(argv.title),
});
//create list command
yargs.command({
  command: "list",
  describe: "list note",
  handler: () => notes.listNote(),
});
//create read command
yargs.command({
  command: "read",
  describe: "read a  note",
   builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
  },
  handler: (argv) => notes.readNote(argv.title),
});

//add,remove,read,list
yargs.parse();

// console.log(yargs.argv)
