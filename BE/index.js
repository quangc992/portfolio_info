const path = require('path')
const express = require('express')
const app = express()
const server = require('http').createServer(app)
// const engine = require('express-handlebars')
const cookieParser = require('cookie-parser')
const session = require('express-session')
const MongoStore = require('connect-mongo')
require('dotenv').config()

const port = 3000
// const router = require('./src/route')
const db = require('./src/config/database')

// session
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    store: MongoStore.create({
        mongoUrl: 'mongodb+srv://quangadmin:quangc123@cluster0.yaaq4.mongodb.net/profile_quangc',
        ttl: 7 * 24 * 60 * 60 //7 day
    }),
    saveUninitialized: false,
    cookie: {
        secure: false,
        maxAge: 3 * (24 * ((1000 * 60) * 60)) // 7 day token
    }
}))

//connect db mongo
db.connect()

// set cookie secret
app.use(cookieParser('nodesSecretKey'))

// nhan noi dung tu post
app.use(express.json({ limit: '5mb' }))
app.use(express.urlencoded({ limit: '5mb', extended: true }))

//template engine
app.engine('.hbs', engine.engine({
    extname: '.hbs',
}));

// router(app)

//start server
server.listen(port, () => {
    console.log(`start server port ${port}`)
})
