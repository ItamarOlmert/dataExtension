function urlToTAU(url: URL): string {
    return `${url.origin.replace(/\./g, "-")}.rproxy.tau.ac.il${url.pathname}${url.search}${url.hash}`;
}

chrome.action.onClicked.addListener((tab) => {
    let currentPage = new URL(tab.url);
    chrome.tabs.create({url: urlToTAU(currentPage)});
})