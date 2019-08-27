const express = require('express');
const app = express();
const port = 3000;
const controller = require('./controllers/user.controllers')

app.set('view engine', 'pug')
app.set('views', './views')
app.use(express.static('public'))

app.get('/', controller.index);
app.get('/users', controller.users)
app.get('/users/search', controller.usersSearch)
app.listen(port, ()=>{
    console.log(`Example app listening on port ${port}!`)
})