const md5 = require('md5');

const db = require('../db')

module.exports = {
    login: (req, res, next) => {
        res.render('auth/login')
    },
    postLogin: (req, res, next) => {
        const email = req.body.email,
            password = md5(req.body.password)
        const errors = []
        const user = db.get('users').find({ email: email }).value();
        if (!user) {
            errors.push('Email does not exist')
        }
        if (user) {
            if (user.password !== password) {
                errors.push("Wrong password")
            }
        }
        if (errors.length) {
            res.render('auth/login', { errors: errors, values: req.body })
            return;
        }
        res.cookie('userId', user.id, {signed: true})
        res.redirect('/')
    }
}