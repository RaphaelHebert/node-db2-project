const express = require('express')
const router = express.Router()
const Cars = require('./cars-model')
const {checkCarId, checkCarPayload, checkVinNumberUnique, checkVinNumberValid} = require('./cars-middleware')


router.get('/', async (req, res, next) => {
    try{
        const cars = await Cars.getAll()
        res.json(cars)
    } catch (err) {
        next(err)
    }
})

router.get('/:id', checkCarId, async (req, res, next) => {
    try{
        const car = await Cars.getById(req.params.id)
        res.json(car)
    } catch (err) {
        next(err)
    }
})

router.post('/', 
    checkCarPayload, 
    checkVinNumberUnique, 
    checkVinNumberValid, 
    async (req, res, next) => {
    try{
        const car = await Cars.create(req.body)
        console.log('car', car)
        res.send(car)
    } catch (err) {
        next(err)
    }
})

module.exports = router
