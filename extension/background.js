function urlToTAU(url) {
    return "".concat(url.origin.replace(/\./g, "-"), ".rproxy.tau.ac.il").concat((url.pathname, url.search, url.hash));
}
chrome.browserAction.onClicked.addListener(function (tab) {
    var currentPage = new URL(tab.url);
    chrome.tabs.create({ url: urlToTAU(currentPage) });
});
