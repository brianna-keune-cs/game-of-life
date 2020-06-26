import React from "react";

// source :https://alligator.io/react/modal-component/

export default function Modal({ handleClose, showing, children }) {
  return (
    <div className={showing ? "modal display-block" : "modal display-none"}>
      <section className="modal-main">
        {children}
        <button onClick={handleClose}>close</button>
      </section>
    </div>
  );
}
