const { Router } = require('express');
const { Country, Activity } = require('../db.js');

const router = Router();

router.post('/', async (req, res) => {
    const { nameAct, difficulty, duration, season, id } = req.body;

    try {
        if (nameAct && difficulty && duration && season) {
            let activityCreated = await Activity.create({
                nameAct,
                difficulty,
                duration,
                season,
            })
            try {
                let country = await Country.findAll({ where: { id: id } })
                await activityCreated.addCountries(country);
                res.send(country);
            } catch (error) {
                console.log(error)
            }
        }
        else {
            res.status(404).send("Fields entered are not correct")
        }
    } catch (e) {
        console.log(e);
    }
})

router.get('/', async (req, res) => {
    let activitiesOk = await Activity.findAll({})
    res.json(activitiesOk)
})

module.exports = router;