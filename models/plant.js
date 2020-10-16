const mongoose = require('mongoose')

const plantSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
  potSize: { type: Number, required: true },
  approxHeight: { type: Number, required: true }
})

plantSchema
  .virtual('usersCompleted', {
    ref: 'User',
    localField: '_id',
    foreignField: 'user'
  })

plantSchema.plugin(require('mongoose-unique-validator'))

module.exports = mongoose.model('Plant', plantSchema)