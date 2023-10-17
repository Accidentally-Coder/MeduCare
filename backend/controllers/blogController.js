const Blogs = require("../models/blogModel");
const axios = require('axios');


// POST save-blog
const saveBlogController = async (req, res) => {
    try {
        const { title, content, author, authorImage, photo, likes, dislikes } = req.body;
        console.log(title, content, author, authorImage, photo, likes, dislikes);

        // validation
        if (!title || !content || !author || !authorImage || !photo || likes === undefined || dislikes === undefined) {
            return res.send({
                message: 'All fields are required',
            });
        }

        // save the blog post
        const blog = await new Blogs({
            title, content, author, authorImage, photo, likes, dislikes
        }).save();

        return res.status(201).send({
            success: true,
            message: 'Blog Saved Successfully!',
            blog
        });


    } catch (error) {
        console.log(error);
        return res.status(500).send({
            success: false,
            message: 'Error in Registration',
            error
        })
    }
}
module.exports = { saveBlogController };