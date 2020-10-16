const router = require('express').Router()
const auth = require('../controllers/auth')
const plants = require('../controllers/plants')
const users = require('../controllers/users')
const secureRoute = require('../lib/secureRoute')

router.route('/plants')
  .get(plants.index)
  .post(plants.create)
router
  .route('/surfspots/:id')
  .get(plants.show)
  .put(secureRoute, plants.edit)
  .delete(secureRoute, plants.delete)

// LOG RELATED
router.route('/register')
  .post(auth.register)

router.route('/login')
  .post(auth.login)


// PROFILES RELATED
router.route('/profile')
  .get(secureRoute, users.userIndex)
router.route('/profile/:id')
  .get(secureRoute, users.userShow)
  .put(secureRoute, users.userUpdate)

module.exports = router