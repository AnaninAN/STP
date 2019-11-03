const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const config = require('./config');
const port = process.env.PORT || config.port;
const cors = require('cors');

mongoose.connect(config.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch((err) => console.error(err));

const { routerUser, routerRoute } = require('./routes');

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.use('/users', routerUser);
app.use('/routes', routerRoute);

app.listen(port, () => {
    console.log(`Server has been started on port ${config.port}`);
});