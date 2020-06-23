import { create_grid } from "./index";

/**
 * Creates a new grid that is cleared of 
 * @param {function} setDisplayGrid 
 * @param {int} rows - number of rows to be created in grid
 * @param {int} cols - number of cols to be created in grid
 */
export default function clear_grid(setDisplayGrid, rows, cols) {
  setDisplayGrid(create_grid(rows, cols));
}
