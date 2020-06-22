import { create_grid } from "./index";
export default function clear_grid(setDisplayGrid, rows, cols) {
  setDisplayGrid(create_grid(rows, cols));
}
