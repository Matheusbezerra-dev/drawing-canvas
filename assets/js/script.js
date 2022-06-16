

function createHeader() {
  document.body.appendChild(document.createElement('header'));
  const createH1 = document.createElement('h1');
  document.querySelector('header').appendChild(createH1);
  createH1.innerHTML = 'Drawing canvas';
}

window.onload = () => {
  createHeader()
}