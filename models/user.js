const mongoose = require('mongoose');
const { isEmail } = require('validator');

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
        required: false
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        validate: {
            validator: (value) => isEmail(value),
            message: 'email address is not valid'
        }
    },
    occupation: {
        type: String,
        required: false
    },
    dateOfBirth: {
        type: Date,
        required: false
    },
    hobbies: {
        type: [String],
        required: false
    },
    profilePicture: {
        type: Buffer,
        required: false
    },
    password: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('User', userSchema);