function createMain() {
  document.body.appendChild(document.createElement('main'));
  const createCanvas = document.createElement('canvas');
  document.querySelector('main').appendChild(createCanvas);
  createCanvas.setAttribute('id', 'display');
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