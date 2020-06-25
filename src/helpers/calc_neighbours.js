const possible_neighbours = [
  [0, 1],
  [0, -1],
  [1, -1],
  [-1, 1],
  [1, 1],
  [-1, -1],
  [1, 0],
  [-1, 0],
];
export default function calc_neighbours(grid, lat, lon) {
  // coordinates of possible neighbours for a given cell

  let neighbour_count = 0;

  let row_length = grid.length;
  let col_length = grid[0].length;

  possible_neighbours.forEach((coords) => {
    let row = lat + coords[0];
    let col = lon + coords[1];

    // checks the bounds of the grid so we do not leave it...
    // may update so that it can move to the far side of the grid
    if (row >= 1 && row < row_length && col >= 1 && col < col_length) {
      let cell = grid[row][col];
      if (cell === 1) neighbour_count += 1;
    }
  });
  return neighbour_count;
}
