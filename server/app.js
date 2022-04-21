const express = require('express')
const app = express()
require("dotenv").config()

const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const cors = require('cors')

const blogsRouter = require('./controller/controlls')
const logger = require('./utils/Log')

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
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

app.use('/api/1.0/', blogsRouter)

module.exports = app