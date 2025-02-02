const express = require('express');
const app = express();
const db = require('./db');

const bodyParser = require('body-parser');
app.use(bodyParser.json());

// API to send response ...
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// import person file
const personRoutes=require('./routes/personRoutes');
app.use('/person',personRoutes);

// import menu file
const menuRoutes = require('./routes/menuRoutes');
app.use('/menu', menuRoutes);



app.listen(3000, () => {
    console.log('Server is running on port 3000');
});