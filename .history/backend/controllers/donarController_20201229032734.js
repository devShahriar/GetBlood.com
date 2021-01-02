
const db = require('../util/db');
const short = require('shortid')
const donor = require('../models/Donor');



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
   console.log(checkUserExit(e))
   if(checkUserExit(e)){
    res.json({
        error:"email already used"
    })
   }else{
    db.execute("insert into donor (donor_id,name,email,phone,password,notification_token,blood_group) values(?,?,?,?,?,?,?)",
    [id,n,e,phone,p,t,blood_group]).then(r=>{
       res.json('success')
      console.log('done');
  }).catch(err=>{
      console.log(err)
      res.json({error:'something went wrong'})
  })

   db.execute("insert into login (id,email,password,role) values (?,?,?,?)",[id,e,p,d]).then(
    res.json({d:'success'})
   ).catch(e=>{console.log(e)})
   }

}

exports.validEmail=(req,res,next) =>{
    const e =req.body.email
   const result = validEmail(e)
    result.then(
        r=>{
            if(r[0].length>0) {
                return true
                /*
                res.json({
                    error:"email already used"
                })
                */
            }else{
                return false
              //  res.json({error:""})
            }
        }
    )
}

const checkUserExit=(e)=>{
    const result = donor.validEmail(e)
    
    result.then(
        r=>{
            console.log(r[0].length)
            if(r[0].length>0) {
                return true
                /*
                res.json({
                    error:"email already used"
                })
                */
            }else{
                return false
              //  res.json({error:""})
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
