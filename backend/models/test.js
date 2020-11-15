const user = require('./user')

const user1 = new user('ad' , 'shudip' , 'slala', 'adfafs')
const user2 = new user('a','fariha','adf','a')
console.log(user1.email)
console.log(user1.getById())
console.log(user2.getById())


console.log(user1.email)