const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const port = 3000;
const dbURI = '';

const app = express();

mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology: true})
