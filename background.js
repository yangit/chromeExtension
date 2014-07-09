chrome.webRequest.onBeforeRequest.addListener(
    function (details) {
        
        if (details.url.indexOf('google')===-1) {
            return {cancel: true};
        } else {
            return {cancel: false};    
        }
        
    },
    {
        urls: ["<all_urls>"], 
        types: ["sub_frame"]
    },
    ["blocking"]
);
