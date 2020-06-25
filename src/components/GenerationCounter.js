import React from "react";

export default function GenerationCounter(props) {
  return (
    <div className="generation-container">
      <p>Generation: {props.genCounter}</p>
    </div>
  );
}
