const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const config = require('./config');
const port = process.env.PORT || config.port;

//Подключение к БД Mongo
mongoose.connect(config.mongoURI, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log('MongoDB connected'))
    .catch((err) => console.error(err));

const app = express();
app.use(express.static('./public'));
app.use(bodyParser.json());

app.listen(port, () => {
    console.log(`Server has been started on port ${config.port}`);
});