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

    // calculates edge cells, as if their opposite is their neighbour
    if (row < 0) row = row_length - 1;
    if (row === row_length) row = 0;
    if (col < 0) col = col_length - 1;
    if (col === col_length) col = 0;
    let cell = grid[row][col];

    neighbour_count += cell;
  });
  return neighbour_count;
}
