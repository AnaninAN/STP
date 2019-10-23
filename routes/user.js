const express = require('express');
const routerUser = express.Router();
const User = require('../models/User');

routerUser.get('/', async (req, res) => {
    const users = await User.find({});
    res.status(200).send(users);
});

routerUser.post('/', async (req, res) => {
    let user = new User(req.body);
    user = await user.save();
    res.status(201).send(user);
});

routerUser.put('/:id', async (req, res) => {
    let user = await User.findByIdAndUpdate(req.params.id, { $set: req.body });
    user = await User.findById(req.params.id);
    res.status(200).send(user);
});

routerUser.delete('/:id', async (req, res) => {
    const user = await User.findByIdAndDelete(req.params.id);
    res.status(200).send(user);
});

module.exports = routerUser;