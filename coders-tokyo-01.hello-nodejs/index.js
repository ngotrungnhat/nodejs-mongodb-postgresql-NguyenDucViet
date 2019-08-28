const express = require('express');
var bodyParser = require('body-parser')
const controller = require('./controllers/user.controllers')
const userRoute = require('./routers/user.router')
const port = 3000;

const app = express();
app.set('view engine', 'pug')
app.set('views', './views')

app.use(express.static('public'))
app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.get('/', controller.index);

app.use('/users', userRoute)

app.listen(port, ()=>{
    console.log(`Example app listening on port ${port}!`)
})