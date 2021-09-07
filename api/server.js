const express = require("express")
const carsRouter = require("./cars/cars-router")
const server = express()

server.use(express.json())
server.use("/api/cars/", carsRouter)

//catchall
server.get('*', (req, res) => {
    res.status(404).json({ message: "bad request"})
})

//error handling
server.use((err, req, res, next) => {
    res.status(err.status || 500).json({
        message: err.message,
        stack: err.stack
    })
})
module.exports = server
