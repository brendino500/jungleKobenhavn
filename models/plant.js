const mongoose = require('mongoose')

const plantSchema = new mongoose.Model({
  name: { type: String, require: true },
  image: { type: String, require: true },
  price: { type: Number, require: true },
  description: { type: String, require: true },
  potSize: { type: Number, require: true },
  approzHeight: { type: Number, require: true },
})

module.exports = mongoose.model('Plant', plantSchema)