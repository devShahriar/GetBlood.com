const donor = require('../models/Donor');


class DonorTest {

    checkUserExitTest(){
       const r= donor.checkUserExit("s@gmail.com")
       console.log(r)
    }
}



var Donor = new DonorTest()

Donor.checkUserExitTest()