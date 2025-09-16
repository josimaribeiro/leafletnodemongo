const express = require('express');
const router = express.Router();
const MapaController = require('../controllers/mapacontroller');  // Ajuste o caminho conforme seu projeto

// Rota para excluir todas as coordenadas (POST)
router.post('/coordenadas/excluir-todas', MapaController.excluirTodas);

// --- Rota Principal (Menu) ---
router.get('/', (req, res) => {
  let clientIp = req.headers['x-forwarded-for'] || req.ip;

  if (clientIp.includes('::ffff:')) {
    clientIp = clientIp.split(':').pop();
  }
  
  res.render('menu', { clientIp: clientIp });
});

// --- Rotas de Coordenadas ---
router.get('/coordenadas/cadastrar', MapaController.formCadastrar);
router.post('/coordenadas/cadastrar', MapaController.cadastrar);
router.get('/coordenadas/listar', MapaController.listar);
router.get('/coordenadas/mapa', MapaController.mapa);
router.get('/coordenadas/mapaclick', MapaController.mapaclick);

// --- Rotas de Edição e Exclusão ---
router.get('/coordenadas/editar/:id', MapaController.formEditar);
router.post('/coordenadas/editar/:id', MapaController.atualizar);
router.post('/coordenadas/excluir/:id', MapaController.excluir);
router.get('/coordenadas/show/:id', MapaController.show);

module.exports = router;
