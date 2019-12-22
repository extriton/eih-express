const router = require('express').Router()

router.post('/auth/logout', (req, res) => {
	
	res.status(200).json({ message: 'Successfully logout' })
	
})

module.exports = router
