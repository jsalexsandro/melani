const crypto = require("crypto")

function Write(id,password,insert,database,res){
  if (id == password){
    const { name:userName, password:usePassword } = insert
    const userID = crypto.randomBytes(16).toString("hex") // GENERATE USER
    if (userName && usePassword){
      database.all(
        `INSERT INTO PEOPLE VALUES ('${userName}','${usePassword}','${userID}')`,
        function(err){
          if (err) {
            res.send({
              insert:false,
              error:"USER EXIST"
            }) 
          } else {
            res.send({
              insert:true,
              error:"",
              id:userID
            })  
          }
        }
      )
    } else {
      res.send({
        insert:false,
        error:"INVALID PARAMETERS"
      }) 
    }
  } else {
    res.send({
      insert:false,
      error:"INVALID PASSWORD"
    })
  }
}

module.exports = Write