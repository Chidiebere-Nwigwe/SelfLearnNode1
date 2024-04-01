const express = require('express');
const blogController = require('../controllers/blogController')
const router = express.Router();

const { render } = require("ejs");

// blog routes
router.get('/', blogController.blog_index);

// post request
router.post('/',blogController.blog_create_post);

//create blog
router.get('/create', blogController.blog_create_get);

//get a single blog
router.get('/:id', blogController.blog_details);

// delete request
router.delete('/:id', blogController.blog_delete);

module.exports = router;