// importing express
const express = require('express');
// defining router function
const router = express.Router();
//importing local modules
const dbNotes = require('../db/notes.json')
const { writeNewNote, removeNote } = require('../notes');

//routes for reading, adding and deleting notes
router.get('/notes', (req, res) => {
    res.json(dbNotes);
});

router.post('/notes', (req, res) => {
    const newNote = writeNewNote(req.body, dbNotes);
    res.json(newNote);
});

router.delete('/notes/:id', (req, res) => {
    removeNote(req.params.id, dbNotes);
    res.json();
});

//exporting routes
module.exports = router;