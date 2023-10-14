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
        // 0 : user , 1 : admin
        type: String,
        default: "0",
    },
    profilePicture: {
        type: Buffer,
    }
},
    {
        timestamps: true
    }
);

module.exports = mongoose.model('users', userSchema);