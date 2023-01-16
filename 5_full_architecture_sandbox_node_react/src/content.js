console.log("[content_script] is running");

// document.getElementsByTagName("body")[0].style.backgroundColor = "yellow";

chrome.runtime.sendMessage({ greeting: "No Sir!" }, (response) => {
  console.log("[content] sendMessage response", response);
  console.log("[content] sendMessage", response.farewell);
});
