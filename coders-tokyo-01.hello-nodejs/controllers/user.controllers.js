const shortid = require('shortid');
const db = require('../db')

const users = db.get('users').value()

module.exports = {
    index: (req, res)=>{
        res.render('index');
     },
    users: (req, res) => {
        const page = parseInt(req.query.page) || 1; //n
        const perPage = 10; //x
        const start = (page - 1) * perPage;
        const end = page * perPage;
        const usersPrint = users.slice(start, end)

        res.render('users/index', {users: usersPrint})
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
        const pathAvatar = req.file.path.split('/').slice(1).join('/')
        req.body.avatar = pathAvatar;
        db.get('users').push(req.body).write()
        res.redirect('/users')
    }
}