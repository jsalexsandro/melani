function socketIO(io){
  io.on("connection",(socket) => {
    console.log(`Socket Resquest: ${socket.id}`)
  })
}

module.exports = socketIO