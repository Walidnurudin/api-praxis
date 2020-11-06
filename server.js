const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const route = require('./routes/praxisRouter');
var cors = require('cors');
const port = 3000;
const dbURI = 'mongodb://walid:27017/praxis';

const app = express();

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(res => app.listen(port, () => console.log(`port berjalan di http://localhost:${port}`)))
    .catch(err => console.log(err))

app.use(bodyParser.json());
app.use(cors())
//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.urlencoded({ extended: true }))
app.use(morgan('dev'));

// router
app.use(route);