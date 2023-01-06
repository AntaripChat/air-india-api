const express = require('express');


const route = express.Router();

const v1Routed = require('./v1');

route.use('/v1',v1Routed);

module.exports = route;