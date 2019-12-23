const axios = require('axios')
const router = require('express').Router()
const config = require('../../config/config')

router.post('/user/changePassword', (req, res) => {
	
	if (!req.body.token) {
		res.status(400).json({ message: 'Invalid token' })
		return
	}
	
    axios.post(`${config.apiUrl}/user/changePassword`, req.body)
        .then((response) => {
			res.status(response.status).json(response.data)
        })
        .catch((error) => {
			console.log('Error: ' + error)
			res.status(error.response.status).json({ message: error.response.statusText })
        })
})

module.exports = router
