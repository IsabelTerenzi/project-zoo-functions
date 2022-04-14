const data = require('../data/zoo_data');

const getSpeciesByIds = (...ids) =>
  data.species.filter((especie) => ids.includes(especie.id));

/* A função vai receber um parâmetro rest, pois pode receber um ou mais ids.
 Então eu vou acessar meu objeto data, que contém um array de objetos species.
 Então vou filtrar para verificar se esse array species contém a chave id em seus objetos.
 O includes faz o link entre o parâmetro ids e o parâmetro espécie.
 */

module.exports = getSpeciesByIds;
