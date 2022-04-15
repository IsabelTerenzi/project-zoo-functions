const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  return employeeName
    ? data.employees.find(
      (funcionario) =>
        employeeName.includes(funcionario.firstName)
        || employeeName.includes(funcionario.lastName),
    ) : {};
}

/* A função vai receber o nome de um funcionário, podendo ser o primeiro nome ou o sobrenome, e vai
retornar o objeto daquele funcionário. O find irá buscar o funcionário que satisfaça a condição passada
pelo nome ou sobrenome, dentro do objeto employees. Se houver um primeiro nome ou um sobrenome, irá retornar
o objeto do funcionário, senão, irá retornar um objeto vazio.
*/

module.exports = getEmployeeByName;
