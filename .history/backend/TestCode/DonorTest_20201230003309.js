const donor = require('../models/Donor');


class DonorTest {


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