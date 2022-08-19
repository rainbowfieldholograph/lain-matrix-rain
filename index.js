const canvas = document.getElementById('Matrix');
const context = canvas.getContext('2d');

const LATIN = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const NUMBERS = '0123456789';
const CHARS = LATIN + NUMBERS;
const FONT_SIZE = 16;

let rainDrops = [];
let columns = 0;

const initMatrix = () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  columns = canvas.width / FONT_SIZE;
  rainDrops = Array.from({ length: columns }, () => 1);
};

const draw = () => {
  context.fillStyle = 'rgba(0, 0, 0, 0.05)';
  context.fillRect(0, 0, canvas.width, canvas.height);
  context.fillStyle = '#0F0';
  context.fontSize = `${FONT_SIZE}px`;

  for (const prop in rainDrops) {
    const text = CHARS.charAt(Math.floor(Math.random() * CHARS.length));
    context.fillText(text, prop * FONT_SIZE, rainDrops[prop] * FONT_SIZE);
    if (rainDrops[prop] * FONT_SIZE > canvas.height && Math.random() > 0.975) {
      rainDrops[prop] = 0;
    }
    rainDrops[prop]++;
  }
};

// ===

initMatrix();

setInterval(draw, 30);

window.addEventListener('resize', () => {
  initMatrix();
});
