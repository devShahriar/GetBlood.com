const donor = require('../models/Donor');
const { getMaxListeners } = require('../util/db');
const db = require('../util/db');


class DonorTest {

registerDonor(id,n,e,phone,p,t,blood_group ){
    const result =donor.registerDonar(id,n,e,phone,p,t,blood_group)
    result.then(r=>{
        if(r!==null){
            console.log("test pass");
        }
        else {
            console.log("test fail");
        }
    })
}


validEmailTest(emails){
   const  testResult =[];
    emails.map((i,element) => {
        console.log(i)
        const r= donor.validEmail(i.email)
        
         r.then(result=>{
              if(result[0].length>0 ){
                
                console.log("passed")      
            }
              else{
                console.log("fail")      
              }
          })
       })
    }
}



var Donor = new DonorTest()
//test case for validEmail
const emails = [
    {
    "email" : "ar@gmail.com",
    "exits" : true
    }
    ,
    {
    "email" : "shahriar@gmail.com",
    "exits" : true
    },
    {
        "email" : "s@gmail.com",
        "exits" : false
    }
]

Donor.validEmailTest(emails)

Donor.registerDonor('sdffff',"shudip", 's@gmail.com','01457582','password','token','O+')