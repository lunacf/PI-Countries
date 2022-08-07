// Importar todos los routers;
const {Router} = require('express');
const {Country,Activity} = require('../db.js');

const axios = require('axios');

//declaro variable para  url
const URL_API =  'https://restcountries.com/v3/all';

axios.get(URL_API);