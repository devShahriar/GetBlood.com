const donor = require('../models/Donor');


class DonorTest {


validEmailTest(){
    var testResult =[];
    emails.map((i,element) => {
        console.log(i)
        const r= donor.validEmail(i.email)
        
        r.then(result=>{
              if(result[0].length>0){
                testResult.append(true)
                console.log(testResult)      
            }
              else{
                testResult.append(false) 
              }
          })
          console.log("asdf")
       })
       
       for (var i=0 ; i<emails.length;i++){
           if(emails[i].exits===testResult[i]){
            console.log("test passed ")
           }
           else {
               console.log("test failed")
           }
       }
    }
    
}



var Donor = new DonorTest()
//test case for validEmail
const emails = [
    {
    "email" : "shahriar@gmail.com",
    "exits" : true
    }
    ,
    {
    "email" : "shahriar@gmail.com",
    "exits" : false
    },
    {
        "email" : "s@gmail.com",
        "exits" : false
    }
]

Donor.validEmailTest()