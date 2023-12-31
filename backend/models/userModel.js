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
    }
},
    {
        timestamps: true
    }
);

module.exports = mongoose.model('users', userSchema);