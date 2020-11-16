//controller newsfeed
const db = require("../util/db");

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
