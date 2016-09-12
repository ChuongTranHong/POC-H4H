var bucket = "default";
var endPoint ="localhost:8091";
var couchbase = require('couchbase');
var myCluster = new couchbase.Cluster(endPoint);
var myBucket = myCluster.openBucket(bucket);
var ODMBucket = myCluster.openBucket(bucket);
var db = myBucket

function upsert(key, val, done) {
    db.upsert(key, val, function (err, res) {
        if (err) {
            console.log("DB.UPSERT:",key,":", err);
            done(err, null);
            return;
        }
        done(null, res);
    });
}

function read(key, done) {
    db.get(key, function (err, result) {
        if (err) {
            console.log("DB.READ:", err);
            done(err, null);
            return;
        }
        done(null, result);
    });
}

function query(sql,user,done){
    if(typeof done === "undefined"){
        done=user;
    }

    var N1qlQuery = couchbase.N1qlQuery;
    var query = N1qlQuery.fromString(sql);
    db.query(query,function(err,result){
        if (err) {
            console.log("ERR:",err);
            done(err,null);
            return;
        }
        done(null,result);
    });

}

module.exports.query=query;
module.exports.upsert=upsert;
module.exports.read=read;
module.exports.ODMBucket=ODMBucket;