var db = require('./../util/db');
var ottoman = require('ottoman');
ottoman.bucket = db.ODMBucket;

var Disaster = ottoman.model('Disaster',{
    uid: 'string',
    name:'string',
    location: 'string',
    time: 'string',
    description: 'string'
},{
        index: {
            findByUid:{
                by:'uid',
                type: 'refdoc'
            }
        }
    });

module.exports=Disaster;


