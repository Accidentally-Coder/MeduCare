const express = require('express');
const Blogs = require("../models/blogModel");
const { saveBlogController } = require('../controllers/blogController');

// router object
const router = express.Router();

// routing

// SAVE BLOG || METHOD POST
router.post('/save-blog', saveBlogController);

module.exports = router;