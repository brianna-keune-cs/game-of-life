import React from "react";

export default function CellColorForm({ cellColor, handleCellColor }) {
  return (
    <div>
      <form>
        <label>Choose a cell color:</label>
        <input type="color" value={cellColor} onChange={handleCellColor} />
      </form>
    </div>
  );
}
