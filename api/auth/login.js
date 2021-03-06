const axios = require('axios')
const router = require('express').Router()
const config = require('../../config/config')

router.post('/auth/login', (req, res) => {
	
	if (!req.body.username || !req.body.password) {
		res.status(401).json({ message: 'Bad credentials' })
		return
	}
	
	const query = '?username=' + req.body.username + '&password=' + req.body.password
    axios.get(`${config.apiUrl}/auth${query}`)
        .then((response) => {
			res.status(response.status).json(response.data)
        })
        .catch((error) => {
			res.status(error.response.status).json({ message: error.response.statusText })
        })

})

module.exports = router
