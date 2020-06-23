import React from "react";

export default function Grid({ grid, setGrid }) {
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
              className={`${cell ? "alive" : "dead"} cell`}
              // toggles cells status to alive or dead and updates the color on ui
              onClick={() => {
                const new_grid = [...grid];
                new_grid[row_index][col_index] = !grid[row_index][col_index];
                setGrid(new_grid);
              }}
            />
          );
        })
      )}
    </div>
  );
}
