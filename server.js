const express = require('express');
const bodyParser = require('body-parser');
const config = require('./config');
const port = process.env.PORT || config.port;

const app = express();
app.use(express.static('./public'));
app.use(bodyParser.json());

app.listen(port, () => {
    console.log(`Server has been started on port ${config.port}`);
});