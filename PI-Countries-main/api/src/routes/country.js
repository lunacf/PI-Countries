// Importar todos los routers;
const { Router } = require('express');
const { Country, Activity } = require('../db.js');
const {Op} = require('sequelize');
const router = Router();

router.get("/", async (req, res) => {
    let nameCountry = req.query.name;
    //si existe
    if (nameCountry) {
        try {
            let countryQ = await Country.findAll({
                where: { name: { [Op.iLike]: "%" + nameCountry + "%" } }
            })
            if (!countryQ.length) {
                return res.status(404).json('country not found');
            } else {
                return res.json(countryQ)
            }
        }
        catch (e) {
            console.log(e);
        }
    }
    try {
        const countriesInDataBase = await Country.findAll({
            include: { model: Activity }
        })
        return res.json(countriesInDataBase);
    } catch (err) {
        console.log(err);
    }
})

router.get('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        if (id.length > 2) {
            var element = await Country.findOne({ where: { id: id }, include: Activity })
            if (element) {
                var IdCountries = {
                    id: element.id,
                    name: element.name,
                    flag: element.flag,
                    continent: element.continent,
                    capital: element.capital,
                    subregion: element.subregion,
                    area: element.area,
                    population: element.population,
                    Activity: element.Activity
                }
                return res.json(IdCountries)
            }
            return res.send("Country not found")
        }
        return res.send("Country not exist")
    } catch (err) {
        console.log(err);
    }
})

module.exports = router;