const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  return data.species
    .find((bicho) => bicho.name === animal)
    .residents.every((residente) => residente.age > age);
}

/* A função primeiro vai acessar o objeto data e o array species para buscar um bicho que tenha um nome
igual ao do animal recebido no parâmetro. A partir disso, irá acessar o array residents para verficar
dentre todos os animais residentes, a partir de sua idade, quais deles possuem a idade maior que a age passada no parâmetro.
*/

module.exports = getAnimalsOlderThan;
