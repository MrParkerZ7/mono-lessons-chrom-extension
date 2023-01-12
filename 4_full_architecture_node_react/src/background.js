/**
 * Background running stuff
 * - in case of poopup or web content were close thoes job we be continues processing
 * - the working process would be similar to android/ios smartphone background running concept
 **/

console.log("Service-Worker");

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  console.log(sender.tab ? "from " + sender.tab.url : "from unknow");
  console.log("[background] onMessage addListener sender", sender);
  console.log("[background] onMessage addListener request", request);

  if (request.greeting === "hello") {
    sendResponse({ farewell: "See you sir!" });
  } else {
    sendResponse({ farewell: "Go home sir!" });
  }

  if (request.background_test_eval === true) {
    // Find the way to fix this!
    eval('alert("Test Eval")');
  }
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

  const callBackCreateUrlBook = (newFolder) => {
    chrome.bookmarks.create(
      {
        title: "[Chrome Exteinsion] Google",
        url: "https://www.google.co.th/",
        parentId: newFolder.id,
      },
      (newBookmark) => {
        console.log("[bookmarks] added url: ", newBookmark);
      }
    );
  };

  const callbackCreateFolderBook = (newFolder) => {
    console.log("[bookmarks] added floder: ", newFolder);
    callBackCreateUrlBook(newFolder);
  };

  chrome.bookmarks.create(
    { title: "[Chrome Exteinsion] Bookmarks Floder" },
    callbackCreateFolderBook
  );
});
