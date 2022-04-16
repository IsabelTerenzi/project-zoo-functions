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

/* A função precisa acessar a partir do id do funcionário, o primeiro animal do qual ele é responsável.
Então primeiro é preciso acessar o id desse funcionário, comparar se é igual ao id recebido no parâmetro,
e então buscar o animal que está na primeira posição dentre os quais ele é responsável.
Então vou buscar dentre os animais, qual deles possui o id que é igual ao do animal responsável pelo
funcionário, e então acessar o array de residentes daquele animal.
Depois vou descobrir dentre aqueles residentes, qual o mais velho, a partir de um reduce, que irá fazer
uma verificação dentro do array, acessando a idade dos animais e comparando as posições até encontrar o
com a maior idade. Encontrando o mais velho, a função irá retornar os valores das chaves do objeto daquele
animal, que contém name, sex e age.
*/

module.exports = getOldestFromFirstSpecies;
