function urlToTAU(url) {
	return `${url.origin.replace(/\./g, '-')}.rproxy.tau.ac.il${url.pathname + url.search + url.hash}`;
}

chrome.browserAction.onClicked.addListener(
	(tab) => {
		chrome.tabs.create({ url: urlToTAU(new URL(tab.url)) });
	},
);
