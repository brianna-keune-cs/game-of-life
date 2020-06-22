import React from "react";

export default function Grid({ grid, setGrid }) {
  return (
    <div className="game-board grid">
      {grid.map((cols, row_index) =>
        cols.map((pixel_status, col_index) => {
          const cell = grid[row_index][col_index];
          return (
            <div
              key={`[${row_index}][${col_index}]`}
              className={`${cell ? "alive" : "dead"} cell`}
              onClick={() => {
                  const new_grid = [...grid];
                  new_grid[row_index][col_index] = !grid[row_index][col_index]
                  setGrid(new_grid)
              }}
            />
          );
        })
      )}
    </div>
  );
}
