const axios = require('axios')
const router = require('express').Router()
const config = require('../../config/config')

router.post('/user/register', (req, res) => {
	
    req.body.sponsor = config.sponsor
	
    axios.post(`${config.apiUrl}/user`, req.body)
        .then((response) => {
			res.status(response.status).json(response.data)
        })
        .catch((error) => {
			console.log('Error: ' + error)
			res.status(500).json({ message: error })
        })
})

module.exports = router
