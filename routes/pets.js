/**
 * Created by lsantis on 03/09/2014.
 */
var express = require('express');
var router = express.Router();
var Pet = require('../Schemas/Pet.js').Pet;

router.post('/', function(req, res) {

    var params = req.body;

    var pet = new Pet(params);
    pet.save(function(error){
        if(!error) {
            res.redirect('/pets');
        }else{
            res.send({error: "Error..."})
        }
    })
});

router.get('/', function(req, res){

    Pet.find({}, function(error, pets){
        res.render('index', { pets : pets });

    })

});


//router.get('/', function(req, res){
//
//    var params = req.query;
//    if(params._id) {
//    Pet.find(params, function (error, pet) {
//        res.send({ pet : pet });
//    });
//    }else{
//        res.send(400, {error: 'we need the _id'});
//    }
//
//});


router.get('/:_id', function(req, res){
    var params = req.params;
    if(params._id) {
        Pet.find(params, function (error, pet) {
            res.send({ pet: pet });
        });
    }else{
        res.send(400, {error: 'we need the _id'});
    }
});

router.get('/edit', function(req, res){
        res.render('edit', {});
});

//router.post('/pets/edit/:id', function(req, res){
//    Pet.update({_id: req.params.id}, function (error) {
//        if(!error) {
//            res.redirect('/pets');
//        }
//        else {
//            console.log("error...");
//        }
//    });
//});

router.get('/delete/:id', function(req, res){
     Pet.remove({_id: req.params.id}, function (error){
        if(!error){
            res.redirect('/pets');
        }
        else{
            console.log("error...");
        }
    });
});

module.exports = router;

