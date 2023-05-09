// defining port
const PORT = process.env.PORT || 3001;
// importing npm express package
const express = require('express');

// declaring variable app
const app = express();

//importing routes
const htmlRoutes = require('./routes/htmlRoutes')
const apiRoutes = require('./routes/apiRoutes')

// middleware for parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//middleware for public folder and routes
app.use(express.static('public'));

app.use('/api', apiRoutes);
app.use('/', htmlRoutes);
// initialising Server
app.listen(PORT, () => {
    console.log(`API server is running on port ${PORT}!`);
});