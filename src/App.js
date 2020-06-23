import React, { useState, useEffect } from "react";
import "./App.css";

import { GridSizeForm, Grid, Controllers } from "./components";
import * as _ from "./helpers";

function App() {
  // to determine size of grid
  const [rows, setRows] = useState(50);
  const [cols, setCols] = useState(125);
  const [displayGrid, setDisplayGrid] = useState(_.create_grid(rows, cols));

  useEffect(() => {
    // grabs the grid, and updates the grid size if the grid, rows or cols have changed
    let grid = document.querySelector(".grid");
    if (grid != null) {
      grid.style.setProperty("--rows", rows);
      grid.style.setProperty("--cols", cols);
    }
  }, [displayGrid, rows, cols]);

  /**
   * Resets the game grid to match the selected value
   * @param {object} e - the event of change in the grid size form
   */
  function handleChange(e) {
    let grid_size = Number(e.target.value);
    _.change_grid_size(grid_size, setRows, setCols, setDisplayGrid);
  }

  return (
    <div className="App">
      <h1>Game of Life</h1>
      <GridSizeForm handleChange={handleChange} />
      <Grid grid={displayGrid} setGrid={setDisplayGrid} />
      <Controllers
        clear={_.clear_grid}
        rows={rows}
        cols={cols}
        setDisplayGrid={setDisplayGrid}
      />
    </div>
  );
}

export default App;
