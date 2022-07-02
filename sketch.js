// draw cells 
function drawAllCells() {
  for (let cell of cells) {
    if (cell.alive) {
      fill(255);
    }
    else {
      fill(0);
    }
    rect(cell.x, cell.y, K, K);
  }
}

// draw grid
function drawGrid() {
  stroke(150, 150, 150)
  for (let x = 0; x < W; x += K) {
    line(x, 0, x, H);
  }
  for (let y = 0; y < H; y += K) {
    line(0, y, W, y);
  }
}

function setup() {
  createCanvas(W, H);
  frameRate(1);
  for (let i = 0; i < H; i += K) {
    for (let j = 0; j < W; j += K) {
      cells.push(new Cell(j, i, false));
    }
  }
  
  cells[256 - R].alive = true;
  cells[257].alive = true;
  cells[256 + R + 1].alive = true;
  cells[256 + R - 1].alive = true;
  cells[256 + R].alive = true;

  
  background(0);
  
  // draw cells
  drawAllCells();
  
  // draw grid
  drawGrid();
  
  // update cells
  updateAllCells();
}

function draw() {
  background(0);
  
  // draw cells
  drawAllCells();
  
  // update cells
  updateAllCells();
  
}