const data = require('../data/zoo_data');

function localizaEspecie(especieId) {
  return data.species.filter((animal) => especieId.includes(animal.id))
    .map((bicho) => bicho.location);
}

function nomeAnimal(especie) {
  return data.species.filter((bicho) => especie.includes(bicho.id))
    .map((animal) => animal.name);
}
function infoFuncionario(objeto) {
  return {
    id: objeto.id,
    fullName: `${objeto.firstName} ${objeto.lastName}`,
    species: nomeAnimal(objeto.responsibleFor),
    locations: localizaEspecie(objeto.responsibleFor),
  };
}

/* function infoFuncionario(objeto) {
  const objetinho = {};
  data.employees.filter((employee) => Object.values(objeto).includes(employee.firstName)
      || Object.values(objeto).includes(employee.lastName)
      || Object.values(objeto).includes(employee.id)).forEach((funcionario) => {
    objetinho.id = funcionario.id;
    objetinho.fullName = `${funcionario.firstName} ${funcionario.lastName}`;
    objetinho.species = nomeAnimal(funcionario.responsibleFor);
    objetinho.locations = localizaEspecie(funcionario.responsibleFor);
  });
  return objetinho;
} - entender porque não funcionou.
*/

function semParametro() {
  const array = [];
  data.employees.forEach((employee) => {
    array.push(infoFuncionario(employee));
  });
  return array;
}

function getEmployeesCoverage(objeto) {
  if (!objeto) return semParametro();
  const final = data.employees.find((employee) => Object.values(objeto).includes(employee.firstName)
  || Object.values(objeto).includes(employee.lastName)
  || Object.values(objeto).includes(employee.id));
  if (final) return infoFuncionario(final);
  throw new Error('Informações inválidas');
}

module.exports = getEmployeesCoverage;
