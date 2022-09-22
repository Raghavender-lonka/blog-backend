const express = require("express")

const homeRouter = express.Router()
const { data, idControl, categoryControl } = require("../controllers/data")

homeRouter.get("/home", data)
homeRouter.get("/category", categoryControl)
homeRouter.get("/article/:id", idControl)

// homeRouter.get("/article/:id", data)

module.exports = homeRouter
