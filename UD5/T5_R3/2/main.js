const board = document.getElementById("board");
let tiles = [...Array(15).keys()].map(n => n + 1);
tiles.push(null);

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}
function drawBoard() {
  board.innerHTML = "";
  tiles.forEach((tile, index) => {
    const div = document.createElement("div");

    if (tile === null) {
      div.className = "tile empty";
    } else {
      div.className = "tile";
      div.textContent = tile;
      div.addEventListener("click", () => moveTile(index));
    }

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

  const rowDiff = Math.abs(emptyRow - tileRow);
  const colDiff = Math.abs(emptyCol - tileCol);

  return (rowDiff + colDiff === 1);
}

function checkWin() {
  for (let i = 0; i < 15; i++) {
    if (tiles[i] !== i + 1) return false;
  }
  alert("¡Enhorabuena! Has resuelto el puzzle.");
}

shuffle(tiles);
drawBoard();
