import React from "react";

export default function CellColorForm({ cellColor, handleCellColor }) {
  return (
    <form>
      <label htmlFor="cell-color">Choose a cell color:</label>
      <input type="color" value={cellColor} onChange={handleCellColor} />
    </form>
  );
}
