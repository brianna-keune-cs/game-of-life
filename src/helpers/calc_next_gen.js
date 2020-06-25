import calc_neighbours from "./calc_neighbours";

export default function calc_next_gen(current_gen) {
  // create new grid_array to hold copy of current_gen
  let next_gen = current_gen.map((cols, row_index) =>
    cols.map((cell, col_index) => {
      let neighbour_amount = calc_neighbours(current_gen, row_index, col_index);

      if (cell) {
        if (neighbour_amount < 2 || neighbour_amount > 3) return 0;
      } else {
        if (neighbour_amount === 3) return 1;
      }

      return cell;
    })
  );
  return next_gen;
}
