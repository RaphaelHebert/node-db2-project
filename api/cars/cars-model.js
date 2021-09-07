const db = require('../../data/db-config')

const getAll = () => {
  //SELECT * FROM cars
  return db('cars')
}

const getById = (id) => {
  //SELECT * FROM cars WHERE id = 1
  return db('cars').where({ id: id })
}

const create = (cars) => {
  //INSERT INTO cars (vin, make, model, mileage, title, transmission)
  //VALUES ( 'xxx', 'xxx', 'xxx', 123, 'xxx', 'xxx')
  db('cars').create(cars)
}

module.exports = {
  getAll,
  getById,
  create
}
