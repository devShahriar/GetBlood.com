const donor = require('../models/Donor');


class DonorTest {

    checkUserExitTest(){
       const r= donor.validEmail("s@gmail.com")
       console.log(r)
    }
}



var Donor = new DonorTest()

Donor.checkUserExitTest()