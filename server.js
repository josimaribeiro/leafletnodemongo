const express = require('express');
const mongoose = require('mongoose'); // Importa Mongoose
const indexRouter = require('./src/routes/index'); // Seu router
const path = require('path');

const app = express();

// Configurações do EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware para receber JSON e dados de formulário
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Usa o router
app.use('/', indexRouter);

// Conectar ao MongoDB
const mongoURI = 'mongodb://localhost:27017/map_db'; // Altere se precisar

mongoose.connect(mongoURI)
  .then(() => {
    console.log('✅ Banco de dados MongoDB conectado com sucesso!');

    // Só inicia o servidor depois que conectar no DB
    app.listen(3000, () => {
      console.log('Servidor rodando em http://localhost:3000');
    });
  })
  .catch(err => {
    console.error('Erro ao conectar ao MongoDB:', err);
  });
