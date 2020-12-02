//controller newsfeed
const db = require('../util/db');
const short = require('shortid');
const shortid = require('shortid');

exports.getFeed = (req, res, next) => {
  //  const id = req.body.userid;
  try {
    db.execute("select * from post").then((result) => {
      res.json({
        post:result[0]
      });
    });
  } catch (e) {}
};

exports.createPost =(req, res,next)=>{
  const id = shortid.generate()
  const user_id = req.body.user_id
  const user_name =req.body.user_name
  const Blood_tag = req.body.Blood_tag
  const Header = req.body.Header
  const description = req.body.description

  try {
    db.execute("insert into post (post_id,user_id,user_name,Blood_tag,Header,description) values(?,?,?,?,?,?)",
    [post_id,user_id,user_name,Blood_tag,Header,description])
    .then(()=>{
      res.json({d:'success'})
    }).catch(e=>{
      console.log(e)
    })
  }
  catch(e){
   console.log(e)
  }
}