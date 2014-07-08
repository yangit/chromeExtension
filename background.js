chrome.webRequest.onBeforeRequest.addListener(
    function (details) {
        return {cancel: true};
    },
    {
        urls: ["<all_urls>"], 
        types: ["sub_frame"]
    },
    ["blocking"]
);