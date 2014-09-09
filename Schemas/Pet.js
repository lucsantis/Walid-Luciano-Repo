/**
 * Created by lsantis on 02/09/2014.
 */

var mongoose = require ('mongoose');
var Schema =    mongoose.Schema;

var petSchema = new Schema({
        pet_name: { type : String },
        type_of_animal: { type: String },
        age: { type : String },
        breed: { type : String }
});

var Pet = mongoose.model('Pet', petSchema);
exports.Pet = Pet;

