const data = require('../data/zoo_data');

function animalNulo() {
  const objeto = {};
  data.species.forEach(((bicho) => { objeto[bicho.name] = bicho.residents.length; }));
  return objeto;
}


function quantAnimais(objeto) {
  if (objeto) {
    return data.species.find((bicho) => Object.values(objeto)
      .includes(bicho.name)).residents.length;
  }
}

function animalSexo (objeto) {
  let contador = 0;
  data.species.find((bicho) => Object.values(objeto)[0]
    .includes(bicho.name)).residents.forEach((contar) => {
    if (contar.sex === Object.values(objeto)[1]) {
      contador += 1;
    }
  });
  return contador;
}

function countAnimals(animal) {
  if (!animal) return animalNulo();
  const { specie, sex } = animal;
  if (specie && sex) return animalSexo(animal);
  if (specie) return quantAnimais(animal);
}

console.log(animalSexo({ specie: 'bears', sex: 'female' }))
module.exports = countAnimals;
