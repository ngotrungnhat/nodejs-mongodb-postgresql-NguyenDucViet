const shortid = require('shortid');
const db = require('../db')

const users = db.get('users').value()

module.exports = {
    index: (req, res)=>{
        res.render('index', {name: 'Nhat'});
     },
    users: (req, res) => {
        res.render('users/index', {users: users})
    },
    usersSearch: (req, res) => {
        const q = req.query.q
        const matchUser = users.filter((user)=>{
            return user.name.toLowerCase().indexOf(q.toLowerCase()) !== -1
        })
        res.render('users/index', {users: matchUser, value: q})
    },
    userCreate: (req, res) => {
        res.render('users/create')
    },
    userPostCreate: (req, res) => {
        req.body.id = shortid.generate()
        db.get('users').push(req.body).write()
        res.redirect('/users')
    }
}