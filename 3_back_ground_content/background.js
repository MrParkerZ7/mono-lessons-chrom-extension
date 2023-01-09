chrome.runtime.onInstalled.addListener(() => {
  console.log("Who ?");

  //get a message
  chrome.runtime.onMessage.addListener(function (
    request,
    sender,
    sendResponse
  ) {
    console.log(
      sender.tab
        ? "from a content script:" + sender.tab.url
        : "from the extension"
    );
    if (request.greeting === "Who ?") sendResponse({ farewell: "are you ?" });
  });

  //create menu
  chrome.contextMenus.create({
    id: "wikipedia",
    title: 'Search for: "%s" on Wikipedia',
    contexts: ["selection"],
  });
});

chrome.contextMenus.onClicked.addListener(function (info, tab) {
  baseURL = "http://en.wikipedia.org/wiki/";
  var newURL = baseURL + info.selectionText;
  chrome.tabs.create({ url: newURL });
});
