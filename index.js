const express = require("express")
const cors    = require("cors")
const http    = require("http")
const dotenv  = require("dotenv").config()
const { routes } = require("./router")

const app     = express()
const server  = http.createServer(app)
const PORT    = process.env.PORT || 5000

app.use(cors())
app.use(express.json())
app.use(routes())

server.listen(PORT,() => {
  console.info(`Server: http://localhost:${port}/`)
})
