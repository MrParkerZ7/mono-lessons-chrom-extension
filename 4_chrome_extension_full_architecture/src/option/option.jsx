import React from "react";
import { render } from "react-dom";

document.addEventListener("DOMContentLoaded", () => {
  console.log("DOMContent Are Loaded");

  document
    .getElementById("test_addEventListener")
    .addEventListener("click", () => {});
});

function showOption() {
  alert("Test AddEventListener");
}
function background_red() {
  document.getElementsByTagName("body")[0].style.backgroundColor = "red";
}
function Popup() {
  return (
    <div>
      <h1>Option Page!</h1>
      <p>Node Chrome Extension Option!</p>
      <button onClick={showOption}>alert_option</button>
    </div>
  );
}

render(<Popup />, document.getElementById("option-target"));
