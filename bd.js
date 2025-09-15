const mongoose = require('./src/config/database');

mongoose.connection.on('connected', async () => {
  console.log('✅ Banco de dados MongoDB conectado com sucesso!');

  // Aguarde um momento, ou faça alguma operação aqui
  // await algumModel.find(), insert, etc, se quiser

  // Agora desconecta
  await mongoose.disconnect();
  console.log('🔌 Conexão com o MongoDB encerrada.');
  
  process.exit(0); // encerra o processo manualmente
});

mongoose.connection.on('error', (err) => {
  console.error('❌ Erro ao conectar com o banco de dados MongoDB:', err);
  process.exit(1);
});
