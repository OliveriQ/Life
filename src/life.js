let W = 1100, H = 800, K = 20;
let R = W / K, C = H / K;
let cells = [];

function Cell(x, y, alive) {
  this.x = x;
  this.y = y;
  this.alive = alive;
  this.next = false;
  
  this.index = function() {
    return (this.y / K) * R + (this.x / K);
  };
}

function updateAllCells() {
  if (start) {
    for (let cell of cells) {
      let count = getNeighbors(cell);
      let index = cell.index();
      if (cell.alive) {
        if (count <= 1) {
          cells[index].next = false;
        }
        else if (count >= 4) {
          cells[index].next = false;
        }
        else {
          cells[index].next = true;
        }
      }
      else {
        if (count == 3) {
          cells[index].next = true;
        }
        else {
          cells[index].next = false;
        }
      }
      console.log();
    }
    for (let cell of cells) {
      let index = cell.index();
      cells[index].alive = cells[index].next;
    }
  }
}

function getNeighbors(cell) {
  let count = 0;
  let index = cell.index();
  // left
  if (cell.x >= K) {
    if (cells[index - 1].alive) {
      count++;
    }
  }
  // right
  if (cell.x <= W - 2 * K) {
    if (cells[index + 1].alive) {
      count++;
    }
  }
  // up
  if (cell.y >= K) {
    if (cells[index - R].alive) {
      count++;
    }
  }
  // down
  if (cell.y <= H - 2 * K) {
    if (cells[index + R].alive) {
      count++;
    }
  }
  // up left
  if (cell.x >= K && cell.y >= K) {
    if (cells[index - R - 1].alive) {
      count++;
    }
  }
  // up right
  if ((cell.x <= W - 2 * K) && cell.y >= K) {
    if (cells[index - R + 1].alive) {
      count++;
    }
  }
  // down left
  if (cell.x >= K && (cell.y <= H - 2 * K)) {
    if (cells[index + R - 1].alive) {
      count++;
    }
  }
  // down right
  if (cell.x <= W - 2 * K && (cell.y <= H - 2 * K)) {
    if (cells[index + R + 1].alive) {
      count++;
    }
  }
  return count;
}
