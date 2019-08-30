module.exports.postCreate = function(req, res, next) {
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
    next();
}