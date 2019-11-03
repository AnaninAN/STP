const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Описывается структура коллекции routers
const routeSchema = new Schema({
  sequence: {
    type: Array,
    required: true
  },
  total_cost: {
    type: Number,
    required: true
  },
  total_days: {
    type: Number,
    required: true
  },
  name: {
    type: String,
    required: true
  },
});

module.exports = mongoose.model('Route', routeSchema, 'Routes');