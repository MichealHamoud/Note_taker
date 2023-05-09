// defining port
const PORT = process.env.PORT || 3001;
// importing npm express package
const express = require('express');

// declaring variable app
const app = express();

//importing routes
const HTML_routes = require('./routes/HTML_routes')
const Api_routes = require('./routes/Api_routes')

// middleware for parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//middleware for public folder and routes
app.use(express.static('public'));

app.use('/api', Api_routes);
app.use('/', HTML_routes);
// initialising Server
app.listen(PORT, () => {
    console.log(`API server is running on port ${PORT}!`);
});