const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: false
    },
    occupation: {
        type: String,
        required: true
    },
    dateOfBirth: {
        type: Date,
        required: true
    },
    hobbies: {
        type: [String],
        required: true
    },
    profilePicture: {
        type: Buffer,
        required: false
    },
    password: {
        type: String,
        required: false
    }
});

module.exports = mongoose.model('User', userSchema);