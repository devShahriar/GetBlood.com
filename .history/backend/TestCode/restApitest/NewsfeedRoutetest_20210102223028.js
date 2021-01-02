const axios = require('axios').default


const testfeed=()=>{
    axios.get("http://localhost:9000/feed").then((r) => {
        if(Array.isArray(r.data)){
            console.log(chalk.greenBright('Test passed')); 
        }
        else{
            console.log(chalk.red('Test failed')); 
        }
      });
}

testfeed();
