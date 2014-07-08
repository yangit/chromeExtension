//chrome.webRequest.onBeforeRequest.addListener(function (details) {
//    // Save the data in `details` for later use
//    // The data must be associated with the `tabId` and `frameId`, so that it
//    //  can be used later
//
//    return {cancel: true};
//}, {
//    urls: ['*://*/*'],
//    type: ['sub_frame']
//}, ['blocking']);