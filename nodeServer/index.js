
// // node server handeling socket.io
// const express = require('express');
// const cors = require('cors');

// const io = require('socket.io')(3300)
// const app = express();
// io.use(cors());

const express = require("express");
const socket = require("socket.io");

// App setup
const PORT = 8000;
const app = express();
const server = app.listen(PORT, function () {
  console.log(`Listening on port ${PORT}`);
  console.log(`http://localhost:${PORT}`);
});

// Static files
app.use(express.static("public"));

// Socket setup
const io = socket(server);
io.on("connection", function (socket) {
    console.log("Made socket connection");
  });
  

const users = {};

io.on('connection', socket =>{
    socket.on('new-user-joined', name =>{
        console.log("New user " , name);
        users[socket.id] = name;
        socket.broadcast.emit('user-joined',name);
    });


    socket.on('send', message =>{
        socket.broadcast.emit('receive', {message: message, name: users[socket.id]})
    });

})
