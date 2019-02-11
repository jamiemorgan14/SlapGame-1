let items = {
  brass: {
    name: 'Brass knuckles',
    modifier: 2,
    description: 'BRASS KNUCKLES!'
  },
  chair: {
    name: 'Steel chair',
    modifier: 5,
    description: 'A STEEL CHAIR!'
  },
  bat: {
    name: 'Metal bat',
    modifier: 10,
    description: 'A BASEBALL BAT!'
  }
}

let characters = {
  austin: {
    name: 'Stone Cold',
    health: 100,
    hits: 0,
    img: 'https://shop.wwe.com/on/demandware.static/-/Sites/default/dwd8f17634/images/slot/landing/superstar-landing/Superstar-Category_Superstar_562x408_stoneCold.png',
    items: []
  }
};

function reset() {
  characters.austin.health = 100;
  characters.austin.hits = 0;
  characters.austin.items = [];
  update();
};

function showMods() {
  if (characters.austin.items.length > 0) {
    for (let i = 0; i < characters.austin.items.length; i++) {
      const mod = characters.austin.items[i];
      document.getElementById('equipped-item').innerText = mod.description;
    }
  } else {
    document.getElementById('equipped-item').innerText = 'No Items Equipped';
  }
}

function addMods() {
  let total = 0;
  for (let i = 0; i < characters.austin.items.length; i++) {
    total += characters.austin.items[i].modifier
  };
  return total;
};

function giveBrass() {
  if (characters.austin.items.length <= 0) {
    characters.austin.items.push(items.brass);
  } else {
    characters.austin.items.splice(0, 1, items.brass)
  }
  addMods();
  showMods();
};

function giveChair() {
  if (characters.austin.items.length <= 0) {
    characters.austin.items.push(items.chair);
  } else {
    characters.austin.items.splice(0, 1, items.chair);
  }
  addMods();
  showMods();
};

function giveBat() {
  if (characters.austin.items.length <= 0) {
    characters.austin.items.push(items.bat);
  } else {
    characters.austin.items.splice(0, 1, items.bat)
  }
  addMods()
  showMods();
};

function stayPositive() {
  if (characters.austin.health < 0) {
    characters.austin.health = 0;
  }
};

function hit() {
  characters.austin.hits++;
};

function slap() {
  if (characters.austin.items.length > 0) {
    characters.austin.health -= 1 * addMods();
  } else {
    characters.austin.health -= 1
  }
  stayPositive();
  hit();
  update();
};

function punch() {
  if (characters.austin.items.length > 0) {
    characters.austin.health -= 5 * addMods();
  } else {
    characters.austin.health -= 5;
  }
  stayPositive();
  hit();
  update();
};

function kick() {
  if (characters.austin.items.length > 0) {
    characters.austin.health -= 10 * addMods();
  } else {
    characters.austin.health -= 10
  }
  stayPositive();
  hit();
  update();
};

function declareWinner() {
  if (characters.austin.health == 0) {
    document.getElementById('winner').innerText = `Stone Cold Steve Austin is down for the count!`
  }
};

function update() {
  document.getElementById('health').innerText = characters.austin.health.toString();
  document.getElementById('hits').innerText = characters.austin.hits.toString();
  document.getElementById('name').innerText = characters.austin.name;
  declareWinner();
  showMods();
};



update();

