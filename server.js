const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'application/json'});

    const resposta = {
        mensagem: 'Backend funcionando com sucesso 🚀',
        status: 'online'
    };

    res.end(JSON.stringify(resposta));
});

server.listen(5000, () => {
    console.log('Servidor rodando em http://localhost:5000');
});
