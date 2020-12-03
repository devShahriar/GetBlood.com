const db = require('../util/db')


class Newsfeed {
    


    static getFeed(cb){
        try {
            db.execute("select * from post").then((result) => {
              cb(result[0])
            });
          } catch (e) {}
    }
}