//importing npm packages
const path = require('path');
const express = require('express');
// defining router function
const router = express.Router();
//routes for rendering files on frontend
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'));
});

router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});
//exporting routes
module.exports = router;
