const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const config = require('./config');
const port = process.env.PORT || config.port;

mongoose.connect(config.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch((err) => console.error(err));

const { routerUser } = require('./routes');

const app = express();
app.use(bodyParser.json());
app.use('/users', routerUser);

app.listen(port, () => {
    console.log(`Server has been started on port ${config.port}`);
});