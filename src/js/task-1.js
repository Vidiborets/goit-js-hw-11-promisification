const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const startBtn = document.querySelector('[data-action="start"]')
const stopBtn = document.querySelector('[data-action="stop"]')
const body = document.querySelector('body');


const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

function changeBackground(color) {
  body.style.backgroundColor = color;
}

let colorSwitcher = '';

function start() {
  colorSwitcher = setInterval(randomColor => {
    randomColor = randomIntegerFromInterval(0, 5)
    changeBackground(colors[randomColor]);
    },1000)
    startBtn.disabled = true;
}

function stop() {
  clearInterval(colorSwitcher)
  startBtn.disabled = false
}

startBtn.addEventListener('click', start);
stopBtn.addEventListener('click', stop);

