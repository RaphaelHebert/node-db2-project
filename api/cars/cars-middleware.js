const Cars =  require('./cars-model')
var vinValidator = require('vin-validator');

const checkCarId = async (req, res, next) => {
  try{
    const car = await Cars.getById(req.params.id)
    if(car){
      req.car = car
      next()
    }else{
      next({status: 404, message: `car with id ${req.params.id} is not found`})
    }
  }catch (err){
    next(err)
  }
}

const checkCarPayload = (req, res, next) => {
  const { vin, make, model, mileage } = req.body
  if(vin === undefined){
    next({ status:400, message: "vin is missing" })
  } else if (make === undefined){
    next({ status:400, message: "make is missing" })
  }else if(model === undefined){
    next({ status:400, message: "model is missing" })
  } else if (mileage === undefined){
    next({ status:400, message: "mileage is missing" })
  }else{
    next()
  }
}

const checkVinNumberValid = (req, res, next) => {
  if(!vinValidator.validate(req.body.vin)){
    next({ status: 400, message: `vin ${req.body.vin} is invalid`})
  }else{
    next()
  }
}

const checkVinNumberUnique = async (req, res, next) => {
  const cars = await Cars.getAll()
  const exists = cars.filter(car => car.vin === req.body.vin)
  if(exists.length > 0){
    next({ status: 400, message: `vin ${req.body.vin} already exists`})
  }else{
    next()
  }
}


module.exports = {
  checkCarId,
  checkCarPayload,
  checkVinNumberValid,
  checkVinNumberUnique
}