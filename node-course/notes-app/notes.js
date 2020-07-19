const fs = require('fs');
const chalk = require('chalk');

const addNotes = (title, body) => {
    const notes = loadNotes();

    const flag = notes.filter(item => item.title === title);

    if (flag.length)
        console.log('Title taken');
    else {
        notes.push({
            title,
            body
        });

        saveNotes(notes);
        console.log('New item added');
    }
}

const removeNote = (title) => {
    const notes = loadNotes();
    const searchedNote = notes.filter(item => item.title === title);
    if (searchedNote.length) {
        const filteredNotes = notes.filter(item => item.title !== title);
        saveNotes(filteredNotes);
        console.log('data removed from array');
    } else
        console.log('There is not a data with that title');
}

const listNotes = () => {
    const notes = loadNotes();
    notes.forEach(element => console.log(chalk.green.bold(element.title)));
}

const readNote = (title) => {
    const notes = loadNotes();
    const findNote = notes.find(item => item.title === title);
    if (findNote)
        console.log(chalk.bold.green(findNote.title, findNote.body))
    else
        console.log(chalk.red.bold('Not Found'));
}

function loadNotes() {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        return JSON.parse(dataBuffer.toString());
    } catch (error) {
        return [];
    }
}

function saveNotes(notes) {
    const noteJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', noteJSON);
}

module.exports = {
    addNotes,
    removeNote,
    listNotes,
    readNote
}