const express = require('express');
const app = express();
const db = require('./db');
require('dotenv').config();


const bodyParser = require('body-parser');
app.use(bodyParser.json());

// API to send response ... 
app.get('/', (req, res) => {
    res.send('hwllo ')
    res.render('index');

});

// import person file
const personRoutes=require('./routes/personRoutes');
app.use('/person',personRoutes);

// import menu file
const menuRoutes = require('./routes/menuRoutes');
app.use('/menu', menuRoutes);

const PORT=process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log('Server is running on port 3000');
});