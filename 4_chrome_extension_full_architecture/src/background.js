/**
 * Background running stuff
 * - in case of poopup or web content were close thoes job we be continues processing
 * - the working process would be similar to android/ios smartphone background running concept
 **/

console.log("Service-Worker");

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  console.log(sender.tab ? "from " + sender.tab.url : "from unknow");
  if (request.greeting === "hello") {
    sendResponse({ farewell: "See you sir!" });
  } else {
    sendResponse({ farewell: "Go home sir!" });
  }
  console.log("[background] onMessage addListener request", request);
  console.log("[background] onMessage addListener sender", sender);
});

chrome.runtime.onInstalled.addListener(() => {
  console.log("[OnInstall]");
  chrome.contextMenus.create({
    id: "1",
    title: '[contextMenus] search google for "%s"',
    contexts: ["selection"],
  });

  chrome.contextMenus.onClicked.addListener((info, tab) => {
    const baseURL = "https://www.google.co.th/search?q=";
    var newURL = baseURL + info.selectionText;
    //create the new URL in the user's browser
    chrome.tabs.create({ url: newURL });
  });
});
