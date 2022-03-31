function List(id,password,database,res){
  if (id == password){
    database.all("SELECT * FROM PEOPLE",[],function(err,values){
      res.send({error:false,values})
    })
  } else {
    res.send({error:true})
  }
} 

module.exports = List