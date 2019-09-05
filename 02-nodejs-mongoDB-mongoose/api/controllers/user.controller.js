const userModel = require('../../model/user')

module.exports.index = async function(req, res) {
    const userApi = await userModel.find();
    res.json(userApi);
}


