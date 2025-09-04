var menuButton = 1;
var currentPage = 1;

function cycleButton() {
    menuButton += 1;

    if (menuButton === 1) {
        document.getElementById("navbar-menus").style.display = "none";
    } else {
        menuButton *= 0;
        document.getElementById("navbar-menus").style.display = "flex";
    }
}

function activePage() {
    if (currentPage === 1) {
        document.getElementById("demo").innerHTML = "Home";
    }
}

activePage();