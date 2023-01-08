import React from "react";
import { render } from "react-dom";

function test_eval() {
  chrome.runtime.sendMessage;
  eval(console.log("[Eval] console.log(chrome.runtime.sendMessage)"));
}

function Popup() {
  test_eval();

  return (
    <div>
      <h1>Hi Chrome!</h1>
      <p>Node Chrome Extension React!</p>
    </div>
  );
}

render(<Popup />, document.getElementById("react-target"));
