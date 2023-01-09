import React from "react";
import { render } from "react-dom";

function Popup() {
  return (
    <div>
      <h1>Hi Chrome!</h1>
      <p>Node Chrome Extension React!</p>
    </div>
  );
}

render(<Popup />, document.getElementById("react-target"));
