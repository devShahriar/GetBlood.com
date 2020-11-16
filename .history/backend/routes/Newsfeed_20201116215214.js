const express = require('express');
const router = express.router();
const NewsfeedController = require('../controllers/Newsfeed')
router.get("/feed" , NewsfeedController.getFeed)

module.exports = router ;
