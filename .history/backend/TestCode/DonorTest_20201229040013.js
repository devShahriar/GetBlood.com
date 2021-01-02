const donor = require('../models/Donor');


class DonorTest {

 async checkUserExitTest(){
       const r= await donor.validEmail("s@gmail.com")
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

Donor.checkUserExitTest()