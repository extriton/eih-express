const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors())
app.use(require('./api'))

const server = app.listen(process.env.PORT || 3000, () => {
    console.log(`Server up and running in ${server.address().port}`)
})