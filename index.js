const express = require('express')
const mongoose = require('mongoose')
const app = express()
const logger = require('./lib/logger')
const router = require('./config/router')
const errorHandler = require('./lib/errorHandler')
const { PORT, dbURI } = require('./config/environment')

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true , useCreateIndex: true },
  (err) => {
    if (err) {
      console.log(err)
      return
    }
    console.log('Mongo is Connected')
  }
)

app.use(express.static(`${__dirname}/frontend/build`))

app.use(express.json())

app.use(logger)

app.use('/api', router)

app.use('/*', (_, res) => res.sendFile(`${__dirname}/frontend/build/index.html`))

app.use(errorHandler)

app.listen(PORT, () => console.log(`Up and running on port ${PORT}`))

app.get('/', (req, res) => {
  res.send('Hello from Express!')
})