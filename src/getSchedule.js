// const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function animalDisponivel(animal) {
  return data.species.find((bicho) => bicho.name === animal).availability;
}

/* A função animalDisponível vai receber o nome de um animal como parâmetro e irá buscar dentre os animais,
qual possui o nome igual ao recebido no parâmetro, e retornar quais dias da semana ele está disponível.
Se ele recebe 'bears', por exemplo, irá retornar ['Tuesday', 'Wednesday', 'Sunday', 'Saturday'].
*/

function horarioDia(dia) {
  const exibicao = data.species.filter((animal) => animal.availability.includes(dia))
    .map((bicho) => bicho.name);

  const { open, close } = data.hours[dia];

  if (dia === 'Monday') {
    return { Monday: { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' } };
  }

  return { [dia]: {
    officeHour: `Open from ${open}am until ${close}pm`,
    exhibition: exibicao },
  };
}

/* A função horarioDia vai receber um dia como parâmetro e retornar o horário de funcionamento do dia
e quais animais irão se apresentar naquele dia. Para isso, irá filtrar dentre os animais, se no array de
availability inclui o dia passado no parâmetro, então vai mapear o nome do animal que irá se exibir naquele dia.
Então eu vou acessar as propriedades open e close do objeto data.hours, com object destructuring, de acordo com
o dia passado no parâmetro.
Se o dia passado como parâmetro for 'Monday', então o retorno é diferente dos outros dias, pois na segunda o
zoológico não abre. Se o dia passado for algum dos outros, irá retornar o dia, com o objeto do horário e os animais
que irão se exibir no dia.
*/

const diasSemana = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

function semParametro() {
  return diasSemana.reduce((acc, dia) => Object.assign(acc, horarioDia(dia)), {});
}

/* A função semParametro irá percorrer cada dia do array diasSemana, e para cada um desses dias, irá
criar um objeto, que recebe o objeto alvo e o que quero copiar como parâmetros, então vai criar o objeto
que possui o dia da semana e unir com a função horarioDia, que retorna o horário de funcionamento e os animais
que irão se exibir naquele dia.
*/

function getSchedule(scheduleTarget) {
  const nomeAnimal = data.species.map((animal) => animal.name);
  if (diasSemana.includes(scheduleTarget)) { return horarioDia(scheduleTarget); }
  if (nomeAnimal.includes(scheduleTarget)) { return animalDisponivel(scheduleTarget); }
  return semParametro();
}

/* A função principal getSchedule irá fazer a junção de todas as funções criadas acima. A primeira constante
nomeAnimal busca o nome do animal para caso o parâmetro seja um animal. Se o parâmetro passado for um dia da semana,
retorna a função horarioDia. Se o parâmetro for um animal, retorna a função animalDisponivel. E caso o parâmetro
não seja nenhum desses, retorna a função semParametro.
*/

module.exports = getSchedule;
