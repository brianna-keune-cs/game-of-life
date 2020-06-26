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
    setTimeout(() => dispatch({ type: "create_random" }), 200);
  }
  function clear() {
    if (state.running) {
      alert("please stop the simulation\nbefore trying to clear the board");
      return;
    }
    dispatch({ type: "clear" });
  }
  function step() {
    if (state.running) {
      alert(
        "please stop the simulation\nbefore trying to step into the next gen the board"
      );
      return;
    }
    dispatch({ type: "step" });
  }
  function changeSpeed() {
    if (state.running) {
      alert("please stop the simulation\nbefore trying to change the speed.");
      return;
    }
    dispatch({ type: "update_speed" });
  }
  return (
    <div className="controller-container">
      <button onClick={state.running ? stop : start}>
        {state.running ? "Stop" : "Start"}
      </button>
      <button onClick={step}>Next Gen</button>
      <button onClick={clear}>Clear</button>
      <button onClick={changeSpeed}>Speed: {state.speed}ms</button>
      <button onClick={randomize}>Random Seed</button>
    </div>
  );
}
