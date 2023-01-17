console.log("[content_script] is running");

// document.getElementsByTagName("body")[0].style.backgroundColor = "yellow";

chrome.runtime.sendMessage({ greeting: "No Sir!" }, (response) => {
  console.log("[content] sendMessage response", response);
  console.log("[content] sendMessage", response.farewell);
  
  // TODO: find solution for eval 
  console.log("[content_script_eval] alert run!");
  eval('alert("[content_script_eval] Test Eval resolve by sandbox")');
  eval('(()=> {console.log("[content_script_eval] Evaled Code!!!")})()');
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  console.log(sender.tab ? "from " + sender.tab.url : "from unknow");
  console.log("[content_script] onMessage addListener sender", sender);
  console.log("[content_script] onMessage addListener request", request);

  if (request.content_script_test_eval === true) {
    console.log("[content_script_test_eval] message form popup!");
  }

  console.log("[content_script_eval] alert run!");
  eval('alert("[content_script_eval] Test Eval resolve by sandbox")');
  eval('(()=> {console.log("[content_script_eval] Evaled Code!!!")})()');
});
