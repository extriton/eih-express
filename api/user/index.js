const router = require('express').Router()

router.use(require('./register'))
router.use(require('./account'))

module.exports = router
