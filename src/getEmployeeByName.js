const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  return employeeName
    ? data.employees.find(
      (funcionario) =>
        employeeName.includes(funcionario.firstName)
        || employeeName.includes(funcionario.lastName),
    ) : {};
}

module.exports = getEmployeeByName;
