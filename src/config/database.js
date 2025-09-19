const mongoose = require('mongoose');

// URI do MongoDB
const DB_URI = 'mongodb://localhost:27017/map_db';
//const DB_URI = 'mongodb://admin:senha@123@localhost:27017/map_db?authSource=admin';



// Conectar ao MongoDB (sem opções obsoletas)
mongoose.connect(DB_URI)
  .then(() => {
    console.log('✅ Conexão com o MongoDB estabelecida com sucesso!');
  })
  .catch((err) => {
    console.error('❌ Erro ao conectar com o MongoDB:', err);
  });

module.exports = mongoose;
