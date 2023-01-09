import React from "react";
import { render } from "react-dom";

document.addEventListener("DOMContentLoaded", () => {
  console.log("DOMContent Are Loaded");

  document
    .getElementById("test_addEventListener")
    .addEventListener("click", () => {
      alert("Test AddEventListener");
    });
});

function test_eval() {
  // Find the way to fix this!
  eval('alert("Test Eval")');
}

function bg_test_eval() {
  chrome.runtime.sendMessage({ background_test_eval: true }, (response) => {
    console.log("[content] sendMessage response", response);
    console.log("[content] sendMessage", response.farewell);
  });
}

function background_red() {
  document.getElementsByTagName("body")[0].style.backgroundColor = "red";
}

function Popup() {
  return (
    <div>
      <h1>Hi Chrome!</h1>
      <p>Node Chrome Extension React!</p>
      <button onClick={test_eval}>Test Eval</button>
      <br />
      <br />
      <button onClick={bg_test_eval}>Background Test Eval</button>
      <br />
      <br />
      <button onClick={background_red}>background_red</button>
      <br />
      <br />
      <button id="test_addEventListener">Test AddEventListener</button>
    </div>
  );
}

render(<Popup />, document.getElementById("react-target"));
