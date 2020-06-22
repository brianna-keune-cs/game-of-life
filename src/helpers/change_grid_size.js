import { create_grid } from "./index";
export default function change_grid_size(
  grid_size,
  setRows,
  setCols,
  setDisplayGrid
) {
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
