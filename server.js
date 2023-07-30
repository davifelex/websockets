const WebSocket = require('ws');

// Criar um servidor WebSocket na porta 3000
const wss = new WebSocket.Server({ port: 3000 });

// Evento de conexão quando um cliente se conecta
wss.on('connection', (ws) => {
  console.log('Novo cliente conectado.');

  // Evento para receber mensagens do cliente
  ws.on('message', (message) => {
    console.log('Mensagem recebida:', message.toString()); // Converter o Buffer para uma string

    // Enviar a mesma mensagem de volta para o cliente
    ws.send(`Você disse: ${message}`);
  });

  // Evento para quando o cliente desconectar
  ws.on('close', () => {
    console.log('Cliente desconectado.');
  });
});

console.log('Servidor WebSocket iniciado na porta 3000.');
