const Plant = require('../models/plant')
const { notFound, unauthorized } = require('../lib/errorMessage')

async function plantsIndex(req, res, next) {
  try {
    const plants = await Plant.find()
    if (!plants) throw new Error(notFound)
    res.status(200).json(plants)
    console.log(plants)
  } catch (err) {
    next(err)
  }
}

module.exports = {
  index: plantsIndex
}