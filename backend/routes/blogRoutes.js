const express = require('express');
const Blogs = require("../models/blogModel");
const { saveBlogController, getAllBlogsController, increaseLikesController, increaseDislikesController, decreaseLikesController, decreaseDislikesController } = require('../controllers/blogController');

// router object
const router = express.Router();

// routing

// SAVE BLOG || METHOD POST
router.post('/save-blog', saveBlogController);
// GET ALL BLOG || METHOD GET
router.get('/get-all-blogs', getAllBlogsController);
// INCREASE LIKES || METHOD PUT
router.put('/increase-likes/:blogId', increaseLikesController);
// INCREASE DISLIKES || METHOD PUT
router.put('/increase-dislikes/:blogId', increaseDislikesController);
// DECREASE LIKES || METHOD PUT
router.put('/decrease-likes/:blogId', decreaseLikesController);
// DECREASE DISLIKES || METHOD PUT
router.put('/decrease-dislikes/:blogId', decreaseDislikesController);
module.exports = router;