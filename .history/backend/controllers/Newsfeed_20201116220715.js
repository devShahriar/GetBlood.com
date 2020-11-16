//controller newsfeed 
const db = require('../util/db')

exports.getFeed=(req, res , next)=> {
  //  const id = req.body.userid;
    try {
        db.execute('select * from post').then(
            result=>{

               console.log(result[0])
                //res.json({
               //     posts:result[0]
               // })
            }
        )
    } catch (e) {
        
    }
}