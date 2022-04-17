function urlToTAU(url) {
    return "".concat(url.origin.replace(".", "-"), ".rproxy.tau.ac.il").concat(url.pathname).concat(url.search).concat(url.hash);
}
function redirecTtoTAU() {
    location.href = urlToTAU(window.location);
}
document.getElementById("tauer").addEventListener("click", redirecTtoTAU);
