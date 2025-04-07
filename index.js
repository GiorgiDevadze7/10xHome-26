function sortingHat(students) {
  const houses = ['Gryffindor', 'Ravenclaw', 'Hufflepuff', 'Slytherin'];
  return students.map(student => `${student} - ${houses[Math.floor(Math.random() * houses.length)]}`);
}

const students = ['Harry', 'Hermione', 'Ron', 'Draco'];
console.log(sortingHat(students));function filterPokemon(pokemon) {
  return pokemon.filter(p => p.CP >= 500);
}

const pokemon = [{ name: 'Pikachu', CP: 320 }, { name: 'Charizard', CP: 900 }];
console.log(filterPokemon(pokemon));function totalBudget(heroes) {
  return heroes.reduce((acc, hero) => acc + hero.budget, 0);
}

const heroes = [{ hero: 'Iron Man', budget: 5000 }, { hero: 'Hulk', budget: 2000 }];
console.log(`Total budget: ${totalBudget(heroes)}`);function formatDirections(directions) {
  return directions.map(direction => `Move ${direction}`);
}

const directions = ['left', 'right', 'forward'];
console.log(formatDirections(directions));function findYoda(jedi) {
  const yoda = jedi.find(jedi => jedi === 'Yoda');
  return yoda ? 'Master found!' : 'Not found';
}

const jedi = ['Luke', 'Obi-Wan', 'Yoda', 'Anakin'];
console.log(findYoda(jedi));function inventory(items) {
  const inventory = [];
  function push(item) {
    inventory.push(item);
  }
  function pop() {
    inventory.pop();
  }
  return { push, pop, inventory };
}

const inventory = inventory([]);
inventory.push('Lembas Bread');
inventory.push('Ring');
inventory.pop();
console.log(inventory.inventory);function sortCrimeLocations(locations) {
  return locations.sort();
}

const locations = ['Times Square', 'Central Park', 'Brooklyn'];
console.log(sortCrimeLocations(locations));function getLastEvents(events) {
  return events.slice(-3);
}

const events = ['Dormammu Attack', 'Multiverse Glitch', 'Ancient One’s Warning', 'Time Loop', 'Portal Opening'];
console.log(getLastEvents(events));function processMatrixData(data) {
  const binaryData = data.map(num => num.toString(2));
  const highestValue = Math.max(...data);
  return { binaryData, highestValue };
}

const data = [3, 7, 15, 22];
console.log(processMatrixData(data));function processRiskLevels(riskLevels) {
  const hexValues = riskLevels.map(level => level.toString(16));
  const filteredHighRisks = riskLevels.filter(level => level > 100);
  const totalRiskLevel = filteredHighRisks.reduce((acc, curr) => acc + curr, 0);
  const firstRiskAbove150 = filteredHighRisks.find(level => level > 150);
  const cleanedData = riskLevels.filter(level => level >= 80);
  return { hexValues, filteredHighRisks, totalRiskLevel, firstRiskAbove150, cleanedData };
}

const riskLevels = [99, 135, 76, 200, 150, 89];
console.log(processRiskLevels(riskLevels));