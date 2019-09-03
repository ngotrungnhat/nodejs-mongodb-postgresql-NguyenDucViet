require('dotenv').config();

const express = require('express');
var bodyParser = require('body-parser')
const controller = require('./controllers/user.controllers')
const userRoute = require('./routers/user.router')
const authRoute = require('./routers/auth.route')
const addFriend = require('./routers/friend.route')
const cookieParser = require('cookie-parser')
const authRequire = require('./middlewares/auth.middleware')
const sessionMiddleware = require('./middlewares/session.middleware')

const port = 3000;

const app = express();
app.set('view engine', 'pug')
app.set('views', './views')

app.use(express.static('public'))
app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(cookieParser(process.env.SESSION_SECRET))
app.use(sessionMiddleware);

app.use('/users',authRequire.authRequire, userRoute)
app.use('/auth', authRoute)
app.use('/friend', addFriend)

app.get('/', authRequire.authRequire, controller.index);


app.listen(port, ()=>{
    console.log(`Example app listening on port ${port}!`)
})