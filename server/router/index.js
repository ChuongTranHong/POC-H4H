var store =  require('../store/index');

var express = require('express');

var router = express.Router();


module.exports =  function(){
    router.get('/test', function(req, res){
        console.log("get URL /test");
        counter++;
        res.send(counter.toString());
    });

    router.post('/add', function(req, res){
        if(!req.body)
            return res.sendStatus(400);
        console.log(req.body);
        var name =req.body.name;
        var location = req.body.location;
        var time = req.body.time;
        var description = req.body.description;
        store.addDisaster({
            name,
            location,
            time,
            description 
        }, function(){
            res.sendStatus(200);
        }); 
        console.log("Store contains: ")
        store.getAll(function(items){console.log(items)});
        console.log();
        
    })

    router.get('/getAll', function(req,res){
        console.log("fetch all");
        store.getAll(function(items){
            res.json(items);
        })
    })

    router.delete("/delete/:id", function(req, res){
        console.log("Delete with Id "+ req.params.id);
        store.deleteDisaster(req.params.id, function(){
             res.sendStatus(200);
        })
       
    })
    return router
}