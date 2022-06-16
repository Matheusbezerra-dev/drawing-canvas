function colorAleatory() {
  let r = Math.floor(Math.random() * 255),
    g = Math.floor(Math.random() * 255),
    b = Math.floor(Math.random() * 255);
    return 'rgb('+r+','+g+','+b+')'
}


function changeColor(){
  document.getElementById('color2').style.backgroundColor = colorAleatory();
  document.getElementById('color3').style.backgroundColor = colorAleatory();
  document.getElementById('color4').style.backgroundColor = colorAleatory();
  document.getElementById('color5').style.backgroundColor = colorAleatory();
  document.getElementById('color6').style.backgroundColor = colorAleatory();
  document.getElementById('color7').style.backgroundColor = colorAleatory();
  document.getElementById('color8').style.backgroundColor = colorAleatory();
  document.getElementById('color9').style.backgroundColor = colorAleatory()
  document.getElementById('color10').style.backgroundColor = colorAleatory()
  document.getElementById('color11').style.backgroundColor = colorAleatory()
  document.getElementById('color12').style.backgroundColor = colorAleatory()
}

function createFooter() {
  const createFooter = document.createElement('footer');
  document.body.appendChild(createFooter);
  createFooter.innerText = 'Criado por ';
  const createA = document.createElement('a');
  document.querySelector('footer').appendChild(createA);
  createA.innerText = 'Matheus';
  createA.setAttribute('href', 'https://www.linkedin.com/in/matheusbezerra-dev/');
}

function createButtons() {
  const createDivcolor = document.createElement('div');
  document.querySelector('main').appendChild(createDivcolor);
  createDivcolor.setAttribute('id', 'divColor');
  for (let index = 0; index < 2; index += 1) {
    const button = document.createElement('button');
    document.querySelector('#divColor').appendChild(button);
    button.setAttribute('class', 'clear');
  }
  document.getElementsByClassName('clear')[0].innerText = 'The erase drawing';
  document.getElementsByClassName('clear')[1].innerText = 'Change the colours';
}

function createDivs() {
  const div = document.createElement('div');
  document.querySelector('main').appendChild(div);
  div.setAttribute('id', 'colorArea');
  for (let i = 1; i <= 12; i += 1) {
    const createDiv = document.createElement('div');
    document.querySelector('#colorArea').appendChild(createDiv);
    createDiv.setAttribute('id', `color${[i]}`)
    createDiv.setAttribute('class', 'color');
  }
  document.querySelector('#color1').classList.add('active');
  createButtons();
  changeColor();
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
  createHeader();
  createMain();
  createFooter();
  document.querySelectorAll('#colorArea .color').forEach(item => {
    item.addEventListener('click', colorClickEvent);  
  });
}