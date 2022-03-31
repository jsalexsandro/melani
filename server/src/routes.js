const { Router } = require("express")
const DatabaseConnection = require("./models/database")
const List = require("./models/list")
const Write = require("./models/write")
const routes = Router()

const database = DatabaseConnection() // RUN DATABASE CONNECTION
const password = process.env.PASSWORD

routes.get("/",(req,res) => {
  res.json({
    
  })
})

routes.get("/list/:id",(req,res) => {
  let { id } = req.params // GET ID 
  List(id,password,database,res) // READ DATABASE
})

routes.get("/write/:id/value/:values",(req,res) => {
  let { id } = req.params // GET ID 
  let { values } = req.params // GET VALUES
  Write(id,password,JSON.parse(values),database,res) // INSERT DATABASE
})

module.exports = routes