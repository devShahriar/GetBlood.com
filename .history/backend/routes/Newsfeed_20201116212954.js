const express = require('express');
const router = express.router();

router.get("/feed" , NewsfeedController.getFeed)

module.exports = router ;
