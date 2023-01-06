const express = require('express');
const {help,helpp} = require('../../controllers/helpCon');
const route = express.Router();

route.get('/help',help);
route.get('/helpp',helpp);


module.exports = route;