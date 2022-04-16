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

module.exports = { calculateEntry, countEntrants };
