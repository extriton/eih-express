const axios = require('axios')
const router = require('express').Router()
const config = require('../../config/config')

router.get('/user/account', (req, res) => {
	
	if (!req.body.token) {
		res.status(400).json({ message: 'Invalid token' })
		return
	}
	
	const query = '?token=' + req.body.token
	
    axios.get(`${config.apiUrl}/user${query}`)
        .then((response) => {
			res.status(response.status).json(response.data)
        })
        .catch((error) => {
			res.status(error.response.status).json({ message: error.response.statusText })
        })
	
})

module.exports = router
