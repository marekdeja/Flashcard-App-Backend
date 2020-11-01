const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
var config = require('./config')

var indexRouter = require('./routes/index');
var dictionaryRouter = require('./routes/dictionaryRouter');
var flashcardRouter = require('./routes/flashcardRouter');

const mongoose = require('mongoose')
const url = config.mongoUrl
const connect = mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

connect.then((db) => {
  console.log('Connected correctly to server')
}, (err) => { console.log(err) })

const app = express();

var corsOptions = {
  origin: "http://localhost:3000"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', indexRouter);
app.use('/dictionary', dictionaryRouter);
app.use('/flashcard', flashcardRouter);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
