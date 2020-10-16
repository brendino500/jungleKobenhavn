const mongoose = require('mongoose')
const { dbURI } = require('../config/environment')
const Plant = require('../models/plant')
const User = require('../models/user')
const plantsCollectionData = require('./data/plantsCollection')
const userData = require('./data/users')

mongoose.connect(
  dbURI,
  { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true },
  async (err, db) => {

    if (err) {
      console.log(err)
      return
    }

    try {

      await db.dropDatabase()
      console.log('Database dropped 👋')

      const users = await User.create(userData)
      console.log(`${'🌱'.repeat(users.length)} created`)

      const plantsWithUsers = plantsCollectionData.map(plants => {
        plants.user = users[0]._id
        return plants
      })

      const plants = await Plant.create(plantsWithUsers)
      console.log(`${'🌿'.repeat(plants.length)} Plants created `)

      await mongoose.connection.close()
      console.log('Goodbye 🙋🏽')

    } catch (err) {

      await mongoose.connection.close()
      console.log(err)
    }
  }
)