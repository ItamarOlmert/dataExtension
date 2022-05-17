function urlToTAU(url: URL): string {
    return `${url.origin.replace(/\./g, "-")}.rproxy.tau.ac.il${url.pathname}${url.search}${url.hash}`;
}

browser.action.onClicked.addListener((tab) => {
    let currentPage = new URL(tab.url!!);
    browser.tabs.create({ url: urlToTAU(currentPage) });
});