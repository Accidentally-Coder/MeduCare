const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    authorImage: {
        type: Buffer,
    },
    photo: {
        type: Buffer
    },
    likes: {
        type: Number,
        default: 0,
    },
    dislikes: {
        type: Number,
        default: 0,
    },
},
    {
        timestamps: true
    }
);

const Blogs = mongoose.model('blogs', blogSchema);
module.exports = Blogs;