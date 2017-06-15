const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const port = process.env.PORT || 3000
const dotenv = require('dotenv').config()
const mongoose = require('mongoose')
//mongoose.connect('mongodb://localhost/cmhack')
mongoose.connect('mongodb://ingelieur:tsubasa@ds127842.mlab.com:27842/cmhack')

const app = express()

app.use(cors())

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

const index = require('./routes/index')
const articles = require('./routes/articles')

app.use('/', index)
app.use('/articles', articles)

app.listen(port)
