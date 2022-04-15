const data = require('../data/zoo_data');

function isManager(id) {
  return data.employees.some((manager) => manager.managers.includes(id));
}

function getRelatedEmployees(managerId) {
  if (isManager(managerId) === true) {
    return data.employees.filter((gerente) => gerente.managers.includes(managerId))
      .map((nome) => `${nome.firstName} ${nome.lastName}`);
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

/* A primeira função vai verificar se ao menos um elemento satisfaz a condição de ao receber um id como
parâmetro, se a chave managers contém o id recebido. Retorna true se tiver e false senão tiver, pois o 'some'
retorna true ou false.
A segunda função vai verificar se, ao receber um id e ele for true, vai filtrar entre managers, se eles incluem
aquele id recebido, ou seja, se aquele funcionário possui aquele gerente. Assim, o map vai mapear quais são
esses funcionários e retornar o primeiro nome com o sobrenome de cada um deles, em um novo array.
se o id recebido for false, irá retornar a mensagem de erro.
*/

module.exports = { isManager, getRelatedEmployees };
