const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

mongoose.connect('mongodb://localhost/artists-db', {
    useUnifiedTopology: true,
    useNewUrlParser: true,
} );

app.use(bodyParser.json());
app.use('/api', require('./api'));

app.listen(3010, ()=>{
    console.log('Server started');
});