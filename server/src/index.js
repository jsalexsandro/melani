require("dotenv").config()

const express = require("express")
const http = require("http")
const cors = require("cors")

const app = express()
app.use(express.json())
app.use(cors())
app.use(require("./routes"))

const server = http.createServer(app)
const port = process.env.PORT || 8080

server.listen(port,() => {
  console.log(`Dev: http://localhost:${port}`)
})