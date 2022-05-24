DaTa Linker Extension
===

An extension for redirecting websites to Tel-Aviv University's proxy, thereby allowing you to more quickly access papers and articles found outside the [DaTa search engine](https://libraries.tau.ac.il/).

**NOTE: This extension works by converting the page's URL to a TAU proxy domain. As such there may be articles that are indeed accessible through DaTa, but which will not be unlocked by this extension. It is recommended to always check for the article in DaTa search if the extension redirects to a still locked article.**

# Instillation
## FireFox
Instillation on Mozilla FireFox is the easiest. 

First, download the `data-extension-1.0.xpi` file from the `firefox-xpis` folder.

Then, follow [this guide](https://extensionworkshop.com/documentation/publish/distribute-sideloading/#install-addon-from-file) to load the extension file into firefox from the folder to which it was saved.

## Chrome
Instillation on Google Chrome is a bit trickier, but doable too.

Note that Chrome support for non-Web Store extensions is limited, and as such it will not automatically update. You should manually look for updates instead as need may arise and re-download the extension if there is one.

Start by downloading the `extension` folder from this repository.

Next, follow [these](https://developer.chrome.com/docs/extensions/mv3/getstarted/#unpacked) directions to load an unpacked extension into chrome, selecting the downloaded folder when prompted.

## Other browsers

If you use a different browser, look up how to load unpacked extensions into it. Just make sure it supports the `Web Extension API` or Chrome Extensions, and it should work!

# Using the DaTa Linker
Whenever you're viewing a paywalled article from a publication which TAU is subscribed to, click the key icon on your extension toolbar to open a new tab connecting you to the same site through TAU's proxy, thereby allowing you to access the site (so long as you have an account with Access to the University's database).

Demonstration:

![Demo gif](https://i.imgur.com/JXcLFRX.gif)

## How it Works

The browser extension works by opening a new tab with a link to the currently viewed page through TAU's proxy. This is done by formatting the webpage URL into a proxy link.

Links to Tel-Aviv University's proxy are constructed by replacing all periods in the original URL with dashes, and appending `.rproxy.tau.ac.il` on the end.

For example: `https://www.example.com/foo` turns into `https://www-example-com.rproxy.tau.ac.il/foo`.