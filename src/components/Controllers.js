import React from "react";

export default function Controllers({ state, dispatch }) {
  function start() {
    dispatch({ type: "start" });
  }
  function stop() {
    dispatch({ type: "stop" });
  }
  function randomize() {
    stop();
    dispatch({ type: "create_random" });
  }
  function clear() {
    if (state.running) {
      alert("please stop the simulation\nbefore trying to clear the board");
      return;
    }
    dispatch({ type: "clear" });
  }
  function step() {
    dispatch({ type: "step" });
  }
  function changeSpeed() {
    dispatch({ type: "update_speed" });
  }
  return (
    <div className="controller-container">
      <button onClick={randomize}>Random Seed</button>
      <button onClick={step}>Next Gen</button>
      <button onClick={state.running ? stop : start}>
        {state.running ? "Stop" : "Start"}
      </button>
      <button onClick={changeSpeed}>Speed: {state.speed}ms</button>
      <button onClick={clear}>Clear</button>
    </div>
  );
}
