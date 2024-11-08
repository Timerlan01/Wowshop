// server.js
const WebSocket = require('ws');

const server = new WebSocket.Server({ port: 8080 });

server.on('connection', (ws) => {
  console.log('Client connected');

  setInterval(() => {
    const data = JSON.stringify({ timestamp: new Date().toISOString() });
    ws.send(data);
  }, 1000);

  ws.on('close', () => {
    console.log('Client disconnected');
  });
});
