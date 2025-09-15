const mongoose = require('mongoose');

// URI do MongoDB
const DB_URI = 'mongodb://localhost:27017/map_db';

// Conectar ao MongoDB (sem opções obsoletas)
mongoose.connect(DB_URI)
  .then(() => {
    console.log('✅ Conexão com o MongoDB estabelecida com sucesso!');
  })
  .catch((err) => {
    console.error('❌ Erro ao conectar com o MongoDB:', err);
  });

module.exports = mongoose;
