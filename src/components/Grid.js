import React from "react";
import Modal from "./index";

export default function Grid({
  grid,
  dispatch,
  running,
  handleClose,
  showing,
}) {
  // useEffect(() => {}, [grid]);
  function toggleCellOn(row_index, col_index) {
    if (running) {
      alert("please turn off simulation\nbefore trying to toggle cells");
      return;
    }
    dispatch({ type: "toggle_cell_on", payload: { row_index, col_index } });
  }
  function toggleCellOff(row_idx, col_idx) {
    if (running) {
      alert("please turn off simulation\nbefore trying to toggle cells");
      return;
    }
    dispatch({ type: "toggle_cell_off", payload: { row_idx, col_idx } });
  }
  return (
    <div className="game-board grid">
      {/* loop through grid matrix to display grid on screen */}
      {grid.map((cols, row_index) =>
        cols.map((cell, col_index) => {
          // displays each cell in grid
          return (
            <div
              key={`[${row_index}][${col_index}]`}
              // updates cells class name to alive or dead to update CSS on that cell
              className={`${cell === 1 ? "alive" : "dead"} cell`}
              // toggles cells status to alive or dead and updates the color on ui
              onClick={() => {
                if (cell === 1) {
                  return toggleCellOff(row_index, col_index);
                } else {
                  return toggleCellOn(row_index, col_index);
                }
              }}
            />
          );
        })
      )}
    </div>
  );
}
