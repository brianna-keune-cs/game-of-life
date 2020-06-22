import React, { useState, useEffect } from "react";
import "./App.css";

import { GridSizeForm, Grid, Controllers } from "./components";
import * as _ from "./helpers";

function App() {
  const [rows, setRows] = useState(25);
  const [cols, setCols] = useState(rows);
  const [displayGrid, setDisplayGrid] = useState(_.create_grid(rows));

  useEffect(() => {
    let grid = document.querySelector(".grid");
    console.log("grid: ", grid);
    if (grid != null) {
      grid.style.setProperty("--rows", rows);
      grid.style.setProperty("--cols", cols);
    }
  }, [displayGrid, rows, cols]);

  function handleChange(e) {
    let grid_size = Number(e.target.value);
    _.change_grid_size(grid_size, setRows, setCols, setDisplayGrid);
  }

  console.log(rows, cols);
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
