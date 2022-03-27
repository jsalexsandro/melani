const express = require("express")
const cors    = require("cors")
const http    = require("http")
const dotenv  = require("dotenv").config()
const { routes } = require("./router")

const app     = express()
const server  = http.createServer(app)
const port    = process.env.PORT || 2000

app.use(cors())
app.use(express.json())
app.use(routes())

server.listen(port,() => {
  console.info(`Server: http://localhost:${port}/`)
})