var uuid = require('uuid');
var ottoman = require('ottoman');
var Disaster = require('./../model/disaster');


ottoman.ensureIndices(function(err){
    if(err){
        console.log("fail to indices "+err);
    }
});

exports.addDisaster = function(disaster, done){
    id = uuid.v4();
    var disaster = new Disaster({
        uid: id,
        name: disaster.name,
        location: disaster.location, 
        time: disaster.time,
        description: disaster.description
    })
    disaster.save(function(err){
        if(err){
            console.log("Fail to save")
        }else{
            done();
        }

    });
}

exports.deleteDisaster = function(itemId,done ){
    Disaster.findByUid(itemId, function(err, result){
        if(err){
            console.log("Fail to get obj with id "+itemId);
            return;
        }
        console.log(result);
        if(result.length==0){
            console.log("Cannot find obj with id "+itemId);
            return;
        }

        result[0].remove(function(error){
            if(error){
                console.log("Fail to delete obj with id "+itemId);
                return;
            }
            console.log("Delete successfully obj with id "+itemId);
            done();
        })
    })
}

exports.getAll = function(done){
    var options = {
        limit: 10,
        consistency: ottoman.Consistency.LOCAL
        };
    Disaster.find({}, options, function(err, items){
        if(err){
            console.log("Cannot fetch");
            return;
        }
        console.log("done fetching");
        console.log(items);
        done(items);
    })
}
