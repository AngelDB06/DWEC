const board = document.getElementById('board');
const imageURL = 'img/image.jpg';
let tiles = [...Array(15).keys()].map(n => n + 1);
tiles.push(null);

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function drawBoard() {
  board.innerHTML = '';
  tiles.forEach((tile, index) => {
    const div = document.createElement('div');
    div.className = tile === null ? 'tile empty' : 'tile';

    if (tile !== null) {
      const row = Math.floor((tile-1) / 4);
      const col = (tile-1) % 4;
      div.style.backgroundImage = `url(${imageURL})`;
      div.style.backgroundPosition = `-${col * 100}px -${row * 100}px`;
    }

    div.addEventListener('click', () => moveTile(index));
    board.appendChild(div);
  });
}

function moveTile(index) {
  const emptyIndex = tiles.indexOf(null);
  if (isValidMove(emptyIndex, index)) {
    [tiles[emptyIndex], tiles[index]] = [tiles[index], tiles[emptyIndex]];
    drawBoard();
    checkWin();
  }
}

function isValidMove(emptyIndex, index) {
  const emptyRow = Math.floor(emptyIndex / 4);
  const emptyCol = emptyIndex % 4;
  const tileRow = Math.floor(index / 4);
  const tileCol = index % 4;
  return (Math.abs(emptyRow - tileRow) + Math.abs(emptyCol - tileCol) === 1);
}

function checkWin() {
  for (let i = 0; i < 15; i++) {
    if (tiles[i] !== i + 1) return false;
  }
  alert('¡Felicidades! Has completado el puzzle.');
}

shuffle(tiles);
drawBoard();