// Importo todos los routers;
const { Router } = require('express');

//Defino Router
const router = Router();

const routerCountry = require('./country');
const routerActivity = require('./activity');

// Configuro ambos routers
router.use('/country', routerCountry);
router.use('/activity', routerActivity);

module.exports = router;
