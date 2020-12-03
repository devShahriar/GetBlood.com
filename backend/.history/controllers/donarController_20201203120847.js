
const db = require('../util/db');
const short = require('shortid')
const donor = require('../models/Donor')


exports.registerDonar=(req,res,next)=>{
    const id = short.generate();
    console.log(id)
    const n = req.body.name;
    const e = req.body.email;
    const p = req.body.password;
    const t = req.body.token;
    const phone =req.body.phone;
    const blood_group= req.body.bloodGroup;
    const d ='donor'
   console.log({n,e,p,t,phone,blood_group})
   Donor.registerDonar()    

}

exports.validEmail=(req,res,next) =>{
    const e =req.body.email
    db.execute("select * from login where email=?",[e])
    .then(
        r=>{
            if(r[0].length>0) {
                res.json({
                    error:"email already used"
                })

            }else{
                res.json({error:""})
            }
        }
    )
}

exports.checkUser=(req,res,next)=>{
    const e =req.body.email
    const p = req.body.password
    db.execute("select * from login where email=? and password=?",[e,p])
    .then(
        r=>{
          res.json({
              
              user:r[0]})
        }
    )
}
exports.getToken=(req,res,next)=>{
    console.log(req.body.blood_group)
    const e =req.body.blood_group
    db.execute("select notification_token from donor where blood_group=?",[e])
    .then(
        r=>{
            console.log(r[0][0].notification_token)
            res.json({ token:r[0][0].notification_token})
        }
    )
}
