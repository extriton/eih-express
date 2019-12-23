const router = require('express').Router()

router.use(require('./register'))
router.use(require('./account'))
router.use(require('./change'))
router.use(require('./changePassword'))
router.use(require('./partners'))

module.exports = router
