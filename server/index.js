require('dotenv').config();
const express = require('express')
    , massive = require('massive')
    , bodyParser = require('body-parser');


const app = express();
app.use(bodyParser.json())

const {
    CONNECTION_STRING,
    SERVER_PORT
} = process.env

//massive connections 
massive(CONNECTION_STRING).then((db) => {
    console.log('db connected')
    app.set('db', db)
});

//SERVER
app.listen(SERVER_PORT, () => {
    console.log(`We are many, You are one on ${SERVER_PORT}`)
});