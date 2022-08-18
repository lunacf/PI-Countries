const server = require('./src/app.js');
const { conn } = require('./src/db.js');
const axios = require('axios');

const { Country } = require('./src/db.js');
// Syncing all the models at once.

const getInfoFromApi = async function () {
  const URL_API = await axios.get(`https://restcountries.com/v3/all`);
  const infoDB = URL_API.data.map(e => {
    return {
      id: e.cca3,
      name: e.name.common,
      flag: e.flags[0],
      continent: e.continents,
      capital: e.capital === undefined || e.capital.lenght < 1 ? 'undefined' : e.capital[0],
      subregion: e.subregion,
      area: e.area,
      population: e.population,
      region: e.region
    }})
    await Country.bulkCreate(infoDB);
    console.log("allCountriesLoad");
  }

conn.sync({ force: true }).then(() => {
  getInfoFromApi();
  server.listen(4000, () => {
    console.log('%s listening at 4000'); // eslint-disable-line no-console
  });
});

