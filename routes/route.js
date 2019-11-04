const express = require('express');
const routerRoute = express.Router();
const Route = require('../models/Route');

routerRoute.get('/', async (req, res) => {
    const routes = await Route.find({});
    res.status(200).send(routes);
});

routerRoute.get('/:id', async (req, res) => {
    const route = await Route.findById(req.params.id);
    res.status(200).send(route);
});

routerRoute.post('/', async (req, res) => {
    let route = new Route(req.body);
    route = await route.save();
    res.status(201).send(route);
});

routerRoute.put('/:id', async (req, res) => {
    let route = await Route.findByIdAndUpdate(req.params.id, { $set: req.body });
    route = await Route.findById(req.params.id);
    res.status(200).send(route);
});

routerRoute.delete('/:id', async (req, res) => {
    const route = await Route.findByIdAndDelete(req.params.id);
    res.status(200).send(route);
});

module.exports = routerRoute;