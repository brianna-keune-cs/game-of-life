import * as _ from "../helpers";

let startingRows = 50;
let startingCols = 125;
const starterSeed = _.create_random_seed(startingRows, startingCols);
let displayGrid = _.calc_next_gen(starterSeed);

export const initialState = {
  gridA: displayGrid,
  gridB: _.calc_next_gen(displayGrid),
  generation: 0,
  running: false,
  rows: startingRows,
  cols: startingCols,
  cellColor: "#b3a1c0",
  speed: 1800,
};

export const gridReducer = (state = initialState, action) => {
  switch (action.type) {
    case "start":
      return {
        ...state,
        running: true,
      };
    case "stop":
      return {
        ...state,
        running: false,
      };
    case "step":
      setTimeout(() => {}, 1000);
      return {
        ...state,
        gridA: state.gridB,
        gridB: _.calc_next_gen(state.gridB),
        generation: state.generation + 1,
      };
    case "clear":
      const cleared_grid = _.create_grid(state.rows, state.cols);
      return {
        ...state,
        gridA: cleared_grid,
        gridB: cleared_grid,
        generation: 0,
        running: false,
      };
    case "create_random":
      const seed = _.create_random_seed(state.rows, state.cols);
      const seededStarterGrid = _.calc_next_gen(seed);
      return {
        ...state,
        gridA: seededStarterGrid,
        gridB: _.calc_next_gen(seededStarterGrid),
        generation: 0,
        running: false,
      };
    case "update_cell_color":
      return {
        ...state,
        running: false,
        cellColor: action.payload,
      };
    case "change_grid_size":
      let grid_size = Number(action.payload);
      console.log(grid_size);
      if (grid_size < 50) {
        let new_grid = _.create_grid(grid_size);
        return {
          ...state,
          rows: grid_size,
          cols: grid_size,
          running: false,
          gridA: new_grid,
          gridB: _.calc_next_gen(new_grid),
        };
      } else {
        let new_grid = _.create_grid(50, grid_size);
        return {
          ...state,
          rows: 50,
          cols: grid_size,
          running: false,
          gridA: new_grid,
          gridB: _.calc_next_gen(new_grid),
        };
      }
    case "toggle_cell_on":
      let { row_index, col_index } = action.payload;
      let new_grid = [...state.gridA];
      new_grid[row_index][col_index] = 1;
      return {
        ...state,
        gridA: new_grid,
        gridB: _.calc_next_gen(new_grid),
        running: false,
      };
    case "toggle_cell_off":
      let { row_idx, col_idx } = action.payload;
      let a_new_grid = [...state.gridA];
      a_new_grid[row_idx][col_idx] = 0;
      return {
        ...state,
        gridA: a_new_grid,
        gridB: _.calc_next_gen(a_new_grid),
        running: false,
      };
    case "update_speed":
      if (state.speed === 200) return { ...state, speed: 1800 };
      return { ...state, speed: state.speed - 400 };

    default:
      return state;
  }
};
