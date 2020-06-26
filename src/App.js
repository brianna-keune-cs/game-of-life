import React, { useEffect, useReducer, useState } from "react";
import "./App.css";

import {
  Grid,
  Controllers,
  GenerationCounter,
  GOLRules,
  CellColorForm,
  GridSizeForm,
  Modal,
} from "./components";

import { initialState, gridReducer } from "./store/reducer.js";

function App() {
  const [state, dispatch] = useReducer(gridReducer, initialState);
  const [showingRules, setShowingRules] = useState(false);

  function showModal() {
    setShowingRules(!showingRules);
  }

  useEffect(() => {
    // grabs the grid, and updates the grid size if the grid, rows or cols have changed
    let grid = document.querySelector(".grid");
    if (grid != null) {
      grid.style.setProperty("--rows", state.rows);
      grid.style.setProperty("--cols", state.cols);
      let cells = document.querySelectorAll("div.alive");
      let select = document.querySelector("select");
      let gen = document.querySelector("span");
      let buttons = document.querySelectorAll("button");
      if (cells != null || cells !== undefined) {
        select.style.setProperty("--cell-color", state.cellColor);
        gen.style.setProperty("--cell-color", state.cellColor);
        cells.forEach((cell) =>
          cell.style.setProperty("--cell-color", state.cellColor)
        );
        buttons.forEach((button) =>
          button.style.setProperty("--cell-color", state.cellColor)
        );
      }
    }
    if (!state.running) return;
    setTimeout(() => {
      dispatch({ type: "step" });
    }, state.speed);
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
      <nav>
        <ul>
          <li className="title">Game of Life</li>
          <li id="rules" type="button" onClick={showModal}>
            General Rules
          </li>
          <li>
            <a
              href="https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life"
              target="_blank"
              rel="noopener noreferrer"
            >
              Game of Life Wiki
            </a>
          </li>
          <li>
            <a
              href="https://en.wikipedia.org/wiki/John_Horton_Conway"
              target="_blank"
              rel="noopener noreferrer"
            >
              John Conway Wiki
            </a>
          </li>
        </ul>
      </nav>
      <Modal
        handleClose={showModal}
        showingRules={showingRules}
        children={<GOLRules />}
      />
      <div className="before-grid">
        <GenerationCounter genCounter={state.generation} />
        <CellColorForm
          cellColor={state.cellColor}
          handleCellColor={handleCellColor}
        />
        <GridSizeForm handleChange={handleGridSizeChange} />
      </div>

      <Grid grid={state.gridA} dispatch={dispatch} running={state.running} />
      <Controllers state={state} dispatch={dispatch} />
    </div>
  );
}

export default App;
