const mongoose = require('mongoose')

const plantSchema = new mongoose.Schema({
  name: { type: String, require: true },
  image: { type: String, require: true },
  price: { type: Number, require: true },
  description: { type: String, require: true },
  potSize: { type: Number, require: true },
  approxHeight: { type: Number, require: true }
})

plantSchema
  .virtual('usersCompleted', {
    ref: 'User',
    localField: '_id',
    foreignField: 'user'
  })

plantSchema.plugin(require('mongoose-unique-validator'))

module.exports = mongoose.model('Plant', plantSchema)