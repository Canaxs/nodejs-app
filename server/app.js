const express = require('express')
const app = express()
require("dotenv").config()

const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const cors = require('cors')

const modelRouter = require('./controller/controlls')
const logger = require('./utils/Log')

mongoose
  .connect(process.env.MONGODB_URI, {
  })
  .then(() => {
    logger.info('connected to MongoDB')
  })
  .catch((error) => {
    logger.info('error connecting to MongoDB', error.message)
  })

  console.log(process.env.MONGODB_URI);
app.use(cors())
app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))

app.use('/api/1.0/', modelRouter)

module.exports = app