var store = [];
var id = 0;

exports.addDisaster =function(disaster, done){
    id++;
    disaster["uid"] = id;
    store.push(disaster);
    done();
}

exports.getAll = function(done){
    done(store);
}

exports.deleteDisaster = function(itemId, done){
    for(var i= 0; i< store.length;i++){
        if(store[i].uid == itemId){
            store.splice(i,1);
            break;
        }
    }
    done();
}