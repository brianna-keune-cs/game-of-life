import React, { useLayoutEffect, useReducer } from "react";
import "./App.css";

import {
  GridSizeForm,
  Grid,
  Controllers,
  GenerationCounter,
  CellColorForm,
  GOLRules
} from "./components";

import { initialState, gridReducer } from "./store/reducer.js";

function App() {
  const [state, dispatch] = useReducer(gridReducer, initialState);

  useLayoutEffect(() => {
    // grabs the grid, and updates the grid size if the grid, rows or cols have changed
    let grid = document.querySelector(".grid");
    if (grid != null) {
      grid.style.setProperty("--rows", state.rows);
      grid.style.setProperty("--cols", state.cols);
      let aliveCells = document.querySelectorAll("div.alive");
      if (aliveCells != null || aliveCells !== undefined) {
        aliveCells.forEach((cell) =>
          cell.style.setProperty("--cell-color", state.cellColor)
        );
      }
    }
    if (!state.running) return;
    setTimeout(() => {
      dispatch({ type: "step" });
    }, 200);
  }, [state]);

  /**
   * Resets the game grid to match the selected value
   * @param {object} e - the event of change in the grid size form
   */
  function handleGridSizeChange(e) {
    dispatch({ type: "change_grid_size", payload: e.target.value });
  }

  /**
   * Updates global states cell color
   * @param {object} e - the event of change in the color input form
   */
  function handleCellColor(e) {
    dispatch({ type: "update_cell_color", payload: e.target.value });
  }

  return (
    <div className="App">
      <h1>Game of Life</h1>
      <GenerationCounter genCounter={state.generation} />
      <CellColorForm
        cellColor={state.cellColor}
        handleCellColor={handleCellColor}
      />
      <GridSizeForm handleChange={handleGridSizeChange} />
      <Grid grid={state.gridA} dispatch={dispatch} running={state.running} />
      <Controllers state={state} dispatch={dispatch} />
      <GOLRules />
    </div>
  );
}

export default App;
