require('dotenv').config()
const cors = require('cors')
const port = process.env.WEBAPI_PORT || 9999
const mongoDB= require('./server-mongodb')
// const bodyParser = require('body-parser')
const express = require('express')
const app = express()


//middleware
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false}))
// app.use(bodyParser.json())


//routes
app.use('/api/products', require('./controllers/controllerProducts'))

// app.use('/api/users', require('./controllers/controllerUser'))


//initialize
mongoDB()
app.listen(port, () => console.log(`Web Api is running on http://localhost:${port}`))