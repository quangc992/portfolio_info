const path = require('path')
const express = require('express')
const app = express()
const server = require('http').createServer(app)
require('dotenv').config()

const port = 3000
const router = require('./src/route')
const db = require('./src/config/database')

//connect db mongo
db.connect()

// nhan noi dung tu post
app.use(express.json({ limit: '5mb' }))
app.use(express.urlencoded({ limit: '5mb', extended: true }))

router(app)

//start server
server.listen(port, () => { console.log(`start server port ${port}`) })
