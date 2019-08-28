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
        const error = [];
        if (!req.body.name) {
            error.push('Name is require')
        }
        if (!req.body.phone) {
            error.push('Phone is require')
        }
        if (error.length) {
            res.render('users/create', {
                errors: error,
                values: req.body
            })
            return;
        }
        req.body.id = shortid.generate()
        db.get('users').push(req.body).write()
        res.redirect('/users')
    }
}