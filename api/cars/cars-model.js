const db = require('../../data/db-config')

const getAll = () => {
  //SELECT * FROM cars
  return db('cars')
}

const getById = (id) => {
  //SELECT * FROM cars WHERE id = 1
  return db('cars').where({ id: id }).first()
}

const create = async (cars) => {
  //INSERT INTO cars (vin, make, model, mileage, title, transmission)
  //VALUES ( 'xxx', 'xxx', 'xxx', 123, 'xxx', 'xxx')
  const [newCarId] = await db('cars').insert(cars)
  const response = await getById(newCarId)
  console.log('response', response)
  return response
}

module.exports = {
  getAll,
  getById,
  create
}
