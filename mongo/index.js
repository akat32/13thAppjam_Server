var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://localhost/star');
mongoose.Promise = global.Promise;

var UsersSchema = mongoose.Schema({
  name: {type: String},
  passwd: {type: String},
  isLogined: {type: Boolean, required:true, default: false}

});
Users = mongoose.model("users",UsersSchema);

var StarSchema = mongoose.Schema({
  x: {type: Number},
  y: {type: Number},
  twit: {type: String},
  code: {type: String}
});

Stars = mongoose.model("stars", StarSchema);

exports.stars = Stars;
exports.Users = Users;
exports.db = db;
