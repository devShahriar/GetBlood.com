const { getFeed } = require("../models/Newsfeed");
const chalk = require('chalk');

class NewsfeedTest {


testFeed() {
    getFeed(function(result){
        console.log(chalk.blue('checking the result is array'));
    if(result.isArray()){
       console.log(chalk.greenBright('Test passed')); 

    }
    else{
        console.log(chalk.red('Test passed')); 

    }
    })
}

}