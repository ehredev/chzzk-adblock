// console.log("background.js loaded"); 

const blockedUrls = [
    "*://*.tvetamovie.pstatic.net/*",
    "*://*.glad-vod.pstatic.net/*"
];

// console.log("Blocked URLs:", blockedUrls);

function blockRequest(details) {
    // console.log("Blocking request to: ", details.url);
    return { cancel: true };
}

chrome.webRequest.onBeforeRequest.addListener(
    blockRequest,
    { urls: blockedUrls },
    ["blocking"]
);

// console.log("Blocking rules are set.");
