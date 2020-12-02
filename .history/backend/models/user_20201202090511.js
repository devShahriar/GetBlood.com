const db = require('../util/db');

class user {

    constructor(id , name , email , password){
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
    }

    

    getById(){
        return this.name
    }
    getUser(){
     return `user id is ${this.id} user name ${this.name} pass ${this.password}`   
    }
    
    static findUser =(email) =>{
         db.query()
    }

    static save=(res,id,n,e,p,phone)=>{
        const u = 'user'
        console.log(id,n,e,p,phone,u)
        try {
            db.execute("insert into userinfo (id,name,email,password,phone) values(?,?,?,?,?)", [id,n,e,p,phone])
              .then(r => {
                  res.json({res:'success'})
              })
              .catch(err => {
                console.log(err);
                res.writeHead(200);
                res.json({
                  erro:"somethin is wrong"
              })
              });
              db.execute("insert into login (id,email,password,role) values (?,?,?,?)",[id,e,p,u]).then(
                res.json({d:'success'})
             ).catch(e=>{console.log(e)})
          } catch(e){
              
          }
    }
}
module.exports = user;