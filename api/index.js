const router = require('express').Router()

router.use(require('./auth'))
router.use(require('./user'))

module.exports = router
