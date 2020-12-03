const db = require('../util/db');

exports.getBlood=(req,res,next)=>{
    const blood =req.body.blood_group;
    db.execute("select distinct name,location,latitude,longitude from blood_bag b inner join blood_bank b1 on b.blood_bank_id=b1.blood_bank_id where blood_group=?;",[blood]).then(
        r=>{
            res.json({result:r[0]})
        }
    ).then(r=>{}).catch(e=>{})
}