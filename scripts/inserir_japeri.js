// Conectar ao banco de dados
const db = connect("mongodb://localhost:27017/map_db");

// Fun��o para gerar coordenadas pr�ximas
function gerarCoordenadaProxima(base, variacao) {
  return base + (Math.random() * variacao * 2 - variacao);
}

// Inserir 10 documentos na cole��o 'coordenadas'
for (let i = 0; i < 10; i++) {
  db.coordenadas.insertOne({
    nome: "Japeri",
    latitude: gerarCoordenadaProxima(-22.6450662, 0.005),
    longitude: gerarCoordenadaProxima(-43.6546898, 0.005),
    createdAt: new Date(),
    updatedAt: new Date(),
    __v: 0
  });
}

// Mostrar todos os documentos da cole��o
print("\n Documentos na colecao 'coordenadas':\n");
db.coordenadas.find().forEach(doc => printjson(doc));

// Mostrar total de documentos (equivalente ao SELECT COUNT(1))
const total = db.coordenadas.countDocuments();
print("\n Total de documentos na colecao 'coordenadas': " + total);
