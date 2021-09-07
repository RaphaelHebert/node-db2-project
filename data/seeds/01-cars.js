const cars = [
{
    vin:'1N4AL11D45N487738',
    make:'tesla',
    model: 'modelS',
    mileage: 1234403,
    title:'clean',
    transmission: "auto"
},
{
    vin:'1N4AL11D45N487738',
    make:'tesla',
    model: 'modelS',
    mileage: 234433,
},
{
    vin:'5FRYD4H46FB086879',
    make:'tesla',
    model: 'modelS',
    mileage: 1004433,
    transmission: "manual"
},
{
    vin:'JTKDE177250082874',
    make:'toyota',
    model: 'prius',
    mileage: 1234433,
    title:'clean',
    transmission: "manual"
},
{
    vin:'2T3RFREV7DW158576',
    make:'ford',
    model: 'focus',
    mileage: 123334433,
    transmission: "manual"
}]

module.send = async function(knex){
    await knex("cars").truncate()
    await knex("cars").insert(cars)
}

