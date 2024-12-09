

// importar a biblioteca
// instalar o pacote usando o comando: npm install express
const express = require('express');



// importar o body-parser para manipular os dados do corpo da requisição
// instalar o pacote com o comando: npm install body-parser
const bodyParser = require('body-parser');

// configuração de acesso ao servidor
const localhost = '127.0.0.1';
const port = 8080;

// criação do aplicativo servidor
const app = express();

// confguração do body-parser 
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// importar as configurações de rotas
const veiculoRotas = require('./routes/Veiculo');

// rota raiz do servidor
app.get('/', (req, res) => {
  res.status(200).send({
    mensagem: 'Você acessou a raiz do servidor web.'
  });
});

// configurar as rotas para veiculo
app.use('/veiculo', veiculoRotas);

// rodar o servidor
// executar o servidor
app.listen(port, localhost, console.log('O servidor está rodando...'));