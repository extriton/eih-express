const axios = require('axios')
const router = require('express').Router()
const config = require('../../config/config')

router.get('/user/partners', (req, res) => {
	
	if (!req.query.token) {
		res.status(400).json({ message: 'Invalid token' })
		return
	}
	
	const query = '?token=' + req.query.token
	
    axios.get(`${config.apiUrl}/user/personalPartners${query}`)
        .then((response) => {
			res.status(response.status).json(response.data)
        })
        .catch((error) => {
			res.status(error.response.status).json({ message: error.response.statusText })
        })
	
})

module.exports = router
