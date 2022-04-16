const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const funcionario = data.employees.find((funcio) => funcio.id === id).responsibleFor[0];
  const animal = data.species.find((bicho) => bicho.id === funcionario).residents;
  const maisVelho = animal.reduce((acc, animalzinho) => {
    if (acc.age < animalzinho.age) {
      return animalzinho;
    }
    return acc;
  });
  return Object.values(maisVelho);
}

module.exports = getOldestFromFirstSpecies;
