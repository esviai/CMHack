const router = require('express').Router()
const User = require('../controllers/users')

router.get('/', (req, res) => {
  res.send('alive')
})

router.post('/signup', User.create)
router.post('/signin', User.signin)

module.exports = router
