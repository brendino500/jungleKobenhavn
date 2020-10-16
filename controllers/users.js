const User = require('../models/user')
const { notFound, unauthorized } = require('../lib/errorMessage')

async function userIndex(req, res, next) {
  try {
    const users = await User.find()
    res.status(200).json(users)
  } catch (err) {
    console.log('Error is staged')
    next(err)
  }
}

async function userShow(req, res, next) {
  try {
    const user = await User.findById(req.params.id).populate('achievedSurfSpot')
    if (!user) throw new Error(notFound)
    res.status(200).json(user)
  } catch (err) {
    next(err)
  }
}

async function userUpdate(req, res, next) {
  try {
    const userToUpdate = await User.findById(req.params.id)
    if (!userToUpdate) throw new Error(notFound)

    if (!userToUpdate.equals(req.currentUser._id)) throw new Error(unauthorized)

    Object.assign(userToUpdate, req.body)
    await userToUpdate.save()

    res.status(202).json(userToUpdate)
  } catch (err) {
    next(err)
  }
}


module.exports = {
  userIndex,
  userShow,
  userUpdate
}