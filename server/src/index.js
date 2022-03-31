require("dotenv").config()

const express = require("express")
const http = require("http")
const socket = require("socket.io")
const cors = require("cors")
const socketIO = require("./socket")

const app = express()
app.use(express.json())
app.use(cors())
app.use(require("./routes"))

const server = http.createServer(app)
const port = process.env.PORT || 8080
const io = socket(server)

socketIO(io) // CREATE WEB SOCKET

server.listen(port,() => {
  console.log(`Dev: http://localhost:${port}`)
})