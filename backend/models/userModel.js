const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true, //one email per user
    },
    password: {
        type: String,
        required: true,
    },
    answer: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        default: "0",
    },
    profilePicture: {
        type: Buffer, // Store the image as binary data
    }
},
    {
        timestamps: true
    }
);

module.exports = mongoose.model('users', userSchema);