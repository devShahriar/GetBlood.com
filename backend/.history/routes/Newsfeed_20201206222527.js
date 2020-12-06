const express = require('express');
const router = express.Router();
const multer = require('multer')
const fileType = require('file-type')
const NewsfeedController = require('../controllers/Newsfeed')
router.get('/feed' , NewsfeedController.getFeed)
router.post('/createPost' , NewsfeedController.createPost)
router.post('/upload', function(req, res, next) {
    
    const upload = multer({ storage: storage }).single('file')
        upload(req,res, async(err,result)=>{
            console.log(req.body) 
           
        if(err){
            console.log(err)
        }
        else{
           console.log(req.file.originalname)
           return res.send({url:`http://localhost:9000/images/${req.body.id}/${req.file.originalname}`})
           next()
        }
       })   
      
    
    });

module.exports = router ;
