import React from "react";
import { render } from "react-dom";

function test_post() {
  chrome.runtime.sendMessage({ test_post: true }, (response) => {
    console.log("[popup] test_post response", response);
  });
}

function test_get() {
  chrome.runtime.sendMessage({ test_get: true }, (response) => {
    console.log("[popup] test_get response", response);
  });
}

function Popup() {
  return (
    <div>
      <h1>Hi Chrome!</h1>
      <p>Node Chrome Extension React!</p>
      <button onClick={test_post}>Test POST</button>
      <br />
      <br />
      <button onClick={test_get}>Test GET</button>
      <br />
      <br />
    </div>
  );
}

render(<Popup />, document.getElementById("react-target"));
