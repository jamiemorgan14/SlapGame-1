let health = 100;

function slap() {
  health--;
  update()
};

function update() {
  document.getElementById('health').innerText = health.toString();
}

update()