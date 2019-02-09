let health = 100;

function slap() {
  health--;
  update();
};

function punch() {
  health -= 5;
  update();
};

function kick() {
  health -= 10;
  update();
}

function update() {
  document.getElementById('health').innerText = health.toString();
};




update()