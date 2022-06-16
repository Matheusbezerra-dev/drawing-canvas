
function createDivs() {
  const div = document.createElement('div');
  document.querySelector('main').appendChild(div);
  div.setAttribute('id', 'colorArea');   
  for (let i = 1; i <= 12; i += 1) {
    const createDiv = document.createElement('div');
    document.querySelector('#colorArea').appendChild(createDiv);
    createDiv.setAttribute('id', `color${[i]}`)
    createDiv.setAttribute('class', 'color')
  }
}

function createMain() {
  document.body.appendChild(document.createElement('main'));
  const createCanvas = document.createElement('canvas');
  document.querySelector('main').appendChild(createCanvas);
  createCanvas.setAttribute('id', 'display');
  createDivs()
}

function createHeader() {
  document.body.appendChild(document.createElement('header'));
  const createH1 = document.createElement('h1');
  document.querySelector('header').appendChild(createH1);
  createH1.innerHTML = 'Drawing canvas';
}

window.onload = () => {
  createHeader()
  createMain()
}