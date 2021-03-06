let start = false;

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
  let cnv = createCanvas(W, H);
  cnv.position(100, 150);
  //frameRate(parseInt(slider.value));
  for (let i = 0; i < H; i += K) {
    for (let j = 0; j < W; j += K) {
      cells.push(new Cell(j, i, false));
    }
  }

  cells[4450].alive = true;
  cells[4451].alive = true;
  cells[4452].alive = true;
  cells[4453].alive = true;
  cells[4454].alive = true;
  cells[4455].alive = true;
  cells[4450 - R + 2].alive = true;
  cells[4450 - R + 3].alive = true;
  cells[4450 - 2 * R + 1].alive = true;
  cells[4450 - 2 * R + 4].alive = true;
  
  background(0);
  
  // draw cells
  drawAllCells();
  
  // draw grid
  drawGrid();
  
  // update cells
  updateAllCells();
}

function draw() {
  //frameRate(parseInt(slider.value));

  background(0);
  
  // draw cells
  drawAllCells();
  
  // update cells
  updateAllCells();
  
}

// (this.y / K) * R + (this.x / K)

function mouseClicked() {
  if (!start) {
    let x = Math.round(mouseX / K) * K;
    let y = Math.round(mouseY / K) * K;
    let index = (y / K) * R + (x / K);
    if (!cells[index].alive) {
      cells[index].alive = true;
    }
    else {
      cells[index].alive = false;
    }
  }
}

function keyPressed() {
  if (keyCode == ENTER) {
    if (start) {
      start = false;
    }
    else {
      start = true;
    }
  }
}

let slider = document.getElementById("myRange");
let output = document.getElementById("demo");
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  output.innerHTML = this.value;
}