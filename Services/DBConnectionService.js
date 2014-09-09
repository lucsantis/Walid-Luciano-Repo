/**
 * Created by lsantis on 02/09/2014.
 */
var mongoose = require('mongoose');

/**
 * Sets up connection to mongo
 *
 */

function MyDBConnector(){}

MyDBConnector.prototype.setupConnection = function(){

   //connection

   if(mongoose.connection.db == null){

       try {
           mongoose.connect('mongodb://localhost:27017/pets', function () {

               console.log("MongoDB connected...");
           });
       }catch(e){
            console.error(e);
       }

    mongoose.connection.on('connected', function(){

        console.log("Connected...");

    });

    mongoose.connection.on('error', function(e){
        console.log("Error...");
        console.log(e);
    })

   }
};

exports.MyDBConnector = MyDBConnector;
