const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')

app.use(cors())
app.use(bodyParser.json())
app.use(tokenToBody)

app.use(require('./api'))

app.use(function (req, res, next) {
  res.status(404).send("API not found!")
})

app.use(function(err, req, res, next) {
  console.error(err.stack);
  res.status(500).send('Server error!');
})

const server = app.listen(process.env.PORT || 3000, () => {
    console.log(`Server up and running in ${server.address().port}`)
})

function tokenToBody (req, res, next) {
	if (req.headers.authorization) {
		req.body.token = req.headers.authorization.split(' ')[1]
	}
	next()
}