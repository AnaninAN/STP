const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Описывается структура коллекции users
const userSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    age: Number,
});

module.exports = mongoose.model('User', userSchema, 'users');