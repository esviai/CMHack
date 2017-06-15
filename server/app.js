const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const port = process.env.PORT || 3000
const dotenv = require('dotenv').config()
const mongoose = require('mongoose')
//mongoose.connect('mongodb://localhost/cmhack')
mongoose.connect('mongodb://<dbuser>:<dbpassword>@ds127842.mlab.com:27842/cmhack')

const app = express()

app.use(cors())

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

const index = require('./routes/index')
app.use('/', index)

app.listen(port)
