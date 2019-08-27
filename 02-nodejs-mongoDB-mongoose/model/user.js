var mongoose = require('mongoose');
var user = new mongoose.Schema({ name: 'string', phone: 'number' }, {collection: 'user'});
module.exports = mongoose.model('user', user);