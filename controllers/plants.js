const Plant = require('../models/plant')
const { notFound }  = require('../lib/errorMessage')

async function plantsIndex(req, res, next) {
  try {
    const plants = await Plant.find()
    if (!plants) throw new Error(notFound)
    res.status(200).json(plants)
  } catch (err) {
    next(err)
  }
}

async function plantCreate(req, res) {
  try {
    req.body.user = req.currentUser._id
    const createdPlant = await Plant.create(req.body)
    res.status(201).json(createdPlant)
  } catch (err) {
    res.jsos(err)
  }
}

async function plantShow(req, res, next) {
  try {
    const plant = await Plant.findById(req.params.id).populate('user')
    if (!plant) throw new Error(notFound)
    res.status(200).json(plant)
  } catch (err) {
    next(err)
  }
}

async function plantEdit(req, res, next) {
  console.log('params', req.params)
  try {
    const plant = await Plant.findById(req.params.id)
    Object.assign(plant, req.body)
    await plant.save()
    res.status(201).json(plant)
  } catch (err) {
    next(err)
  }
}

async function plantDelete(req, res, next) {
  try {
    const plant = await Plant.findByIdAndDelete(req.params.id)
    if (!plant) throw new Error(notFound)
    res.sendStatus(204)
  } catch (err) {
    next(err)
  }
}

module.exports = {
  index: plantsIndex,
  create: plantCreate,
  show: plantShow,
  edit: plantEdit,
  delete: plantDelete
}