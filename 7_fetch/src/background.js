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

  if (request.test_post === true) {
    console.log("[background] test_post");
    test_post();
  }
  if (request.test_get === true) {
    console.log("[background] test_get");
    test_get();
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

const test_post = () => {
  const url = `https://dummyjson.com/products/add`;
  const method = "POST";
  const body = {
    title: "Chome Extension Fetch",
    description: "Fetch POST Copy-Never-Right",
    price: 999,
    discountPercentage: 0.000009,
    rating: 0.1,
    stock: 999_999,
    brand: "puckyou.com",
    category: "laptops",
    thumbnail: "https://i.dummyjson.com/data/products/10/thumbnail.jpeg",
    images: [
      "https://i.dummyjson.com/data/products/10/1.jpg",
      "https://i.dummyjson.com/data/products/10/2.jpg",
      "https://i.dummyjson.com/data/products/10/3.jpg",
      "https://i.dummyjson.com/data/products/10/thumbnail.jpeg",
    ],
  };
  fetcher({ url, body, method });
};

const test_get = () => {
  const url = `https://jsonplaceholder.typicode.com/todos/1`;
  const method = "GET";
  fetcher({ url, method });
};

const fetcher = async ({ url, method = "GET", headers = {}, body }) => {
  try {
    console.log("[Fetch]_1");
    const controller = new AbortController();
    const signal = controller.signal;
    const request = new Request(url, { signal });

    const payload = JSON.stringify(body);

    if (payload) {
      headers["content-length"] = payload.length;
      console.log("[Fetch]_2 payload", payload);
    }
    console.log("[Fetch]_2 headers", headers);

    const response = await fetch(request, { method, headers, body: payload });
    const json = await response.json();

    console.log("[Fetch]_3", json);
  } catch (error) {
    console.log("[Fetch]_4", error);
  }
};
