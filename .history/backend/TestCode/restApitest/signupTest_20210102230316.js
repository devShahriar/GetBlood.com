const axios = require('axios').default
const chalk = require('chalk');


const testLogin=(email , password)=>{
    axios({
        url: "http://localhost:9000/check/",
        method: "post",
        data: {
          // sending user email and password
          email: email,
          password: password,
        },
      }).then(result=> {
          console.log(result.data.user[0])
      })
}