import React from "react";

export default function GridSizeForm({ handleChange }) {
  return (
    <form>
      <label htmlFor="grid-size">Choose a grid size: </label>
      <select
        name="grid-size"
        onChange={(e) => {
          handleChange(e);
        }}
      >
        <option value="25">25x25</option>
        <option value="50">50x50</option>
        <option value="75">50x75</option>
        <option value="100">50x100</option>
        <option value="125">50x125</option>
      </select>
    </form>
  );
}
