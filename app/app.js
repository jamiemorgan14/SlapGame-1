let characters = {
  austin: {
    name: 'Stone Cold',
    health: 100,
    hits: 0,
    img: 'https://shop.wwe.com/on/demandware.static/-/Sites/default/dwd8f17634/images/slot/landing/superstar-landing/Superstar-Category_Superstar_562x408_stoneCold.png'

  },
  rock: {
    name: 'The Rock',
    health: 100,
    hits: 0,
    img: 'https://wwfoldschool.com/wp-content/uploads/2017/03/The-Rock.jpg'
  }
};

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

function hit() {
  characters.austin.hits++;
}

function slap() {
  if (characters.austin.health > 0) {
    characters.austin.health--;
  }
  hit();
  update();
};

function punch() {
  if (characters.austin.health > 4) {
    characters.austin.health -= 5;
  }
  hit();
  update();
};

function kick() {
  if (characters.austin.health > 9) {
    characters.austin.health -= 10;
  }
  hit();
  update();
}

function update() {
  document.getElementById('health').innerText = characters.austin.health.toString();
  document.getElementById('hits').innerText = characters.austin.hits.toString();
  document.getElementById('name').innerText = characters.austin.name;
};




update()