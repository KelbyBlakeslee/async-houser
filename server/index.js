require('dotenv').config();
const express = require('express')
    , massive = require('massive')
    , bodyParser = require('body-parser')
    , controller = require('./controller')
    , expressSession = require('express-session');

const createInitialSession = require(`${__dirname}/middlewares/session.js`);

const app = express();


app.use(bodyParser.json());
app.use(expressSession({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true,
}))

app.use((req, res, next) => createInitialSession(req, res, next));


const {
    CONNECTION_STRING,
    SERVER_PORT
} = process.env

//massive connection
massive(CONNECTION_STRING).then((db) => {
    console.log('db connected')
    app.set('db', db)
});

// User - Login/Resgister/ endpoints
app.post('/api/registerUser', controller.registerUser);
app.post('/api/getUser', controller.getUser);
app.post('/api/logoutUser', controller.logoutUser);

// Property endpoints
app.get('/api/getPropertyId', controller.getPropertyId);
app.post('/api/addProperty', controller.addProperty);
app.delete('/api/deleteProperty/:id', controller.deleteProperty);





//SERVER
app.listen(SERVER_PORT, () => {
    console.log(`We are many, You are one on ${SERVER_PORT}`)
});