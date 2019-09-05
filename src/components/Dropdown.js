import React from "react";

function Dropdown(props) {
  return (
    <div>
      <button>Toggle</button>
      {props.children}
    </div>
  );
}

export default Dropdown;
