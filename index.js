// Toggle side menu
const width = screen.width;

function toggleActive() {
    if (width < 1040) {
        document.getElementById("side-menu").classList.toggle("active-small");
    } else {
        // On desktops slide menu out a bit further
        document.getElementById("side-menu").classList.toggle("active-large");
    }
}