const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
http.globalAgent.maxSockets = Infinity;
app.use(express.static('public'));

let data = '';
let connections = [];

let state_winrounds = false;
let state_losebonus = false;

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/teams', (req, res) => {
    res.sendFile(__dirname + '/public/js/teams.json');
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
});



app.get('/cp', (req, res) => {
    res.sendFile(__dirname + '/control.html');
});

app.get('/radar', (req, res) => {
    res.sendFile(__dirname + '/radar.html');
});



io.on('connection', (socket) => {
    connections.push(socket);
        console.log('\x1b[33m' + socket.handshake.address.slice(7) + ' \x1b[36mconnected');

    socket.on('disconnect', () => {
        console.log('\x1b[33m' + socket.handshake.address.slice(7) + ' \x1b[36mdisconneted');
    });

    socket.on('call_resethud', () => {for (let i = 0; i < connections.length; i++) {connections[i].emit('fn_hud_reset')}});
    socket.on('call_show_winrounds', () => {for (let i = 0; i < connections.length; i++) {connections[i].emit('fn_show_winrounds'); connections[i].emit('checkState', 'winrounds', true)}});
    socket.on('call_hide_winrounds', () => {for (let i = 0; i < connections.length; i++) {connections[i].emit('fn_hide_winrounds'); connections[i].emit('checkState', 'winrounds', false)}});
    socket.on('call_show_losebonus', () => {for (let i = 0; i < connections.length; i++) {connections[i].emit('fn_show_losebonus'); connections[i].emit('checkState', 'losebonus', true)}});
    socket.on('call_hide_losebonus', () => {for (let i = 0; i < connections.length; i++) {connections[i].emit('fn_hide_losebonus'); connections[i].emit('checkState', 'losebonus', false)}});
});

server.listen(3000, () => {
  console.log('listening on *:3000');
});