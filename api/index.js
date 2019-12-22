const bodyParser = require('body-parser')
const router = require('express').Router()

router.use(bodyParser.json())

router.use(require('./auth'))
router.use(require('./user'))

module.exports = router
