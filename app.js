const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const favicon = require('serve-favicon');
const path = require('path')
const route = require('./routes/praxisRouter');
var cors = require('cors');
const port = 3000;
const dbURI = 'mongodb+srv://walid:walid@cluster0.vt15h.mongodb.net/praxis?retryWrites=true&w=majority';

const app = express();

// set view engine
app.set('view engine', 'ejs')

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(res => app.listen(port, () => console.log(`port berjalan di http://localhost:${port}`)))
    .catch(err => console.log(err))

app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))
app.use(cors())
app.use(bodyParser.urlencoded({
    limit: '5mb',
    parameterLimit: 100000,
    extended: true
}));

app.use(bodyParser.json({
    limit: '5mb'
}));
//support parsing of application/x-www-form-urlencoded post data
// app.use(express.urlencoded({ extended: true }))
app.use(morgan('dev'));

// router
app.use(route);
