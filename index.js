const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
http.globalAgent.maxSockets = Infinity;

let data = '';
let connections = [];

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.post('/', (req, res) => {
    let date = new Date();
    console.log(`\x1b[32m[${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}]` + "\x1b[36m>>> Updating data from CS:GO...");
    
    res.writeHead(200, {'Content-Type': 'text/html'});
    
    req.on('data', function (data_from_game) {
        data = JSON.parse(data_from_game);

        for (let i = 0; i < connections.length; i++) {
            connections[i].emit('getData', JSON.stringify(data));
        }
    });

    req.on('end', () => {
        res.end('');
    });
})

io.on('connection', (socket) => {
  connections.push(socket);
  console.log('\x1b[33m' + socket.id + ' \x1b[36mconnected');

  socket.on('disconnect', () => {
    console.log('\x1b[33m' + socket.id + ' \x1b[36mdisconneted');
  })
});

server.listen(3000, () => {
  console.log('listening on *:3000');
});