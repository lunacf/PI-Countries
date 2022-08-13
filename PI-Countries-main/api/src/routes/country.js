// Importar todos los routers;
const { Router } = require('express');
const { Country, Activity } = require('../db.js');
const sequelize = require('sequelize');
const express = require('express');
const router = require('./index.js');

//declaro variable para  url
const URL_API = 'https://restcountries.com/v3/all';

const routerCountry = express.Router();

routerCountry("/", async (req, res) => {
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

routerCountry.get('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        if (id.length > 2) {
            var element = await Country.findOne({ where: { id: id }, include: Activity })
            if (element) {
                var IdCountries = {
                    id: element.id,
                    Nombre: element.name,
                    Bandera: element.img,
                    Continente: element.continente,
                    Capital: element.capital,
                    Subregion: element.subregion,
                    Area: element.area,
                    Poblacion: element.poblacion,
                    Actividads: element.Actividads
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