import React from "react";

function Spinner(props) {
  return (
    /* Common spinner for whole app. */
    <div className={`spinner-container ${props.hide}`}>
      <i className="fa fa-spinner fa-spin"></i>
    </div>
  );
}

export default Spinner;
