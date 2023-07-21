var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var usersSchema = new Schema({
    firstname:{
        type: String,
        required: true
    },

    lastname:{
        type: String,
        required: true
    },

    email:{
        type: String,
        required: true
    },

    password:{
        type: String,
        required: true
    }

});

module.exports = mongoose.model('users', usersSchema);