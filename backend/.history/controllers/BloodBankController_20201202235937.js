const db = require('../util/db');
const blood_bank = require('../models/BloodBank')
exports.getBlood=(req,res,next)=>{
    const blood =req.body.blood_group;
  //  blood_bank.getBlood(req , blood)
   const result =blood_bank.getBlood(req , blood)
   res.json({result:result[0]})
}