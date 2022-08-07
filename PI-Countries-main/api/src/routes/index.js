// Importo todos los routers;
const { Router } = require('express');
const { Country, Activity} = require('../db');
const { countryRoute } = require('./country');
//const activityRoute = require('./activity');
const axios = require('axios');

//Defino Router
const router = Router();

// Configuro ambos routers
//router.use('/countries', countryRoute);
//router.use('/activity', activityRoute);

module.exports = router;
