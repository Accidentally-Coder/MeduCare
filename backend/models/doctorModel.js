const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    phone: {
        type: String,
        required: true,
    },
    license:{
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    specialization:{
        type: String,
        required: true,
    },
    fees:{
        type: String,
        required: true,
    },
},
{
    timestamps:true
}
);

module.exports = mongoose.model('doctor',doctorSchema);