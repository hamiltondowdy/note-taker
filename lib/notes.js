const fs = require('fs');
const path = require('path');


const createNewNote = (note, notesArray) => {

    notesArray.push(note)

    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({ notes: notesArray }, null, 2)
    );
    };