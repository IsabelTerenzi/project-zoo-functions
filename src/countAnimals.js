const data = require('../data/zoo_data');

function animalNulo() {
  const objeto = {};
  data.species.forEach(((bicho) => { objeto[bicho.name] = bicho.residents.length; }));
  return objeto;
}

/* A função animalNulo será retornada caso não haja nenhum parâmetro na função principal. Para isso,
vou acessar as espécies e para cada bicho, vou retornar um objeto que contenha o nome do animal
e o tamanho do seu array de residentes, ou seja, quantos animais eu tenho daquele bicho.
*/

function quantAnimais(objeto) {
  if (objeto) {
    return data.species.find((bicho) => Object.values(objeto)
      .includes(bicho.name)).residents.length;
  }
}

/* A função quantAnimais irá receber um objeto como parâmeto e irá buscar dentre os animais,
os valores das chaves daquele objeto recebido como parâmetro e verificar se nele existe o nome do animal.
E então retornará o tamanho do array de residentes daquele animal.
*/

function animalSexo(objeto) {
  let contador = 0;
  data.species.find((bicho) => Object.values(objeto)[0]
    .includes(bicho.name)).residents.forEach((residente) => {
    if (residente.sex === Object.values(objeto)[1]) {
      contador += 1;
    }
  });
  return contador;
}

/* A função animalSexo irá receber um objeto como parâmetro e irá buscar dentre os animais, o valor
das chaves do objeto recebido na primeira posição do array. Irá então verificar se esse objeto, nessa posição
inclui o nome do animal, então irá pegar o array de residentes e para cada residente, irá verificar se o sexo
do animal é igual à segunda posição do objeto e então adicionar um ao contador, retornando a quantidade de
animais daquele sexo passado no parâmetro.
*/

function countAnimals(animal) {
  if (!animal) return animalNulo();
  const { specie, sex } = animal;
  if (specie && sex) return animalSexo(animal);
  if (specie) return quantAnimais(animal);
}

/* A função principal irá reunir todas as outras funções, ou seja, se não houver parâmetro, retornar a função
animalNulo. Acessando as chaves specie e sex do objeto animal recebido no parâmetro, caso haja as duas chaves,
retorna a função animalSexo. Caso haja apenas a chave specue, retorna a função quantAnimais.
*/
module.exports = countAnimals;
