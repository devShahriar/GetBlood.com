const donor = require('../models/Donor');


class DonorTest {


validEmailTest(){
       const r= donor.validEmail("s@gmail.com")
       r.then(result=>{
           if(result[0].length>0){
               console.log("email already exits")
           }
           else{
            console.log("email does not already exits")
           }
       })
       console.log("asdf")
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
emails.forEach(element => {
    
});
Donor.checkUserExitTest()