import { create_grid } from "./index";

/**
 * Updates the grid size displayed on UI
 * @param {int} grid_size - integer you want the row < 51 and cols the grid to be
 * @param {function} setRows - setRows function to update state
 * @param {function} setCols - setCols function to update state
 * @param {function} setDisplayGrid - function to update grid state
 */
export default function change_grid_size(
  grid_size_input,
  setRows,
  setCols,
  setDisplayGrid
) {
  let grid_size = Number(grid_size_input)
  if (grid_size < 50) {
    setRows(grid_size);
    setCols(grid_size);
    setTimeout(() => {
      setDisplayGrid(create_grid(grid_size, grid_size));
    }, 1);
  } else {
    setRows(50);
    setCols(grid_size);
    setTimeout(() => {
      setDisplayGrid(create_grid(50, grid_size));
    }, 1);
  }
}
