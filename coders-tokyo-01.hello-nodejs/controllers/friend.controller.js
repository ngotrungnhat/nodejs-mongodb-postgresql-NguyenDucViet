const db = require('./../db')

module.exports = {
    addFriend: ( req, res, next ) => {
        const userId = req.params.userId;
        const sessionsId = req.signedCookies.sessionId;
        if (!sessionsId) {
            res.redirect('/users')
            return;
        }

        const count = db
        .get('sessions')
        .find({ id: sessionsId })
        .get('friend.' + userId, 0)
        .value()

        db.get('sessions')
        .find({ id: sessionsId })
        .set('friend.' + userId, count + 1)
        .write()

        var objFriend = db.get('sessions').value()
        var numFriend = 0;
        objFriend.forEach((item) => {
            if (item.id === sessionsId) {
                for (let key in item.friend) {
                    numFriend += item.friend[key];
                }
            }
        })
        console.log('numFriend', numFriend)
        res.locals.numFriend = numFriend
    }
}