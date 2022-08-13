const { Router } = require('express');
const { Country, Activity } = require('../db.js');
const sequelize = require('sequelize');
const express = require('express');

const routerActivity = express.Router();

routerActivity.post('/', async (req, res) => {
    const { nameAct, difficulty, duracion, temporada, countryid } = req.body
    try {
        if (name && difficulty && duracion && temporada) {
            let activityCreated = await Actividads.create({
                name,
                difficulty,
                duration,
                season,
            })
            try {
                let country = await Country.findAll({ where: { id: countryid } })
                await activityCreated.addCountries(country)
                res.send(country)
            } catch (error) {
                console.log(error)
            }
        }
        else {
            res.status(404).send("Error no ingresaste los campos correctamente")
        }
    } catch (error) {
        console.log(error)
    }
})

routerActivity.get('/', async (req, res) => {
    let actividadesCreadas = await Actividads.findAll({})
    res.json(actividadesCreadas)
})

module.exports = router;