const { Router } = require("express");
const app = Router()

app.use("/",(req,res) => {
  res.send({
    title:"back-end"
  })
})


function routes(){
  return app
}

module.exports = {
  routes
}