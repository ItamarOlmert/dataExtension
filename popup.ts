function urlToTAU(url: Location): string {
    return `${url.origin.replace(".", "-")}.rproxy.tau.ac.il${url.pathname}${url.search}${url.hash}`;
}

function redirecTtoTAU(): void {
    location.href = urlToTAU(window.location);
}