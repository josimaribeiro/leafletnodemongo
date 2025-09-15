const mongoose = require('mongoose');

const CoordenadaSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true
  },
  latitude: {
    type: Number,
    required: true
  },
  longitude: {
    type: Number,
    required: true
  }
}, {
  timestamps: true // adiciona createdAt e updatedAt automaticamente (opcional)
});

module.exports = mongoose.model('Coordenada', CoordenadaSchema);
