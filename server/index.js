require('dotenv').config();
const express = require('express')
    , massive = require('massive')
    , bodyParser = require('body-parser')
    , controller = require('./controller');


const app = express();
app.use(bodyParser.json())