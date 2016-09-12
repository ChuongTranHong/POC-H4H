var local= false;
var localStorage = require('./localStorage');
var couchDb =require('./couchDb');

var db = local? localStorage: couchDb;

exports.addDisaster = function(disaster,done){
    db.addDisaster(disaster, done);
}

exports.getAll = function(done){
    db.getAll(done);
}

exports.deleteDisaster = function(itemId, done){
    db.deleteDisaster(itemId, done);
}