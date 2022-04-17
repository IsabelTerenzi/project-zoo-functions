const data = require('../data/zoo_data');

function countEntrants(entrants) {
  let child = 0;
  let adult = 0;
  let senior = 0;
  entrants.forEach((pessoa) => {
    if (pessoa.age < 18) child += 1;
    if (pessoa.age >= 18 && pessoa.age < 50) adult += 1;
    if (pessoa.age >= 50) senior += 1;
  });
  return { child,
    adult,
    senior,
  };
}

/* A função countEntrants irá receber um contador para cada faixa etária, child, adult e senior.
Para cada pessoa do parâmetro passado eu vou receber uma pessoa e verificar em qual faixa etária
ela se encontra, adicionando ao contador de cada uma delas. Então, vou retornar um objeto com as
3 faixas etárias e a quantidade de pessoas do contador.
*/

function calculateEntry(entrants) {
  if (!entrants || Object.keys(entrants).length === 0) {
    return 0;
  }
  const crianca = data.prices.child;
  const adulto = data.prices.adult;
  const idoso = data.prices.senior;
  const { child, adult, senior } = countEntrants(entrants);
  return (crianca * child) + (adulto * adult) + (idoso * senior);
}

/* A função calculateEntry irá receber os visitantes como parâmetro e caso não haja parâmetro ou
o tamanho das chaves do objeto recebido seja zero, então irá retornar 0.
Vou então acessar o objeto prices de data e estabelecer o preço para cada faixa etária. Então vou atribuir
à função o objeto child, adult e senior. Então retornar a quantidade de pessoas de cada faixa etária vezes
o preço da entrada de cada um deles, o valor final dessa conta.
*/
module.exports = { calculateEntry, countEntrants };
