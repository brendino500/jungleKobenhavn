const express = require('express')
const mongoose = require('mongoose')
const app = express()

const { PORT, dbURI } = require('./config/environment')

mongoose.connect(dbURI)

app.listen(PORT, () => console.log(`Up and running on port ${PORT}`))