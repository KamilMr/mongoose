const {Schema, model} = require('mongoose');

const user = new Schema({
    firstName: {
        type: String,
        minlength: 2,
        required: [true, 'firstName is required']
    },
    lastName: String,
    age: Number,
    email: {
        type: String,
        unique: true,
    },
    hobbies: [String],
    adress: {
        line1: String,
        postcode: String,
    }
});

const User = model('user', user);
module.exports = {User}