const axios = require('axios')
const router = require('express').Router()
const config = require('../../config/config')

router.get('/user/account', (req, res) => {
	
	if (!req.headers.authorization) {
		res.status(400).json({ message: 'Invalid params' })
		return
	}
	
	const token = req.headers.authorization.substr(7)
	const query = '?token=' + token
	
    axios.get(`${config.apiUrl}/user${query}`)
        .then((response) => {
			res.status(response.status).json(response.data)
        })
        .catch((error) => {
			res.status(500).json({ message: error })
        })
	
	// username: sdf
	// password: 111
	// token: 7293ad519f8a218cdbecb55bb50d6f41cd7ae479841a1f9a7e16cd40b1db8a91ad13cc7aba510114f112447a17d864ada40393a9cb50fbd604b28ce361a3c296bac182465969843b
})

module.exports = router
