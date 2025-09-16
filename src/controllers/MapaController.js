const Coordenada = require('../models/Coordenada');



module.exports = {
  // Formulário de Edição
  formEditar: async (req, res) => {
    try {
      const { id } = req.params;
      const coordenada = await Coordenada.findById(id);
      if (!coordenada) {
        return res.status(404).send('Coordenada não encontrada.');
      }
      res.render('editar', { coordenada });
    } catch (err) {
      res.status(500).send('Erro ao carregar formulário de edição: ' + err.message);
    }
  },

  // Atualizar POST
  atualizar: async (req, res) => {
    try {
      const { id } = req.params;
      const { nome, latitude, longitude } = req.body;

      const coordenada = await Coordenada.findByIdAndUpdate(
        id,
        { nome, latitude, longitude },
        { new: true }
      );

      if (!coordenada) {
        return res.status(404).send('Coordenada não encontrada.');
      }

      res.redirect('/coordenadas/listar');
    } catch (err) {
      res.status(500).send('Erro ao atualizar coordenada: ' + err.message);
    }
  },

  // Excluir POST
  excluir: async (req, res) => {
    try {
      const { id } = req.params;
      const coordenada = await Coordenada.findByIdAndDelete(id);

      if (!coordenada) {
        return res.status(404).send('Coordenada não encontrada.');
      }

      res.redirect('/coordenadas/listar');
    } catch (err) {
      res.status(500).send('Erro ao excluir coordenada: ' + err.message);
    }
  },



excluirTodas: async (req, res) => {
    try {
      await Coordenada.deleteMany({});
      res.redirect('/coordenadas/listar');
    } catch (err) {
      res.status(500).send('Erro ao excluir todas as coordenadas: ' + err.message);
    }
  },



  // Página do mapa
  mapa: async (req, res) => {
    try {
      const coordenadas = await Coordenada.find();
      const coordenadasJson = JSON.stringify(coordenadas);
      res.render('mapa', { coordenadas, coordenadasJson });
    } catch (err) {
      res.status(500).send('Erro ao carregar coordenadas: ' + err.message);
    }
  },

  // Página do mapa com clique
  mapaclick: async (req, res) => {
    try {
      const coordenadas = await Coordenada.find();
      const coordenadasJson = JSON.stringify(coordenadas);
      res.render('mapaclick', { coordenadas, coordenadasJson });
    } catch (err) {
      res.status(500).send('Erro ao carregar coordenadas: ' + err.message);
    }
  },

  // Formulário de cadastro
  formCadastrar: (req, res) => {
    res.render('cadastrar');
  },

  // Cadastro POST
  cadastrar: async (req, res) => {
    try {
      const { nome, latitude, longitude } = req.body;
      await Coordenada.create({ nome, latitude, longitude });
      res.redirect('/coordenadas/listar');
    } catch (err) {
      res.status(500).send('Erro ao cadastrar coordenada: ' + err.message);
    }
  },

  // Listar todas
  listar: async (req, res) => {
    try {
      const coordenadas = await Coordenada.find();
      res.render('listar', { coordenadas });
    } catch (err) {
      res.status(500).send('Erro ao listar coordenadas: ' + err.message);
    }
  },

  // Exibir uma coordenada no mapa
  show: async (req, res) => {
    try {
      const { id } = req.params;
      const coordenada = await Coordenada.findById(id);
      if (!coordenada) {
        return res.status(404).send('Coordenada não encontrada.');
      }
      res.render('showmapa', { coordenada });
    } catch (err) {
      res.status(500).send('Erro ao carregar a coordenada: ' + err.message);
    }
  }
};
