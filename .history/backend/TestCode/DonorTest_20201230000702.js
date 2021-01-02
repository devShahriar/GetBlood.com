const donor = require('../models/Donor');


class DonorTest {


validEmailTest(){
    emails.map((i,element) => {
        console.log(element.email)
        const r= donor.validEmail(element.email)
        var testResult =[];
        r.then(result=>{
              if(result[0].length>0){
                testResult.append(...{i : true})      
            }
              else{
                testResult.append({i : false}) 
              }
          })
          console.log("asdf")
       })
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