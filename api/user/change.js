const axios = require('axios')
const router = require('express').Router()
const config = require('../../config/config')

router.put('/user/change', (req, res) => {
	
	if (!req.body.token) {
		res.status(400).json({ message: 'Invalid token' })
		return
	}
	
    axios.put(`${config.apiUrl}/user/`, req.body)
        .then((response) => {
			res.status(response.status).json(response.data)
        })
        .catch((error) => {
			console.log('Error: ' + error)
			res.status(error.response.status).json({ message: error.response.statusText })
        })
})

module.exports = router
