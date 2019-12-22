const axios = require('axios')
const router = require('express').Router()
const config = require('../../config/config')

router.post('/user/register', (req, res) => {
    req.body.sponsor = config.sponsor
	
    axios.post(`${config.apiUrl}/user`, req.body)
        .then((response) => {
			console.log('Status: ' + response.status)
			console.log(response.data)
			res.json(response.data)
        })
        .catch((error) => {
			console.log('Error: ' + error)
			res.status(500).json({ message: 'Server error' })
        })
})

module.exports = router
