import React from "react";

export default function Controllers({ clear, rows, cols, setDisplayGrid }) {
  return (
    <div className="controller-container">
      {/* clear button */}
      <button onClick={() => clear(setDisplayGrid, rows, cols)}>Clear</button>
    </div>
  );
}
