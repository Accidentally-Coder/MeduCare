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

const getAllBlogsController = async (req, res) => {
    try {
        const blogs = await Blogs.find();
        if (blogs) {
            return res.status(200).send({
                success: true,
                message: 'fetched blogs',
                blogs
            });
        }
        else {
            return res.status(200).send({
                success: false,
                message: 'Could not fetch blogs'
            });
        }

    } catch (error) {
        console.log(error);
        return res.status(500).send({
            success: false,
            message: 'Could not fetch blogs'
        });

    }
}

// INCREASE LIKES controller || METHOD PUT
const increaseLikesController = async (req, res) => {
    try {
        const blogId = req.params.blogId;

        const existingBlog = await Blogs.findById(blogId);

        if (!existingBlog) {
            return res.status(200).send({
                success: false,
                message: 'Invalid Blog Id. Blog does not exsit.'
            });
        }

        existingBlog.likes = existingBlog.likes + 1;

        const updatedBlog = await existingBlog.save();

        return res.status(201).send({
            success: true,
            message: "Blog Likes increased successfully",
            updatedBlog
        });

    } catch (error) {
        console.log(error);
        return res.status(500).send({
            success: false,
            message: 'Error in increasing blog likes',
            error
        })
    }
}

const increaseDislikesController = async (req, res) => {
    try {
        const blogId = req.params.blogId;

        const existingBlog = await Blogs.findById(blogId);

        if (!existingBlog) {
            return res.status(200).send({
                success: false,
                message: 'Invalid Blog Id. Blog does not exsit.'
            });
        }

        existingBlog.dislikes = existingBlog.dislikes + 1;

        const updatedBlog = await existingBlog.save();

        return res.status(201).send({
            success: true,
            message: "Blog Dislikes updated successfully",
            updatedBlog
        });

    } catch (error) {
        console.log(error);
        return res.status(500).send({
            success: false,
            message: 'Error in updating blog dislikes',
            error
        })
    }
}

const decreaseLikesController = async (req, res) => {
    try {
        const blogId = req.params.blogId;

        const existingBlog = await Blogs.findById(blogId);

        if (!existingBlog) {
            return res.status(200).send({
                success: false,
                message: 'Invalid Blog Id. Blog does not exsit.'
            });
        }

        existingBlog.likes = existingBlog.likes - 1;

        const updatedBlog = await existingBlog.save();

        return res.status(201).send({
            success: true,
            message: "Blog Likes decreased successfully",
            updatedBlog
        });

    } catch (error) {
        console.log(error);
        return res.status(500).send({
            success: false,
            message: 'Error in decreasing blog likes',
            error
        })
    }
}

const decreaseDislikesController = async (req, res) => {
    try {
        const blogId = req.params.blogId;

        const existingBlog = await Blogs.findById(blogId);

        if (!existingBlog) {
            return res.status(200).send({
                success: false,
                message: 'Invalid Blog Id. Blog does not exsit.'
            });
        }

        existingBlog.dislikes = existingBlog.dislikes - 1;

        const updatedBlog = await existingBlog.save();

        return res.status(201).send({
            success: true,
            message: "Blog Dislikes decreased successfully",
            updatedBlog
        });

    } catch (error) {
        console.log(error);
        return res.status(500).send({
            success: false,
            message: 'Error in decreasing blog dislikes',
            error
        })
    }
}


module.exports = {
    saveBlogController,
    getAllBlogsController,
    increaseLikesController,
    increaseDislikesController,
    decreaseLikesController,
    decreaseDislikesController,
};